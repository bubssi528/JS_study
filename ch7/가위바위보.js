var image_coordinate = '0';
var 가위바위보 = {
    rock: '0',
    scissor: '-135px',
    paper: '-284px'
};


function computer_choice(image_coordinate) {
    return Object.entries(가위바위보).find(function(v) {
        return v[1] === image_coordinate;
    })[0]; //배열이니까 첫번째것 뽑기위해 [0]추가
}

var interval;
function interval_maker() {
    interval = setInterval(function () {
        if(image_coordinate === 가위바위보.rock) {
            image_coordinate = 가위바위보.scissor;
        }else if(image_coordinate === 가위바위보.scissor) {
            image_coordinate = 가위바위보.paper;
        }else {
            image_coordinate = 가위바위보.rock;
        }
        document.querySelector('#computer').style.background = 
        'url(https://en.pimg.jp/023/182/267/1/23182267.jpg)' + image_coordinate + ' 0';
    }, 100);
}


interval_maker();

var score= {
    scissor: 1,
    rock: 0,
    paper: -1,
  };


document.querySelectorAll('.btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
        clearInterval(interval);
        setTimeout(function() {
            interval_maker();
        }, 1000);

        var my_choice = this.textContent;
        var my_score = score[my_choice];
        var computer_score = score[computer_choice(image_coordinate)];
        var score_difference = my_score - computer_score

        if(score_difference === 0) {
            console.log('비김');
        } else if ([-1, 2].includes(score_difference)) {
            console.log('이김');
        } else {
            console.log('짐');
        }

    });
});