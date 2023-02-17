console.log("dfqfgbq");
//for first card  -------coffee
document.getElementById("first-card ").addEventListener("click", function () {
  // console.log('coffee listener')
  const firstElement = document.getElementById("first-name").innerText;
  // console.log(firstElement);
  const productPrice = document.getElementById("first-price").innerText;
  // console.log(productPrice);
  const productQuantity = document.getElementById("first-quantity").innerText;
  console.log(productQuantity);

  //Total product price
  const priceTotal = parseInt(productPrice) * parseInt(productQuantity);
  console.log(typeof priceTotal);
  // Table row creat
  const container = document.getElementById("table-container");
  const tr = document.createElement("tr");
  tr.innerHTML = `
        <td>${1}</td>
        <td>${firstElement}</td>
        <td>${productPrice}</td>
        <td>${productQuantity}</td>  
        <td>${priceTotal}</td>  
    `;

  container.appendChild(tr);
});

// for second card
document.getElementById("second-card").addEventListener("click", function () {
  // console.log('Apple');
  const secondElement = document.getElementById("second-name").innerText;
  // console.log(secondElement);
  const productPrice = document.getElementById("second-price").innerText;
  // console.log(productPrice);
  const productQuantity = document.getElementById("second-quantity").innerText;
  // console.log(productQuantity);
  const priceTotal = parseInt(productPrice) * parseInt(productQuantity);
  console.log(priceTotal);

  // table row creat
  const container = document.getElementById("table-container");
  const tr = document.createElement("tr");
  tr.innerHTML = `
        <td>${2}</td>
        <td>${secondElement}</td>
        <td>${productPrice}</td>
        <td>${productQuantity}</td>
        <td>${priceTotal}</td>
    `;
  container.appendChild(tr);
});
// for third card
document.getElementById("third-card").addEventListener("click", function () {
  console.log("Orange");
  const thirdElement = document.getElementById("third-name").innerText;
  // console.log(thirdElement);
  const productPrice = document.getElementById("third-price").innerText;
  // console.log(productPrice);
  const productQuantity = document.getElementById("third-quantity").innerText;
  console.log(productQuantity);
  const priceTotal = parseInt(productPrice) * parseInt(productQuantity);

  // Creat table
  const container = document.getElementById("table-container");
  const tr = document.createElement("tr");
  tr.innerHTML = `
      <td>${3}</td>
      <td>${thirdElement}</td>
      <td>${productPrice}</td>
      <td>${productQuantity}</td>
      <td>${priceTotal}</td>
    `;
  container.appendChild(tr);
});
// for fouth card
document.getElementById("fourth-card").addEventListener("click", function () {
  console.log("pizza");
  const fourthElement = document.getElementById("fourth-name").innerText;
  console.log(fourthElement);
  const productPrice = document.getElementById("fourth-price").innerText;
  console.log(productPrice);
  const productQuantity = document.getElementById("fourth-quantity").innerText;
  console.log(productQuantity);

  const priceTotal = parseInt(productPrice) * parseInt(productQuantity);
  // creat table
  const container = document.getElementById("table-container");
  const tr = document.createElement("tr");
  tr.innerHTML = `
         <td>${4}</td>
         <td>${fourthElement}</td>
         <td>${productPrice}</td>
         <td>${productQuantity}</td>
         <td>${priceTotal}</td>
    `;
  container.appendChild(tr);
});
// for fifth card
document.getElementById("fifth-card").addEventListener("click", function () {
  console.log("burger");
  const fifthElement = document.getElementById("fifth-name").innerText;
  console.log(fifthElement);
  const productPrice = document.getElementById("fifth-price").innerText;
  console.log(productPrice);
  const productQuantity = document.getElementById("fifth-quantity").innerText;
  console.log(productQuantity);

  const priceTotal = parseInt(productPrice) * parseInt(productQuantity);
  console.log(priceTotal);
  // create table
  const container = document.getElementById("table-container");
  const tr = document.createElement("tr");
  let x = 0;
  x = x + 1;
  tr.innerHTML = `
        <td>${x}</td>
        <td>${fifthElement}</td>
        <td>${productPrice}</td>
        <td>${productQuantity}</td>
        <td>${priceTotal}</td>
    `;
  container.appendChild(tr);
});
// for six card
document.getElementById("six-card").addEventListener("click", function () {
  console.log("cake");
  const sixElement = document.getElementById("six-name").innerText;
  console.log(sixElement);
  const productPrice = document.getElementById("six-price").value;
  console.log(productPrice);
  const productQuantity = document.getElementById("six-quantity").value;
  console.log(productQuantity);

  const priceTotal = parseInt(productPrice) * parseInt(productQuantity);
  console.log(priceTotal);
  // creat table
  // create table
  const container = document.getElementById("table-container");
  const tr = document.createElement("tr");
  tr.innerHTML = `
        <td>${6}</td>
        <td>${sixElement}</td>
        <td>${productPrice}</td>
        <td>${productQuantity}</td>
        <td>${priceTotal}</td>
    `;
  container.appendChild(tr);
});
