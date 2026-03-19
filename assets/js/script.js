
function isValidNumber(a) {
    if (!a && a != 0) {
        return 'Inserisci numeri valido'
    }
}
function areValidNumbers(a, b) {
    if (!a && a != 0 || !b && b != 0) {
        return `Inserisci numeri validi`
    }
}

// Es. 1
function checkFifty(a, b) {
    areValidNumbers(a, b)
    if (a === 50 || b === 50 || a + b === 50)
        return true
    return false
}
// console.log(checkFifty(parseInt(prompt("Inserisci primo numero")), parseInt(prompt("Inserisci secondo numero"))))

//Es. 2
function removeChar(string, index) {
    if (!string || !index || index < 0 || index >= string.length) {
        return "Stringa o indice non validi"
    }

    return string.slice(0, index) + string.slice(index + 1)
}
// console.log(removeChar(prompt('Inserisci una stringa'), parseInt(prompt('Inserisci un indice'))))

//Es. 3 
function checkRange(a, b) {
    areValidNumbers(a, b)
    if (a <= 60 && a >= 40 || b <= 60 && b >= 40 || a <= 100 && a >= 70 || b <= 100 && b >= 70)
        return true
    return false
}
// console.log(checkRange(parseInt(prompt('Inserisci primo numero')), parseInt(prompt('Inserisci secondo numero'))))
//Es. 4
function checkCityName(string) {
    if (!string)
        return "Stringa non valida"
    if (string.toLowerCase().startsWith("los") || string.toLowerCase().startsWith("new"))
        return string
    return false
}
// console.log(checkCityName(prompt('Inserisci una citta')))

//Es. 5
function sumArrayNumbers(arr) {
    let sum = 0
    arr.forEach(number => {
        sum += number
    });
    return sum
}

const arr = [10, 32, -29, 8.98, 3]
// console.log(sumArrayNumbers(arr))

//Es. 6
function checkOneOrThree(arr) {
    if (!arr.includes(1) && !arr.includes(3))
        return true
    return false
}
// console.log(checkOneOrThree(arr))
//Es. 7
function typeOfCorner(angle) {
    isValidNumber(angle)
    if (angle < 90)
        return "acuto"
    else if (angle <= 180 && angle >= 90) {
        switch (angle) {
            case 90:
                return "retto"
            case 180:
                return "piatto"
            default:
                return "ottuso"
        }
    } else {
        switch (angle) {
            case 360:
                return "giro"
            default:
                if (angle > 360 && (angle % 360) != 0) {
                    let giri = parseInt(angle / 360)
                    return {
                        type: typeOfCorner(angle - (360 * giri)),
                        rounds: giri,
                    }
                } else if (angle > 360 && (angle % 360) == 0) {
                    let giri = angle / 360
                    return {
                        type: typeOfCorner(angle - (360 * (giri - 1))),
                        rounds: giri,
                    }
                }
                return "concavo"
        }
    }
}
// console.log(typeOfCorner(180))

//Es. 8
function acronym(string) {
    if (!string)
        return ('Stringa non valida')

    let words = string.split(' ')
    let abbreviation = ''
    words.forEach(word => {
        abbreviation += word.charAt(0).toUpperCase()
    })
    return abbreviation
}
// console.log(acronym('Fabbrica italiana automobili torino'))

//Es. EXTRA 1
function mostUsedChar(string) {

    let arrCopy = string.replaceAll(" ", "").split('')
    let obj = {}

    arrCopy.forEach(letter => {
        if (!obj[letter]) {
            obj[letter] = (string.match(new RegExp(letter, "g")) || []).length
        }
    })

    let max = 0
    let maxChar = ''
    Object.keys(obj).forEach(key => {
        if (obj[key] > max) {
            max = obj[key]
            maxChar = key
        }
    })

    console.log(obj)
    return {
        count: max,
        char: maxChar,
    }
}

// console.log(mostUsedChar('Sono Leo'))


//Es. EXTRA 2
function anagram(str1, str2) {

    let string1 = str1.replaceAll(/[.,!;:\s]/g, "", '').toLowerCase().split('').sort().join("")
    let string2 = str2.replaceAll(/[.,!;:\s]/g, "", '').toLowerCase().split('').sort().join("")

    if (string1 === string2)
        return true
    return false
}

//Es. EXTRA 3
function anagramList(arr, str) {

    let sortedArr = []
    let sortedStr = str.replaceAll(/[.,!;:\s]/g, "", '').toLowerCase().split('').sort().join("")

    arr.forEach(element => {
        sortedArr.push(element.replaceAll(/[.,!;:\s]/g, "", '').toLowerCase().split('').sort().join(""))
    })

    let result = []

    sortedArr.forEach((element, index) => {
        if (sortedStr === element)
            result.push(arr[index])
    })
    return result
}

let anagrams = ['carenti', 'incerta', 'espatrio']
// console.log(anagramList(anagrams, "cartine"))
// console.log(anagram('Ripensato', 'pensatori'))


//Es. EXTRA 4
function isPalindrome(str) {
    str = str.toLowerCase().replaceAll(' ','')
    let copy = str.split('').reverse().join('')
    if(copy === str)
        return true
    return false
}

// console.log(isPalindrome('I topi non avevano nipoti'))

//Es. EXTRA 5
function reverseNumber(num){
    let str = String(num)
    str = str.split('').reverse().join('')
    return  Number(str)
}

// console.log(reverseNumber(891))

//Es. EXTRA 6
function stairs(x){
    if(!x || x <=0)
        return "Inserisci un numero valido"

    let str = ''

    for(let i=0; i<x; i++){
        str += 'x'
        console.log(str)
    }
}

// stairs(10)

//Es. EXTRA 7
function reverseString(str){
    return str.split('').reverse().join('')
}
// console.log(reverseString('Ciao'))

//Es. EXTRA 8
function matrix(arr, y){
    if(!y || y<=0 || y>arr.length)
        return 'Inserisci un numero valido'

    let mat = [] 

    for(let i=0; i< arr.length; i+=y){
        mat.push(arr.slice(i, i+y))
    }
    return mat
}

// console.log(matrix([1,2,3,4,5], 2))

//Es. EXTRA 8
function pyramid(x){
    if(!x || x<=0)
        return 'Inserisci un numero valido'

    let result = '#'
    for(let i=0; i<x;i++){
        if(!i==0)
            result += '##'
        console.log(result)
    }
}

// pyramid(10)

function spiralMatrix(x){
    if(!x || x<=0)
        return 'Inserisci dei numeri validi'
    
    let cols = x
    let rows = x
    let mat = []

    for(let i=0; i<rows; i++){
        mat[i]=[]
        for (let j=0; j<cols; j++){
            mat[i][j]=0
        }
    }

    let direction = 0
    
    

    return mat
}

console.log(spiralMatrix(3))