// exo 1 

// function UnaDix() {

//     let num = ""
//     for (let i = 1; i <= 10; i++) {
//         num += i
//         console.log(num);
//     }
//     return "end of the function"
// }
// console.log(UnaDix());

//exo 2

// function UnaDix() {

//     let num = ""
//     for (let i = 1; i <= 10; i++) {
//         num += i + " "
//         console.log(num);
//     }
// return "end of the function"
// }
// console.log(UnaDix());


// exo 3 

// function impaires() {
//     let num_impaires = ""
//     for (let i = 1; i < 100; i += 2) {
//         num_impaires += i + " "
//         console.log(num_impaires);
//     }
// return "end of the function"
// }
// console.log(impaires());


//exo 4 

// function table_de_multiplication_de_7() {
//     let table_de_7 = ""
//     for (let i = 1; i <= 10; i++) {
//         table_de_7 += i * 7 + " "
//     }
//     console.log(table_de_7);
//     return "end of the function"
// }
// console.log(table_de_multiplication_de_7());


// exo 5

// function multiplication() {
//     for (let i = 1; i <= 10; i++) {
//         let table_1_a_10 = ""
//         for (let j = 1; j <= 10; j++) {
//             table_1_a_10 += i * j + " "
//         }
//         console.log(table_1_a_10);
//     }
//     return "end of the function"
// }

// console.log(multiplication());


// exo 6

// function somme_1_a_10() {
//     let somme = 0
//     for (let i = 1; i <= 10; i++) {
//         somme += i
//         console.log(somme);
//     }
//     return somme
// }
// console.log(somme_1_a_10());



// exo 7

// function factoriel_de_10() {
//     let result = 0
//     let calcul = ""
//     for (let i = 1; i <= 10; i++) {
//         calcul += i + "*"
//     }
//     calcul = calcul.substring(0, calcul.length - 1)
//     return eval(calcul)
// }
// console.log(factoriel_de_10());


// exo 7 correction
function factoriel_de_10() {
    let result = 1
    for (let i = 1; i < 10; i++) {
        result += result * i
    }
    return result
}
console.log(factoriel_de_10());