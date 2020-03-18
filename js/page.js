var jQuery = $ || {};
(function(window, $, undefined) {
    $(document).ready(function() {
        var getnavcategorylistparam,getarticledetailparam,getnavcategorylistdataTpl;
        function UrlSearch() {
            var name, value, value1;
            var str = location.href;
            var num = str.indexOf("?");
            str = str.substr(num + 1);
            console.log(str);
            var arr = str.split("&");
            //
            console.log(arr);
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
            getnavcategorylistparam = {
                "navid": this[name],
                "PageIndex": 1,
                "PageSize": 5
            };
        }
        UrlSearch();

        //初始数据
        var  getnavcategorylistgetData = function(){
            var url = "getnavcategorylist";
            $.ajax({
                type: "POST",
                data: getnavcategorylistparam,
                dataType: 'json',
                url: contentUrl + url,
                async : false,
                success: function(data, type) {
                    // console.log(data);
                    if (data.data) {
                        getnavcategorylistdataTpl = data.data;
                    }
                    // console.log(getnavcategorylistdataTpl);
                }
            })
        };
        var getnavcategorylistData1 = function(data){
            var html = '',url ='';
            data && data.length > 0 && $.each(data, function(index, item) {
                // console.log(index);
                url = '/page.html?title=' + item.Name+ '&id='+ item.Id;
                html +='<li><a href="'+url+'">'+item.Name+'</a></li>';

            });
            $(".menuList").html(html);
        };
        //var p = $('#hh').attr('href');console.log(p);

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
               "categoryid": this[name],
               "PageIndex": 1,
               "PageSize": 6
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
                            url = 'aritice/newslistaritice.html?title=' + item.Title + '&id='+ item.Id;
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
                                    var urla ='aritice/culturearitice.html?title=' + data.data.Title + '&id='+ data.data.Id;
                                    $(".firstli a").attr('href',urla);
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
                                    console.log(data.data);
                                    var htmlfirst = '';
                                    htmlfirst += '<div class="pushtime">发表时间:'+data.data.CreateTime+'</div><div>'+data.data.Body+'</div>'
                                    $(".ma-center").html(htmlfirst);
                                    $(".title").text(data.data.Title)
                                }
                            }
                        })
                    }
                }
            })
        };
        $.when(getnavcategorylistgetData()).done(function(){

            getnavcategorylistData1(getnavcategorylistdataTpl.lst_viewnavcategory);
            getariticeData();

        });

    })
})(window, jQuery);

