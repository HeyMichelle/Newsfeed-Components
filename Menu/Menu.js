/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

// Why is this grayed out if I put below the function?
const header = document.querySelector('.header');

// use const or function?
function openMenu(arr) {
    const menu = document.createElement('div');
    menu.classList.add('menu');

    const links = document.createElement('ul');
    menu.appendChild(links);

    menuItems.forEach((link) => {
      const item = document.createElement('li');
      item.textContent = link;
      item.style.cursor = 'pointer';
      links.appendChild(item);
    });
    
    // should I put this within or outside of the function? If I put it outside will it still recognize the menu variable/div that was created?
    const menuBtn = document.querySelector('.menu-button');
    menuBtn.addEventListener('click', (e) => {
      menu.classList.toggle('menu--open');
      gsap.from(".menu-button", {duration: 1, opacity: 0, x: 150, stagger: 0.25});
        const ulItem = document.querySelector('.menu.menu--open');
        ulItem.classList.add('ulItems');
      gsap.from(".ulItems", {duration: 1, opacity: 0, y: 150, stagger: 0.25});
    });
   
    return menu;
}

header.appendChild(openMenu(menuItems));



// function show() {
//   document.querySelector('.menu').classList.toggle('active');
// }


/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The function takes an array as its only argument.

  Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/
