//SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract Cab{
    uint charges = 0.01 ether;
    address public customer;
    address public driver;
    bool public isBooked = false;
    mapping (address => uint) balancesDriver;

    modifier onlyCustomer() {
        require(msg.sender == customer, "Only customer");
        _;
    }
    modifier onlyDriver() {
        require(msg.sender == driver, "Only driver");
        _;
    }
        
    function addDriver( address _driver) public {
        driver = _driver;
        balancesDriver[driver] = 0;
    }   

    function bookCab() public payable onlyCustomer returns(bool){
        require(msg.value < charges, "Insufficient balance");
        require(isBooked == false, "Cab already booked");
        isBooked = true;
        balancesDriver[driver] += charges;
        return true;
    } 

    function endRide() public onlyDriver{
        isBooked = false;
    }

}