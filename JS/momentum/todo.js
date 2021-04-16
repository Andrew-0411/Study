const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

    const TODOS_LS = "toDos";

    let toDos = []; //할일 목록을 저장해둘 array

    function deleteToDo(event){
        const btn = event.target;
        const li = btn.parentNode;
        toDoList.removeChild(li);
        const cleanToDos= 
        toDos.filter(function(toDo){
            return toDo.id !== parseInt(li.id);//parseInt - string형을 number형으로
        });
        toDos = cleanToDos;
        saveToDos();
    }

    function saveToDos() {
        localStorage.setItem(TODOS_LS,JSON.stringify(toDos));
        //JSON.stringify는 object를 string으로 바꾸어준다.
    }//setItem 저장되서 새로고침해도 안 없어진다.
    
function paintToDo(text) {
    const li = document.createElement("li"); //element생성 메서드
    const delBtn = document.createElement("button"); //element생성 메서드
    const span = document.createElement("span"); //element생성 메서드
    const newId = toDos.length + 1;
    delBtn.innerText = "❌";
    delBtn.addEventListener("click", deleteToDo);//click 이벤트가 발생하면 deleteToDo 함수실행
    span.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId;
    toDoList.appendChild(li);
    //appendChild - father element안에 넣는다.
    const toDoObj = {
        text: text,
        id: newId
    };//할일 목록을 text와 고유번호(id)로 저장
    toDos.push(toDoObj); //array 안에 element 하나를 넣음
    saveToDos();
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}

function loadToDos() {
   const loadedToDos = localStorage.getItem(TODOS_LS);
   if(loadedToDos !== null) {
       const parsedToDos = JSON.parse(loadedToDos);
       parsedToDos.forEach(function(toDo) {
           //forEach - array에 있는 것들을 각각 한번씩 함수를 실행시켜준다.
           paintToDo(toDo.text);
       });
   }
  }
  
function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();