// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

contract broccoli {
  struct Item {
      address payable seller;
      address payable buyer;
      string name;
      string description;
      uint price;
      string image;
      uint8 category;
      uint8 subCategory;
      uint timestamp;
      uint runtime;
      uint deposit;
  }

  mapping(uint => Item) items;
  uint numItems;
  mapping(address => uint) pendingWithdrawals;
  uint minimumDepositRatio;
  uint cut;
  address owner;

  error Unauthorized();
  error MinimumDepositNotMet();
  error NotEnoughEther();
  error AlreadySold();
  error ItemDoesNotExist();

  modifier onlyBy(address _account) {
    if (msg.sender != _account)
        revert Unauthorized();
    _;
  }

  modifier costs(uint _amount) {
    if (msg.value < _amount)
        revert NotEnoughEther();
    _;
    //if wanting to send rest ether back - else keep them as donation (-:
    //if (msg.value > _amount)
    //    payable(msg.sender).transfer(msg.value - _amount)
  }

  modifier minimumDeposit(uint _askingPrice, uint _minimumDepositRatio) {
    if (msg.value < _askingPrice * _minimumDepositRatio / 100)
        revert MinimumDepositNotMet();
    _;
  }

  modifier itemExists(uint id) {
    if (id > numItems) 
        revert ItemDoesNotExist();
    _;   
  }

  constructor(uint _minimumDepositRatio, uint _cut) {
    owner = msg.sender;
    minimumDepositRatio = _minimumDepositRatio;
    cut = _cut;
  }


  //Public Getters
  function getItem(uint256 id) public view itemExists(id) returns (Item memory) {
    return items[id];
  }
  
  function getSeller(uint256 id) public view itemExists(id) returns (address payable) {
    return items[id].seller; 
  }


  //Public Methods
  function transferOwnership(address newOwner) public onlyBy(owner) {
    owner = newOwner;
  }

  function setCut(uint _cut) public onlyBy(owner) {
    cut = _cut;
  }

  function setMinimumDepositRatio(uint _minimumDepositRatio) public onlyBy(owner) {
    minimumDepositRatio = _minimumDepositRatio;
  }

  function addItem(string calldata _name, string calldata _description, uint _price, string calldata _image, uint8 _category, uint8 _subCategory, uint _timestamp, uint _runtime) payable public minimumDeposit(_price, minimumDepositRatio) returns(uint id) {
    numItems = numItems++;
    Item storage i = items[numItems]; 
    i.name = _name;
    i.description = _description;
    i.price = _price;
    i.image = _image;
    i.category = _category;
    i.subCategory = _subCategory;
    i.timestamp = _timestamp;
    i.runtime = _runtime;
    i.seller = payable(msg.sender);
    i.deposit = msg.value;
    return numItems;
  }

  function buyItem(uint256 id) payable public itemExists(id) costs(getPriceToPay(id)) {
    if(items[id].buyer == address(0)) {
        items[id].buyer = payable(msg.sender);
        pendingWithdrawals[getSeller(id)] += getAmountToSendToSeller(id);
    } else {
        revert AlreadySold();
    }
  }

  //Withdraw pattern instead of direct transfer after item has sold to prevent locking contract in transfer loop
  //https://docs.soliditylang.org/en/latest/common-patterns.html#withdrawal-from-contracts
  function withdraw() public {
    uint amount = pendingWithdrawals[msg.sender];
    //zero the pending refund before sending to prevent re-entrancy attacks
    pendingWithdrawals[msg.sender] = 0;
    payable(msg.sender).transfer(amount);
  }

  receive() external payable {
    //receive ether as donations
  }


  //Internal Methods
  function getPriceToPay(uint256 id) internal view returns (uint256) {
    //return price that buyer has to pay (including site cut)
    return items[id].price * cut / 100;
  }

  function getAmountToSendToSeller(uint256 id) internal view returns (uint256) {
    //return amount to send to seller = asking price of item + deposit
    return items[id].price + items[id].deposit;
  }
}
