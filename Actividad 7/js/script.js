function Comprobar() {
  let numero1;
  numero1 = parseInt(document.getElementById("numero1").value);
  if(numero1>=0 && numero1<=10) {
      if(numero1>=5) {
           document.getElementById("solucion").innerHTML = "Aprobado";
      }
      else{
        document.getElementById("solucion").innerHTML = "Suspenso";
      }
    
    

  }
  else {
    document.getElementById("solucion").innerHTML = "Nota invalida";
  }
}
