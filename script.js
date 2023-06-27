//your JS code here. If required.
function wait(){
	return new Promise(resolve => {
		setTimeout(()=>{
		resolve('delayed Message')
	},3000)
	});
}
async function displayMessageAfterDelay() {
  const message = await wait(delay);
  document.getElementById('output').textContent = message;
}
displayMessageAfterDelay() 
