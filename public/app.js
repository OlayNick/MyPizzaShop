

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

	//alert('You added pizza with id: ' + id);
}