

function something()
{
	var x = window.localStorage.getItem('bbb');

	x++;

	window.localStorage.setItem('bbb', x);

	alert(x);
}