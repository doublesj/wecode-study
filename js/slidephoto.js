var current = 0;
    imgDuration = 3000;

showSlides();

function showSlides() {
  var slidephoto = document.querySelectorAll("#slide"); // slidephoto라는 변수 선언. 도큐먼트에서 querySelectorAll("매개변수") 모든 "#slide"를 불러올거야.
  // for은 반복문으로 아래 조건만큼 변수를 증감하고 실행문을 반복할 것이다.
  for (let i = 0; i < slidephoto.length; i++) {
    slidephoto[i].style.display = "none"; //모든 이미지를 화면에서 멈추기.
  }
  current++; //다음 이미지로 이동

  if (current > slidephoto.length)    // if 조건문 : 현재가 마지막 이미지라면 
    current = 1;                        // 1번째로 이동
  slidephoto[current - 1].style.display = "block"; //n번째 이미지만 화면에 표시 "block".

  setTimeout(showSlides, imgDuration); //imgDuration = 3000; 3초(단위: 1초=1000)마다 showSlides() 함수 반복 실행
  
  /* setTimeout(showSlides, 3000); 3000을 입력했더니 css의 fade와 속도가 맞지 않는 듯해 앞에 imgDuration = 3000;을  입력 하고 setTimeout(showSlides, imgDuration);으로 변경해보았다. */

}