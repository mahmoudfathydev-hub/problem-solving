// Complementary DNA

// Deoxyribonucleic acid (DNA) is a chemical found
// in the nucleus of cells and carries the "instructions" 
// for the development and functioning of living organisms.

// In DNA strings, symbols "A" and "T" are complements of 
// each other, as "C" and "G". Your function receives one 
// side of the DNA (string, except for Haskell); you need 
// to return the other complementary side. DNA strand is 
// never empty or there is no DNA at all (again, except for Haskell).

// Example: (input --> output)

// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"

function dnaStrand(dna) {
    let arr = dna.split("")
    for (let i = 0; i < arr.length; i++) {
        switch (arr[i]) {
            case "A":
                arr[i] = "T"
                break;
            case "T":
                arr[i] = "A"
                break;
            case "C":
                arr[i] = "G"
                break;
            case "G":
                arr[i] = "C"
                break;
        }
    }
    return arr.join("")
}