chrome.runtime.onMessage.addListener(gotMessage);

var allVideo;
var lastTime;
var timePoint=[];
timePoint[0]=0;


//.attr()来获取自定义属性的值；
$(document).arrive('video', {existing:true}, function(e){
          allVideo = e;
          allVideo.ontimeupdate=function(){sendVideoinfo();lastTime=allVideo.currentTime;};//record the currentTime
  });//get the Object video

function gotMessage(message,sender,sendResponse){
  if(message.length>=1){
    console.log("coming!")
    let maxl= message.length-1;
    let i=0;
    for(i=0;i<=maxl;i++){
    if(message[i].videourl==document.location.href){
      timePoint.push(message[i].videolastTime);
      timePoint.push(message[i].videocurrentTime);
      //makeMarkers(message[i].videolastTime,allVideo.duration);
      //makeMarkers(message[i].videocurrentTime,allVideo.duration);
    }
  }//xunhuan
orangeMarker(timePoint,allVideo.duration);
}//chuli message
}




function sendVideoinfo(){
  if(allVideo){
    if(Math.abs(allVideo.currentTime-lastTime)>=17){
    chrome.runtime.sendMessage({
    "videolastTime":lastTime,
    "videocurrentTime":allVideo.currentTime,
    "videourl":document.location.href,
    },(response)=>{console.log(response);})
  }
 }
}



function parseTime(time){
  time = Math.floor(time);
  var _m, _s;
  _m = Math.floor(time/60);
  _s = time - _m*60;
  if(_m<10){
    _m = '0' + _m;
  }
  if(_s<10){
    _s = '0' + _s;
  }
  return _m + ':' + _s
}

function makeMarkers(markercurrentTime,markerduration){
  let $startMarker = $(startMarker);
      startMarkerLeft = $startMarker.offset().left;
      $startMarker.css('left',((markercurrentTime/markerduration)*100)+'%')
      .attr('data-time', markercurrentTime)
      .attr('data-patch', 'id')
      .attr('data-marker', 'start').addClass('active');
      $('div.ytp-progress-bar-container').prepend($startMarker);
      $(".startMarker .markerSpan p")[0].innerText = parseTime(markercurrentTime);
}

function orangeMarker(timepOint,videoduration){
  let maxtimeL=timePoint.length-2;
  for(var j=2;j<=maxtimeL;j=j+2){
    console.log(timepOint[j]);
    console.log(timepOint[j+1]);
    let $orangeBar =$(orangeProgressBar);
    var orangeBarLeft=$orangeBar.offset().left;
    let ratio=timepOint[j+1]/videoduration-timepOint[j]/videoduration,
        propValue= `scaleX(${ratio})`;
    $orangeBar.css('left',((timepOint[j]/videoduration)*100)+'%');
    $orangeBar.css('transform',propValue);
    $('div.ytp-play-progress.ytp-swatch-background-color:not(.orangeProgress)').before($orangeBar);
  }
}

//var newMarkerponit=$('<div class="ytp-marker-progress" style="left:"')
