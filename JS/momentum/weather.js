const COORDS = 'coords';

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSucces(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    } //object의 key와 이름을 같게 저장할 때
        saveCoorde(coordsObj);
}  //좌표를 가져오는데 성공했을때를 처리하는 함수


function handleGeoError(){
    console.log("Can't access geo location");
} // 

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
    //API 사용
}

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null){
        askForCoords();
    }
}

function init(){
    loadCoords();
}

init();