const socket = new WebSocket('ws://localhost:8080');

      socket.addEventListener('open', () => {
        console.log('Connected to server');
      });

      socket.addEventListener('close', () => {
        console.log('Disconnected from server');
      });



// Get info from the first form
      const orderForm = document.getElementById('order-form');
      const typeProduct = document.getElementById('product-select');
      const quantityProduct = document.getElementById('quantity-select');

      let products = []

      orderForm.addEventListener('submit', (event) => {
        event.preventDefault();

        let product = typeProduct.value;
        let quantity = quantityProduct.value;

        console.log(`Added: ${product} - ${quantity}`);
        
        products.push([product, quantity])

        product = ''
        quantity  = '';
 });


    // Info from the second form and order array
      const orders = []
      const submitForm = document.getElementById('submit-form');
      const customerId = document.getElementById('customerId');
      submitForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const id = customerId.value;
       id.value = ''
        
        // Add the order to an array
        orders.push({clientId: id, productList: products})
        console.log(orders)

        products = []

        socket.send("Completed")
   });

