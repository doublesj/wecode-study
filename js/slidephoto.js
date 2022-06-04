
var sliders = document.querySelectorAll(".slidephoto > img");

var current = 0;

showSlides();

function showSlides() {
    var slides = document.querySelectorAll(".slidephoto > img");
    for (let i=0; i< sliders.length; i++) {
        slides[i].style.display="none";   //모든 이미지 감춤
    }
    current++; //다음 이미지로 이동
    if(current > slides.length) // 마지막 이미지라면
     current= 1;
     slides[current - 1].style.display="block"; //현재 위치 이미지 표시
     setTimeout(showSlides,5000); //5초마다 showSlides() 함수 반복 실행
}