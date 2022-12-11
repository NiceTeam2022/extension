newDiv = document.createElement('div')
newDiv.id = "setNewDiv"
newDiv.style.background="#ffc85c";
newDiv.style.width = "160px";
newDiv.style.height = "180px";
newDiv.style.display = "none";

document.onmousedown = function(e){
	if(e.button == 0)
    {
        if(e.target.tagName =="TEXTAREA"){
        
            el = e.target; //鼠标每经过一个元素，就把该元素赋值给变量el
            
            if(typeof(el.value) == 'string'){
            
            $("#NewImg").remove();
            $("setNewDiv").remove();
            str = el.value
            var data = {
                'str':str,
                'status':0
            }
            var image_url;
            chrome.runtime.sendMessage({
                info: data
            }, res => {
                console.log('我是 content.js ,我收到消息：', res.responseJSON.Picture[0])
                console.log(res.responseJSON);
                image_url = res.responseJSON.Picture[0];
                var newElement = document.createElement('img');
                newElement.id="NewImg"
                newElement.src=chrome.runtime.getURL(image_url);
                insertAfter(newElement,el)
                newDiv.innerHTML = "";
                addElement(newDiv,res.responseJSON)
                // insertAfter(newDiv,newElement);
                
                $(document).ready(function(){
                    $('#NewImg').bind('click',function(){
                        if(newDiv.style.display =="none"){
                           insertAfter(newDiv,newElement);
                           document.getElementById("setNewDiv").style.display = "block";
                           newDiv.style.display = "block";
                        }
                        else{
                            document.getElementById("setNewDiv").style.display = "none";
                            $("setNewDiv").remove();
                         }
                })
                })
            })
            
            // str = "原著的确更吸引编剧读下去，所以跟《诛仙》系列明显感觉到编剧只看过故事大纲比，这个剧的编剧完整阅读过小说。配乐活泼俏皮，除了强硬穿越的台词轻微尴尬，最应该尴尬的感情戏反而入戏，故意模糊了陈萍萍的太监身份、太子跟长公主的暧昧关系，整体观影感受极好，很期待第二季拍大东山之役。玩弄人心的阴谋阳谋都不狗血，架空的设定能摆脱历史背景，服装道具能有更自由的发挥空间，特别喜欢庆帝的闺房。以后还是少看国产剧，太长了，还是精短美剧更适合休闲，追这个太累。王启年真是太可爱了。"
            }
        }
        
    }
    
}

//在元素后插入新元素
function insertAfter(newElement, targetElement) {
    var parent = targetElement.parentNode;
    if (parent.lastChild == targetElement) {
        parent.appendChild(newElement);
    } else {
        parent.insertBefore(newElement, targetElement.nextSibling);
    }
}
$(document).ready(function(){
    $('#NewImg').bind('click',function(){
    document.getElementById("setNewDiv").style.display = "block";
})
})

function addElement(NewDiv,res){
    var html = "<div >"+
    "<h3>"+
    res.TopScore[0][0]+
    "</h3>"+
    "<p>情感强度</p>"+
    "<progress value="+ res.TopScore[0][1] +" max=\"2.0\" ></progress>"+
    "<p>信息密度</p>"+
    "<progress value="+res.Density+" max=\"1\" ></progress>"+
    "<p>平均句长</p>"+
    "<progress value=" + res.AverageLen+" max=\"50\" ></progress>";
    NewDiv.innerHTML = html;
    
}
