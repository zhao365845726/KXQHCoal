var jQuery = $ || {};
(function(window, $, undefined) {
    $(document).ready(function() {
        var getnavcategorylistparam,getarticledetailparam,getnavcategorylistdataTpl;
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
            getnavcategorylistparam = {
                "categoryid": this[name],
                "PageIndex": 1,
                "PageSize": 6
            };
        }
        UrlSearch();

        //初始数据

        var getariticeData = function(){

            $.ajax({
                type: "POST",
                data: getnavcategorylistparam,
                dataType: 'json',
                url: "http://kxqh.api.milisx.xyz/api/content/getcategoryarticlelist",
                success: function(data, type) {

                        console.log(data.data);
                        var html = '',url ='';
                        $.each(data.data.lst_categoryarticlelist, function(index, item) {
                            url = '/aritice/newslistaritice.html?title=' + item.Title + '&id='+ item.Id;
                            html +='<li><a href="'+url+'">'+item.Title+'</a><span class="date">'+item.CreateTime+'</span></li>';
                        });
                        $('.ma-center ul').html(html);
                        var firstId1 = $(".ma-center ul a").eq(0).attr("href");
                        var name2, value2, value12;
                        var str2 = firstId1;
                        var num2 = str2.indexOf("?");
                        str2 = str2.substr(num2 + 1);
                        var arr2 = str2.split("&");
                        for (var i = 0; i < arr2.length; i++) {
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
                                    var urla ='aritice/culturearitice.html?title=' + data.data.Title + '&id='+ data.data.Id;
                                    $(".firstli a").attr('href',urla);
                                }
                            }
                        })

                }
            })
        };
        $.when().done(function(){
            getariticeData();

        });
    })
})(window, jQuery);

