//your JS code here. If required.




// Function to delay for a specified time
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Async function to display message after a delay
async function displayMessage() {
  const textInput = document.getElementById('text');
  const delayInput = document.getElementById('delay');
  const outputDiv = document.getElementById('output');

  const message = textInput.value;
  const delayTime = parseInt(delayInput.value, 10);

  outputDiv.textContent = 'Waiting...';

  // Delay for the specified time
  await delay(delayTime);

  // Display the message after the delay
  outputDiv.textContent = message;
}

// Event listener for the button click
const btn = document.getElementById('btn');
btn.addEventListener('click', displayMessage);

// function wait(){
// 	return new Promise(resolve => {
// 		setTimeout(()=>{
// 		resolve('delayed Message')
// 	},3000)
// 	});
// }
// async function displayMessageAfterDelay() {
//   const message = await wait(delay);
//   document.getElementById('text').innerText = message;
// }
// displayMessageAfterDelay() 
