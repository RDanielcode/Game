import './assets/style.css'


const rabbit1 = document.getElementById('rabbit1')
const rabbit2 = document.getElementById('rabbit2')
const rabbit4 = document.getElementById('rabbit3')
const rabbit6 = document.getElementById('rabbit4')

const layer1 = document.querySelector('.layer-1')
const layer2 = document.querySelector('.layer-2')
const layer4 = document.querySelector('.layer-4')
const layer6 = document.querySelector('.layer-6')

const result = document.querySelector('.result')
const result2 = document.querySelector('.result2')

let number = 0

rabbit1.onclick = () => {
  if(rabbit1.checked) layer1.classList.add('hide')
  number++
  console.log(number)
  setTimeout(()=> {
    showResult()
  }, 1000)
  if(number === 4) {
    setTimeout(()=> {
      finish()
    }, 2000)
  }
}

rabbit2.onclick = () => {
  if(rabbit2.checked) layer2.classList.add('hide')
  number++
  console.log(number)
  setTimeout(()=> {
    showResult()
  }, 1000)
  if(number === 4) {
    setTimeout(()=> {
      finish()
    }, 2000)
  }
}

rabbit6.onclick = () => {
  if(rabbit6.checked) layer6.classList.add('hide')
  number++
  console.log(number)
  setTimeout(()=> {
    showResult()
  }, 1000)
  if(number === 4) {
    setTimeout(()=> {
      finish()
    }, 2000)
  }
}

rabbit4.onclick = () => {
  if(rabbit4.checked) layer4.classList.add('hide')
  number++
  console.log(number)
  setTimeout(()=> {
    showResult()
  }, 1000)
  if(number === 4) {
    setTimeout(()=> {
      finish()
    }, 2000)
  }
}

const showResult = () => {
  result.classList.add('show')
  setTimeout(()=>{
    result.classList.remove('show')
  }, 1000)
}

const finish = () =>{
  result2.classList.add('show')
}




