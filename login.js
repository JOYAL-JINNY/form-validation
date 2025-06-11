const user= document.getElementById("user").value;
const email= document.getElementById("email");
        function valid()
        {
            var password= document.getElementById("password").value;
            var password2= document.getElementById("password2").value;
            if(password == password2)
            {
                true;  
            }
            else{
                alert("check you password");
                return false;
            }
        }