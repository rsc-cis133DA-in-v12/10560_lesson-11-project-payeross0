/* 
    Author: Payeton Ross
    Course: CIS133DA 10560
    Lesson: 11
*/

// This statement lets end user know the last modified date was.
document.getElementById("lastModified").innerHTML = document.lastModified

// This function will display an alert to the end user. 
function formSubmit() {
    alert('Your form has been submitted.')
}

// This function makes an element visible to the end user.
function formReset() {
    document.getElementById("resetMessage").style.visibility = "visible";
}