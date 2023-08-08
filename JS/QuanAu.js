var product = [
    {
        id: "SP1",
        name: "QuanDai_QuanAu_(1)",
        img: "QuanDai_QuanAu_ (1).png",
        price_sale: 300000,
        price: 300000,
    },
    {
        id: "SP2",
        name: "QuanDai_QuanAu_(2)",
        img: "QuanDai_QuanAu_ (2).png",
        price_sale: 230000,
        price: 290000,
    },
    {
        id: "SP3",
        name: "QuanDai_QuanAu_(3)",
        img: "QuanDai_QuanAu_ (3).png",
        price_sale: 280000,
        price: 280000,
    },
    {
        id: "SP4",
        name: "QuanDai_QuanAu_(4)",
        img: "QuanDai_QuanAu_ (4).png",
        price_sale: 270000,
        price: 270000,
    },
    {
        id: "SP5",
        name: "QuanDai_QuanAu_(5)",
        img: "QuanDai_QuanAu_ (5).png",
        price_sale: 260000,
        price: 260000,
    },
    {
        id: "SP6",
        name: "QuanDai_QuanAu_(6)",
        img: "QuanDai_QuanAu_ (6).png",
        price_sale: 250000,
        price: 250000,
    },
    {
        id: "SP7",
        name: "QuanDai_QuanAu_(7)",
        img: "QuanDai_QuanAu_ (7).png",
        price_sale: 240000,
        price: 240000,
    },
    {
        id: "SP8",
        name: "QuanDai_QuanAu_(8)",
        img: "QuanDai_QuanAu_ (8).png",
        price_sale: 230000,
        price: 230000,
    },
    
];

// var prod = [];
// function saveProduct() {
//     sessionStorage.setItem('shopping', JSON.stringify(prod));
// }

// đẩy mảng product vào localStorange
function Save() {
    localStorage.setItem('hatProduct', JSON.stringify(product))
}

// lấy sản phẩm
function load(){
    product = JSON.parse(localStorage.getItem('hatProduct'));
} 

// print to html
if (localStorage.getItem("hatProduct") != null) {
    load();
}
if (localStorage.getItem("hatProduct") == null) {
    Save();
}

var listLocal = function() {
    var listProduct = "";
    for(var i in product) {
        var data = JSON.parse(JSON.stringify(product[i]));
        var listProduct = '<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 sanPham mb-4">';
        listProduct += '<div class="nd-sp">';
        listProduct += '<a href="#" class="proo" data-id="'+data.id+'" data-name="'+data.name+'" data-img="'+data.img+'" data-price="'+data.price+'" data-price-sale="'+data.price_sale+'">';
        listProduct += '<div class="img-sp mb-3">';
        listProduct += '<img src="./assets/img/'+ data.img +'" alt="hinh-anh-san-pham">';
        listProduct += '</div>';
        listProduct += '<div class="info-sp text-center">';
        listProduct += '<h5 class="name">'+ data.name +'</h5>';
        listProduct += '<p class="price" style="color: #DC143C;"><del>'+ data.price_sale +'</del></p>';
        listProduct += '<p class="price-sale">'+ data.price +'</p>';
        listProduct += '</div>';
        listProduct += '</a>';
        listProduct += '<button class="mt-2 mb-3 add-to-cart add-cart" data-id="'+data.id+'" data-name="'+data.name+'" data-img="'+data.img+'" data-price="'+data.price+'" data-price-sale="'+data.price_sale+'">Thêm vào giỏ hàng</button>';
        listProduct += '</div>';
        listProduct += '</div>';

        document.getElementById("products").innerHTML += listProduct;
    }
    Save();
}
listLocal();


var countProduct = function() {
    var count = 0, i = 0;
    for(var i in product) {
        count++;
        i++;
    }
    document.getElementById("countProductHat").innerHTML = count + " sản phẩm";
}
countProduct();

// Xoá dữ liệu trên localStorage
// localStorage.clear();