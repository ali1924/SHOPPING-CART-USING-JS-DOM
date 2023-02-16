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
    const priceTotal = parseInt(productPrice)* parseInt(productQuantity);
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
