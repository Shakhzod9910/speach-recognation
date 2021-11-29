form.addEventListener('submit', function(evt){
    evt.preventDefault();
})

function longestWord (text){
    let splitted = text.split(' ')
    let longest = '';
    for( let word of splitted){
        if(word.length >= longest.length){
        longest = word && longest + word
        }
        return longest
}
}
console.log(longestWord('men sen men'))



function calculate (numbers){
    let result = 0;
    for( let number of numbers){
        if(number > 0){
            result = result + number
        }
        
    }
    return result;
}

console.log(calculate([1,2,3,4,5]))

// SpeechRecognation


let rec = new webkitSpeechRecognition();
rec.lang = 'uz-UZ'

rec.start();
rec.onerror = function(xato){
    console.log(xato,'error')
}



rec.onend = function(){
    console.log('tugadi')
}


rec.onresult = function(evt){
    let command = evt.results[0][0].transcript
    console.log(command)
    if(command === 'salom'){
        answer.textContent = 'Valekum Assalom'
    }else if(command === 'qalaysan' || command === 'yaxshimisan'){
        answer.textContent = 'Yaxshi raxmat'
    }else if(command === 'nima gap' || command === 'tinchmisan'){
        answer.textContent = 'Tinch'
    }else if(command === 'qizil'){
        answer.textContent = 'Qizil'
        answer.style.color ="red"
    }else if(command === 'yashil'){
        answer.textContent = 'Yashil'
        answer.style.color ="green"
    }else if(command === 'malla'){
        answer.textContent = 'Malla'
        answer.style.color ="brown"
    }else if(command === "ko'k"){
        answer.textContent = "ko'k"
        answer.style.color ="blue"
    }else if(command === 'sariq'){
        answer.textContent = 'Sariq'
        answer.style.color ="yellow"
    }else if(command === 'qora'){
        answer.textContent = 'Qora'
        answer.style.color ="black"
    }else if(command === 'isming nima'){
        answer.textContent = 'Jarvis'
        answer.style.color ="blue"
    }else{
        answer.textContent = 'Boshqa gap ayting'
    }

}

console.log(rec)
let date = new Date()
let year = date.getFullYear()
let month = date.getMonth()+1
let day = date.getDate()
// console.log(date.getDay())

console.log(day + '.' + month + '.' + year)





let ElList = document.querySelector('.list')
let product = [
    {tip: 'shirt',colled: 'jeans', price: 300},
    {tip: 'shoose',colled:'skeen', price: 500}
]
for( let i = 0; i<product.length; i++ ){
    let items = document.createElement('li');
    items.textContent = product[i].tip; console.log(i)
    ElList.appendChild(items);
    console.log(i)
}

console.log(product.length)