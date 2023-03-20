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
// function factoriel_de_10() {
//     let result = 1
//     for (let i = 1; i < 10; i++) {
//         result += result * i
//     }
//     return result
// }
// console.log(factoriel_de_10());

// exo 8 

// function paire_de_10_a_30() {
//     let result = 0
//     for (let i = 10; i <= 30; i += 2) {
//         result += i
//     }
//     return result
// }

// console.log(paire_de_10_a_30());



// exo 10
// let arr_ex = [0, 1, 0, 1, 5, 0, 5, 445, 8]
// function somme_arr(arr) {
//     let somme = 0
//     for (let i = 0; i < arr.length; i++) {
//         somme += arr[i]
//     }
//     return somme
// }

// console.log(somme_arr(arr_ex));


// exo 9 
// let temp_cesius = 154
// function temp_fahr(temp) {
//     let temp_final = 32 + (temp * 1.8)
//     return temp_final
// }
// console.log(temp_fahr(temp_cesius));



// exo 11
// let array_test = [5, 9, 7, 4, 5, 63, 4, 8, 89, 5]
// function moyenne(arr) {
//     let total = 0
//     for (let i = 0; i < arr.length; i++) {
//         total += arr[i]
//     }
//     return total / arr.length
// }

// console.log(moyenne(array_test));


// exo 12


// let arr_test = [-5, 5, -6, 89, 9, 8, -45, -555, 23]
// function num_positif(arr) {
//     let arr_temp = []
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] >= 0) {
//             arr_temp.push(arr[i])
//         }
//     }
//     return arr_temp
// }

// console.log(num_positif(arr_test));


// exo 13 
// let arr_test = [12, 56, 45, 789, 56, 45, 23, 56, 564, 23, 46, 56, 613]
// function max(arr) {
//     let num_max = 0
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > num_max) {
//             num_max = arr[i]
//         }
//     }
//     return num_max
// }

// console.log(max(arr_test));

// exo 14

// function fibonacci() {
//     let num_temp = 1
//     let num_temp2 = 0
//     let final_num = 0
//     for (let i = 0; i <= 10; i++) {
//         final_num += num_temp2


//         num_temp2 = num_temp
//         num_temp = final_num
//         console.log(final_num);
//     }
//     return final_num
// }
// console.log(fibonacci());



// exo 15

let num = 1235496
function somme_des_chiffres(num) {
    let num_string = `${num}`
    let total = 0
    for (let i = 0; i < num_string.length; i++) {
        total += parseInt(num_string[i])
    }
    return total
}

console.log(somme_des_chiffres(num));



