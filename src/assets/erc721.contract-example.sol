// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;
import "@openzeppelin/contracts@4.9.3/token/ERC721/ERC721.sol";

contract TWEED is ERC721 {
    constructor() ERC721("TWEED", "TWD") {}

    function safeMint(address to, uint256 tokenId) public {
        _safeMint(to, tokenId);
    }
}
