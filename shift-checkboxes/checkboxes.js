const checkboxes = document.querySelectorAll('input[type="checkbox"]');
let lastChecked;

function handleCheck(e) {
    // Check if they had the shift key down
    // AND check that they are checking it
    //the inBetween var to know if the input is between the lastChecked and the current one
    let inBetween = false;
    //the this.checked is to make sure it is the event when checked it and not unchecked it
    if(e.shiftKey && this.checked) {
        // loop over every single checkbox
        checkboxes.forEach(box => {

            if(box === this || box === lastChecked) {
             inBetween = !inBetween;
             //starting to check them in between
             
            }

            if(inBetween) {
                box.checked = true;
            }
        });
    }

    lastChecked = this;
    
}

checkboxes.forEach(box => box.addEventListener('click', handleCheck));