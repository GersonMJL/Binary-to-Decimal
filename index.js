function getInputValue(){

    //Getting ID of button, input value and error message
    var str = document.getElementById("input").value;
    var feedback = document.getElementById("error");

    //Creating filter to only accept binary
    var strTest = /[0-1]/.test(str);
    var checkLetters = /[\sa-z2-9!@#\$%\^\&*\)\(+=._-]+$/i.test(str);

    //Checking if input is binary
    if(strTest == true && checkLetters == false) {

        //Creating reverse index for the formula
        var j = str.length-1;

        //Declaring var result (not sure if it is needed)
        var result = 0;

        //Looping through all input values and applying the conversion formula 
        for (let i = 0; i < str.length; i++) {
            let char = str.charAt(i);
            result += char*(2**j);
            if (j >= 0) {
                j--;
            }
        }
        feedback.innerHTML = result;
        feedback.style.display = "inherit";
    } else {
        feedback.style.display = "inherit";
    }
}