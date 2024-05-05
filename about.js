var slideindex=0;

showimg(slideindex);

function img_change(n){
   slideindex+=n;
   showimg(slideindex);
}

function showimg(n){
  
  var x=document.getElementsByClassName("myslides");
  
  if(n<0){ slideindex=x.length-1;}
  if(n>=x.length) slideindex=0;
  
  for(var i=0;i<x.length;i++){
    x[i].style.display='none';
  }
  
  x[slideindex].style.display='block';
  
}

function run_change_img(){
  img_change(+1);
}

 var run=setInterval(run_change_img,1500);


function product(names, prices, images, urls, ids) {
    this.name = names;
    this.price = prices;
    this.image = images;
    this.url = urls;
    this.id = ids;
  }
  
  let bat = new product(
    "English Willow Bat",
    30,
    "./images/batnew.jpg",
    "bat.html",
    1
  );
  let ball = new product(
    "Leather Ball",
    10,
    "./images/ballnew.jpg",
    "ball.html",
    2
  );
  let stumps = new product(
    "Wooden Stumps",
    20,
    "./images/stumpsnew.jpg",
    "stumps.html",
    3
  );
  let gloves = new product(
    "Gloves",
    15,
    "./images/gloves.png",
    "gloves.html",
    4
  );
  let shoes = new product(
    "Cricket Shoes",
    20,
    "./images/shoes.jpg",
    "shoes.html",
    5
  );
  let pads = new product(
    "Pads",
    15,
    "./images/pads.jpg",
    "pads.html",
    6
  );
  let helmet = new product(
    "Helmet",
    20,
    "./images/helmet.jpg",
    "helmet.html",
    7
  );

  
  function showcart() {
    var cart = document.getElementsByClassName("cart")[0];
  
      cart.classList.add("hide");
    
  }
  
  function hide_cart() {
    var cart = document.getElementsByClassName("cart")[0];
    cart.classList.remove("hide");
  }
  
  let productArray = [bat, ball, stumps, gloves,shoes,pads,helmet];
  productArray.sort(function (a, b) {
    return a.price - b.price;
  });
  
  var total=0;

  window.addEventListener("load", function load_cart(){

    for(var i=1;i<=7;i++){
        if(localStorage.getItem(i)!=null){
            var quantity=localStorage.getItem(i);
            let prod = productArray.find((item) => item.id == i);

            let cart_items_div_whole=document.getElementsByClassName("cart-items")[0];

            let item_div=document.createElement("div");
            item_div.classList.add("item");
            item_div.classList.add(i);

            cart_items_div_whole.appendChild(item_div);

            let div1=document.createElement("div");

            div1.innerHTML='<button class="close-button" aria-label="Close alert" onclick="remove_item_from_cart(this)" type="button" data-close>' +
            '<span aria-hidden="true">&times;</span>' +
            "</button>";

            item_div.appendChild(div1);

            let div2=document.createElement("div");

            let imgelement = document.createElement("img");
            imgelement.setAttribute("src", prod.image);
            imgelement.classList.add("header-right-logo");
      
            div2.appendChild(imgelement);
      
            var x = document.createElement("p");
            x.innerText = prod.name;
      
            div2.appendChild(x);

            item_div.appendChild(div2);

            let div3=document.createElement("div");
            
            let quantity_changeable = document.createElement("input");

      quantity_changeable.setAttribute("type", "number");
      quantity_changeable.setAttribute("name", "cart_item_quantity");
      quantity_changeable.setAttribute("id", "cart_item_quantity");
      quantity_changeable.setAttribute("value", quantity);
      quantity_changeable.setAttribute("value", quantity);
      quantity_changeable.setAttribute("onchange", "change_cart_count(this)");
      quantity_changeable.setAttribute("min", "1");
      quantity_changeable.setAttribute("max", "10");

      div3.appendChild(quantity_changeable);
            
            item_div.appendChild(div3);

            let div4=document.createElement("div");
            div4.innerHTML=prod.price;
            
            item_div.appendChild(div4);

            let div5=document.createElement("div");

            div5.innerHTML=(+quantity)*(+prod.price);
            
            item_div.appendChild(div5);

            total=total+(+div5.innerHTML);

            update_cart_icon_value();
            
            
        }
    }
    
    document.getElementsByClassName("total")[0].getElementsByTagName("span")[0].innerHTML=total;
});


function update_cart_icon_value(){

    var x=document.getElementsByClassName("cart-items")[0].childElementCount;
    var cnt=0;

    for(var i=1;i<x;i++){
        var item_div=document.getElementsByClassName("item")[i];
        cnt=cnt+(+item_div.querySelector("input").value);
    }

    var icon_cart_value = document.getElementById("icon-cart-value");

    icon_cart_value.innerHTML = cnt;
}

function update_total(){

    var x=document.getElementsByClassName("cart-items")[0].childElementCount;
    var total=0;

    for(var i=1;i<x;i++){
        var item_div=document.getElementsByClassName("item")[i];
        total=total+(+item_div.getElementsByTagName("div")[4].innerHTML);
    }

    var total_div = document.getElementsByClassName("total")[0];
      var curr_total_div = total_div.getElementsByTagName("span")[0];

      curr_total_div.innerHTML=total;

}


function change_cart_count(element){
    let new_item_count = +element.value;
  
    let our_item_div = element.parentElement.parentElement;
  
    let subtotal_div = our_item_div.getElementsByTagName("div")[4];
  
    let item_price = +our_item_div.getElementsByTagName("div")[3].innerHTML;
  
    let new_subtotal = item_price * new_item_count;
  
    subtotal_div.innerHTML = new_subtotal;
  
   
    update_cart_icon_value();
    update_total();
  
    localStorage.setItem(p.id,new_item_count);
  }
  
  function remove_item_from_cart(element){
      
    var item_div_to_remove=element.parentElement.parentElement;
  
    var id=item_div_to_remove.classList[1];
  
    localStorage.removeItem(id);
    
    item_div_to_remove.remove();
  
    update_cart_icon_value();
    update_total();
  
  }
  
  function goto_checkout() {
      location = "checkout.html";
    }
  
  
    document
    .getElementsByClassName("close-cart")[0]
    .addEventListener("click", hide_cart);