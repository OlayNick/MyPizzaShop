

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

	// get_number_products();

	//alert('You added pizza with id: ' + id);
}

function cart_get_number_of_items()
{
	var cnt = 0;

	for(var i = 0; i < window.localStorage.length; i++)
	{
		var key = window.localStorage.key(i); // получаем ключ
		var value = window.localStorage.getItem(key); // получаем значение, аналог в ruby: hh[key] = x

		if(key.indexOf('product_') == 0) 
		{
			cnt = cnt + value * 1
		}
	}
	return cnt;
}

// function get_number_products()
// {
 
// var total = 0;
 
// for (var i = 0; i < window.localStorage.length; i++) {
//     var key = window.localStorage.key(i);
 
//     if (key.search("prod")>=0)
     
//     {
//         total = total*1 + window.localStorage[key]*1;
 
//     }
 
         
// }

// document.getElementById("basket").innerHTML = "Your basket contains " + total + " items";
 
// }