

function something()
{
	var x = window.localStorage.getItem('nnn');

	x++;

	window.localStorage.setItem('nnn', x);

	alert(x);
}