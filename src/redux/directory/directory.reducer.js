const INITIAL_STATE = {
  sections: [
    {
      title: "hats",
      imageUrl:
        "//cdn.shopify.com/s/files/1/1884/8161/products/hat-patch_2000x.jpg?v=1565905362",
      id: 1,
      linkUrl: "shop/hats"
    },
    {
      title: "jackets",
      imageUrl:
        "http://g02.a.alicdn.com/kf/HTB1e9z7KFXXXXbPXVXXq6xXFXXXq/205909269/HTB1e9z7KFXXXXbPXVXXq6xXFXXXq.jpg?size=153378&height=800&width=800&hash=ee3f641242e05782eeb45b84c8756b18",
      id: 2,
      linkUrl: "shop/jackets"
    },
    {
      title: "sneakers",
      imageUrl:
        "https://cdn.shopify.com/s/files/1/0023/7928/4547/products/48262096634e31b6c54a7cc5a455f3ae.jpg?v=1542163483",
      id: 3,
      linkUrl: "shop/sneakers"
    },
    {
      title: "womens",
      imageUrl:
        "https://cdn.shopify.com/s/files/1/2090/4445/articles/2_1024x1024.jpg?v=1497686958",
      size: "large",
      id: 4,
      linkUrl: "shop/womens"
    },
    {
      title: "mens",
      imageUrl:
        "https://static.wixstatic.com/media/c2b5da_936b4406fa6349cc88b4c1e9d3217bdb~mv2_d_2667_1778_s_2.jpg/v1/fill/w_736,h_489,fp_0.50_0.50,q_90/c2b5da_936b4406fa6349cc88b4c1e9d3217bdb~mv2_d_2667_1778_s_2.jpg",
      size: "large",
      id: 5,
      linkUrl: "shop/mens"
    }
  ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
