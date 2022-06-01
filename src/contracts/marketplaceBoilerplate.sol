// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/utils/Counters.sol";
import "github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC721/ERC721.sol";
import "github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/security/ReentrancyGuard.sol";

contract marketPlaceBoilerPlate is ReentrancyGuard {
    using Counters for Counters.Counter;
    Counters.Counter private _itemIds;
    Counters.Counter private _itemsSold;
    
     address public owner;
     
     constructor() {
         owner = msg.sender;
     }
      
     struct MarketToken {
         uint itemId;
         address ticketContract;
         uint256 tokenId;
         address payable seller;
         address payable owner;
         uint256 price;
         bool sold;
     }
     
     mapping(uint256 => MarketToken) private idToMarketItem;
     
     event MarketTokenMinted (
        uint indexed itemId,
        address indexed ticketContract,
        uint256 indexed tokenId,
        address seller,
        address owner,
        uint256 price,
        bool sold
     );
     
     event MarketTokenSold (
         uint indexed itemId,
         address owner
         );
     
    
    
    function makeMarketItem(
        address ticketContract,
        uint256 tokenId,
        uint256 price
        ) public payable nonReentrant {
            require(price > 0, "Price must be greater than 0");
            
            _itemIds.increment();
            uint256 itemId = _itemIds.current();
  
            idToMarketItem[itemId] =  MarketToken(
                itemId,
                ticketContract,
                tokenId,
                payable(msg.sender),
                payable(address(0)),
                price,
                false
            );
            
            IERC721(ticketContract).transferFrom(msg.sender, address(this), tokenId);
                
            emit MarketTokenMinted(
                itemId,
                ticketContract,
                tokenId,
                msg.sender,
                address(0),
                price,
                false
            );
        }
        
    function createMarketSale(
        address ticketContract,
        uint256 itemId
        ) public payable nonReentrant {
            uint price = idToMarketItem[itemId].price;
            uint tokenId = idToMarketItem[itemId].tokenId;
            bool sold = idToMarketItem[itemId].sold;
            require(msg.value == price, "Please submit the asking price in order to complete the purchase");
            require(sold != true, "This Sale has alredy finnished");
            emit MarketTokenSold(
                itemId,
                msg.sender
                );

            idToMarketItem[itemId].seller.transfer(msg.value);
            IERC721(ticketContract).transferFrom(address(this), msg.sender, tokenId);
            idToMarketItem[itemId].owner = payable(msg.sender);
            _itemsSold.increment();
            idToMarketItem[itemId].sold = true;
        }
        
    function fetchMarketTokens() public view returns (MarketToken[] memory) {
        uint itemCount = _itemIds.current();
        uint unsoldItemCount = _itemIds.current() - _itemsSold.current();
        uint currentIndex = 0;

        MarketToken[] memory items = new MarketToken[](unsoldItemCount);
        for (uint i = 0; i < itemCount; i++) {
            if (idToMarketItem[i + 1].owner == address(0)) {
                uint currentId = i + 1;
                MarketToken storage currentItem = idToMarketItem[currentId];
                items[currentIndex] = currentItem;
                currentIndex += 1;
            }
        }
        return items;
    }
      
}

/// Thanks for inspiration: https://github.com/dabit3/polygon-ethereum-nextjs-marketplace/
