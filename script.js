// check the right radio button
function updateRadio(angleInput){
    if(angleInput == 0){
        document.querySelector(`input[name="angle"][value="${angleInput}"]`).checked = true;
    }
    else if(angleInput == 45){
        document.querySelector(`input[name="angle"][value="${angleInput}"]`).checked = true;
    }
    else if(angleInput == 60){
        document.querySelector(`input[name="angle"][value="${angleInput}"]`).checked = true;
    }
    else if(angleInput == 90){
        document.querySelector(`input[name="angle"][value="${angleInput}"]`).checked = true;
    }
    else if(angleInput == 180){
        document.querySelector(`input[name="angle"][value="${angleInput}"]`).checked = true;
    } else{
        document.querySelector(`input[name="angle"][value="0"]`).checked = false;
        document.querySelector(`input[name="angle"][value="45"]`).checked = false;
        document.querySelector(`input[name="angle"][value="60"]`).checked = false;
        document.querySelector(`input[name="angle"][value="90"]`).checked = false;
        document.querySelector(`input[name="angle"][value="180"]`).checked = false;
    }  
}

//update textbox
function updateText(angleInput){
    document.querySelector("#angleInput").value = angleInput;
}

//update slider
function updateSlider(angleInput){
    document.querySelector("#angleSlider").value = angleInput;
}


/* Event listeners */

//angle textbox
document.querySelector("#angle-textbox").addEventListener("click", (e) =>{
    e.preventDefault();

    //get form values
    let angleInput = parseInt(document.querySelector("#angleInput").value);
    console.log(angleInput);

    if (isNaN(angleInput)) {
        angleInput = 0;
    } 
    else {
        angleInput = (angleInput % 360 + 360) % 360
    }

    updateRadio(angleInput);
    updateText(angleInput);
    if(angleInput > 180){
        updateSlider(180- angleInput);
    }else{
        updateSlider(angleInput);
    }
    
});

//slider 
document.querySelector('#angleSlider').addEventListener("input", (e)=>{
    let angleInput = parseInt(e.target.value);

    // Adjust value to be within range if needed
    if (isNaN(angleInput)) {
        angleInput = 0;
    } else if (angleInput < 0){
        angleInput = (-1 * angleInput) + 180;
    }

    updateRadio(angleInput);
    updateText(angleInput);
});

// Add event listener to all radio buttons with the name "angle"
document.querySelectorAll('input[name="angle"]').forEach((radio) => {
    radio.addEventListener('change', (e) => {
        // Get the selected value
        let angleInput = e.target.value;

        if(angleInput > 180){
            updateSlider(180- angleInput);
        }else{
            updateSlider(angleInput);
        }
        updateText(angleInput);
    });
});