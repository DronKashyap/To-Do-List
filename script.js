function handleclick() {
    const inputfield = document.getElementsByClassName("inputfield")[0];
    const task = inputfield.value;

    // Create a new div element
    const newDiv = document.createElement('div');
    newDiv.innerText=task;
    newDiv.style.fontSize='20px';
    newDiv.style.display='flex';
    newDiv.style.justifyContent = 'space-between';
    // newDiv.style.background = 'white';
    // newDiv.style.opacity = '90%';
    newDiv.style.height = '100px';
    newDiv.style.width = '400px';
    newDiv.style.borderRadius = '20px';
    newDiv.style.padding = '10px';
    

    const uncheckedButton = document.createElement('button');
    

    const buttonImg1 = document.createElement('img');
    buttonImg1.src = './images/unchecked.png';
    uncheckedButton.style.border = 'none';
    uncheckedButton.style.height = '10px';
    uncheckedButton.style.width = '10px';
    uncheckedButton.onclick = function() {
        buttonImg1.src = './images/checked.png';
        newDiv.style.textDecoration = 'line-through';
        newDiv.style.color = 'grey';
    };

  
    uncheckedButton.appendChild(buttonImg1);

    newDiv.appendChild(uncheckedButton);

    document.body.appendChild(newDiv);
}
