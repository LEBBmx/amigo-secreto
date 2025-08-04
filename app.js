// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmig=[];
let contadorAmigos=0;
limpiar();
function agregarAmigo(){
   let NuevoAmigo= document.querySelector('input').value;
   verificaNombre(NuevoAmigo);
    }

   function sortearAmigo(){
   if (contadorAmigos==0){alert("Favor de introducir al menos un nombre");}
   else { if (contadorAmigos==-1) {alert("Tu amigo secreto ya ha sido revelado"); }
          else {
                let elegido = Math.floor(Math.random()*contadorAmigos+1);  
                Imprimir('#resultado',"Tu amigo secreto es "+listaAmig[elegido-1]);
                contadorAmigos=-1;
               }
        }   
   }
  
 function limpiar() {document.querySelector('input').value=""}

 function verificaNombre(entrada) {
    if (contadorAmigos==-1) {alert("Favor de reiniciar el juego"); }
    else{ if (!entrada.length){ alert("Favor de introducir un nombre válido"); }
          else { 
            listaAmig.push(entrada);
            contadorAmigos++;
            limpiar();
            Imprimir('#listaAmigos',listaAmig.join('<br>'));
              }
          }
      }
 function Imprimir(ele,tex){
let titulo = document.querySelector(ele);
titulo.innerHTML=tex;
}