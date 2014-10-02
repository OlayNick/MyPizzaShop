

function something()
{
	var x = window.localStorage.getItem('nnn');

	x++;

	window.localStorage.setItem('nnn', x);

	alert(x);
}

function add_to_cart(id)
{
	var key = 'product_' + id;

	var x = window.localStorage.getItem(key);
	x++;
	window.localStorage.setItem(key, x);

	get_number_products();

	//alert('You added pizza with id: ' + id);
}

function get_number_products()
{
 
var total = 0;
 
for (var i = 0; i < window.localStorage.length; i++) {
    var key = window.localStorage.key(i);
 
    if (key.search("prod")>=0)
     
    {
        total = total*1 + window.localStorage[key]*1;
 
    }
 
         
}

document.getElementById("basket").innerHTML = "Your basket contains " + total + " items";
 
}