const btn = document.getElementById("btn");
btn.addEventListener('click',delayfun);
async function delayfun(){
	const text = document.getElementById("text").value;
	const delay = document.getElementById("delay").value;
	const output = document.getElementById("output");

	await new Promise(resolve => setTimeout(resolve, delay))
	output.innerText = text;
}