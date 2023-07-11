// 1.	First, the website will show welcome message to the admin.
alert("Welcome, Admin!");

// 2.	After that, the website will show an input box that asking for the new menu name.
let menuName = window.prompt("Please Enter Menu Name");

// 3.	After asking for the new menu name, the website will show another input box that asking for the price of the new menu.
let menuPrice = window.prompt("Please Enter Menu Price");

// 4.	After that, the website will show another input box that asking for the category of the new menu.
let menuCategory = window.prompt("Please Enter Menu Category");

// 5.	After the admin input new menu name, new price and the category the website will show the new menu and Selling Price of the menu. Selling Price is getting from Price added with 10% of Price. Here is the display image of the Add Menu page:

if(menuName.length === 0 || menuPrice.length === 0 | menuCategory === 0) {
  location.reload();
  alert('Form Cannot Be Empty!');
} else {
  let price = parseFloat(menuPrice);
  let sellingPrice = price + (0.1 * price);
  let table = document.querySelector('.mid-text table');

  // Create Row
  let newRow = document.createElement('tr');
  newRow.classList.add('content-table');

  // Create Cells
  let numberCell = document.createElement('td');
  numberCell.textContent = table.rows.length;

  let menuNameCell = document.createElement('td');
  menuNameCell.textContent = menuName;

  let priceCell = document.createElement('td');
  priceCell.textContent = menuPrice;

  let categoryCell = document.createElement('td');
  categoryCell.textContent = menuCategory;

  // Append the cells to the new row
  newRow.appendChild(numberCell);
  newRow.appendChild(menuNameCell);
  newRow.appendChild(priceCell);
  newRow.appendChild(categoryCell);

  // Append the new row to the table
  table.appendChild(newRow);

  // Show the selling price
  alert('New Menu: ' + menuName + '\nSelling Price: ' + sellingPrice);
}
