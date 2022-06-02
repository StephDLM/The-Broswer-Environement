//Store content inside of the body = so you can just call body
// const body = document.body;
// //call the add event listener on the body instructing the body to do something when its clicked 
// document.body.addEventListener('click', () => {
//     //console.log('You clicked the body of the page')
//     //tell browser to manipulate the body element by changing inner html for ever click event
//     body.innerHTML = '<h1>Hello World!</h1>';
// });
//detect and listen for events when user interacts with page
//parameter is the events name "click"
//then pass a function as second argument, which will execute when the click event gets registered


//Select an Element by ID
const btnUpdate = document.querySelector('.btn-main');

btnUpdate.addEventListener('click', () => {
    const headline = document.getElementById('headline');
    const input = document.querySelector('.input-main');
  headline.classname = 'grow';
    //get a value of text input field
    headline.textContent = input.value;
   //clears heading every time you click button
   input.value = '';


});

// const items = document.querySelectorAll('li');
// const highlights = document.querySelectorAll('.highlight');

// //to manipulate the highlight in the html tab
// for ( const highlight of highlights ){
//     highlight.style.backgroundColor = 'cornsilk';

// };

// for (let i = 0; i < items.length; i++){
//     items [i].style.color = 'orchid';

// };
// This won't work b/c li is undefined: 
//document.getElementsByTagName('li').style.backgroundColor = 'skyblue';
//document.getElementById('headline').style.border = 'solid 2px red';
//after adding the constant, it turns into:

