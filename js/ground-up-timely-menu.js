//get the menu div
const currentMenuDiv = document.getElementById('current-menu');
//make an a-tab to go in the div
const menuLink = document.createElement('a');
//assign href, link text and class to a-tag

menuLink.className='button';
//output the a-tag to the div
currentMenuDiv.appendChild(menuLink);

// instantiate the Date class:
const dt = new Date();
let hr = dt.getHours();
let min = dt.getMinutes();


//declare vars to hold the href and text, the values
//of which will be set dynamically in the if-else
let menuHref='';
let menuText='';

// hr=11
// min = 32


//set the href and text based upon the time of day
//from 12:01 to 10:29 show the BreakFast menu
// at 10:30 switch to lunch menu

if (hr<11){

    if(hr == 10) { //check for min
        if(min < 30){
            menuHref='Breakfast.html';
            menuText='Breakfast Menu';
        } else { // It's between 10:30 and 10:59
            menuHref='lunch.html';
            menuText='lunch Menu';
        }
    } else { // hr is less than 11 and not 10, so much be 9 or less
        menuHref='Breakfast.html';
        menuText='Breakfast Menu';
    }

//from 11:00 to 14:59, show lunch menu
} else if(hr<15) {
menuHref='Lunch.html';
menuText='Lunch Menu';

} else { // at 15:00 switch to dinner menu
    menuHref='dinner.html';
    menuText='Dinner Menu';
}

//assign the variables to href and text:
menuLink.href=menuHref;
menuLink.textContent =menuText;