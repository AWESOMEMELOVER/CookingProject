var ingrediets='<ol class="circle-list">'+
		    '<li>'+
		        '<h4>4 білки кімнатної температури</h4>'+
		    '</li>'+
		    '<li>'+
		        '<h4>Щупта солі</h4>'+
		    '</li>'+
		    '<li>'+
		        '<h4>1 чашка (220 г) цукру</h4>'+
		    '</li>'+
		    '<li>'+
		        '<h4>1 ст. л. лимонного соку</h4>'+
		    '</li>'+
		    '<li>'+
		        '<h4>½ ч. л. магдалевої есенції</h4>'+
		    '</li>'+
        '<li>'+
           '<h4>Харчові барвники</h4>'+
       '</li>'+
		'</ol>';

var task1 = '<ol class="circle-list">'+
              '<li id="firstTask">'+
                '<h4>Відділити білки пяти яєць.</h4>'+
              '</li>';

  var task2 = '<li id="secondTask">'+
              '<h4>Взбити білки до однорідної піни.</h4>'+
              '</li>';
  var task3 = '<li id="thirdTask">'+
              '<h4>Не припиняючи взбивання поступово додавати цукор у білки.</h4>'+
              '</li>';
var task4 = '<li id="fifthTask">'+
            '<h4>Додати сік одного лимона, взбити;<br>'+
            'Додати мигдалеву та ванільну есенцію, взбити.</h4>'+
            '</li>';

            var task5 = '<li id="sixTask">'+
                        '<h4>Розділити отриману масу на декілька частин;<br>'+
                        'В кожну частину додати барвники.</h4>'+
                        '</li>';

var task6 = '<li id="seventhTask">'+
            '<h4>За допомогою кондитерського мішка викласти отриману масу на пергаментний папір;<br>'+
            'Поставити деко в попередньо розігріту піч та випікати рівно 60 хвилин.</h4>'+
            '</li>';

  var tag = document.createElement('script');
  var rightPannel = document.getElementById('right')
  var time=5;


  tag.src = "https://www.youtube.com/iframe_api";

  var firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  var player;
  function onYouTubeIframeAPIReady(){

  	player = new YT.Player('player',{
  		height: '50%',
            width: '100%',
            videoId: 'fudsUhWAG_o',
  		position:'fixed',
  		overflow:'hidden',
            events: {
              'onReady': onPlayerReady,
            }
  	});

      setTimeout(function(){
        updateTimer();
      },6000);
  }

  var firstInterval = setInterval(firstStop,1000);
  var secondInterval= setInterval(secondStop,1000);
  var thirdInterval = setInterval(thirdStop,1000);
  var forthInterval = setInterval(fourthStop,1000);
  var fifthInterval = setInterval(fifthStop,1000);
  var sixInterval = setInterval(sixStop,1000);
  var seventhInterval = setInterval(seventhStop,1000);

  function firstStop(){
    textTime = $('#current-time').text();
    if(textTime == '0:10'){
      player.pauseVideo();
      $('.right').empty();
      $(ingrediets).appendTo('.right');
      resizeVideoHolder();
      clearInterval(firstInterval);
      //firstStop = true;
    }
  }

function secondStop(){
  textTime = $('#current-time').text();
  if(textTime == '0:15'){
    player.pauseVideo();
    $('.right').empty();
    $(task1).appendTo('.right');
    clearInterval(secondInterval);
  }
}
function thirdStop(){
  textTime = $('#current-time').text();
  if(textTime == '0:20'){
    player.pauseVideo();
    $('.circle-list').append(task2);
    clearInterval(thirdInterval);
  }
}
function fourthStop(){
  textTime = $('#current-time').text();
  if(textTime == '0:22'){
    player.pauseVideo();
    $(task3).insertBefore('#firstTask');
    clearInterval(forthInterval);
  }
}
function fifthStop(){
  textTime = $('#current-time').text();
  if(textTime == '0:25'){
    player.pauseVideo();
    $(task4).insertBefore('#thirdTask');
    clearInterval(fifthInterval);
  }
}

function sixStop(){
  textTime = $('#current-time').text();
  if(textTime == '0:27'){
    player.pauseVideo();
    $(task5).insertBefore('#fifthTask');
    clearInterval(sixInterval);
  }
}

function seventhStop(){
  textTime = $('#current-time').text();
  if(textTime == '0:29'){
    player.pauseVideo();
    $(task6).insertBefore('#sixTask');
    $('.right').css('visibility','hidden');
    document.getElementById('player').style.width="100%";
    document.getElementById('player').style.height="70%";
    $('#timerDiv').css('visibility','visible');
    clearInterval(seventhInterval);
  }
}

function mainContoller(){
  var textTime="";
//// TODO: need to reinizialize interals

  firstInterval;
  secondInterval;
  thirdInterval;
  forthInterval;
  fifthInterval;
  sixInterval;
  seventhInterval;
}

this.mainContoller();

function onPlayerReady(event) {
         event.target.playVideo();
       }

function stopVideo() {
          player.pauseVideo();
      }
function updateTimer(){
    setInterval(function(){
      $('#current-time').text(formatTime( player.getCurrentTime() ));
    },1);
  }
function formatTime(time){
    time = Math.round(time);

    var minutes = Math.floor(time / 60),
    seconds = time - minutes * 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;

    return minutes + ":" + seconds;
}


function resizeVideoHolder(){
  document.getElementById("player").style.width="80%";
}
function resizeVideoHolderByHeight(){
    document.getElementById("player").style.height="80%";
}
