while(true){
    var num1 = Math.floor(Math.random() * 9) + 1
    var num2 = Math.floor(Math.random() * 9) + 1
    var result = num1 * num2
    var a = true
    while(a){
        var answer = prompt(string(num1) + "곱하기" + string(num2) + "는?")
        if (result === answer){
            alert("딩동댕")
            a = false
        }
        else{
            alert("땡")
        }
    }
}