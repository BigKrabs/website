let burger = document.getElementById("burger");
const screenWidth = window.screen.width;
burger.addEventListener("click", func);
burger.addEventListener("click", funcs);

function func(){
    let elem = document.getElementById("nav"); //находим блок div по его id, который передали в функцию
    let state = elem.style.display; //смотрим, включен ли сейчас элемент
    if (state =='inline-block') elem.style.display='none'; //если включен, то выключаем
    else elem.style.display='inline-block'; //иначе - включаем
}

function funcs() {
    let iconka = document.getElementById("logo");
    if(screenWidth <= '425') {
        let state1 = iconka.style.display; //смотрим, включен ли сейчас элемент
        if (state1 =='none') iconka.style.display='block'; //если включен, то выключаем
        else iconka.style.display='none'; //иначе - включаем
    }else {
        console.log(undefined);
    }
}
