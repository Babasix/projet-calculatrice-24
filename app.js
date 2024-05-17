const screen = document.querySelector('#screen');
const btn = document.querySelectorAll('.btn');

let history = document.getElementById('history');
// création d'une fonction pour ajouter des données dans la zone d'historique
function calcul(v){
    para = document.createElement('p');
    data = v + " = " + eval(v);
    para.innerText = data;
    history.appendChild(para);
    return eval(v);
}

// utilisation de la boucle for pour obtenir la valeur du bouton
for(item of btn)
{
    item.addEventListener('click',(e)=>{
        btnText=e.target.innerText;
        screen.value+=btnText;
    });
}
// création des fonctions de notre calculatrice
function sin(){
    screen.value=Math.sin(screen.value);
}

function cos(){
    screen.value=Math.cos(screen.value);
}

function tan(){
    screen.value=Math.tan(screen.value);
}


 function pi(){
    screen.value= 3.14159265359;
}

//code pour backspace
function backspc(){
screen.value=screen.value.substr(0,screen.value.length-1);
}

