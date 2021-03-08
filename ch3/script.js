//제로초 script 실습용
var 바디 = document.body;
var 단어 = document.createElement('div');
단어.textContent = '제로초';
document.body.append(단어);

var 폼 = document.createElement('form')
document.body.append(폼)

var 입력창 =  document.createElement('input');
폼.append(입력창);

var 버튼 = document.createElement('button')
버튼.textContent = '버튼';
폼.append(버튼);

var 결과창 = document.createElement('div');
document.body.append(결과창);

폼.addEventListener('submit',function 콜백함수(이벤트){
    이벤트.preventDefault();
    if(단어.textContent[단어.textContent.length - 1] === 입력창.value[0]){ // 입력창.value == 초밥
        결과창.textContent = '딩동댕';
        단어.textContent = 입력창.value;
        입력창.value = '';
        입력창.focus();
    }
    else{
        결과창.textContent = '땡';
    }
})//콜백함수, function은 익명함수 이름을 안붙임

// var first="아오이에우";
// while(true){
//     answer = prompt("제시어:" + first);
//     if(first[first.length - 1] === answer[0]) {
//         alert("정답")
//         first = answer;
//     }
//     else{
//         alert("떙")
//         break
//     }
// }
 