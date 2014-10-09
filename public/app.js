

function something()
{
	var x = window.localStorage.getItem('nnn');

	x++; // x = x + 1

	window.localStorage.setItem('nnn', x);  // hh['bbb'] = x

	alert(x);
}

function add_to_cart(id)
{
	var key = 'product_' + id;

	var x = window.localStorage.getItem(key);
	x++;
	window.localStorage.setItem(key, x);

	update_orders_input();
	update_orders_button();

	// вывод количества item'ов в корзине
	// alert('Items in your cart: ' + cart_get_number_of_items());

	// get_number_products();

	//alert('You added pizza with id: ' + id);
}

function update_orders_input()
{
	var orders = cart_get_orders(); 
	$('#orders_input').val(orders);
}

function update_orders_button()
{
	var text = 'Cart (' + cart_get_number_of_items() + ')';
	$('#orders_button').val(text);
}

function cart_get_number_of_items()
{
	var cnt = 0;

	for(var i = 0; i < window.localStorage.length; i++)
	{
		var key = window.localStorage.key(i); // получаем ключ
		var value = window.localStorage.getItem(key); // получаем значение, аналог в ruby: hh[key] = x

		if (key.indexOf('product_') == 0) 
		{
			cnt = cnt + value * 1;
		}
	}
	return cnt;
}

function cart_get_orders()
{
	var orders = '';

	for(var i = 0; i < window.localStorage.length; i++)
	{
		var key = window.localStorage.key(i); // получаем ключ
		var value = window.localStorage.getItem(key); // получаем значение, аналог в ruby: hh[key] = x

		if (key.indexOf('product_') == 0) 
		{
			orders = orders + key + '=' + value + ',';
		}
	}
	return orders;
}

function cancel_order()
{
	return false;
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