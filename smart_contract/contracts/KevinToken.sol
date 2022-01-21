// SPDX-License-Identifier: MIT
pragma solidity ^0.8.11;

import '@openzeppelin/contracts/token/ERC20/ERC20.sol';

contract KevinToken is ERC20 {
    address public admin;
    constructor() ERC20 ('KevinToken', 'KJS') {
        _mint(msg.sender, 100000 * 10 ** decimals());
    }

    function mint (address to, uint amount) public {
        _mint(to, amount);
    }

    function burn (uint amount) external {
        _burn(msg.sender, amount);
    }
}