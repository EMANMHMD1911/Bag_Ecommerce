let carticon =document.querySelector('#carticon')
let cartdiv =document.querySelector('.cartdiv')
let closecart =document.querySelector('#closecart')


//open cart 
carticon.onmouseover= () =>{
    cartdiv.classList.add("active")
}

//close cart
closecart.onclick=()=>{
    cartdiv.classList.remove("active")

}

//cart working   
if(document.readyState=='loading'){
    document.addEventListener('DOMContentLoaded',ready)
}else{
    ready();
}

function ready(){
    //remove item from cart 
    var removecartbutton=document.getElementsByClassName("fa-solid fa-trash")
      
        for(var i=0;i<removecartbutton.length;i++){
            var button= removecartbutton[i];
            button.addEventListener('click',removecartitem)

            }
            // var quantityinputs=document.getElementsByClassName("quantity")
            // for(var i=0;i<quantityinputs.length;i--){
            //     var input =quantityinputs[i];
            //     input.addEventListener('change',quantitychange)

            // }

            //add to cart 
            var addcart =document.getElementsByClassName("Addtocart")
            for(var i=0;i<addcart.length;i++){
                var button=addcart[i]
                button.addEventListener("click",addcartclicked);
            }
        }
         //remove item from cart 
    function removecartitem(event){
        var buttonclicked=event.target 
        buttonclicked.parentElement.remove()
        // updatetotal ()

    }

    // add to cart 
   function addcartclicked(event){
    var button= event.target
    var shopproducts =button.parentElement
    var title=shopproducts.getElementsByClassName("name")[0].innerText 
    var price=shopproducts.getElementsByTagName("p")[1].innerText
    var photo=shopproducts.getElementsByTagName("img")[0].src
    addproducttocart(title,price,photo)
   }

 
var cartboxcontent=`
<img src="${photo}" alt="" class="cartimg">
<div class="details">
    <div class="bagtitle">${title}</div>
    <div class="bagprice">${price}</div>
    <input type="number" value="1" class="quantity">
</div>
<i  style="cursor:pointer" class="fa-solid fa-trash"></i>`;
cartshopbox.innerHTML=cartboxcontent
cartitems.append(cartshopbox)
cartshopbox.getElementsByClassName("fa-solid fa-trash")[0].addEventListener('click',removecartitem)




    // function quantitychange(event){
    //     var input=event.target
    //     if(isNaN(input.value)||input.value<=0){
    //         input.value=1;
    //     }
        
    // }

    // function updatetotal (){
    //     var carcontent= document.getElementsByClassName("cartbag")[0]
    //     var cartboxs= document.getElementsByClassName("box")[0]
    //     var total=0
    //     for(var i=0;i<cartboxs.length;i++){
    //         var box =cartboxs[i]
    //         var priceelement=box.getElementsByClassName("bagprice")[0]
    //         var quantityelement=box.getElementsByClassName("quantity")[0]
    //         var price=parseFloat(priceelement.innerText.replace("$",""))
    //         var quantity=quantityelement.value
    //         total+=price*quantity;
    //         document.getElementsByClassName('total-price')[0].innerHTML='$'+total 
    //     }
        

    // }