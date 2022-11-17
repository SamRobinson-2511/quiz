const mainCard = document.querySelector("#main-card")
const fetchAPIurl = 'https://the-trivia-api.com/api/questions'
const questionText = document.querySelector("#question")




//buttons 



function handleFetch() {
fetch(fetchAPIurl)
.then(r=>r.json())
.then(cards => renderCards(cards))
}

handleFetch()



// const catContainer = document.querySelector("body > div")
// const ansContainer = document.querySelector("body > div:nth-child(2)")
// const cardQuestion = document.querySelector("body > div:nth-child(3)")

function renderCards(cards){
    // console.log(cards)
    for(let i=0;i<cards.length;i++){
        
        
        //create header for difficulty 
        let difficulty = (cards[i]["difficulty"])
        let difficultyLi = document.createElement('li')
        

        //create filter for categories
        // let categories = (cards[i]["category"])
        // let catAnchors = document.createElement('a')
        // catAnchors.textContent = categories
        // catContainer.append(catAnchors)

         //questions: h2 on card
         let questions = (cards[i]["question"])
         questionText.textContent = questions

        //answers: correct answers onto buttons 
        let correctAnswers = (cards[i]["correctAnswer"])
        let buttonCorrect = document.createElement('buttons')
        buttonCorrect.id = 'correct'
        buttonCorrect.classList.add('btn', 'correct-chosen', 's-btn')
        buttonCorrect.textContent = correctAnswers
        
        // Incorrect answers
        let incorrectAnswers = (cards[i]["incorrectAnswers"])
        for(let j=0;j<incorrectAnswers.length;j++){
            let incorrectAnswer = incorrectAnswers[j] 
            // console.log(incorrectAnswer)
            
            buttonWrong.id = 'wrong'
            buttonWrong.classList.add('btn', 'incorrectChosen')
            buttonWrong.textContent = incorrectAnswer
            // mainCard.append(buttonWrong)

            buttonWrong.addEventListener('submit', ()=> {
                switch()
                


            })

            //next button to increment cards
            

        }
    }
}





// next button to increment cards





// const btn1 = document.querySelector("#btn1")
// const btn2 = document.querySelector("#btn2")
// const btn3 = document.querySelector("#btn3")
// const btn4 = document.querySelector("#btn4")


