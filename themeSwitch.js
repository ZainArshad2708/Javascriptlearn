

let currentTheme = "light"; 
//currentTheme is a global scope , it can be accessed from any poin tof code

function toggleTheme() {
  if (currentTheme === "light") {
    
    let BgColor = "Black"; 
    let TextColor = "White";
    //Bgcolor and TextColor are block scope, it will be accessed only in if block
    
    currentTheme = "dark"; // Modifying the global variable
    console.log(`Switching to dark mode with color: ${BgColor}`);
    
   
  } else {
    let BgColor = "White";
    let TextColor = "Black";
    //same scope is applied here
    currentTheme = "light";//Modifying the global variable
    console.log(`Switching to light mode with color: ${BgColor}`);
  }

  
   //console.log(BgColor); // ReferenceError: newBgColor is not defined(Throws Error)
  
}

toggleTheme(); 
toggleTheme(); 