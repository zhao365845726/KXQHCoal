var jQuery = $ || {};
(function(window, $, undefined) {
    $(document).ready(function() {
        var getnavcategorylistparam
        function UrlSearch() {
            var name, value, value1;
            var str = location.href;
            var num = str.indexOf("?");
            str = str.substr(num + 1);
            var arr = str.split("&");
            // console.log(arr);
            for (var i = 0; i < arr.length; i++) {
                num = arr[i].indexOf("=");
                // console.log(num);
                if (num > 0) {
                    name = arr[i].substring(0, num);
                    // console.log(name);
                    value = arr[i].substr(num + 1);
                    // console.log(value);
                    value1 = arr[0].substr(num + 1);
                    // console.log(value1);
                    this[name] = value;
                }
                $(".title").text(decodeURI(value1).substr(3));
                $(".patha").text(decodeURI(value1).substr(3));
            }
            getnavcategorylistparam = {
                "ArticleId": this[name]
            };
        }
        UrlSearch();
        var getariticeData = function(){

            $.ajax({
                type: "POST",
                data: getnavcategorylistparam,
                dataType: 'json',
                url: "http://kxqh.api.milisx.xyz/api/content/getarticledetail",
                success: function(data, type) {
						 var prefix = 'http://kxqh.admin.milisx.xyz';
                        $(".ma-center").html(data.data.Body);
                        for(var i = 0; i< $(".ma-center p img").length;i++){
                            var src = $($(".ma-center p img")[i]).attr('src');
                            var src1 = prefix + src;
                            $($(".ma-center p img")[i]).attr('src',src1);
                        }
                        // document.getElementById('detalic').innerHTML= a; 
                        // $(".ma-center img").attr("src",data.data.CoverPhoto);
                        $(".Prevpage span").text(data.obj.PreviousArticleTitle).attr('id',data.obj.PreviousArticleId);
                        $(".Nextpage span").text(data.obj.NextArticleTitle).attr('id',data.obj.NextArticleId);

                }
            })
        };
        $.when().done(function(){
            getariticeData();

        });

        $(".Prevpage span").click(function(){
            $.ajax({
                type: "post",
                url: "http://kxqh.api.milisx.xyz/api/content/getarticledetail",
                dateType: "json",
                data: {
                    "ArticleId": $(this).attr("id")
                },
                success: function (data) {
                    var prefix = 'http://kxqh.admin.milisx.xyz';
                    $(".patha").text(data.data.Title);
                    $(".title").text(data.data.Title);
                    $(".ma-center").html(data.data.Body);
                    for(var i = 0; i< $(".ma-center p img").length;i++){
                        var src = $($(".ma-center p img")[i]).attr('src');
                        var src1 = prefix + src;
                        $($(".ma-center p img")[i]).attr('src',src1);
                    }
                    // document.getElementById('detalic').innerHTML= a;
                    // $(".ma-center img").attr('src', data.data.CoverPhoto);
                    $(".Prevpage span").text(data.obj.PreviousArticleTitle).attr('id',data.obj.PreviousArticleId);
                    $(".Nextpage span").text(data.obj.NextArticleTitle).attr('id',data.obj.NextArticleId);
                    $(".xx-zi .time").text("发表时间   "+data.data.CreateTime);
                }
            })
        });
        $(".Nextpage span").click(function(){
            $.ajax({
                type: "post",
                url: "http://kxqh.api.milisx.xyz/api/content/getarticledetail",
                dateType: "json",
                data: {
                    "ArticleId": $(this).attr("id")
                },
                success: function (data) {
                    var prefix = 'http://kxqh.admin.milisx.xyz';
                    // console.log(data.data);
                    $(".ma-right h3").text(data.data.Title);
                    $(".ma-center").html(data.data.Body);
                    for(var i = 0; i< $(".ma-center p img").length;i++){
                        var src = $($(".ma-center p img")[i]).attr('src');
                        var src1 = prefix + src;
                        $($(".ma-center p img")[i]).attr('src',src1);
                    }
                    // document.getElementById('detalic').innerHTML= a;
                    // $(".ma-center img").attr('src', data.data.CoverPhoto);
                    $(".Prevpage span").text(data.obj.PreviousArticleTitle).attr('id',data.obj.PreviousArticleId);
                    $(".Nextpage span").text(data.obj.NextArticleTitle).attr('id',data.obj.NextArticleId);
                    $(".xx-zi .time").text("发表时间   "+data.data.CreateTime);
                }
            })
        });

        $(".taba").click(function () {
            $.ajax({
                type: "post",
                url: "http://kxqh.api.milisx.xyz/api/content/getcategoryarticlelist",
                dateType: "json",
                data: {
                    "categoryid": "b1c97066-0750-49d8-9b34-cb3f85f3a097",
                    "PageIndex": 1,
                    "PageSize": 12
                },
                success: function (data) {
                    console.log(data.data);
                    $(".patha").text("企业文化");
                    $(".title").text("企业文化");
                    $(".mylists").css("display","none");
                    $(".mylists1").css("display","block");
                    $(".ma-center").css("display","none");
                    $(".pageInfo").css("display","none")
                        for (var i = 0; i < data.data.lst_categoryarticlelist.length; i++) {
                        url = '/aritice/enaritice.html?title=' + data.data.lst_categoryarticlelist[i].Title + '&id='+ data.data.lst_categoryarticlelist[i].Id
                        $(".mylists1 li a").eq(i).attr("href", url);
                        $(".mylists1 li a img").eq(i).attr("src", data.data.lst_categoryarticlelist[i].CoverPhoto);
                        $(".mylists1 li p").eq(i).text(data.data.lst_categoryarticlelist[i].Title);
                    }
                }
            });
           
        });
        $(".tabb").click(function(){
            $.ajax({
                type: "POST",
                url: "http://kxqh.api.milisx.xyz/api/content/getarticledetail",
                dateType: "json",
                data: {
                    "ArticleId": "80313a54-2fa4-4305-af64-d69d62e3ec32"
                },
                success: function (data) {
                    // console.log(data)
                    var a = data.data.Body;
                    // console.log(a)
					var arring = [];
                    a.replace(/<img [^>]*src=['"]([^'"]+)[^>]*>/gi, function (match, capture) {
                        arring.push(capture);
                        });     
                    var prefix = 'http://kxqh.admin.milisx.xyz';
                    $(".mylists1").css("display","none");
                    $(".mylists").css("display","none");
                    $(".ma-center").css("display","block");
                    $(".pageInfo").css("display","none")
                    var htmlfirst = '';
                    for(var i = 0 ; i< arring.length ; i ++){
                        var firstsrc = arring[0];
                        var firstsrc = prefix+firstsrc
                        $("#img").attr('src',firstsrc)
                    }
                    htmlfirst += "<div class='box_image'><img src='"+arring[0]+"'</div>"
                    $(".ma-center").html(htmlfirst).bind('click', function() {$(".mask").css("display","block");$(".mask_box").css("display","block")});
                    for(var i = 0; i< $(".ma-center  img").length;i++){
                        var src = $($(".ma-center  img")[i]).attr('src');
                        var src1 = prefix + src;
                        $($(".ma-center  img")[i]).attr('src',src1);
                    }
                    $(".title").text(data.data.Title)
                    
                },
            });
        });
        $(".tabc").click(function () {
            $.ajax({
                type: "post",
                url: "http://kxqh.api.milisx.xyz/api/content/getcategoryarticlelist",
                dateType: "json",
                data: {
                    "categoryid": "11dea9ec-4d9b-4c09-9926-97d12929920c",
                    "PageIndex": 1,
                    "PageSize": 12
                },
                success: function (data) {
                    // console.log(data.data);
                    $(".title").text("产品介绍");
                    $(".patha").text("产品介绍");
                    $(".ma-center").css("display", "none");
                    $(".mylists1").css("display", "none");
                    $(".mylists").css("display", "block");
                    $(".pageInfo").css("display","none");
                    for (var i = 0; i < data.data.lst_categoryarticlelist.length; i++) {
                        var url =''
                        url = '/aritice/enaritice.html?title=' + data.data.lst_categoryarticlelist[i].Title + '&id='+ data.data.lst_categoryarticlelist[i].Id
                        $(".mylists li a").eq(i).attr("href", url);
                        $(".mylists li a img").eq(i).attr("src", data.data.lst_categoryarticlelist[i].CoverPhoto);
                        $(".mylists li p").eq(i).text(data.data.lst_categoryarticlelist[i].Title);
                    }
                }
            });
        });
        
        $(".mask").click(function(){
            $(".mask").css("display","none");
            $(".mask_box").css("display","none")
        })
        
        var num = 2;
        $("#goback").click(function(){
            
            $.ajax({
                type: "POST",
                url: "http://kxqh.api.milisx.xyz/api/content/getarticledetail",
                dateType: "json",
                data: {
                    "ArticleId": "80313a54-2fa4-4305-af64-d69d62e3ec32"
                },
                success: function (data) {
                    var a = data.data.Body;
                    var arring = [];
                    a.replace(/<img [^>]*src=['"]([^'"]+)[^>]*>/gi, function (match, capture) { 
                         arring.push(capture);
                         });  
                    
                        var prefix = 'http://kxqh.admin.milisx.xyz';
                        var firstsrc = arring[num];
                        var firstsrc = prefix+firstsrc;
                        // console.log(num)
                        $("#img").attr('src',firstsrc)
                        if(num == arring.length-1){
                            num = 1
                        }else{
                            num ++
                        }    
                }
            })
        })
        $("#advance").click(function(){
            $.ajax({
                type: "POST",
                url: "http://kxqh.api.milisx.xyz/api/content/getarticledetail",
                dateType: "json",
                data: {
                    "ArticleId": "80313a54-2fa4-4305-af64-d69d62e3ec32"
                },
                success: function (data) {
                    var a = data.data.Body;
                    var arring = [];
                    a.replace(/<img [^>]*src=['"]([^'"]+)[^>]*>/gi, function (match, capture) {
                         arring.push(capture);
                         });     
                        var prefix = 'http://kxqh.admin.milisx.xyz';
                        var firstsrc = arring[num];
                        var firstsrc = prefix+firstsrc;
                        // console.log(arring);
                        // console.log(num)
                        $("#img").attr('src',firstsrc)
                        if(num == 1){
                            num = arring.length-1
                        }else{
                            num --
                        }    
                }
            })
        })

    })
})(window, jQuery);

