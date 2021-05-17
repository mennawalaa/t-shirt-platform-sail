
var products = {
    'white': {

        'plain': {
            'unit_price': 5.12,
            'photo': 'img/v-white.jpg'
        },
        'printed': {
            'unit_price': 8.95,
            'photo': 'img/v-white-personalized.jpg'
        }
    },

    'colored': {
        'plain': {
            'unit_price': 6.04,
            'photo': 'img/v-color.jpg'
        },
        'printed': {
            'unit_price': 9.47,
            'photo': 'img/v-color-personalized.png'
        }
    }
}


// Search params

var search_params = {
    "quantity": "",
    "color": "",
    "quality": "",
    "style": "",
}
//initializing the old price
search_params.quantity=$("#quantity").val();


$(function () {


    function update() {
        $("#photo-product").attr("src", products.white.printed.photo);
        $("#result-style").text(search_params.style);
        $("#result-quality").text(search_params.quality);
        $("#result-color").text(search_params.color);
        $("#result-quantity").text(search_params.quantity);
        if ((search_params.style == "plain") && (search_params.color == "white")) {
            $("#photo-product").attr("src", products.white.plain.photo);
            unitprice = products.white.plain.unit_price;
            console.log("unitprice", unitprice);
        }
        else if ((search_params.style == "printed") && (search_params.color == "white")) {
            $("#photo-product").attr("src", products.white.printed.photo);
            unitprice = products.white.printed.unit_price;
            console.log("unitprice", unitprice);
        }
        else if ((search_params.style == "plain") && (search_params.color == "colored")) {
            $("#photo-product").attr("src", products.colored.plain.photo);
            unitprice = products.colored.plain.unit_price;
            console.log("unitprice", unitprice);
        }
        else {
            $("#photo-product").attr("src", products.colored.printed.photo);
            unitprice = products.colored.printed.unit_price;
            console.log("unitprice", unitprice);
        }
        //price caluclation
         
        if (search_params.quality == "high quality") {
            unitprice += (.12 * unitprice);
        }
        var total_price = unitprice * search_params.quantity;
        
        if (search_params.quantity > 1000) {
            total_price -= (total_price * .2);
        }
        if (1000 > search_params.quantity > 500) {
            total_price -= (total_price * .12);
        }
        if (500 > search_params.quantity > 100) {
            total_price -= (total_price * .05);
        }
        $("#price").text(total_price);

    }
    
    var unitprice = 0;
    $("#style").change(function () {
        search_params.style = $("#style").val();
        console.log(search_params.style);
        
        update();
    });
    
    $("#q150").click(function () {
        search_params.quality = "Basic quality";
        update();
    });
    $("#q190").click(function () {
        search_params.quality = "high quality";
        update();
    })
    $("#colored").click(function () {
        search_params.color = "colored";
        update();
    });
    $("#white").click(function () {
        search_params.color = "white";
        update();
    });
    
  
    $("#quantity").change(function () {
        search_params.quantity = $("#quantity").val();
        console.log("new quantity",search_params.quantity);
        update();
    });

   
});











