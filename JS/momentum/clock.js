const clockContainer = document.querySelector(".js-clock"),
  clockTitle = clockContainer.querySelector("h1");


function getTime() {
    const date = new Date(); // 시간을 불러오는 class
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    clockTitle.innerText= `${hours < 10 ? `0${hours}` : hours}:${
        minutes < 10 ? `0${minutes}` : minutes}:${//${까지 아래로 내리면 html에서 숫자가 내려감
        seconds < 10 ? `0${seconds}` : seconds}`;//10미만일 경우 앞에 0 붙이기
}

function init(){ //실행함수
    getTime();
    setInterval(getTime, 1000); //(실행할 함수,시간간격)
}

init();

