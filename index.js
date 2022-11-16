const fetchAPIurl = 'https://the-trivia-api.com/api/questions'


fetch(fetchAPIurl)
.then(r=>r.json())
.then(cards => renderCards(cards))

const catContainer = document.querySelector("body > div")
const ansContainer = document.querySelector("body > div:nth-child(2)")
const cardQuestion = document.querySelector("body > div:nth-child(3)")

function renderCards(cards){
    console.log(cards)
    for(i=0;i<cards.length;i++){
        let div = document.createElement("div")
        div.id = 'questionCard'

        
        
        //categories: into a dropdown 
        let categories = (cards[i]["category"])
        let catAnchors = document.createElement('a')
        catAnchors.textContent = categories
        catContainer.append(catAnchors)

         //questions: h2 on card
         let questions = (cards[i]["question"])
         let questionH2 = document.createElement('h2')
         div.append(questions)

        //answers: correct answers onto buttons 
        let correctAnswers = (cards[i]["correctAnswer"])
        let buttonCorrect = document.createElement('button')
        buttonCorrect.id = 'correct'
        buttonCorrect.classList.add('button')
        buttonCorrect.textContent = correctAnswers
        div.append(buttonCorrect)
        
        buttonCorrect.addEventListener ('click', function() {
            buttonCorrect.classList.add('correctChosen')
        })
        
        //difficulty 
        let difficulty = (cards[i]["difficulty"])
        let difficultyLi = document.createElement('li')
        console.log(difficulty)
        
        // Incorrect answers
        let incorrectAnswers = (cards[i]["incorrectAnswers"])
        for(j=0;j<incorrectAnswers.length;j++){
            let incorrectAnswer = incorrectAnswers[j] 
            console.log(incorrectAnswer)
            let buttonWrong = document.createElement('button')
            buttonWrong.id = 'wrong'
            buttonWrong.classList.add('button')
            buttonWrong.textContent = incorrectAnswer
            div.append(buttonWrong)

            buttonWrong.addEventListener('click', function() {
                buttonWrong.classList.add('incorrectChosen')
            })
        }
        console.log(incorrectAnswers.length)
        catContainer.append(div)
    }
  
}




// const testBtnDiv = document.createElement('div')


// const testBtn = document.createElement('button')
// button.addEventListener('click', (e)=>{
//     if(e>3){
//         alert(`Phone a friend: `)
    
// })



//should we add a timer for the button to return to the previous color?