i = 1;
sstatus = 0;
$(function(){
        $('#adduse').show();
        $('#extensive').show();
        $('#text').show();

        $("#div_setup").click(function() {
            if($('#modelchoose').is(':hidden')){
			$('#modelchoose').show();
			$('#timechoose').hide();
			$('#contact').hide();
            }
            else {
            $('#modelchoose').hide();
			$('#timechoose').hide();
			$('#contact').hide();
            }
        })

		$("#div_cloth").click(function() {
            if($('#timechoose').is(':hidden')){
			$('#timechoose').show();
			$('#modelchoose').hide();
			$('#contact').hide();
            }else{
                $('#timechoose').hide();
			$('#modelchoose').hide();
			$('#contact').hide();
            }
        })

		// $("#div_email").click(function() {
            
		// 	$('#contact').show();
		// 	$('#timechoose').hide();
		// 	$('#modelchoose').hide();
        //     // $("#div_body").append($('#modelchoose'))
        // })

		$("#shut_school").click(function() {
            $('#modelchoose').hide();
        })

		$("#shut_time").click(function() {
            $('#timechoose').hide();
        })

		$("#shut_email").click(function() {
            $('#contact').hide();
        })

        
        $("#day2").click(function(){
            $('#adduse').show();
            $('#extensive').show();
            $('#text').show();
			$('#adduse2').hide();
			$('#timechoose2').hide();
            $('#extensive2').hide();
            $('#text2').hide();
        })

		$("#night").click(function() {
            $('#adduse').hide();
            $('#extensive').hide();
            $('#text').hide();
			$('#adduse2').show();
			$('#timechoose').hide();
            $('#extensive2').show();
            $('#text2').show();
        })

		// ------------------------------------------------------夜间------------------------------------------------
        $("#div_setup2").click(function() {
            if($('#modelchoose2').is(':hidden')){
			$('#modelchoose2').show();
			$('#timechoose2').hide();
			$('#contact2').hide();
            // $("#div_body").append($('#modelchoose'))
            }
            else{
                $('#modelchoose2').hide();
			$('#timechoose2').hide();
			$('#contact2').hide();
            }
        })

		$("#div_cloth2").click(function() {
            if($('#timechoose2').is(':hidden')){
			$('#timechoose2').show();
			$('#modelchoose2').hide();
			$('#contact2').hide();
            // $("#div_body").append($('#modelchoose'))
            }else{
                $('#timechoose2').hide();
			$('#modelchoose2').hide();
			$('#contact2').hide();
            }
        })

		$("#div_email2").click(function() {
            
			$('#contact2').show();
			$('#timechoose2').hide();
			$('#modelchoose2').hide();
            // $("#div_body").append($('#modelchoose'))
        })


        $("#cancle2").click(function() {
            $('#adduse2').hide();
        })

		$("#shut_school2").click(function() {
            $('#modelchoose2').hide();
        })

		$("#shut_time2").click(function() {
            $('#timechoose2').hide();
        })

		$("#shut_email2").click(function() {
            $('#contact2').hide();
        })

        $("#school").click(function(){
            $('#modelchoose').hide();
            sstatus = 0
        })
        $("#work").click(function(){
            $('#modelchoose').hide();
            sstatus = 1
        })
        $("#else").click(function(){
            sstatus = 2
            $('#modelchoose').hide();
        })
        $("#school2").click(function(){
            $('#modelchoose2').hide();
            sstatus = 0
        })
        $("#work2").click(function(){
            $('#modelchoose2').hide();
            sstatus = 1
        })
        $("#else2").click(function(){
            $('#modelchoose2').hide();
            sstatus = 2
        })
        $("#ok").click(function(){
            
            okValue(0);
            i = 1
        })  
        $("#ok2").click(function(){
            okValue2(0);
            i = 1
        })
        $("#jump").click(function(){
            okValue(i)
            i=i+1
        })
        $("#jump2").click(function(){
            
            okValue2(i)
            i=i+1
        })
        $("#shut_text").click(function(){
            window.close();
        })
        $("#shut_text2").click(function(){
            window.close();
        })
        $("#div_email").click(function(){
            window.open("./contact.html");
        })
        $("#div_email2").click(function(){
            window.open("./contact.html");
        })

})

