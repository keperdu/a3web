//JavaScript
//Owner:Kedie
//https://www.w3schools.com/js/js_validation.asp

function validate(){
    var name = document.getElementById("name").value;
    var program = document.getElementById("program").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var Courses = document.getElementById("Courses").value;
    var Level = document.getElementById("Level").value;
    var error_message = document.getElementById("error_message");
    
    error_message.style.padding = "10px";
    
    var text;
    if(name.length < 5){
      text = "Please Enter Your Name";
      error_message.innerHTML = text;
      return false;
    }
    if(program.length < 10){
      text = "Please Enter Program of Study";
      error_message.innerHTML = text;
      return false;
    }
    if(isNaN(phone) || phone.length != 10){
      text = "Please Enter a valid Phone Number";
      error_message.innerHTML = text;
      return false;
    }
    if(email.indexOf("@") == -1 || email.length < 6){
      text = "Please Enter valid Email";
      error_message.innerHTML = text;
      return false;
    }
    if(course.length <= 140){
      text = "Please Enter courses";
      error_message.innerHTML = text;
      return false;
    }
    alert("Form Submitted Successfully!");
    return true;
  }
//Kedie  