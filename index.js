const fetchAPIurl = 'https://the-trivia-api.com/api/questions'


fetch(fetchAPIurl)
.then(r=>r.json())
.then(cards => renderCards(cards))

const catContainer = document.querySelector("body > div")
const ansContainer = document.querySelector("body > div:nth-child(2)")
const cardQuestion = document.querySelector("body > div:nth-child(3)")

function renderCards(cards){
    for(i=0;i<cards.length;i++){
        
        //categories: into a dropdown 
        let categories = (cards[i]["category"])
        let catAnchors = document.createElement('a')
        catAnchors.textContent = categories
        catContainer.append(catAnchors)

        //answers: correct answers onto buttons 
        let correctAnswers = (cards[i]["correctAnswer"])
        let buttonCorrect = document.createElement('button')
        buttonCorrect.id = 'correct'
        buttonCorrect.classList.add('button')
        buttonCorrect.textContent = correctAnswers
        ansContainer.append(buttonCorrect)
        
        //questions: h2 on card
        let questions = (cards[i]["question"])
        let questionH2 = document.createElement('h2')
        cardQuestion.append(questions)
        
        //difficulty 
        let difficulty = (cards[i]["difficulty"])
        let difficultyLi = document.createElement('li')
        console.log(difficulty)

        // console.log(cards[i]["question"])
//wrong answers only!
        // for(j=0; j<incorrectAnswers.length; j++){
        //     let incorrectAnswers = (cards[i]["incorrectAnswers"][j])
        //     console.log(incorrectAnswers)
        // }
    }
}

// const testBtnDiv = document.createElement('div')


// const testBtn = document.createElement('button')
// button.addEventListener('click', (e)=>{
//     if(e>3){
//         alert(`Phone a friend: `)
    
// })



