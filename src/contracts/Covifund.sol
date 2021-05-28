pragma solidity ^0.5.0;

contract Covifund {
    uint public oCount=0;
    uint public uCount=0;

    mapping (uint => User) public users;

    struct User {
        uint id;
        uint orgc;
        address payable userAddress;
        string[] titles;
        uint[] funds;
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