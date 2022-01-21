// SPDX-License-Identifier: MIT
pragma solidity ^0.8.11;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract KevinNFT is ERC721, Pausable, Ownable, ERC721Burnable {
    using Counters for Counters.Counter;

    Counters.Counter private _tokenIdCounter;

    bool private _paused;
    
    uint256 public totalSupply; 
    uint256 public price = 0.05 ether;

    constructor() ERC721("KevinNFT", "KJS") {}

    function _baseURI() internal view virtual override returns (string memory) {
        return "ipfs://QmeSjSinHpPnmXmspMjwiXyN6zS4E9zccariGR3jxcaWtq/";
    }
    
    function tokenURI(uint256 tokenId)
    public
    view
    virtual
    override
    returns (string memory)
    {
        return super.tokenURI(tokenId);
    }

     function mint (uint256 amount) public whenNotPaused payable {
        require(amount > 0, "Error input!");
        require(msg.value * amount == price, "Value error, please check price!");
        for(uint256 i = 0; i < amount; i++) {
        _safeMint(msg.sender, 1 + totalSupply++);
        }
    }

    function pause() onlyOwner public returns (bool) {
        _pause();
        return true;
    }
    
    function unpause() onlyOwner public returns (bool) {
        _unpause();
        return true;
    }

    function withdraw() external onlyOwner {
        require(payable(msg.sender).send(address(this).balance));
    }
}
