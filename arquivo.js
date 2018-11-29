    
        function calcular(){
  
          var valor1 = document.getElementById("valor1").value;
          var valor2 = document.getElementById("valor2").value;
          var sinal = document.getElementById("sinal").value;
          var resultado;
  
          if(sinal=="+") resultado = parseInt(valor1) + parseInt(valor2);
          if(sinal=="-") resultado = parseInt(valor1) - parseInt(valor2);
          if(sinal=="*") resultado = parseInt(valor1) * parseInt(valor2);
          if(sinal=="/") resultado = parseInt(valor1) / parseInt(valor2);
  
          document.getElementById("resultado").innerHTML = resultado;
  
        }