
const winnerElm = document.querySelector('.winare ')
const wnningScor = document.querySelector('.winning-score')
const p1Scor = document.querySelector('.p1')
const p2Scor = document.querySelector('.p2')
const formElm = document.querySelector('form')
const input = document.querySelector('input')
const submit = document.querySelector('.submit')
const resetElm = document.querySelector('.reset')
const btnP1 = document.querySelector('.btnP1')
const btnP2 = document.querySelector('.btnP2')






//inpiut  Data 
function formInputData() {
    formElm.addEventListener('submit', (evt) => {
        evt.preventDefault()
        
        let inputValue = Number(input.value)
        
        if (inputValue < 1) {
            alert('pless enter a posetive number')

        }
        wnningScor.textContent=inputValue
        
    
    })
}
formInputData()

//button handeling
function btnClick() {
    
    btnP1.addEventListener('click', (evn) => {
        btnP1.setAttribute('disabled','disabled')
        btnP2.removeAttribute('disabled','disabled')
        
    })
    btnP2.addEventListener('click', (evn) => {
        btnP2.setAttribute('disabled','disabled')
        btnP1.removeAttribute('disabled','disabled')
        
    })
}

btnClick()



//plyare scor handeling
function playrData() {
    let p1 = 0
    let p2 = 0
    btnP1.addEventListener('click', (evt) => {
        // console.log(wnningScor.textContent)
        if (p1 == wnningScor.textContent) {
            winnerElm.textContent = 'Playre1 is Winner'
            btnP1.setAttribute('disabled', 'disabled')
            btnP2.setAttribute('disabled','disabled')
            
        } 
        p1++
        p1Scor.textContent = p1
        
    })
    btnP2.addEventListener('click', (evt) => {
        if (p2 == wnningScor.textContent) {
            winnerElm.textContent = 'Playre2 is Winner'
            btnP1.setAttribute('disabled', 'disabled')
            btnP2.setAttribute('disabled', 'disabled')
          
        } 

        p2++
        p2Scor.textContent = p2
    })
    
}
playrData()

//winning scor rendom given
// function rendomNum() {
//     const winnrArr = [1,2, 3,4,5,6,7,8]
//     const renNum = Math.floor(Math.random() * winnrArr.length)
//     const winScor = winnrArr[renNum]
//     return wnningScor = winScor
// }
// rendomNum()



//reset seting
function resetData() {

    resetElm.addEventListener('click', (evn) => {
        p1 = ''
        p2 = ''
        wnningScor.textContent = '0'
        winnerElm.textContent = '0'
        p1Scor.textContent = '0'
        p2Scor.textContent = '0'
        btnP1.removeAttribute('disabled', 'disabled')
        btnP2.removeAttribute('disabled','disabled')

    })
}

resetData()

