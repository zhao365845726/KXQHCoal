var jQuery = $ || {};
(function(window, $, undefined) {
    $(document).ready(function() {
        var getnavcategorylistparam,getarticledetailparam,getnavcategorylistdataTpl,valueaa;
        function UrlSearch() {
            var name, value, value1;
            var str = location.href;
            var num = str.indexOf("?");
            str = str.substr(num + 1);
            var arr = str.split("&");
            //
            // console.log(arr);
            for (var i = 0; i < arr.length; i++) {
                num = arr[i].indexOf("=");
                if (num > 0) {
                    name = arr[i].substring(0, num);
                    value = arr[i].substr(num + 1);
                    value1 = arr[0].substr(num + 1);
                    // console.log(value1);
                    this[name] = value;
                }
                // var select = decodeURI(value1).substr(3)
                // console.log(decodeURI(this[name]));
                // $(".title").text(decodeURI(value1).substr(3));
                $(".patha").text(decodeURI(value1).substr(3));

            }
            valueaa = decodeURI(value1).substr(3);
            getnavcategorylistparam = {
                "navid": this[name],
                "PageIndex": 1,
                "PageSize": 5
            };
        }
        UrlSearch();

        //初始数据
        var getariticeData = function(){

            var firstId = $(".menuList a").eq(0).attr("href");
            var name1, value1, value11;
            var str1 = firstId;
            var num1 = str1.indexOf("?");
            str1 = str1.substr(num1 + 1);
            var arr1 = str1.split("&");
            for (var i = 0; i < arr1.length; i++) {
                num1 = arr1[i].indexOf("=");
                if (num1 > 0) {
                    name1 = arr1[i].substring(0, num1);
                    value1 = arr1[i].substr(num1 + 1);
                    value11 = arr1[0].substr(num1 + 1);
                    this[name] = value1;
                }
            }
            var param = {
                "ArticleId": this[name]
            };
            $.ajax({
                type: "POST",
                data: param,
                dataType: 'json',
                url: "http://api.gpqhmy.com.cn/api/content/getcategoryarticlelist",
                success: function(data, type) {
                    if (data.data.lst_categoryarticlelist.length > 2) {
                        console.log(data.data);
                        var html = '',url ='';
                        $.each(data.data.lst_categoryarticlelist, function(index, item) {
                            url = '/newslistaritice.html?title=' + item.Title + '&id='+ item.Id;
                            html +='<li><a href="'+url+'">'+item.Title+'</a><span class="date">'+item.CreateTime+'</span></li>';
                        });
                        $('.ma-center ul').html(html);
                        var firstId1 = $(".ma-center ul a").eq(0).attr("href");
                        var name2, value2, value12;
                        var str2 = firstId1;
                        var num2 = str2.indexOf("?");
                        str2 = str2.substr(num2 + 1);
                        var arr2 = str2.split("&");
                        for (var i = 0; i < arr1.length; i++) {
                            num2 = arr2[i].indexOf("=");
                            if (num2 > 0) {
                                name2 = arr2[i].substring(0, num2);
                                value2 = arr2[i].substr(num2 + 1);
                                value12 = arr2[0].substr(num2 + 1);
                                this[name] = value2;
                            }
                        }
                        var param1 = {
                            "ArticleId": this[name]
                        }
                        $.ajax({
                            type: "POST",
                            data: param1,
                            dataType: 'json',
                            url: "http://api.gpqhmy.com.cn/api/content/getarticledetail",
                            success: function(data, type) {
                                if (data.data) {
                                    $(".firstli img").attr('src',data.data.CoverPhoto);
                                    $(".firstli h1").text(data.data.Title);
                                    $(".firstli p").html(data.data.Body);
                                }
                            }
                        })
                    }else {
                        $.ajax({
                            type: "POST",
                            data: {
                                "ArticleId": "2c1c1594-1aea-4c28-8e71-65e864edcd86"
                            },
                            dataType: 'json',
                            url: "http://api.gpqhmy.com.cn/api/content/getarticledetail",
                            success: function(data, type) {
                                if (data.data) {
                                    // console.log(data.data);
                                    var htmlfirst = '';
                                    htmlfirst += '<div class="xx-zi xx-zz"><span class="time">发表时间:</span>'+data.data.CreateTime+'</div><div>'+data.data.Body+'</div>'
                                    $(".ma-center").html(htmlfirst);
                                    $(".title").text(data.data.Title)
                                }
                            }
                        })
                    }
                }
            })
        };

        if(valueaa === "产品介绍"){
            var tabc = function () {
                $.ajax({
                    type: "post",
                    url: "http://api.gpqhmy.com.cn/api/content/getcategoryarticlelist",
                    dateType: "json",
                    data: {
                        "categoryid": "11dea9ec-4d9b-4c09-9926-97d12929920c",
                        "PageIndex": 1,
                        "PageSize": 12
                    },
                    success: function (data) {
                        console.log(data.data);
                        $(".title").text("产品介绍");
                        $(".patha").text("产品介绍");
                        $(".ma-center").css("display", "none");
                        $(".mylists1").css("display", "none");
                        $(".mylists").css("display", "block");
                        for (var i = 0; i < data.data.lst_categoryarticlelist.length; i++) {
                            var url =''
                            url = '/aritice/enaritice.html?title=' + data.data.lst_categoryarticlelist[i].Title + '&id='+ data.data.lst_categoryarticlelist[i].Id
                            $(".mylists li a").eq(i).attr("href", url);
                            $(".mylists li  a img").eq(i).attr("src", data.data.lst_categoryarticlelist[i].CoverPhoto);
                            $(".mylists li p").eq(i).text(data.data.lst_categoryarticlelist[i].Title);
                        }
                    }
                });
            };
            tabc()
        }else if(valueaa === "企业文化"){
            var taba = function () {
                $.ajax({
                    type: "post",
                    url: "http://api.gpqhmy.com.cn/api/content/getcategoryarticlelist",
                    dateType: "json",
                    data: {
                        "categoryid": "b1c97066-0750-49d8-9b34-cb3f85f3a097",
                        "PageIndex": 1,
                        "PageSize": 12
                    },
                    success: function (data) {
                        // console.log(data.data);
                        $(".patha").text("企业文化");
                        $(".title").text("企业文化");
                        $(".mylists").css("display","none");
                        $(".mylists1").css("display","block");
                        $(".ma-center").css("display","none");
                        for (var i = 0; i < data.data.lst_categoryarticlelist.length; i++) {
                            url = '/aritice/enaritice.html?title=' + data.data.lst_categoryarticlelist[i].Title + '&id='+ data.data.lst_categoryarticlelist[i].Id
                            $(".mylists1 li a").eq(i).attr("href", url);
                            $(".mylists1 li a img").eq(i).attr("src", data.data.lst_categoryarticlelist[i].CoverPhoto);
                            $(".mylists1 li p").eq(i).text(data.data.lst_categoryarticlelist[i].Title);
                        }
                    }
                });
                
            };
            taba()
        }else if(valueaa === "企业荣誉"){
            var tbb = function(){
                $.ajax({
                    type: "POST",
                    url: "http://api.gpqhmy.com.cn/api/content/getarticledetail",
                    dateType: "json",
                    data: {
                        "ArticleId": "80313a54-2fa4-4305-af64-d69d62e3ec32"
                    },
                    success: function (data) {
                        var a = data.data.Body;
                    // console.log(a)
					var arring = [];
                    a.replace(/<img [^>]*src=['"]([^'"]+)[^>]*>/gi, function (match, capture) {
                        arring.push(capture);
                        });     
                    var prefix = 'http://kxqh.admin.milisx.xyz';
                    $(".mylists1").css("display","none");
                    $(".mylists").css("display","none");
                    $(".ma-center").css("display","block")
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
            };
            tbb()
        }else {
            getariticeData();
        }


        $(".taba").click(function () {
            $.ajax({
                type: "post",
                url: "http://api.gpqhmy.com.cn/api/content/getcategoryarticlelist",
                dateType: "json",
                data: {
                    "categoryid": "b1c97066-0750-49d8-9b34-cb3f85f3a097",
                    "PageIndex": 1,
                    "PageSize": 12
                },
                success: function (data) {
                    // console.log(data.data);
                    $(".patha").text("企业文化");
                    $(".title").text("企业文化");
                    $(".mylists").css("display","none");
                    $(".mylists1").css("display","block");
                    $(".ma-center").css("display","none");
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
                url: "http://api.gpqhmy.com.cn/api/content/getarticledetail",
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
                    $(".ma-center").css("display","block")
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
                url: "http://api.gpqhmy.com.cn/api/content/getcategoryarticlelist",
                dateType: "json",
                data: {
                    "categoryid": "11dea9ec-4d9b-4c09-9926-97d12929920c",
                    "PageIndex": 1,
                    "PageSize": 12
                },
                success: function (data) {
                    console.log(data.data);
                    $(".title").text("产品介绍");
                    $(".patha").text("产品介绍");
                    $(".ma-center").css("display", "none");
                    $(".mylists1").css("display", "none");
                    $(".mylists").css("display", "block");
                    for (var i = 0; i < data.data.lst_categoryarticlelist.length; i++) {
                        var url =''
                        url = '/aritice/enaritice.html?title=' + data.data.lst_categoryarticlelist[i].Title + '&id='+ data.data.lst_categoryarticlelist[i].Id
                        $(".mylists li a").eq(i).attr("href", url);
                        $(".mylists li  a img").eq(i).attr("src", data.data.lst_categoryarticlelist[i].CoverPhoto);
                        $(".mylists li p").eq(i).text(data.data.lst_categoryarticlelist[i].Title);
                    }
                }
            });
        });
    })
    $(".mask").click(function(){
        $(".mask").css("display","none");
        $(".mask_box").css("display","none")
    })
    
    var num = 2;
    $("#goback").click(function(){
        
        $.ajax({
            type: "POST",
            url: "http://api.gpqhmy.com.cn/api/content/getarticledetail",
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
            url: "http://api.gpqhmy.com.cn/api/content/getarticledetail",
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
})(window, jQuery);

