export const validatePhone = (phone) => /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/.test(phone)

export const validateEmail = (email) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)

export const shuffle = (array) => {
    var m = array.length, t, i;
    while(m) {
        i = Math.floor(Math.random()*m--)
        t = array[m]
        array[m] = array[i]
        array[i] = t
    }
    return array
}

export function encrypt(text) {
    var year = new Date().getFullYear()
    var key = Math.floor((text.charCodeAt(0)*text.charCodeAt(1)+16)/year)
    var text = shuffle(text.split("").map((e, i) => (e.charCodeAt(0)+key).toString().padStart(3, "0")+(i+key).toString().padStart(2, "0"))).join("")
    year = year.toString().split("").map((e, i) => (i===0)?e.charCodeAt(0)-key:e.charCodeAt(0)+key).join("")
    text += ":"+year+key.toString()+"-"+key.toString().length
    return text
}

export function decrypt(token) {
    var tokens = token.split("-")
    var keyLength = Number(tokens[tokens.length-1])
    var mainTokens = tokens[0].split(":")
    console.log(mainTokens)
    var temp = mainTokens[1].split("").reverse()
    var key = 0
    var i = 0
    while(i<keyLength) {
        key += Number(temp.splice(0, 1))*(10**i)
        i++
    }
    key = Number(key)
    var keys = []
    var temp1 = mainTokens[0].split("")
    for(var i=0; i<mainTokens[0].length/5; i++) {
        temp = []
        for(var k=0; k<5; k++) {
            temp.push(temp1.splice(0, 1)[0])
        }
        keys.push(temp)
    }
    var values = Array(keys.length).fill("")
    keys.forEach(k => {
        var ascii = 0
        var index = 0
        i = 3
        while(i--) {
            ascii += (+(k.splice(0, 1)[0]))*(10**i)
        }
        i = 2
        while(i--) {
            index += (+(k.splice(0, 1)[0]))*(10**i)
        }
        values[index-key] = String.fromCharCode(ascii-key)
    })
    return values.join("")
}