let ulItem = document.createElement("li");

ulItem.className =  "main";
ulItem.id = "top"

//------------------ text add-------------------
ulItem.appendChild(document.createTextNode("Gazipur"));


document.querySelector("ul").appendChild(ulItem);




console.log(ulItem);



