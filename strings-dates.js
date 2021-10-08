/* What day is it?!? */
const currentDate = new Date();

// console.log('getDate() ->', currentDate.getDate());
// console.log('getDay() ->', currentDate.getDay());
// console.log('getFullYear() ->', currentDate.getFullYear());
// console.log('getHours() ->', currentDate.getHours());
// console.log('getMilliseconds() ->', currentDate.getMilliseconds());
// console.log('getMinutes() ->', currentDate.getMinutes());
// console.log('getMonth() ->', currentDate.getMonth());
// console.log('getSeconds() ->', currentDate.getSeconds());
// console.log('getTime() ->', currentDate.getTime());
// console.log('getTimezoneOffset() ->', currentDate.getTimezoneOffset());
// console.log('toDateString() ->', currentDate.toDateString());
// console.log('toISOString() ->', currentDate.toISOString());
// console.log('toLocaleDateString() ->', currentDate.toLocaleDateString());
// console.log('toLocaleString() ->', currentDate.toLocaleString());
// console.log('toLocaleTimeString() ->', currentDate.toLocaleTimeString());
// console.log('toString() ->', currentDate.toString());
// console.log('toTimeString() ->', currentDate.toTimeString());
// console.log('valueOf() ->', currentDate.valueOf());
/* Output to DOM */
// Find target elements and assign them to a variable
const dateElement = document.querySelector('.date'); // class selector

// Using the paraElement variable and your knowledge of strings and string methods to:

//You last accessed this page on Oct 8 at 8:45pm
const formattedTime = `You last accessed this page on ${currentDate.toDateString().substr(4,3)} ${currentDate.getDate()} ${currentDate.toLocaleTimeString().substr(0,4)}${currentDate.toLocaleTimeString().charAt(8)}${currentDate.toLocaleTimeString().charAt(10)}`;
console.log(formattedTime);
document.querySelector("time").textContent = formattedTime;
console.log(document.querySelector("time").textContent);
//for some reason it won't edit on the page



// Count the number of characters in the paragraph;
const paragraphHarry = window.document.querySelector("p");
const numCharacters = paragraphHarry.textContent.length;
console.log(`Number of characters in the paragraph: ${numCharacters}`);
// Count the number of words in the paragraph;
const numWords = paragraphHarry.textContent.split(" ").length;
console.log(`Number of words in the paragraph: ${numWords}`);
// Count the number of times "wizard" is mentioned in the paragraph.
const paragraphHarryText = paragraphHarry.textContent;
const numWizard = paragraphHarryText.split('wizard').length;
console.log(`Number of times wizard is mentioned in the paragraph: ${numWizard}`);
// Output each of the above counts in the span elements provided under "Paragraph Stats".

const spanHTML = document.querySelectorAll("span");
spanHTML[0].innerHTML = numCharacters;
spanHTML[1].innerHTML = numWords;
spanHTML[2].innerHTML = numWizard;

//installed luxon 
var DateTime = luxon.DateTime;
const now = DateTime.now();
console.log(now);
//don't know how this works

// Display day date as content of the target element
dateElement.textContent = currentDate.toString();
