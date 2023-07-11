let userName = window.prompt('Please Enter Your Name');
let orderList = [];

// Input UserName
let userNameElement = document.createElement('h3');
userNameElement.textContent = 'Welcome to BlueJack Foodhall ' + userName;
let topElement = document.querySelector('.top');
topElement.insertBefore(userNameElement, topElement.children[2]);

// Create Customer Code
let min = 0;
let max = 9;
let idNum = [];
for (let i = 0; i < 3; i++) {
  let randomId = Math.floor(Math.random() * (max - min + 1)) + min;
  idNum.push(randomId);
}

let customerCode = userName.toUpperCase().substring(0, 3) + idNum.join('');

let customerCodeElement = document.createElement('h4');
customerCodeElement.textContent = 'Customer Code ' + customerCode;

let midElement = document.querySelector('.mid');

midElement.insertBefore(customerCodeElement, midElement.firstChild.nextSibling);

// Create Order Code
let orderCode = 1;

function generateOrderCode() {
  let createCode = String(orderCode).padStart(3, '0');
  orderCode++;
  return createCode;
}

let orderCodeElement = document.createElement('h4');
orderCodeElement.textContent = 'Order Code ' + generateOrderCode();

midElement.insertBefore(orderCodeElement, customerCodeElement.nextSibling);

selectMenu();

// Choose Menu
function selectMenu() {
  let menuNum = window.prompt('Please choose your menu:\n1. Buta Tsukune Shio\n2. Yaki Soba\n3.Onion & Crispy Jalapeno Stack\n4.Buffalo Chicken Crisper Bites\n5. Kabocha Tenpura');
  if(menuNum < 1|| menuNum > 5) {
    window.alert('Choose Between Menu 1-5');
    selectMenu();
  }else {
    // Choose Quantity
    let quantity = window.prompt('Menu Quantity');
    if(isNaN(quantity)) {
      window.alert('Quantity Must Be A Number!');
      selectMenu();
    } else {
      let menuName;
      let menuPrice;

      switch(menuNum) {
        case '1':
          menuName = 'Buta Tsukune Shio';
          menuPrice = '$10 USD';
          break;
        case '2':
          menuName = 'Yaki Soba';
          menuPrice = '$8 USD';
          break;
        case '3':
          menuName = 'Onion & Crispy Jalapeno Stack';
          menuPrice = '$6 USD';
          break;
        case '4':
          menuName = 'Buffalo Chicken Crisper Bites';
          menuPrice = '$12 USD';
          break;
        case '5':
          menuName = 'Kabocha Tenpura';
          menuPrice = '$9 USD';
          break;
      }

      let subTotal = parseFloat(menuPrice.slice(1)) * parseInt(quantity);

      let table = document.querySelector('table');
      let row = table.insertRow(-1);
      row.classList.add('table-content');

      let noCell = row.insertCell(0);
      noCell.textContent = orderList.length + 1;

      let imageCell = row.insertCell(1);
      let image = document.createElement('img');
      image.src = '/images/food/' + menuNum + '.png';
      imageCell.appendChild(image);

      let menuNameCell = row.insertCell(2);
      menuNameCell.textContent = menuName;

      let priceCell = row.insertCell(3);
      priceCell.textContent = menuPrice;

      let quantityCell = row.insertCell(4);
      quantityCell.textContent = quantity;

      let subTotalCell = row.insertCell(5);
      subTotalCell.textContent = '$' + subTotal + ' USD';

      orderList.push({
        menuName: menuName,
        menuPrice: menuNum,
        quantity: quantity,
        subTotal: subTotal
      });

      orderAgain();
    }
  }
}

// Re Order
function orderAgain() {
  let reOrder = window.confirm('Do you want to make another order?');

  if (reOrder == true) {
    selectMenu();
  } else {
    showOrderList();
  }
}

// Show Order List
function showOrderList() {
  // let totalPayment = orderList.reduce((total, order) => total + order.subTotal, 0);

  // let totalElement = document.createElement('h4');
  // totalElement.textContent = 'Total Payment: $' + totalPayment.toFixed(2) + ' USD';

  // let TotalDiv = document.createElement('div');
  // totalDiv.classList.add('.total');
  // totalDiv.appendChild(totalElement);

  midElement.append(totalDiv);

  let orderListElement = document.createElement('ul');
  orderList.forEach(order => {
    let orderItem = document.createElement('li');
    orderItem.textContent = order.menuName + ' - Quantity: ' + order.quantity + ' - Subtotal: $' + order.subTotal.toFixed(2) + ' USD';
    orderListElement.append(orderItem);
  });
  
  midElement.append(orderListElement);
}
