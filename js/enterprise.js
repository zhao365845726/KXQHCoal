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
                url: "http://kxqh.api.milisx.xyz/api/content/getcategoryarticlelist",
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
                            url: "http://kxqh.api.milisx.xyz/api/content/getarticledetail",
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
                            url: "http://kxqh.api.milisx.xyz/api/content/getarticledetail",
                            success: function(data, type) {
                                if (data.data) {
                                    console.log(data.data);
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
                    url: "http://kxqh.api.milisx.xyz/api/content/getcategoryarticlelist",
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
                            $(".mylists li p").eq(i).text(data.data.lst_categoryarticlelist[i].Title);
                        }
                    }
                });
                $.ajax({
                    type: "POST",
                    url: "http://kxqh.api.milisx.xyz/api/content/getarticledetail",
                    dateType: "json",
                    data: {
                        "ArticleId": "896a48d1-de14-4b2a-84fb-18862f481902"
                    },
                    success: function (data) {
                        $(".mylists img").eq(0).attr('src', data.data.CoverPhoto);
                    },
                });
                $.ajax({
                    type: "POST",
                    url: "http://kxqh.api.milisx.xyz/api/content/getarticledetail",
                    dateType: "json",
                    data: {
                        "ArticleId": "a6a8d7c1-1857-4651-ac6a-0a8b6cb93f12"
                    },
                    success: function (data) {
                        $(".mylists img").eq(1).attr('src', data.data.CoverPhoto);
                    },
                });
                $.ajax({
                    type: "POST",
                    url: "http://kxqh.api.milisx.xyz/api/content/getarticledetail",
                    dateType: "json",
                    data: {
                        "ArticleId": "88c3fd94-f699-4139-a71d-7f0c606617cf"
                    },
                    success: function (data) {
                        $(".mylists img").eq(2).attr('src', data.data.CoverPhoto);
                    },
                });
                $.ajax({
                    type: "POST",
                    url: "http://kxqh.api.milisx.xyz/api/content/getarticledetail",
                    dateType: "json",
                    data: {
                        "ArticleId": "d39b8212-a9bf-4440-a2f0-cd3d15aeaa0e"
                    },
                    success: function (data) {
                        $(".mylists img").eq(3).attr('src', data.data.CoverPhoto);
                    },
                });
                $.ajax({
                    type: "POST",
                    url: "http://kxqh.api.milisx.xyz/api/content/getarticledetail",
                    dateType: "json",
                    data: {
                        "ArticleId": "9e94c7b0-0e77-4e16-b02e-24ba0ec204e5"
                    },
                    success: function (data) {
                        $(".mylists img").eq(4).attr('src', data.data.CoverPhoto);
                    },
                });
                $.ajax({
                    type: "POST",
                    url: "http://kxqh.api.milisx.xyz/api/content/getarticledetail",
                    dateType: "json",
                    data: {
                        "ArticleId": ""
                    },
                    success: function (data) {
                        $(".mylists img").eq(5).attr('src', data.data.CoverPhoto);
                    },
                });
            };
            tabc()
        }else if(valueaa === "企业文化"){
            var tba = function () {
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
                        // console.log(data.data);
                        $(".patha").text("企业文化");
                        $(".title").text("企业文化");
                        $(".mylists").css("display","none");
                        $(".mylists1").css("display","block");
                        $(".ma-center").css("display","none");
                        for (var i = 0; i < data.data.lst_categoryarticlelist.length; i++) {
                            url = '/aritice/enaritice.html?title=' + data.data.lst_categoryarticlelist[i].Title + '&id='+ data.data.lst_categoryarticlelist[i].Id
                            $(".mylists1 li a").eq(i).attr("href", url);
                            $(".mylists1 li p").eq(i).text(data.data.lst_categoryarticlelist[i].Title);
                        }
                    }
                });
                $.ajax({
                    type: "POST",
                    url: "http://kxqh.api.milisx.xyz/api/content/getarticledetail",
                    dateType: "json",
                    data: {
                        "ArticleId": "91a8822e-2cbd-4c1e-a1ea-dab964457a5c"
                    },
                    success: function (data) {
                        $(".mylists1 img").eq(0).attr('src', data.data.CoverPhoto);
                    },
                });
                $.ajax({
                    type: "POST",
                    url: "http://kxqh.api.milisx.xyz/api/content/getarticledetail",
                    dateType: "json",
                    data: {
                        "ArticleId": "2cb159e9-ceeb-4aaa-9f86-d0b486e606bc"
                    },
                    success: function (data) {
                        $(".mylists1 img").eq(1).attr('src', data.data.CoverPhoto);
                    },
                });
                $.ajax({
                    type: "POST",
                    url: "http://kxqh.api.milisx.xyz/api/content/getarticledetail",
                    dateType: "json",
                    data: {
                        "ArticleId": "c34ce2b1-e8f3-4279-a130-85f9b7775431"
                    },
                    success: function (data) {
                        $(".mylists1 img").eq(2).attr('src', data.data.CoverPhoto);
                    },
                });
                $.ajax({
                    type: "POST",
                    url: "http://kxqh.api.milisx.xyz/api/content/getarticledetail",
                    dateType: "json",
                    data: {
                        "ArticleId": "177512b7-9850-4e3a-8b51-2084dfb989fc"
                    },
                    success: function (data) {
                        $(".mylists1 img").eq(3).attr('src', data.data.CoverPhoto);
                    },
                });
                $.ajax({
                    type: "POST",
                    url: "http://kxqh.api.milisx.xyz/api/content/getarticledetail",
                    dateType: "json",
                    data: {
                        "ArticleId": "3ac96430-3257-443b-b564-ac9432f3ad40"
                    },
                    success: function (data) {
                        $(".mylists1 img").eq(4).attr('src', data.data.CoverPhoto);
                    },
                });
                $.ajax({
                    type: "POST",
                    url: "http://kxqh.api.milisx.xyz/api/content/getarticledetail",
                    dateType: "json",
                    data: {
                        "ArticleId": ""
                    },
                    success: function (data) {
                        $(".mylists1 img").eq(5).attr('src', data.data.CoverPhoto);
                    },
                });
            };
            tba()
        }else if(valueaa === "企业荣誉"){
            var tbb = function(){
                $.ajax({
                    type: "POST",
                    url: "http://kxqh.api.milisx.xyz/api/content/getarticledetail",
                    dateType: "json",
                    data: {
                        "ArticleId": "833fa9c6-d6e5-40b7-a1ea-829f5a0ebc15"
                    },
                    success: function (data) {
                        $(".mylists1").css("display","none");
                        $(".mylists").css("display","none");
                        $(".ma-center").css("display","block")
                        var htmlfirst = '';
                        htmlfirst += '<div class="pushtime">发表时间:'+data.data.CreateTime+'</div><div>'+data.data.Body+'</div>'
                        $(".ma-center").html(htmlfirst);
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
                url: "http://kxqh.api.milisx.xyz/api/content/getcategoryarticlelist",
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
                        $(".mylists1 li p").eq(i).text(data.data.lst_categoryarticlelist[i].Title);
                    }
                }
            });
            $.ajax({
                type: "POST",
                url: "http://kxqh.api.milisx.xyz/api/content/getarticledetail",
                dateType: "json",
                data: {
                    "ArticleId": "91a8822e-2cbd-4c1e-a1ea-dab964457a5c"
                },
                success: function (data) {
                    $(".mylists1 img").eq(0).attr('src', data.data.CoverPhoto);
                },
            });
            $.ajax({
                type: "POST",
                url: "http://kxqh.api.milisx.xyz/api/content/getarticledetail",
                dateType: "json",
                data: {
                    "ArticleId": "2cb159e9-ceeb-4aaa-9f86-d0b486e606bc"
                },
                success: function (data) {
                    $(".mylists1 img").eq(1).attr('src', data.data.CoverPhoto);
                },
            });
            $.ajax({
                type: "POST",
                url: "http://kxqh.api.milisx.xyz/api/content/getarticledetail",
                dateType: "json",
                data: {
                    "ArticleId": "c34ce2b1-e8f3-4279-a130-85f9b7775431"
                },
                success: function (data) {
                    $(".mylists1 img").eq(2).attr('src', data.data.CoverPhoto);
                },
            });
            $.ajax({
                type: "POST",
                url: "http://kxqh.api.milisx.xyz/api/content/getarticledetail",
                dateType: "json",
                data: {
                    "ArticleId": "177512b7-9850-4e3a-8b51-2084dfb989fc"
                },
                success: function (data) {
                    $(".mylists1 img").eq(3).attr('src', data.data.CoverPhoto);
                },
            });
            $.ajax({
                type: "POST",
                url: "http://kxqh.api.milisx.xyz/api/content/getarticledetail",
                dateType: "json",
                data: {
                    "ArticleId": "3ac96430-3257-443b-b564-ac9432f3ad40"
                },
                success: function (data) {
                    $(".mylists1 img").eq(4).attr('src', data.data.CoverPhoto);
                },
            });
            $.ajax({
                type: "POST",
                url: "http://kxqh.api.milisx.xyz/api/content/getarticledetail",
                dateType: "json",
                data: {
                    "ArticleId": ""
                },
                success: function (data) {
                    $(".mylists1 img").eq(5).attr('src', data.data.CoverPhoto);
                },
            });
        });
        $(".tabb").click(function(){
            $.ajax({
                type: "POST",
                url: "http://kxqh.api.milisx.xyz/api/content/getarticledetail",
                dateType: "json",
                data: {
                    "ArticleId": "af142646-6993-4ca2-b8e5-e7dd045b5213"
                },
                success: function (data) {
                    // console.log(data)
                    var prefix = 'http://kxqh.admin.milisx.xyz';
                    $(".mylists1").css("display","none");
                    $(".mylists").css("display","none");
                    $(".ma-center").css("display","block")
                    var htmlfirst = '';
                    htmlfirst += '<div class="pushtime">发表时间:'+data.data.CreateTime+'</div><div>'+data.data.Body+'</div>'
                    $(".ma-center").html(htmlfirst);
                    for(var i = 0; i< $(".ma-center p img").length;i++){
                        var src = $($(".ma-center p img")[i]).attr('src');
                        var src1 = prefix + src;
                        $($(".ma-center p img")[i]).attr('src',src1);
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
                        $(".mylists li p").eq(i).text(data.data.lst_categoryarticlelist[i].Title);
                    }
                }
            });
            $.ajax({
                type: "POST",
                url: "http://kxqh.api.milisx.xyz/api/content/getarticledetail",
                dateType: "json",
                data: {
                    "ArticleId": "896a48d1-de14-4b2a-84fb-18862f481902"
                },
                success: function (data) {
                    $(".mylists img").eq(0).attr('src', data.data.CoverPhoto);
                },
            });
            $.ajax({
                type: "POST",
                url: "http://kxqh.api.milisx.xyz/api/content/getarticledetail",
                dateType: "json",
                data: {
                    "ArticleId": "a6a8d7c1-1857-4651-ac6a-0a8b6cb93f12"
                },
                success: function (data) {
                    $(".mylists img").eq(1).attr('src', data.data.CoverPhoto);
                },
            });
            $.ajax({
                type: "POST",
                url: "http://kxqh.api.milisx.xyz/api/content/getarticledetail",
                dateType: "json",
                data: {
                    "ArticleId": "88c3fd94-f699-4139-a71d-7f0c606617cf"
                },
                success: function (data) {
                    $(".mylists img").eq(2).attr('src', data.data.CoverPhoto);
                },
            });
            $.ajax({
                type: "POST",
                url: "http://kxqh.api.milisx.xyz/api/content/getarticledetail",
                dateType: "json",
                data: {
                    "ArticleId": "d39b8212-a9bf-4440-a2f0-cd3d15aeaa0e"
                },
                success: function (data) {
                    $(".mylists img").eq(3).attr('src', data.data.CoverPhoto);
                },
            });
            $.ajax({
                type: "POST",
                url: "http://kxqh.api.milisx.xyz/api/content/getarticledetail",
                dateType: "json",
                data: {
                    "ArticleId": "9e94c7b0-0e77-4e16-b02e-24ba0ec204e5"
                },
                success: function (data) {
                    $(".mylists img").eq(4).attr('src', data.data.CoverPhoto);
                },
            });
            $.ajax({
                type: "POST",
                url: "http://kxqh.api.milisx.xyz/api/content/getarticledetail",
                dateType: "json",
                data: {
                    "ArticleId": ""
                },
                success: function (data) {
                    $(".mylists img").eq(5).attr('src', data.data.CoverPhoto);
                },
            });
        });
    })
})(window, jQuery);

