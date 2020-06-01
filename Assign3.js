//Selecting the section with an id of container without using querySelector
document.getElementById("container");

//Selecting the section with an id of container using querySelector
document.querySelector("container");

//Selecting all the list items with a class of "second"
document.getElementsByClassName("second");

//Selecting a list item with a class of third, but only the list item inside of the ol tag
document.querySelector("ol .third");

//Giving the section with an id of container the text "Hello!"
document.getElementById("container").innerText = "Hello!";

//Adding the class main to the div with a class of footer
document.querySelector(".footer").classList.add("main");

//Removing the class main on the div with a class of footer
document.querySelector(".footer").classList.remove("main");

//Creating a new li element
let newLi = document.createElement("li");

//Giving the li element the text "four"
newLi.innerText = "four";

//Appending the li element to the ul element
document.querySelector("ul").append(newLi);

//Looping over all of the lis inside the ol tag and giving them a background color of "green"
document.querySelectorAll("ol li").forEach(function(element) { element.style.backgroundColor = "green" })

//Removing the div with a class of footer
document.querySelector(".footer").remove();
