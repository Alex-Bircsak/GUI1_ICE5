/*
File: example.js
GUI Assignment: In-class exercise 5
Alex Bircsak, UMass Lowell Computer Science, alex_bircsak@student.uml.edu
Copyright (c) 2021 by Alex. All rights reserved. May be freely copied or
excerpted for educational purposes with credit to the author.
updated by AB on August 4, 2021
Source: https://www.w3schools.com/jsref/met_node_appendchild.asp
*/

var list = document.getElementsByTagName("UL")[0];
var newItem;
var textnode;

// ADD NEW ITEM TO END OF LIST
newItem = document.createElement("LI");       // Create a <li> node
textnode = document.createTextNode("cream");  // Create a text node
newItem.appendChild(textnode);                // Append the text to <li>
list.insertAdjacentElement("beforeend", newItem);

// ADD NEW ITEM START OF LIST
newItem = document.createElement("LI");       // Create a <li> node
textnode = document.createTextNode("kale");   // Create a text node
newItem.appendChild(textnode);                // Append the text to <li>
list.insertAdjacentElement("afterbegin", newItem);

// ADD A CLASS OF COOL TO ALL LIST ITEMS
for (var i = 0; i < list.childElementCount; i++) {
    list.children[i].className = "cool";
}

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING

// var h = document.getElementsByTagName("H2")[0];
// h.innerHTML += "<span>" + list.childElementCount + "</span>";

newItem = document.createElement("SPAN");
textnode = document.createTextNode(list.childElementCount);
newItem.appendChild(textnode);
document.getElementsByTagName("H2")[0].appendChild(newItem);