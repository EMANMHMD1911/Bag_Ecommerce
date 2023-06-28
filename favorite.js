fetch("products.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    localStorage.setItem("products", JSON.stringify(data));
    if (!localStorage.getItem("favorite")) {
      localStorage.setItem("favorite", "[]");
    }
  });

let products = JSON.parse(localStorage.getItem("products"));
let favorite = JSON.parse(localStorage.getItem("favorite"));
function addToFav(productId) {
  let product = products.find(function (item) {
    return item.id == productId;
  });
  if (favorite.length == 0) {
    favorite.push(product);
  } else {
    var res = favorite.find((item) => item.id == productId);
    if (res == undefined) {
      favorite.push(product);
    }
  }
  localStorage.setItem("favorite", JSON.stringify(favorite));
  }
  favorite = JSON.parse(localStorage.getItem("favorite"));
var tbody = document.getElementById("tbody");

// localStorage.setItem("removefav","[]")
  for (var id in favorite) {
    var item = favorite[id];
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
    var iconTd = document.createElement("td");
    tr.appendChild(iconTd);
    var iconn = document.createElement("i");
    iconn.classList.add("fa-regular", "fa-heart");
    iconn.setAttribute("id",item.id)
    iconTd.appendChild(iconn);
    tbody.appendChild(tr); 
  }
 
///rempve from cart
for (var id in favorite) {
  var item = favorite[id];
  document.getElementById(item.id).addEventListener('click', removeFromFav(item.id));
}

function removeFromFav(productId) {
  let fav = favorite.filter((item) => item.id != productId);
  localStorage.setItem("favorite", JSON.stringify(fav));

}

