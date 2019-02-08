console.log("background running");

chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab){
  chrome.storage.local.get(
      ['videosinfo'],// get a a series of data
      function(msg) {
  if(msg.videosinfo.length>=1){
    chrome.tabs.sendMessage(tab.id,msg.videosinfo);
  }
 });
}



chrome.runtime.onMessage.addListener(savevideoTime);
chrome.runtime.onInstalled.addListener(function(){
chrome.storage.local.clear(function() {
        var error = chrome.runtime.lastError;
        if (error) {
            console.error(error);
        }
    });
});

function savevideoTime(request,sender,sendResponse){
  chrome.storage.local.get(
      ['videosinfo'],// get a a series of data
      function(result) {
      //result is an Object and videosinfo is the tag of an array in it//result.videosinfo is an array
        if (!Array.isArray(result.videosinfo)){
            update([]);//without this push is undefined?
        }//???
        else{
            console.log(request);
            result.videosinfo.push(request);//???
            update(result.videosinfo);
            console.log(result.videosinfo);
        }
  });sendResponse("stored!");//ceshi
}


function update(array)//array = behaviorItem in content.js
{
    //then call the set to update with modified value
    chrome.storage.local.set({
        videosinfo:array//it is an Object tag is videosinfo and videosinfo is an array
    }, function() {
        console.log("local storage updated");
        console.log("number of items: " + array.length);
    });
}
