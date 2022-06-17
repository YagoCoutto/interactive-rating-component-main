const btn_submit = document.querySelector('button');
const card01 = document.querySelector('.content')
const card02 = document.querySelector('.card-02')
const numbersClass = document.querySelectorAll('.numbers')//Seleciona tds class



btn_submit.addEventListener('click', evento);
numbersClass.forEach( btn => {
    btn.addEventListener('click', numberclick);
});

function evento() {
    card01.classList.add('Remove');
    card02.classList.remove('Remove');
}

function numberclick(event){
    numbersClass.forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
}
console.log(numbersClass)



