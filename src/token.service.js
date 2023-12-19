class TokenService {
  getById(id) {
    return {
      tokenId: id,
      priceInCrypto: "1000000000000000000",
      fiatCurrencyId: "USD",
      thumbnailPath:
        "https://static.wixstatic.com/media/0fe759_eed11ea2e1c240b1847f0cfa80b9290b~mv2.png/v1/fill/w_260,h_294,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/%D7%A1%D7%91%D7%AA%D7%90%20%D7%A4%D7%99%D7%91%D7%99.png",
      contractAddress: "0x67a437d6ded3dc31C5AF7742eb4631907Fff79b9",
      chain: "bnbTestnet",
      title: "fibi token",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      abi: "mint(toAddress address, amount uint256)",
      customMintParams: {
        amount: "0",
      },
    };
  }
}

module.exports = new TokenService();
