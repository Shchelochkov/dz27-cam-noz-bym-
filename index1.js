
let but1 = document.getElementById('but1')
let but2 = document.getElementById('but2')
let but3 = document.getElementById('but3')

let out = document.getElementById('out')
let out1 = document.getElementById('out1')
let out2 = document.getElementById('out2')
let out3 = document.getElementById('out3')

but1.onclick = function(){
    human = 'f'
    humturn('огонь')
}
but2.onclick = function(){
    human = 'w'
    humturn('вода')
}
but3.onclick = function(){
    human = 'g'
    humturn('земля')
}

const variant = ['f','w','g']
const win = ['fg','wf','gw']
const loose = ['fw','wg','gf']
let human =''
let comp =''

function humturn(turn){
    console.log('Вы выбрали', turn)
    compturn()
}

function compturn(){
    let r =Math.floor(Math.random()*3)
    console.log('Комп выбрал',variant[r])
    comp = variant[r]
    result()
}

function result(){
    console.log(human,comp)
    let res = human+comp
    if (win.includes(res)){
        console.log('Вы выиграли')
        out1.innerHTML = '<img src="img/hwin.gif" alt="" height="100px">' + '\n'+ 'Победа'

    }
    else if (loose.includes(res)){
        console.log('Вы проиграли')
        out2.innerHTML = '<img src="img/compwin.gif" alt="" height="100px">' + '\n'+ 'Поражение'
    }
    else {
        console.log('Ничья')
        out3.innerHTML = '<img src="img/nichja.gif" alt="" height="100px">' + '\n'+ 'Ничья'
    }
    out.innerText ='Ход человека - '+ human + '\n' + 'Ход компа - ' + comp + '\n'
}

