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
    25,
    "./images/helmet.jpg",
    "helmet.html",
    7
  );

  
  
  let productArray = [bat, ball, stumps, gloves,shoes,pads,helmet];
  productArray.sort(function (a, b) {
    return a.price - b.price;
  });



  window.addEventListener("load",function order_summary(){
    for(var i=1;i<=7;i++){
        if(localStorage.getItem(i)!=null){
            let p=productArray.find(item=> item.id==i);
            
            let quantity=localStorage.getItem(i);

            let table=document.getElementsByTagName("table")[0];

            let table_row=document.createElement("tr");

            let table_row_d1=document.createElement("td");
            let table_row_d2=document.createElement("td");

            table_row_d1.innerHTML=p.name+" X "+quantity;
            table_row_d2.innerHTML=+(p.price)*+(quantity);

            table_row.appendChild(table_row_d1);
            table_row.appendChild(table_row_d2);

            table.appendChild(table_row);
            
        }
    }

    let table=document.getElementsByTagName("table")[0];

            let table_row=document.createElement("tr");

            let table_row_d1=document.createElement("td");
            let table_row_d2=document.createElement("td");

            table_row_d1.innerHTML="Total";
            
            let x=table.childElementCount;
            
            var total=0;
            for(var i=1;i<x;i++){
               total=total+(+document.getElementsByTagName("tr")[i].childNodes[1].innerHTML)
            }
            
            table_row_d2.innerHTML=total;

            table_row.appendChild(table_row_d1);
            table_row.appendChild(table_row_d2);

            table.appendChild(table_row);
  });


  function showcart() {
    var cart = document.getElementsByClassName("cart")[0];
  
      cart.classList.add("hide");
    
  }
  
  function hide_cart() {
    var cart = document.getElementsByClassName("cart")[0];
    cart.classList.remove("hide");
  }

  document
  .getElementsByClassName("close-cart")[0]
  .addEventListener("click", hide_cart);

  function goto_checkout() {
    location = "checkout.html";
  }
