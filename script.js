const cases = document.querySelectorAll(`.case`);
console.log(cases)

// ca fait un tableau 
// je definis le tour par tour cad quand c'est pair c'est un rond et quand
// c'est impair une croix 

let i=0;
function tour(){
    i++;
    let a
    if(i%2==0){
        a='O'
    }
    else {
        a='X'
    }
    return a
}
// la case dans laquelle on va cliquer retournera un un O ou X selon le tour 
function jouer(){
    if(!this.innerHTML) {
        this.innerHTML=tour()
    }
    gagner();
}
// permet d'executer une fonction donné sur chaque element du tableau 
cases.forEach(element => element.addEventListener(`click`,jouer));

// opn peut rejouer par dessus on modifie la fonction jouer avec le if 

// on peut s'attaquer a la logique du jeu 
function gagner(){
    if(cases[0].innerHTML !== `` && cases[0].innerHTML==cases[1].innerHTML && cases[1].innerHTML==cases[2].innerHTML){
        afficherGagant(cases[0].innerHTML)
    }
    if(cases[3].innerHTML !== `` && cases[3].innerHTML==cases[4].innerHTML && cases[4].innerHTML==cases[5].innerHTML){
        afficherGagant(cases[3].innerHTML)
    }
    if(cases[6].innerHTML !== `` && cases[6].innerHTML==cases[7].innerHTML && cases[7].innerHTML==cases[8].innerHTML){
        afficherGagant(cases[6].innerHTML)
    }
    if(cases[0].innerHTML !== `` && cases[0].innerHTML==cases[4].innerHTML && cases[4].innerHTML==cases[8].innerHTML){
        afficherGagant(cases[0].innerHTML)
    }
    if(cases[2].innerHTML !== `` && cases[2].innerHTML==cases[4].innerHTML && cases[4].innerHTML==cases[6].innerHTML){
        afficherGagant(cases[2].innerHTML)
    }
    if(cases[0].innerHTML !== `` && cases[0].innerHTML==cases[3].innerHTML && cases[3].innerHTML==cases[6].innerHTML){
        afficherGagant(cases[0].innerHTML)
    }
    if(cases[1].innerHTML !== `` && cases[1].innerHTML==cases[4].innerHTML && cases[4].innerHTML==cases[7].innerHTML){
        afficherGagant(cases[1].innerHTML)
    }
    if(cases[2].innerHTML !== `` && cases[2].innerHTML==cases[5].innerHTML && cases[5].innerHTML==cases[8].innerHTML){
        afficherGagant(cases[2].innerHTML)
    }


    
}

// efface une fois que qqlun a gagné
// affiche quand ca remplie les conditions d'en haut 
function afficherGagant(gagnant){
    alert(`le joueur le plus fort qui joue le ${gagnant} a gagné!`);
    cases.forEach(element=>element.innerHTML=``)    
}
