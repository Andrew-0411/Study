const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");
//querySelectorAll 은 class와 관련된 모든걸 가져옴
//array 형태로 가져오며 잘 사용하지 않음

const USER_LS = "currentUser",
    SHOWING_CN = "showing";
//상수는 대문자

function saveName(text) {
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
    event.preventDefault();//event가 새로고침 되는것을 막을때 preventDefault 메소드사용
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);//새로고침해도 기억할 수 있게
}

function askForName(){ //User가 없으면 user의 이름 요청
    form.classList.add(SHOWING_CN); 
    form.addEventListener("submit", handleSubmit);
    //form에 submit을 하면 handleSubmit 함수실행
}

function paintGreeting(text) {
    form.classList.remove(SHOWING_CN); //form을 지우고
    greeting.classList.add(SHOWING_CN); //greeting을 보여준다.
    greeting.innerHTML = `Hello ${text}`;
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS); //정보를 user computer에 저장하는 방법
    if (currentUser === null) { //로컬에 유저가 없을경우
        askForName();
    } else{ //로컬에 유저가 있을경우
        paintGreeting(currentUser);
    }
} 

function init() {
    loadName();
}

init();
