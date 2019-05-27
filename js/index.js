var jQuery = $ || {};
(function(window, $, undefined) {
    $(document).ready(function() {
        var homenavparam,homedataparam,getfriendlinklistparam,dataTpl;
        homenavparam = {};
        homedataparam = {
            "part_one": {
                "categoryid": "ac1e5571-d81f-4fc7-886c-c4ba6d7a871a",
                "PageIndex": 1,
                "PageSize": 10
            },
            "part_two": {
                "categoryid": "a460675f-8a68-4bbb-b0cd-825f7578fe00",
                "PageIndex": 1,
                "PageSize": 5
            },
            "part_three": {
                "categoryid": "e6e0ea92-0f43-418b-b838-b88b69744e57",
                "PageIndex": 1,
                "PageSize": 5
            },
            "part_four": {
                "navid": "fefb6175-f4b7-4205-ae94-5f655757d926",
                "PageIndex": 1,
                "PageSize": 5
            },
            "part_five": {
                "navid": "b5af22c8-59b7-4cbd-94c0-6d8ed6c2473a",
                "PageIndex": 1,
                "PageSize": 5
            },
            "part_six": {
                "categoryid": "c8e12965-b96e-4d88-986b-5063e79bac7a",
                "PageIndex": 1,
                "PageSize": 5
            },
            "part_seven": {
                "categoryid": "71839a52-fbf9-47b7-a864-36e727b86023",
                "PageIndex": 1,
                "PageSize": 5
            }
        };
        getfriendlinklistparam ={
            "PageIndex": 1,
            "PageSize": 6
        };
        //初始首页导航数据
        var getnavData = function(){
            var url = "qhhomenav";
            $.ajax({
                type: "POST",
                data: homenavparam,
                dataType: 'json',
                url: customUrl + url,
                async : false,
                success: function(data, type) {
                    // console.log(data);
                    if (data.data) {
                        datanavTpl = data.data;
                    }
                }
            })
        };
        // 导航数据
        var navData = function(data){
            var indexa = 0;
            data && data.length > 0 && $.each(data, function (index, item) {
                $(".navt").eq(index - 1).text(item.Name);
                for (var j = 0; j < item.List_VNC.length; j++) {
                    indexa++;
                    text1 = item.List_VNC[j].Name;
                    $(".navc").eq(indexa-1).text(text1)
                }
            });
        };
        // 初始首页数据
        var gethomeData = function(){
            var url = "qhhomedata";
            $.ajax({
                type: "POST",
                data: homedataparam,
                dataType: 'json',
                url: customUrl + url,
                async : false,
                success: function(data, type) {
                    // console.log(data);
                    if (data.data) {
                        datahomeTpl = data.data;
                    }
                }
            })
        };
        // 首页数据
        var onehomedataData = function(data){
            // console.log(data)
            var url = '',html = '';
        	data && data.length > 0 && $.each(data, function(index, item) {
        		url = '/aritice/newslistaritice.html?title=' + item.Title + '&id='+ item.Id;
        		html +='<li><a href="'+url+'">'+item.Title+'</a><span class="date">'+item.CreateTime+'</span></li>';
        		$(".test img").eq(index).attr("src",item.CoverPhoto);
                $(".test a").eq(index).attr("href",url)
        	});
        	$('.bd1 ul').html(html);
        };
        var twohomedataData = function(data){
            // console.log(data)
            var url = '',html = '';
            data && data.length > 0 && $.each(data, function(index, item) {
                url = '/aritice/newslistaritice.html?title=' + item.Title + '&id='+ item.Id;
                html +='<li><a href="'+url+'">'+item.Title+'</a><span class="date">'+item.CreateTime+'</span></li>';
            });
            $('#jiceng ul').html(html);
        };
        var fourhomedataData = function(data){
            // console.log(data)
            // data.splice()
            // data.slice(0,5)
            // console.log(data)
            var url = '',html = '';
            data && data.length > 0 && $.each(data, function(index, item) {
                url = '/aritice/securityaritice.html?title=' + item.Title + '&id='+ item.Id;
                html +='<li><a href="'+url+'">'+item.Title+'</a><span class="date">'+item.CreateTime+'</span></li>';
            });
            $('.new-center ul').html(html);
        };
        var fivehomedataData = function(data){
            // console.log(data)
            var url = '',html = '';
            data && data.length > 0 && $.each(data, function(index, item) {
                url = '/aritice/qianhearitice.html?title=' + item.Title + '&id='+ item.Id;
                html +='<li><a href="'+url+'">'+item.Title+'</a><span class="date">'+item.CreateTime+'</span></li>';
            });
            $('.new-center1 ul').html(html);
        };
        var sixhomedataData = function(data){
            // console.log(data)
            var url = '',html = '';
            data && data.length > 0 && $.each(data, function(index, item) {
                url = '/aritice/newslistaritice.html?title=' + item.Title + '&id='+ item.Id;
                html +='<li><em>'+(index+1)+'</em><a href="'+url+'">'+item.Title+'</a></li>';
            });
            $('.new-click ul').html(html);
        };
        var sevenhomedataData = function(data){
            // console.log(data);
            var url = '',html = '';
            data && data.length > 0 && $.each(data, function(index, item) {
                url = '/aritice/newslistaritice.html?title=' + item.Title + '&id='+ item.Id;
                html +='<li><a href="'+url+'">'+item.Title+'</a></li>';
            });
            $('#scroll1 ul').html(html);
            $('#scroll2 ul').html(html);
        };
        // 初始友情链接数据
        var getfriendlinklistData = function(){
            var url = 'getfriendlinklist';
            $.ajax({
                type: "POST",
                data: getfriendlinklistparam,
                dataType: 'json',
                url: contentUrl + url,
                async : false,
                success: function(data, type) {
                    // console.log(data);
                    if (data.data) {
                        datafriendlinkTpl = data.data;
                    }
                    //
                }
            })
        };
        // 友情链接数据
        var friendlinklistData = function(data){
            var html = '',url ='';
            data && data.length > 0 && $.each(data, function(index, item) {
                url = item.Url;
                html +='<li><a href="'+url+'"target="_blank">'+item.Name+'</a></li>';
            });
            $('.frent-link ul').html(html);
        }

        $.when(getnavData()).done(function(){
            navData(datanavTpl);
        });
        $.when(gethomeData()).done(function(){
            onehomedataData(datahomeTpl.lst_part_one);
            twohomedataData(datahomeTpl.lst_part_two);
            fourhomedataData(datahomeTpl.lst_part_four);
            fivehomedataData(datahomeTpl.lst_part_five);
            sixhomedataData(datahomeTpl.lst_part_six);
            sevenhomedataData(datahomeTpl.lst_part_seven)
        });
        $.when(getfriendlinklistData()).done(function () {
            friendlinklistData(datafriendlinkTpl)
        });
        // 首页轮播
        var $focusNews = $(".focusNews");
        var $test = $(".bd");
        var $imageLi = $(".test li");
        var $cilclesLi = $(".hd ul li");
        $(".test ul").append($imageLi.eq(0).clone());
        var idxa = 0;
        var timera = setInterval(rightBtnHandle, 5000);
        $focusNews.mouseenter(function () {
            clearInterval(timera);
        });
        $focusNews.mouseleave(function () {
            timera = setInterval(rightBtnHandle, 5000);
        });
        $(".rightBt").mouseenter(rightBtnHandle);
        function rightBtnHandle() {
            if ($test.is(":animated")) return;
            idxa++;
            $test.animate({ "left": -582 * idxa }, 300, function () {
                if (idxa > 4) {
                    idxa = 0;
                    $test.css("left", 0);
                }
            });
            changeCircl();
        }
        $(".leftBt").mouseenter(function () {
            if ($test.is(":animated")) return;
            idxa--;
            if (idxa < 0) {
                idxa = 4;
                $test.css("left", -5 * 582);
            }
            $test.animate({ "left": -582 * idx }, 300);
            changeCircl();
        });
        $cilclesLi.mouseenter(function () {
            idxa = $(this).index();
            $test.animate({ "left": -582 * idxa }, 300);
            changeCircl();
        });
        function changeCircl() {
            var n = idxa <= 4 ? idxa : 0;
            $cilclesLi.eq(n).addClass("on").siblings().removeClass("on");
        }
        // 搜索
        $(".button").click(function () {
            $(".carousel").css("display","none");
            $(".content").css("display","none");
            $(".content-in").css("display","none");
            $("#search").css("display","block");
            var txt = $(".search").val();
            console.log(txt.length)
            if (txt.length == 0) {
                alert("请输入要搜索的内容")
            } else {
                $.ajax({
                    type: "post",
                    url: "http://kxqh.api.milisx.xyz/api/content/getarticlesearchlist",
                    dateType: "json",
                    data: {
                        "Title": txt,
                        "PageIndex": 1,
                        "PageSize": 12
                    },
                    success: function (data) {
                        // console.log(data);

                        $("#ma").css("display","none")
                        $(".searchcon ul").empty();
                        for (var i = 0; i < data.data.lst_articlesearchlist.length; i++) {
                            // console.log(data.data.lst_articlesearchlist[i].Id)
                            $(".searchcon ul").append(" <li id=" + data.data.lst_articlesearchlist[i].Id + ">" + data.data.lst_articlesearchlist[i].Title + "<span>" + data.data.lst_articlesearchlist[i].CreateTime + "</span>" + "</li>")
                        }
                    }
                })
            }

        });
        $(".searchcon ul").on("click", "li", function () {
            $.ajax({
                type: "POST",
                url: "http://kxqh.api.milisx.xyz/api/content/getarticledetail",
                dataType: "json",
                data: {
                    "ArticleId": $(this).attr("id"),
                },
                success: function (data) {
                    console.log(data);

                    $(".searchcon").empty();
                    $(".searchcon").append("<img src=" + data.data.CoverPhoto + ">" + "<div>" + data.data.Body + "</div>");
                }
            })
        });

    })

})(window, jQuery);
