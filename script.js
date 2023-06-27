//your JS code here. If required.
function wait(delay){
	return new Promise(resolve => {
		setTimeout(()=>{
		resolve('delayed Message')
	})
	});
}
async function displayMessageAfterDelay(delay) {
  const message = await wait(delay);
  document.getElementById('output').textContent = message;
}

displayMessageAfterDelay(3000);