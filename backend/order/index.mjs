exports.handler = async (event) => {
    if (event.httpMethod !== 'POST') {
      return {
        statusCode: 405,
        headers: { "Access-Control-Allow-Origin": "*" },
        body: JSON.stringify({ message: 'Method Not Allowed' })
      };
    }
  
    try {
      const { product, price } = JSON.parse(event.body);
  
      if (!product || !price) {
        return {
          statusCode: 400,
          headers: { "Access-Control-Allow-Origin": "*" },
          body: JSON.stringify({ message: 'Missing product or price' })
        };
      }
  
      // Simulate saving order (can later use DynamoDB)
      return {
        statusCode: 200,
        headers: { "Access-Control-Allow-Origin": "*" },
        body: JSON.stringify({ message: `Order received for ${product} - $${price}` })
      };
    } catch {
      return {
        statusCode: 400,
        headers: { "Access-Control-Allow-Origin": "*" },
        body: JSON.stringify({ message: 'Invalid JSON' })
      };
    }
  };
