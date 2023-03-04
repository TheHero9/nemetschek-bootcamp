const socket = new WebSocket('ws://localhost:3000');

      socket.addEventListener('open', () => {
        console.log('Connected to server');
      });

      socket.addEventListener('close', () => {
        console.log('Disconnected from server');
      });

      
// Get the elements
// Form 1
const orderForm = document.getElementById('order-form');
const typeProduct = document.getElementById('product-select');
const quantityProduct = document.getElementById('quantity-select');

// Form 2
const submitForm = document.getElementById('submit-form');
const customerId = document.getElementById('customerId');

let products = []
const orders = []

// Get info from the first form
      orderForm.addEventListener('submit', (event) => {
        event.preventDefault();

        let product = typeProduct.value;
        let quantity = quantityProduct.value;
        

        let text = document.getElementById("orderTotal").innerHTML;
        document.getElementById("orderTotal").innerHTML =
          text + `<br> ${product}: ${quantity}`;

        console.log(`Added: ${product} - ${quantity}`);
        
        products.push([product, quantity])

        product = ''
        quantity  = '';
 });


// Get info from the second form and order array
      submitForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const id = customerId.value;
       id.value = ''
        
        // Add the order to an array
        orders.push({clientId: id, productList: products})


        console.log(orders)
        
        products = []
        const dataOrders = JSON.stringify({array: orders})
        socket.send(dataOrders)

        // Reset text
        let text = (document.getElementById("orderTotal").innerHTML =
    "You ordered: ");


   });

