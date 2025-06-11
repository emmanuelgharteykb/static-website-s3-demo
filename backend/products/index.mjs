exports.handler = async (event) => {
    const products = [
      {
        id: '1',
        name: 'Precious Lover Jewelry',
        price: 200,
        image: 'https://your-s3-or-domain.com/images/precious_jewel.jpg'
      },
      {
        id: '2',
        name: 'My Fantasy',
        price: 50,
        image: 'https://your-s3-or-domain.com/images/my_fantasy.jpeg'
      }
    ];
  
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(products)
    };
  };
  
