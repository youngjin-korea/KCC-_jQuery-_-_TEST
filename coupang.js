fetch("myList.json")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    displayProducts(data);
  })
  .catch((error) => console.error("Error fetching the Json data:", error));

function createProductComponent(product) {
  const productDiv = document.createElement("div");
  productDiv.classList.add("product");

  productDiv.innerHTML = `<h2>${product.proName}</h2>
  <p>Arrival Date: ${product.arrivedAt}</p>
  <p>Sale: ${product.sale}%</p>
  <p>Original Price: ${product.noSale} 원</p>
  <p>Discounted Price: ${product.Saled} 원</p>
  <p>Accumulated Points: ${product.accumulate} 점</p>
`;

  return productDiv;
}

document
  .getElementById("purchaseBtn")
  .addEventListener("click", btnClick, false);

function displayProducts(products) {
  const productList = document.getElementById("product-list");

  let totalCost = 0;
  let totalSale = 0;
  let totalDeliverCost = 1000;
  let total = 0;
  let count = 0;

  products.map((product) => {
    totalCost += product.Saled;
    totalSale += product.noSale - product.Saled;
    count++;
    const productComponent = createProductComponent(product);
    productList.appendChild(productComponent);
  });

  total = totalCost + totalDeliverCost;
  document.getElementById("totalCost").innerHTML = totalCost;
  document.getElementById("totalSale").innerHTML = totalSale;
  document.getElementById("totalDeliverCost").innerHTML = totalDeliverCost;
  document.getElementById("total").innerHTML = total;
  document.getElementById("purchaseBtn").value = `구매하기 (${count})`;
}

function btnClick() {
  alert("물건 구매완료!");
}
