function submitMember() {
 
    const inputName = document.getElementById('username');
    const name = inputName.value;
    const emptynode = "Please enter a user name..!";
    const empty = document.getElementById('entry');

   if(name === ""){  
    empty.innerHTML=emptynode;
   } else{
        document.getElementById('entry').style.display = "none";
         // Create an "li" node:
            const node = document.createElement("li");

            // Create a text node:
            const textnode = document.createTextNode(name);

            // Append the text node to the "li" node:
            node.appendChild(textnode);

            // Append the "li" node to the list:
            document.getElementById("demo").appendChild(node);
            inputName.value ="";

            node.addEventListener("click", function() {
                this.style.textDecoration = "line-through";
                
            });
        }
    
}