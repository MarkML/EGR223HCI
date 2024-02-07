function createParagraph() {
    const para = document.createElement("p");
    para.textContent = "You clicked a button!";
    document.body.append(para);
}


const buttons = document.querySelectorAll("button") //returns all descendent elements in a NodeList which is similiar to an array
                                                   // NodeList will contain all the <button> elements 

for (const button of buttons) {
    button.addEventListener("click", createParagraph);
}

