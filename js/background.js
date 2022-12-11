//background.js
//接收消息
chrome.runtime.onMessage.addListener((req, sender, sendResponse) => {
    var resq = $.ajax({
        type: 'POST',
        url: 'http://47.100.185.83:5000/testGet',
        dataType: 'JSON',
        data: req.info,
        async:false,
        success: function(res){
            // console.log(res)
            return res
        },
        error: function(){
            console.log('error')
        }
    })
    sendResponse(resq);
})
/**
 * 获取当前 tab ID
 */
function getCurrentTabId() {
    return new Promise((resolve, reject) => {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            resolve(tabs.length ? tabs[0].id : null)
        });
    })
}
$(document).ready(function(){
    $('#NewImg').bind('click',function(){
    document.getElementById("setNewDiv").style.display = "block";
})
})
