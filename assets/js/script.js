    function myFunction() {
           var element = document.getElementById("myDIV");
           element.classList.toggle("mystyle");
        }
        
    function calcular() {
        cantidad = document.querySelector("#cantidad");
        cantidad2 = document.querySelector("#cantidad2");
        cantidad3 = document.querySelector("#cantidad3");
        resultado = Number(cantidad.value)+Number(cantidad2.value)+Number(cantidad3.value);
    
        console.log(resultado)
     
        if (resultado>10){
            document.getElementById('res').innerHTML = "Llevas demasiados stickers!";
        } else{
            document.getElementById('res').innerHTML = "Llevas "+resultado+ " stickers";
        }
    
    }




    function Validar() {
        var x = document.getElementById("mySelect").value;
        var y = document.getElementById("mySelect2").value;
        var z = document.getElementById("mySelect3").value;
        var pass = x+y+z;
  // console.log(pass)
  
  if(pass=="911")
  {
      document.getElementById("demo").innerHTML = "PASSWORD 1 CORRECTA";
      document.getElementById('demo').className='neon1';
  }else if (pass=="714"){
      document.getElementById("demo").innerHTML = "PASSWORD 2 CORRECTA";
      document.getElementById('demo').className='neon1';
  }else {
    
      document.getElementById("demo").innerHTML = "PASSWORD INCORRECTA";
      document.getElementById('demo').className='neon2';
      
  }
  
      }

function iconColor()
{ var element = document.getElementById("icon1");
           element.classList.toggle("fa1");
}
function iconColor2()
{var element = document.getElementById("icon2");
           element.classList.toggle("fa2");  
}
function iconColor3()
{ var element = document.getElementById("icon3");
           element.classList.toggle("fa1");
}
function iconColor4()
{var element = document.getElementById("icon4");
           element.classList.toggle("fa2");  
}
function iconColor5()
{ var element = document.getElementById("icon5");
           element.classList.toggle("fa1");
}
function iconColor6()
{var element = document.getElementById("icon6");
           element.classList.toggle("fa2");  
}

function icontop1()
{var element = document.getElementById("icontop1");
           element.classList.toggle("fa2");  
}
   