//해당 영역 클릭
let fifthMenu = document.getElementById("fifth-menu").children;
let sixthMenu = document.getElementById("sixth-menu").children;

//이벤트 리스너를 넣어서 fifth와 동일한 것이 있으면 
//active 값을 주어서 변경시키기

[...fifthMenu].forEach(element => {
   element.addEventListener("click", fifthMenuBackground);
   element.addEventListener("click", changeBackground);
});

[...sixthMenu].forEach(element => {
   element.addEventListener("click", sixthMenuBackground);
});

//클릭시,
//1. 배경변경 
let fifthImages = [
    './img/fifth-section/26613653799_17dc53a8e9_b.jpg',
    './img/fifth-section/452108745_a7f1b3ac01_b.jpg',
    '/img/fifth-section/5813979420_9a9d39b291_k.jpg',
    './img/fifth-section/6442254013_eeaaab901e_k.jpg',
    './img/fifth-section/syringe-ga086dcc46_1920.jpg'
]
function changeBackground(e){
    // console.log(getComputedStyle(document.getElementById('fifth')).backgroundImage = `url(/img/fifth-section/6442254013_eeaaab901e_k.jpg)`)
    // console.log(e.target.style.backgroundImage)
}


//2. 버튼 색상 transparent 

function fifthMenuBackground(e){
    let color = getComputedStyle(e.target).backgroundColor;
    
    color == 'rgba(0, 0, 0, 0)' ? e.target.style.background = 'rgb(46, 117, 207)'
    : e.target.style.background = 'rgba(0, 0, 0, 0)';
}

function sixthMenuBackground(e){
    let color = getComputedStyle(e.target).backgroundColor;

    color == 'rgba(0, 0, 0, 0)' ? e.target.style.background = 'rgb(255, 215, 0)'
    : e.target.style.background = 'rgba(0, 0, 0, 0)';
}

// //3. 내용 변경 




// //4. 이모티콘 변경


// 할일 정하기 
// 각 할일에 맞는 재료들 준비하기 