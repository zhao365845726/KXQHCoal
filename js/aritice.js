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
                        $(".detalic").html(data.data.Body);
                        for(var i = 0; i< $(".detalic p img").length;i++){
                            var src = $($(".detalic p img")[i]).attr('src');
                            var src1 = prefix + src;
                            $($(".detalic p img")[i]).attr('src',src1);
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
                    $(".detalic").html(data.data.Body);
                    for(var i = 0; i< $(".detalic p img").length;i++){
                        var src = $($(".detalic p img")[i]).attr('src');
                        var src1 = prefix + src;
                        $($(".detalic p img")[i]).attr('src',src1);
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
                    $(".detalic").html(data.data.Body);
                    for(var i = 0; i< $(".detalic p img").length;i++){
                        var src = $($(".detalic p img")[i]).attr('src');
                        var src1 = prefix + src;
                        $($(".detalic p img")[i]).attr('src',src1);
                    }
                    // document.getElementById('detalic').innerHTML= a;
                    // $(".ma-center img").attr('src', data.data.CoverPhoto);
                    $(".Prevpage span").text(data.obj.PreviousArticleTitle).attr('id',data.obj.PreviousArticleId);
                    $(".Nextpage span").text(data.obj.NextArticleTitle).attr('id',data.obj.NextArticleId);
                    $(".xx-zi .time").text("发表时间   "+data.data.CreateTime);
                }
            })
        });
    })
})(window, jQuery);

