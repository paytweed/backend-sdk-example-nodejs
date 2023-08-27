class NftService {

     _getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min
      }
  
      _getNftPrice() {
        return Math.trunc(this._getRandomArbitrary(100, 9999))
      }

      /**
       * an example to an NFT checkout with the following mint function:
       * safemint(toAddress address, tokenId uint256) payable public
       * The abi should be taken from the compiled NFT contract
       * The params should be populated in the customMintParams object
       * There are two parameters that are getting populated from the frontend: toAddress and tokenURI
       **/
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
            // abi: "mint(toAddress address, tokenUri string)", //you have the option to use function signature of ABI or the longer version below
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


