// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/access/Ownable.sol"; //use AccessControl in the future

contract broccoli is Pausable, Ownable {
  
  using SafeMath for uint;

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
  uint public numItems;
  mapping(address => uint) pendingWithdrawals;
  uint public minimumDepositRatio; //100>=minimumDepositRatio>=0
  uint public cut; //100>=cut>=0

  error MinimumDepositNotMet();
  error NotEnoughEther();
  error AlreadySold();
  error ItemDoesNotExist();
  error CutNotValid();
  error MinimumDepositNotValid();
  error NothingToWithdraw();

  event ItemAdded(address indexed seller, uint indexed id);
  event ItemBought(address indexed buyer, uint indexed id);
  event Withdrew(address indexed withdrawer, uint amount);
  event DonationReceived(address indexed donor, uint amount);


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

  modifier cutValid(uint _cut) {
    if (_cut < 0 || _cut > 100)
        revert CutNotValid();
    _;
  }

  modifier minimumDepositValid(uint _minimumDepositRatio) {
    if (_minimumDepositRatio < 0 || _minimumDepositRatio > 100)
        revert MinimumDepositNotValid();
    _;
  }

  constructor(uint _minimumDepositRatio, uint _cut) cutValid(_cut) minimumDepositValid(_minimumDepositRatio) {
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

  function getPendingWithdrawal() public view returns (uint) {
    return pendingWithdrawals[msg.sender];
  }

  //Public Methods
  function setCut(uint _cut) public onlyOwner whenNotPaused cutValid(_cut) {
    cut = _cut;
  }

  function setMinimumDepositRatio(uint _minimumDepositRatio) public onlyOwner whenNotPaused minimumDepositValid(_minimumDepositRatio) {
    minimumDepositRatio = _minimumDepositRatio;
  }

  function pause() public onlyOwner {
    _pause();
  }

  function unpause() public onlyOwner {
    _unpause();
  }

  function addItem(
      string calldata _name, 
      string calldata _description, 
      uint _price, 
      string calldata _image, 
      uint8 _category, 
      uint8 _subCategory, 
      uint _timestamp, 
      uint _runtime) 
      payable public whenNotPaused minimumDeposit(_price, minimumDepositRatio) {
    numItems = numItems+1;
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
    emit ItemAdded(msg.sender, numItems);
  }

  function buyItem(uint256 id) payable public whenNotPaused itemExists(id) costs(getPriceToPay(id)) {
    if(items[id].buyer == address(0)) {
        items[id].buyer = payable(msg.sender);
        pendingWithdrawals[getSeller(id)] = pendingWithdrawals[getSeller(id)].add(getAmountToSendToSeller(id));
        emit ItemBought(msg.sender, id);
    } else {
        revert AlreadySold();
    }
  }

  //Withdraw pattern instead of direct transfer after item has sold to prevent locking contract in transfer loop
  //https://docs.soliditylang.org/en/latest/common-patterns.html#withdrawal-from-contracts
  function withdraw() public whenNotPaused {
    uint amount = pendingWithdrawals[msg.sender];
    if(amount == 0) {
        revert NothingToWithdraw();
    }
    //zero the pending refund before sending to prevent re-entrancy attacks
    pendingWithdrawals[msg.sender] = 0;
    payable(msg.sender).transfer(amount);
    emit Withdrew(msg.sender, amount);
  }

  receive() external payable {
    //receive ether as donations
    emit DonationReceived(msg.sender, msg.value);
  }


  //Internal Methods
  function getPriceToPay(uint256 id) internal view returns (uint256) {
    //return price that buyer has to pay
    return items[id].price;
  }

  function getAmountToSendToSeller(uint256 id) internal view returns (uint256) {
    //return amount to send to seller = asking price of item * (100 - cut) + deposit
    return items[id].price.mul(uint(100).sub(cut)).div(100).add(items[id].deposit);
  }
}
