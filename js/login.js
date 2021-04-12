//function validate(){

    //var emailField = document.getElementById("inputEmail4").value;
    //var inputtxt = document.getElementById("phoneno").value;
    var emailerr = document.getElementById("emailerror");
    var phonenoerr = document.getElementById("phonenoerror");
    //var result = validateEmail(emailField)
    var result1;
    var result2;

    function validateEmail(emailField){
        //var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        var reg = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
        if (reg.test(emailField.value) == false) 
        {
            //alert('Invalid Email Address');
            emailerr.innerHTML = "Invalid";
            emailerr.style.color = "Red";
            result1 = false;
            return false;
        }
        emailerr.innerHTML = "Valid";
        emailerr.style.color = "Green";
        result1 = true;
        return true;

    }


    function phonenumber(inputtxt)
    {
      
      var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
      if(inputtxt.value.match(phoneno))
         {
            phonenoerr.innerHTML = "Valid";
            phonenoerr.style.color = "Green";
            result2 = true;
           return true;      
         }
       else
         {
           //alert("Not a valid Phone Number");
           phonenoerr.innerHTML = "Invalid";
           phonenoerr.style.color = "Red";
           result2 = false;
           return false;
         }
    }
//}

function validate(){ 
  var fresult = result1 && result2;
  return fresult;
}











