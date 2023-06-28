fetch("products.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    localStorage.setItem("products2", JSON.stringify(data));
    if (!localStorage.getItem("cart")) {
      localStorage.setItem("cart", "[]");
    }
  });


let products2 = JSON.parse(localStorage.getItem("products"));
let cart = JSON.parse(localStorage.getItem("cart"));
function addToCart(productId) {
  let product = products2.find(function (item) {
    return item.id == productId;
  });
  if (cart.length == 0) {
    cart.push(product);
  }
  else {
    var res = cart.find((item) => item.id == productId);
    if (res == undefined) {
      cart.push(product);
    }
  }
  localStorage.setItem("cart", JSON.stringify(cart));
}

var tbody = document.getElementById("tbody");
for (var id in cart) {
  var item = cart[id];
  var tr = document.createElement("tr");
  var imgTd = document.createElement("td");
  tr.appendChild(imgTd);
  var img = document.createElement("img");
  img.src = item.image;
  img.style.width = "150px";
  img.style.height = "150px";
  imgTd.appendChild(img);
  var nameTd = document.createElement("td");
  nameTd.textContent = item.name;
  tr.appendChild(nameTd);
  var priceTd = document.createElement("td");
  priceTd.textContent = item.price;
  tr.appendChild(priceTd);
  var removeTd = document.createElement("td");
  tr.appendChild(removeTd);
  var removelink = document.createElement("p");
  removelink.setAttribute("id",item.id)
  removelink.textContent = "Remove"
  removelink.style.textDecoration='underline'
  removelink.style.cursor="pointer"
  removeTd.appendChild(removelink);
  tbody.appendChild(tr);
}