function okValue(m){
            
    var text=document.getElementById("text")
    str = text.value
    //str = "原著的确更吸引编剧读下去，所以跟《诛仙》系列明显感觉到编剧只看过故事大纲比，这个剧的编剧完整阅读过小说。配乐活泼俏皮，除了强硬穿越的台词轻微尴尬，最应该尴尬的感情戏反而入戏，故意模糊了陈萍萍的太监身份、太子跟长公主的暧昧关系，整体观影感受极好，很期待第二季拍大东山之役。玩弄人心的阴谋阳谋都不狗血，架空的设定能摆脱历史背景，服装道具能有更自由的发挥空间，特别喜欢庆帝的闺房。以后还是少看国产剧，太长了，还是精短美剧更适合休闲，追这个太累。王启年真是太可爱了。"
    
    //str = text.innerHTML//
    var data = {
        'str':str,
        'status':sstatus
    }
    console.log(sstatus);
    $.ajax({
        type: 'POST',
        url: 'http://47.100.185.83:5000/testGet',
        dataType: 'JSON',
        data: data,
        success: function(res){
            
            // $("#text").text(res.TopScore[0][0])
            if(m < res.TopScore.length){
            console.log(res);
            document.getElementById("MyPEmotion").innerText = res.TopScore[m][0];
            document.getElementById("progress1").value = res.TopScore[m][1];
            document.getElementById("progress2").value = res.Density;
            document.getElementById("progress3").value = res.AverageLen;
            const emojiurl = res.Picture[m].slice(2);
            $("#emoji").attr('src',emojiurl);
            }
            if(m == res.TopScore.length){

                document.getElementById("MyPEmotion").innerText = res.TopScore[0][0];
                document.getElementById("progress1").value = res.TopScore[0][1];
                document.getElementById("progress2").value = res.Density;
                document.getElementById("progress3").value = res.AverageLen;
                const emojiurl = res.Picture[0].slice(2);
                $("#emoji").attr('src',emojiurl);
                i=0
            }

        },
        error: function(){
            consle.log('error')
        }
    })	
    
}

function okValue2(m){
    
    var text=document.getElementById("text")
    str = text.value
    //str = "原著的确更吸引编剧读下去，所以跟《诛仙》系列明显感觉到编剧只看过故事大纲比，这个剧的编剧完整阅读过小说。配乐活泼俏皮，除了强硬穿越的台词轻微尴尬，最应该尴尬的感情戏反而入戏，故意模糊了陈萍萍的太监身份、太子跟长公主的暧昧关系，整体观影感受极好，很期待第二季拍大东山之役。玩弄人心的阴谋阳谋都不狗血，架空的设定能摆脱历史背景，服装道具能有更自由的发挥空间，特别喜欢庆帝的闺房。以后还是少看国产剧，太长了，还是精短美剧更适合休闲，追这个太累。王启年真是太可爱了。"
    
    
    var data = {
        'str':str,
        'status':sstatus
    }
    
    $.ajax({
        type: 'POST',
        url: 'http://47.100.185.83:5000/testGet',
        dataType: 'JSON',
        data: data,
        success: function(res){
            // $("#text").text(res.TopScore[0][0])
            if(m < res.TopScore.length){
            document.getElementById("MyPEmotion2").innerText = res.TopScore[m][0];
            document.getElementById("progress4").value = res.TopScore[m][1];
            document.getElementById("progress5").value = res.Density;
            document.getElementById("progress6").value = res.AverageLen;
            const emojiurl = res.Picture[m].slice(2);
            $("#emoji2").attr('src',emojiurl);
            }
            if(m == res.TopScore.length){
                document.getElementById("MyPEmotion2").innerText = res.TopScore[0][0];
                document.getElementById("progress4").value = res.TopScore[0][1];
                document.getElementById("progress5").value = res.Density;
                document.getElementById("progress6").value = res.AverageLen;
                const emojiurl = res.Picture[0].slice(2);
                $("#emoji2").attr('src',emojiurl);
                i=0;
                }
        },
        error: function(){
            consle.log('error')
        }
    })
}