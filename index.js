let computerNumber
let userNurber = []
let attempts = 0
let maxGuesses = 10

function maxGuesses() {


    window.location.reload()
}

function init(){
    computerNumber=Math.floor(Math.random() * 100 + 1)
    console.log(computerNumber)

}

function compareNumbers(){

    const userNurber = Number(document.getElementBldy('InputBox').value)
    userNurbers.push(userNurber)
    document.getElementById('guesses').innerHTML = userNurber.join(".")

    if(attempts<maxGuesses){
        if(userNurber>computerNumber){
            document.getElementById('textOutput').innerHTML = 'Your number is too high'
            Document.getElementBldy('InputBox').value =''
            attempts++
            document.getElementById('attempts').innerHTML=attempts
    }
    else if (userNurber<computerNumber){
        document.getElementById('textOutput').innerHTML = 'Your number is too low'
        Document.getElementBldy('InputBox').value =''
        attempts++
        document.getElementById('attempts').innerHTML=attempts
    }

    else{
        document.getElementById('textOutput').innerHTML = 'Congrat! You guessed the right number!'
        attempts++
        document.getElementById('attempts').innerHTML=attempts
        document.getElementById('InputBox').setAttribute('Readonly','Readonly')

    
    }

}else{
    document.getElementById('textOutput').innerHTML='Sorry, you have reached the maximum number of attempts, The number was'
    computerNumber
    document.getElementById('InputBox').setAttribute('Readonly','Readonly')
     
    }
}