pragma solidity ^0.5.0;

contract Covifund {
    uint public oCount=0;
    uint public uCount=0;

    mapping (uint => User) public users;
    mapping (uint => Org) public orgs;

    struct User {
        uint id;
        uint orgc;
        address payable userAddress;
        string[] titles;
        uint[] funds;
    }
    struct Org {
        uint id;
        uint funds;
        string title;
        string category;
        string description;
        address payable org_address;
    }

    function initializeUser() public {
        uCount++;
        User memory _user;
        _user.id = uCount;
        _user.orgc = 0;
        _user.userAddress = msg.sender;
        users[uCount] = _user;
    }
    function initializeOrg(string memory _title, string memory _category, string memory _description) public {
        require(bytes(_title).length > 0);
        require(bytes(_description).length > 0);
        oCount++;
        orgs[oCount] = Org(oCount, 0, _title, _category, _description, msg.sender);
    }
    
    function fundOrg(uint _id) public payable {
        require(_id > 0 && _id <= oCount);
        Org memory _org = orgs[_id];
        address payable _org_address = _org.org_address;
        address(_org_address).transfer(msg.value);
        _org.funds = _org.funds + msg.value;
        orgs[_id] = _org;
    }
}