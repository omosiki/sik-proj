const contain = document.getElementById('container')
const colors = [ '#aeffac','#65422', 'feeee','#654114', '#098652', '#204528','#eac245','#648294','#4ea468','#456','eaf03c','#777', '#00ffff','#7ff00']
const SQURE = 5
function getRandomColor(){
    return colors[Math.floor(Math.random() * colors.length)]
}
function setColor(element){
    const color = getRandomColor()
    element.style.background = color
}
function removeColor(element){
    element.style.background ='ididid'
    // element.style.boxShadow =  '00 2px #684eaf'
}
for (let i = 0; i < SQURE; i++){
    const create = document.createElement('div')
    create.classList.add('square')
    create.addEventListener('mouseover', () =>{
        setColor(create)
    })
    create.addEventListener('mouseover', () =>{
        removeColor(create)
    })
    contain.appendChild(create)
}

