function GoodsItem(props) {
//   const {
//     mainId,
//     displayName,
//     displayDescription,
//     price,
//     displayAssets,
//     rarity,
//   } = props;

const { 
    mainId,         
    displayName,         
    displayDescription,         
    displayAssets: [             
        { background }             
    ],         
        price: { 
            regularPrice 
        }, 
        rarity: {
            name
        },
        addToBasket = Function.prototype
    } = props;

//   const { regularPrice } = price;
//   const { full_background } = displayAssets;
//   const { displayAsset } = displayAssets;
//   const { name } = rarity;
  return (
    
      
        <div className="card">
          <div className="card-image">
            <img src={background} alt={displayName} />
          </div>
          <div className="card-content">
          <span className="card-title" style={{fontWeight: '400'}}>{displayName}</span>
            <p>{displayDescription}</p>
            <i style={{fontWeight: '200', fontSize: '13px'}}>{name}</i>
          </div>
          <div className="card-action">
            <button className="btn" onClick={() => addToBasket({
              mainId,         
              displayName,                 
              price: { 
                      regularPrice 
              }, 
            })}>Купить</button>
            <span className="right" style={{fontSize: '1.4rem'}}>{regularPrice} грн.</span>
          </div>
        </div>
      
    
  );
}
export { GoodsItem };

// {
//     "mainId": "CID_A_339_Athena_Commando_F_LoveQueen",
//     "displayName": "Queen of Hearts",
//     "displayDescription": "The queen of our hearts. ",
//     "displayType": "Outfit",
//     "mainType": "outfit",
//     "offerId": "v2:/b6ed4c76caeda05641857b4d712fd4d141a94b0e77fc45b989aeb9b6d3a1060a",
//     "displayAssets": [
//         {
//             "displayAsset": "DAv2_CID_A_339_F_LoveQueen",
//             "materialInstance": "MI_CID_A_339_F_LoveQueen",
//             "url": "https://media.fortniteapi.io/images/displayAssets/v2/DAv2_CID_A_339_F_LoveQueen/MI_CID_A_339_F_LoveQueen.png",
//             "flipbook": null,
//             "background": "https://media.fortniteapi.io/images/cosmetics/d84f2647430346992d3fddb975b873a9/v2/MI_CID_A_339_F_LoveQueen/background.png",
//             "full_background": "https://media.fortniteapi.io/images/cosmetics/d84f2647430346992d3fddb975b873a9/v2/MI_CID_A_339_F_LoveQueen/info.en.png"
//         }
//     ],
//     "firstReleaseDate": "2022-02-07",
//     "previousReleaseDate": null,
//     "giftAllowed": true,
//     "buyAllowed": true,
//     "price": {
//         "regularPrice": 1200,
//         "finalPrice": 1200
//     },
//     "rarity": {
//         "id": "Rare",
//         "name": "RARE"
//     },
//     "series": null,
//     "banner": {
//         "id": "New",
//         "name": "New!",
//         "intensity": "High"
//     },
//     "offerTag": null,
//     "granted": [
//         {
//             "id": "CID_A_339_Athena_Commando_F_LoveQueen",
//             "type": {
//                 "id": "outfit",
//                 "name": "Outfit"
//             },
//             "name": "Queen of Hearts",
//             "description": "The queen of our hearts. ",
//             "rarity": {
//                 "id": "Rare",
//                 "name": "RARE"
//             },
//             "series": null,
//             "images": {
//                 "icon": "https://media.fortniteapi.io/images/d84f2647430346992d3fddb975b873a9/transparent.png",
//                 "featured": "https://media.fortniteapi.io/images/d84f2647430346992d3fddb975b873a9/full_featured.png",
//                 "background": "https://media.fortniteapi.io/images/cosmetics/d84f2647430346992d3fddb975b873a9/v2/background.png",
//                 "icon_background": "https://media.fortniteapi.io/images/cosmetics/d84f2647430346992d3fddb975b873a9/v2/icon_background.png",
//                 "full_background": "https://media.fortniteapi.io/images/cosmetics/d84f2647430346992d3fddb975b873a9/v2/info.en.png"
//             },
//             "video": null,
//             "audio": null,
//             "gameplayTags": [
//                 "SoundLibrary.ID.StepType.BootsHeeled",
//                 "SoundLibrary.ID.ClothingType.Generic",
//                 "SoundLibrary.ID.HandType.Glove",
//                 "Cosmetics.Filter.Season.19",
//                 "Cosmetics.Set.KingClubs"
//             ],
//             "set": {
//                 "id": "KingClubs",
//                 "name": "Royale Flush",
//                 "partOf": "Part of the Royale Flush set."
//             }
//         },
