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
}