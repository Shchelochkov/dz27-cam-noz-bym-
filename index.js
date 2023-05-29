
let but1 = document.getElementById('but1')
let but2 = document.getElementById('but2')
let but3 = document.getElementById('but3')

let out = document.getElementById('out')


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
let pobeda =''

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
        pobeda = '<p><img src="img/hwin.gif" alt="" height="100px">' +'<p>'+  'Сегодня, Скайнет повержен!'+'</p>'

    }
    else if (loose.includes(res)){
        console.log('Вы проиграли')
        pobeda = '<p><img src="img/compwin.gif" alt="" height="100px">' +'<p>'+  'Hasta La Vista Baby'+'</p>'
    }
    else {
        console.log('Ничья')
        pobeda = '<p><img src="img/nichja.gif" alt="" height="100px">' +'<p>'+  'I.ll Be Back'+'</p>'
    }
    out.innerHTML = 
    '<ul>'+
    '<li>'+
        'Ход человека - '+ human +
    '</li>'+
    '<li>'+
        'Ход компа - ' + comp +
    '</li>'+
    '<li>'+
        pobeda +
    '</li>'+
    '</ul>'
}


    