console.log("dfqfgbq");
let serial = 0;
let totalAmount = 0;
//for first card  -------coffee
document.getElementById("first-card").addEventListener("click", function (e) {
  // console.log(e.target.parentNode.parentNode.children);
  serial += 1;
  // console.log(e.target.parentNode.parentNode.children[0].innerText);
  const productName = e.target.parentNode.parentNode.children[0].innerText;
  const productPrice =
    e.target.parentNode.parentNode.children[2].children[0].innerText;
  // console.log(productPrice);
  const productQuantity =
    e.target.parentNode.parentNode.children[3].children[0].innerText;
  console.log(productQuantity);

  const priceTotal = parseInt(productPrice) * parseInt(productQuantity);
  // call display function
  displayData(productName, productPrice, productQuantity, priceTotal);
});

// for second card
document.getElementById("second-card").addEventListener("click", function () {
  serial += 1;
  const productName = document.getElementById("second-name").innerText;
  const productPrice = document.getElementById("second-price").innerText;
  const productQuantity = document.getElementById("second-quantity").innerText;

  const priceTotal = parseInt(productPrice) * parseInt(productQuantity);
  // display function
  displayData(productName, productPrice, productQuantity, priceTotal);
});
// for third card
document.getElementById("third-card").addEventListener("click", function () {
  serial += 1;
  const productName = document.getElementById("third-name").innerText;
  const productPrice = document.getElementById("third-price").innerText;
  const productQuantity = document.getElementById("third-quantity").innerText;

  const priceTotal = parseInt(productPrice) * parseInt(productQuantity);

  // display function
  displayData(productName, productPrice, productQuantity, priceTotal);
});
// for fouth card
document.getElementById("fourth-card").addEventListener("click", function () {
  serial += 1;
  const productName = document.getElementById("fourth-name").innerText;
  const productPrice = document.getElementById("fourth-price").innerText;
  const productQuantity = document.getElementById("fourth-quantity").innerText;

  const priceTotal = parseInt(productPrice) * parseInt(productQuantity);

  // display function
  displayData(productName, productPrice, productQuantity, priceTotal);
});
// for fifth card
document.getElementById("fifth-card").addEventListener("click", function () {
  serial += 1;
  const productName = document.getElementById("fifth-name").innerText;
  const productPrice = document.getElementById("fifth-price").innerText;
  const productQuantity = document.getElementById("fifth-quantity").innerText;

  const priceTotal = parseInt(productPrice) * parseInt(productQuantity);
  // display function
  displayData(productName, productPrice, productQuantity, priceTotal);
});
// for six card
document.getElementById("six-card").addEventListener("click", function () {
  serial += 1;
  const productName = document.getElementById("six-name").innerText;
  const productPrice = document.getElementById("six-price").value;
  const productQuantity = document.getElementById("six-quantity").value;

  const priceTotal = parseInt(productPrice) * parseInt(productQuantity);
  // display function
  displayData(productName, productPrice, productQuantity, priceTotal);
});

//common function to  display card data
function displayData(productName, productPrice, productQuantity, priceTotal) {
  const container = document.getElementById("table-container");
  const tr = document.createElement("tr");
  tr.innerHTML = `
       <td>${serial}</td>
       <td>${productName}</td>
       <td>${productPrice}</td>
       <td>${productQuantity}</td>
       <td>${priceTotal}</td>
  `;
  container.appendChild(tr);
  totalAmount += priceTotal;
  console.log(totalAmount);
}