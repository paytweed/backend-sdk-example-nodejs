class NftService {

     _getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min
      }
  
      _getNftPrice() {
        return Math.trunc(this._getRandomArbitrary(100, 9999))
      }

      /**
       * 
       * @param {string} id 
       * @returns full metadata of the nft
       */
    getById(id) {
        return {
            nftId: id,
            priceInCents: this._getNftPrice(),
            tokenUri: 'https://tweed-demo.web.app/tweedNft.png',
            fiatCurrencyId: 'USD',
            contractAddress: 'YOUR_CONTRACT_ADDRESS',
            chain: 'ethereumSepolia',
            title: 'NFT_TITLE',
            description: 'NFT_DESCRIPTION',
            abi: [
              {
                inputs: [
                  {
                    internalType: 'address',
                    name: 'toAddress',
                    type: 'address',
                  },
                  {
                    internalType: 'uint256',
                    name: 'tokenId',
                    type: 'uint256',
                  },
  
                ],
                name: 'safeMint',
                outputs: [
                  {
                    internalType: 'uint256',
                    name: '',
                    type: 'uint256',
                  },
                ],
                stateMutability: 'payable',
                type: 'function',
              },
            ],
            customMintParams: {
              tokenId: id
            }
            
        }

    }
}

module.exports  = new NftService()


