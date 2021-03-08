var 숫자1 = Math.ceil(Math.random() * 9);
var 숫자2 = Math.ceil(Math.random() * 9);
var 결과 = 숫자1 * 숫자2;

var 바디 = document.body;
var 단어 = document.createElement('div');
단어.textContent = String(숫자1) + ' 곱하기 ' + String(숫자2) + '는?'
document.body.append(단어);

var 폼 = document.createElement('form');
document.body.append(폼);

var 입력창 = document.createElement('input');
폼.append(입력창);

var 버튼 = document.createElement('button')
버튼.textContent = '버튼';
폼.append(버튼);

var 책점창 = document.createElement('div');
document.body.append(책점창);

폼.addEventListener('submit',function 콜백함수(이벤트){
    이벤트.preventDefault();
    if(Number(입력창.value) === 결과){
        책점창.textContent = '딩동댕';
        숫자1 = Math.ceil(Math.random() * 9);
        숫자2 = Math.ceil(Math.random() * 9);
        결과 = 숫자1 * 숫자2;
        단어.textContent = String(숫자1) + ' 곱하기 ' + String(숫자2) + '는?'
        입력창.value = '';
        입력창.focus();
    }
    else{
        책점창.textContent = '땡';
        입력창.value = '';
        입력창.focus();
    }
})
