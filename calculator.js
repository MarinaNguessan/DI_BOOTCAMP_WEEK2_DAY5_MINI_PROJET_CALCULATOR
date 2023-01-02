// // Fonction pour ajouter un nombre ou un point décimal à l'écran de la calculatrice
// function number(num) {
//     // Récupération de la valeur actuelle affichée sur l'écran de la calculatrice
//     let displayValue = document.getElementById('display').value;
//     // Ajout du nouveau chiffre ou du point décimal à la fin de la valeur affichée
//     document.getElementById('display').value = displayValue + num;
// }

//   // Fonction pour ajouter un opérateur à l'écran de la calculatrice
// function operator(op) {
//     // Récupération de la valeur actuelle affichée sur l'écran de la calculatrice
//     let displayValue = document.getElementById('display').value;
//     // Ajout de l'opérateur à la fin de la valeur affichée
//     document.getElementById('display').value = displayValue + op;
// }

//   // Fonction pour effectuer le calcul et afficher le résultat sur l'écran de la calculatrice
// function equal() {}

/**
 * @author : N'GUESSAN MARINA
 * @description :  cocneption d'une calculatrice qui n'a pas de fonction secondaire
 * @param : operator : function
 * @param : number  : function
 * @param : equal : function
 * @returns :
 * - number : cette fonction permet d'ajouter les chiffres
 * - operator  : cette fonction permet d'ajouter un operateur à notre équation
 * - equal : cette fonction permet de calculer notre équation grâce à la méthode eval et affichera notre resultat
 *** BONUS: AJOUTER LE BOUTON CLEAR(POUR EFFACER UN CHIFFRE SAISI A L'ECRAN)
 *  ET RESET(POUR LA MISE A ZERO) *
 *
 * @param: reset : function
 *@param: clear : function
 *@returns:
 *- resert : cette fonction permet de faire une mise à zero en netoyant tout l'écran
 *-clear : cette fonction permet de netoyer l'écran mais en supprimant un élement par élement
 */



let display = document.getElementById('display');
let equation = "";

function number(num) {
    equation += num;
    display.textContent = equation;
}

function operator(op) {
    equation += op;
    display.textContent = equation;
}

function equal() {
    let result = eval(equation);
    display.textContent = result;
    equation ="";
}


// bonus

function reset() {
    equation = "";
    display.textContent = "0";
}

function clear() {
    equation = equation.slice(0, -1);
    display.textContent = equation;
}

function clear() {
    let input = input.slice(0, -1);
    display.value = input;
}
