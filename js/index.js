
// ----------------vue

var routes = [
    {
        path: "/",
        component: {
            template: `
            <div class="container">
        <div class="content">
            <div class="notice row">
                <div class="part1"><h3>通知公告</h3></div> 
                 <div class="part2" id="part2">
                    <div id="scroll1">
                        <ul>
                            <li><router-link to="/page1"></router-link></li>
                        </ul>
                    </div>
                     <div id="scroll2">
                            <ul>
                            <li><router-link to="/page1"></router-link></li>
                            </ul>
                    </div>
                 </div>           
            </div>
            
            <div class="slider row">
                <!--轮播图-->
                <div class="focusNews col-lg-6">
                    <div class="bd">
                        <ul class="test">
                            <li>
                                 <a to="/page1"><img  src=""></a>
                            </li>
                            <li>
                                 <a to="/page1"><img  src=""></a>
                            </li>
                            <li>
                                  <a to="/page1"><img  src=""></a>
                            </li>
                            <li>
                                 <a to="/page1"><img  src=""></a>
                            </li>
                            <li>
                                 <a to="/page1"><img  src=""></a>
                            </li>
                        </ul>
                    </div>
                    <div class="hd">
                        <ul>
                            <li>
                                <span></span>
                            </li>
                            <li>
                                <span></span>
                            </li>
                            <li class="on">
                                <span></span>
                            </li>
                            <li>
                                <span></span>
                            </li>
                            <li>
                                <span></span>
                            </li>
                        </ul>
                    </div>
                </div>
              
                <div class="box-right col-lg-6">
                    <div class="box-new">
                        <div class="hd1">
                            <ul>
                                <li class="on"><a href="#">公司要闻</a></li>
                                <li class="" style="display: none"><a title="视频" href="#">视频</a></li>
                            </ul>
                        </div>
                        <div class="bd1">
                            <ul>
                                <li>
                                    <span class="date"></span>
                                    <a to="/page1" class="a1" ></a>
                                </li>
                                <li>
                                    <span class="date"></span>
                                    <a to="/page1" class="a2"></a>
                                </li>
                                <li>
                                    <span class="date"></span>
                                    <a to="/page1" class="a3"></a>
                                </li>
                                <li>
                                    <span class="date"></span>
                                    <a to="/page1" class="a4"></a>
                                </li>
                                <li>
                                    <span class="date"></span>
                                    <a to="/page1" class="a5"></a>
                                </li>
                               
                            </ul>
                            
                        </div>
                    </div>
                    <div class="box-new">
                        <div class="hd2">
                            <ul>
                                <li class="on"><a title="基层动态" href="#">基层动态</a></li>
                                <li class="" style="display: none"><a title="外界视点" href="#">外界</a></li>
                            </ul>
                        </div>
                        <div class="bd2">
                            <ul>
                                <li class="first">
                                    <span class="date"></span>
                                    <a to="/page1" class="a6"></a>
                                </li>
                                <li>
                                    <span class="date"></span>
                                    <a to="/page1" class="a7"></a>
                                </li>
                                <li>
                                    <span class="date"></span>
                                    <a to="/page1" class="a8"></a>
                                </li>
                                <li>
                                    <span class="date"></span>
                                    <a to="/page1" class="a9"></a>
                                </li>
                                <li>
                                    <span class="date"></span>
                                    <a to="/page1" class="a10"></a>
                                </li>
                               
                            </ul>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div class="row content-banner"><img src="img/banner.jpg" alt=""></div>
            <div class="row news-content">
           
                <div class="col-lg-4">
                    <div class="news-head">
                        <ul>
                            <li class="on"><a>安全生产</a><a href="security.html">+more</a></li>
                        </ul>
                    </div>
                    <div class="new-center">
                        <div>
                            <ul>
                                <li>
                                    <span class="date"></span>
                                    <a to="/page3" class="a11"></a>
                                </li>
                                <li>
                                    <span class="date"></span>
                                    <a to="/page3" class="a12"></a>
                                </li>
                                <li>
                                    <span class="date"></span>
                                    <a to="/page3" class="a13"></a>
                                </li>
                                <li>
                                    <span class="date"></span>
                                    <a to="/page3" class="a14"></a>
                                </li>
                                <li>
                                    <span class="date"></span>
                                    <a to="/page3" class="a15"></a>
                                </li>
                                <li>
                                    <span class="date"></span>
                                    <a to="/page3" class="a16"></a>
                                </li>
                                <li>
                                    <span class="date"></span>
                                    <a to="/page3" class="a17"></a>
                                </li>
                                <li>
                                    <span class="date"></span>
                                    <a to="/page3" class="a18"></a>
                                </li>
                                <li>
                                    <span class="date"></span>
                                    <a to="/page3" class="a19"></a>
                                </li>
                                <li>
                                    <span class="date"></span>
                                    <a to="/page3" class="a20"></a>
                                </li>
                            </ul>
                        </div>
                        <div style="display: none;">
                            <ul>
                                <li>
                                    <span class="date">02-25</span>
                                    <a href=""></a>
                                </li>
                                <li>
                                    <span class="date">02-25</span>
                                    <a >
                                    </a>
                                </li>
                                <li>
                                    <span class="date">02-25</span>
                                    <a>
                                    </a>
                                </li>
                                <li>
                                    <span class="date">02-25</span>
                                    <a>
                                    </a>
                                </li>
                                <li>
                                    <span class="date">02-25</span>
                                    <a></a>
                                </li>
                                <li>
                                    <span class="date">02-25</span>
                                    <a>
                                    </a>
                                </li>
                                <li>
                                    <span class="date">02-22</span>
                                    <a >放失业保险稳岗补贴4.3亿元</a>
                                </li>
                                <li>
                                    <span class="date">02-22</span>
                                    <a></a>
                                </li>
                                <li>
                                    <span class="date">02-22</span>
                                    <a></a>
                                </li>

                            </ul>
                        </div>
                        <div style="display: none;">
                            <ul>
                                <li>
                                    <span class="date">02-26</span>
                                    <a></a>
                                </li>
                                <li>
                                    <span class="date">02-26</span>
                                    <a></a>
                                </li>
                                <li>
                                    <span class="date">02-26</span>
                                    <a></a>
                                </li>
                                <li>
                                    <span class="date">02-26</span>
                                    <a></a>
                                </li>
                                <li>
                                    <span class="date">02-26</span>
                                    <a></a>
                                </li>
                                <li>
                                    <span class="date">02-26</span>
                                    <a ></a>
                                </li>
                                <li>
                                    <span class="date">02-26</span>
                                    <a></a>
                                </li>
                                <li>
                                    <span class="date">02-26</span>
                                    <a></a>
                                </li>
                                <li>
                                    <span class="date">02-25</span>
                                    <a></a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 bgc">
                    <div class="news-head1">
                        <ul>
                            <li class="on"><a href="">前和党建</a><a href="qianhe.html">+more</a></li>
                            <li class="" style="display: none"><a  href=""></a></li>
                            <li class="" style="display: none"><a  href=""></a></li>
                        </ul>
                    </div>
                    <div class="new-center1">
                        <div style="display: block;">
                            <ul>
                                <li>
                                    <span class="date"></span>
                                    <a to="/page2" class="a21"></a>
                                </li>
                                <li>
                                    <span class="date"></span>
                                    <a to="/page2" class="a22"></a>
                                </li>
                                <li>
                                    <span class="date"></span>
                                    <a to="/page2" class="a23"></a>
                                </li>
                                <li>
                                    <span class="date"></span>
                                    <a to="/page2" class="a24"></a>
                                </li>
                                <li>
                                    <span class="date"></span>
                                    <a to="/page2" class="a25"></a>
                                </li>
                                <li>
                                    <span class="date"></span>
                                    <a to="/page2" class="a26"></a>
                                </li>
                                <li>
                                    <span class="date"></span>
                                    <a to="/page2" class="a27"></a>
                                </li>
                                <li>
                                    <span class="date"></span>
                                    <a to="/page2" class="a28"></a>
                                </li>
                                <li>
                                    <span class="date"></span>
                                    <a to="/page2" class="a29"></a>
                                </li>
                                <li>
                                    <span class="date"></span>
                                    <a to="/page2" class="a30"></a>
                                </li>
                            </ul>
                        </div>
                        
                        
                    </div>
                </div>
                <div class="col-lg-4 bgc">
                    <div class="news-head">
                        <h3><span>热点专题</span><a href="newslist.html">+more</a></h3>
                    </div>
                    <div class="new-click">
                        <ul>
                            <li>
                                <em class="number">01</em>
                                <a to="/page1"></a>
                            </li>
                            <li>
                                <em class="number">02</em>
                                <a to="/page1" ></a>
                            </li>
                            <li>
                                <em class="number">03</em>
                                <a to="/page1"></a>
                            </li>
                            <li>
                                <em class="number">04</em>
                                <a to="/page1"></a>
                            </li>
                            <li>
                                <em class="number">05</em>
                                <a to="/page1"></a>
                            </li>
                            <li>
                                <em class="number">06</em>
                                <a to="/page1"></a>
                            </li>
                            <li>
                                <em class="number">07</em>
                                <a to="/page1"></a>
                            </li>
                            <li>
                                <em class="number">08</em>
                                <a to="/page1"></a>
                            </li>
                            <li>
                                <em class="number">09</em>
                                <a to="/page1"></a>
                            </li>
                            <li>
                                <em class="number">10</em>
                                <a to="/page1"></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <!--政务公开-->
            <div class="row meili">
                <div class="meli-head"><h3>魅力前和</h3></div>
               <div class="meli-pic row">
                    <div class="pic-l"><img src="img/1.png" alt=""><img src="img/2.png" alt=""><img src="img/5.png" alt=""></div>
                    <div class="pic-c"><img src="img/6.png" alt=""><img src="img/4.png" alt=""><img src="img/7.png" alt=""></div>
                    <div class="pic-r"><img src="img/8.png" alt=""><img src="img/9.png" alt=""><img src="img/3.png" alt=""></div>
                </div>
            </div>
            <!--推荐专栏-->
            
            <!--专题专栏-->
            
            <!--走进高平-->
            
        </div>
    </div>
         
           `
        }
    },
    {
        path: "/callme",
        component: {
            template: `
                <div>
    <div class="path container">
        <em>您的位置：</em><a href="/">首页</a>
        &gt;<a href="">联系我们</a>
    </div>
    <div class="ma-content container row">
        <div class="ma-left col-lg-3">
            <h3>联系我们</h3>
        </div>
        <div class="ma-right col-lg-9">
            <h3 class="title">联系我们</h3>
            <div class="property">
                <span>【字体：<a href="javascript:;">小</a> <a href="javascript:;">大</a>】</span>
            </div>
            <div class="ma-center">
                <p>地址：山西省高平市原村乡前河村03565919999</p>
                <p>邮编：048400</p>
                <p>宣传科邮箱：<a href="">qhmypxzx@163.com</a></p>
                <p>矿长邮箱：<a href="">qhkzxx@163.com</a></p>
            </div>
        </div>
    </div>
</div> 
            `
        }
    },

    {
        path: "/page1",
        component: {
            template: `
              <div id="newlist">
    <div class="path container">
        <em>您的位置：</em><a href="/">首页</a>
        &gt;<a href="" class="aa1">公司要闻</a>
    </div>
    <div class="ma-content container row">
        <div class="ma-left col-lg-3">
            <h3>专栏</h3>
            <div class="bd">
                <ul class="menuList">
                    <li><a >通知公告</a></li>
                </ul>
            </div>
        </div>
        <div class="ma-right col-lg-9">
            <h3 class="title"></h3>
            <div class="ma-center">
            <img src="" alt="">
                <div>
                </div>
            </div>
            
        </div>
        
    </div>
</div>
            `
        }
    },

        {
            path:"/page3",
            component:{
                template:`
              <div id="management">
    <div class="path container">
        <em>您的位置：</em><a href="/">首页</a>
        &gt;<a href="" class="aa1"></a>
    </div>
    <div class="ma-content container row">
        <div class="ma-left col-lg-3">
            <h3>专栏</h3>
            <div class="bd">
                <ul class="menuList">
                    <li><a href="security.html">生产动态</a></li>
                    <li><a href="security.html">安全文化</a></li>
                    <li><a href="security.html">法律法规</a></li>
                    <li><a href="security.html">生态矿山</a></li>
                </ul>
            </div>
        </div>
        <div class="ma-right col-lg-9">
            <h3 class="title"></h3>
            
            <div class="ma-center">
            <img src="" alt="">
                <div>

                </div>
            </div>
            <div class="pageInfo">
            <div class="Prevpage"><b>上一篇: </b><span></span></div>
            <div class="Nextpage"><b>下一篇: </b><span></span></div>
             </div>
        </div>
    </div>
</div>
             `
            }
        },
    {
        path: "/page2",
        component: {
            template: `
              <div id="qianhe">
    <div class="path container">
        <em>您的位置：</em><a href="/">首页</a>
        &gt;<a href="" class="aa1"></a>
    </div>
    <div class="ma-content container row">
        <div class="ma-left col-lg-3">
            <h3>专栏</h3>
            <div class="bd">
                <ul class="menuList">
                    <li><a href="qianhe.html">党建动态</a></li>
                    <li><a href="qianhe.html">廉政建设</a></li>
                    <li><a href="qianhe.html">上级精神</a></li>
                    <li><a href="qianhe.html">团建工作</a></li>
                </ul>
            </div>
        </div>
        <div class="ma-right col-lg-9">
            <h3 class="title"></h3>
            <div class="ma-center">
            <img src="" alt="">
                <div>
                </div>
            </div>
            <div class="pageInfo">
            <div class="Prevpage"><b>上一篇: </b><span></span></div>
            <div class="Nextpage"><b>下一篇: </b><span></span></div>
             </div>
        </div>
    </div>
</div>
            `
        }
    },
];
const routers = new VueRouter({
    routes: routes,
});
new Vue({
    el: '#main',
    router: routers,
});

// lunbotu
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
// 选项卡
//     $(".hd6 li").mouseenter(function ()
//     {
//         $(this).addClass("on").siblings().removeClass("on");
//         $(".bd6 ul").hide().eq($(this).index()).show();
//     });
//     $(".hd7 li").mouseenter(function ()
//     {
//         $(this).addClass("on").siblings().removeClass("on");
//         $(".bd7 ul").hide().eq($(this).index()).show();
//     });
//     $(".hd1 li").mouseenter(function ()
//     {
//         //获取点击的元素给其添加样式，讲其兄弟元素的样式移除
//         $(this).addClass("on").siblings().removeClass("on");
//         //获取选中元素的下标
//         $(".bd1 ul").hide().eq($(this).index()).show();
//     });
//     $(".hd2 li").mouseenter(function ()
//     {
//         $(this).addClass("on").siblings().removeClass("on");
//         $(".bd2 ul").hide().eq($(this).index()).show();
//     });
//     $(".news-head li").mouseenter(function ()
//     {
//         $(this).addClass("on").siblings().removeClass("on");
//         $(".new-center div").hide().eq($(this).index()).show();
//     });
//     $(".news-head1 li").mouseenter(function ()
//     {
//         $(this).addClass("on").siblings().removeClass("on");
//         $(".new-center1 div").hide().eq($(this).index()).show();
//     });
//
//     $(".hd5 li").mouseenter(function ()
//     {
//         $(this).addClass("on").siblings().removeClass("on");
//         $(".bd5 ul").hide().eq($(this).index()).show();
//     });
//
//     $(".about-photo-hd li").mouseenter(function ()
//     {
//         $(this).addClass("on").siblings().removeClass("on");
//         $(".about-photo-bd ul").hide().eq($(this).index()).show();
//     });
// 获取数据
$(function () {
    function loadData() {
        // 首页数据
        $.ajax({
            type: "POST",
            url: "http://kxqh.api.milisx.xyz/api/custom/qhhomedata",
            dateType: "json",
            data: {
                "part_one": {
                    "categoryid": "ac1e5571-d81f-4fc7-886c-c4ba6d7a871a",
                    "PageIndex": 1,
                    "PageSize": 10
                },
                "part_two": {
                    "categoryid": "a460675f-8a68-4bbb-b0cd-825f7578fe00",
                    "PageIndex": 1,
                    "PageSize": 10
                },
                "part_three": {
                    "categoryid": "e6e0ea92-0f43-418b-b838-b88b69744e57",
                    "PageIndex": 1,
                    "PageSize": 10
                },
                "part_four": {
                    "navid": "fefb6175-f4b7-4205-ae94-5f655757d926",
                    "PageIndex": 1,
                    "PageSize": 10
                },
                "part_five": {
                    "navid": "b5af22c8-59b7-4cbd-94c0-6d8ed6c2473a",
                    "PageIndex": 1,
                    "PageSize": 10
                },
                "part_six": {
                    "categoryid": "c8e12965-b96e-4d88-986b-5063e79bac7a",
                    "PageIndex": 1,
                    "PageSize": 10
                },
                "part_seven": {
                    "categoryid": "381759a2-ea34-46a3-adc1-8e2d889f252b",
                    "PageIndex": 1,
                    "PageSize": 10
                }
            },
            success: function (data) {
                console.log(data)
                for (var i = 0; i < data.data.lst_part_one.length; i++) {
                    // console.log(data.data.lst_part_one[i].Id);
                    // var url = '/newslist.html?title=' + data.data.lst_part_one[i].Title + '$id='+ data.data.lst_part_one[i].Id;
                    $(".bd1 li a").eq(i).text(data.data.lst_part_one[i].Title);
                    $(".bd1 li a").eq(i).attr("id",data.data.lst_part_one[i].Id);
                    $(".bd1 .date").eq(i).text(data.data.lst_part_one[i].CreateTime);
                    $(".bd2 li a").eq(i).text(data.data.lst_part_two[i].Title);
                    $(".bd2 li a").eq(i).attr("id", data.data.lst_part_two[i].Id)
                    $(".bd2 .date").eq(i).text(data.data.lst_part_two[i].CreateTime)
                    $(".test img").eq(i).attr('src', data.data.lst_part_one[i].CoverPhoto);
                    $(".test a").eq(i).attr('id', data.data.lst_part_one[i].Id)
                }
                for (var i = 0; i < data.data.lst_part_four.length; i++) {
                    $(".new-center li a").eq(i).text(data.data.lst_part_four[i].Title);
                    $(".new-center li a").eq(i).attr("id", data.data.lst_part_four[i].Id)
                    $(".new-center .date").eq(i).text(data.data.lst_part_four[i].CreateTime);
                    $(".new-center1 li a").eq(i).text(data.data.lst_part_five[i].Title);
                    $(".new-center1 li a").eq(i).attr("id", data.data.lst_part_five[i].Id)
                    $(".new-center1 .date").eq(i).text(data.data.lst_part_five[i].CreateTime)
                }
                for (var i = 0; i < data.data.lst_part_six.length; i++) {
                    $(".new-click li a").eq(i).text(data.data.lst_part_six[i].Title);
                    $(".new-click li a").eq(i).attr("id", data.data.lst_part_six[i].Id)
                    $(".new-click .date").eq(i).text(data.data.lst_part_six[i].CreateTime);
                }
                for (var i = 0; i < data.data.lst_part_seven.length; i++) {
                    $("#scroll1 a").eq(i).text(data.data.lst_part_seven[i].Title);
                    $("#scroll1 a").eq(i).attr("id", data.data.lst_part_seven[i].Id)
                    $("#scroll2 a").eq(i).text(data.data.lst_part_seven[i].Title);
                    $("#scroll2 a").eq(i).attr("id", data.data.lst_part_seven[i].Id)
                }
            },
        });
        // 首页导航
        $.ajax({
            type: "POST",
            url: "http://kxqh.api.milisx.xyz/api/custom/qhhomenav",
            dataType: "json",
            data: {},
            success: function (data) {
                var text = "";
                var text1 = "";
                var index = 0;
                for (var i = 0; i < data.data.length; i++) {
                    text = data.data[i].Name;
                    $(".navt").eq(i - 1).text(text);
                    $(".navt").eq(i - 1).attr("id", data.data[i].Id);
                    for (var j = 0; j < data.data[i].List_VNC.length; j++) {
                        index++;
                        text1 = data.data[i].List_VNC[j].Name;
                        $(".navc").eq(index - 1).text(text1);
                        $(".navc").eq(index - 1).attr("id", data.data[i].List_VNC[j].Id);
                    }
                }
            }
        });
        // 友情链接
        $.ajax({
            type: "POST",
            url: "http://kxqh.api.milisx.xyz/api/content/getfriendlinklist",
            dataType: "json",
            data: {"PageIndex": 1,
                "PageSize": 10},
            success: function (data) {
               for(var i =0; i< data.data.length; i ++){
                   $(".frent-link a" ).eq(i).text(data.data[i].Name).attr("href",data.data[i].Url);

               }
            }
        });

    }

    loadData();
});


$("#scroll2 li").on("click", "a", function () {
    // console.log($(this).attr("id"))
    $.ajax({
        type: "post",
        url: "http://kxqh.api.milisx.xyz/api/content/getarticledetail",
        dateType: "json",
        data: {
            "ArticleId": $(this).attr("id")
        },
        success: function (data) {
            // console.log(data.data);
            $(".ma-right h3").text(data.data.Title);
            $(".ma-center div").html(data.data.Body);
            $(".ma-center img").attr('src', data.data.CoverPhoto);
        }
    })
});
$("#scroll1 li").on("click", "a", function () {
    // console.log($(this).attr("id"))
    $.ajax({
        type: "post",
        url: "http://kxqh.api.milisx.xyz/api/content/getarticledetail",
        dateType: "json",
        data: {
            "ArticleId": $(this).attr("id")
        },
        success: function (data) {
            // console.log(data.data);
            $(".ma-right h3").text(data.data.Title);
            $(".ma-center div").html(data.data.Body);
            $(".ma-center img").attr('src', data.data.CoverPhoto);
            $(".aa1").text("通知公告");
            // $(".ma-left").css("display","none");
        }
    })
});
$("#scroll2 li").on("click", "a", function () {
    // console.log($(this).attr("id"))
    $.ajax({
        type: "post",
        url: "http://kxqh.api.milisx.xyz/api/content/getarticledetail",
        dateType: "json",
        data: {
            "ArticleId": $(this).attr("id")
        },
        success: function (data) {
            // console.log(data.data);
            $(".ma-right h3").text(data.data.Title);
            $(".ma-center div").html(data.data.Body);
            $(".ma-center img").attr('src', data.data.CoverPhoto);
            $(".aa1").text("通知公告");
        }
    })
});
$(".test li").on("click", "a", function () {
    // console.log($(this).attr("id"))
    $(".content").css("display","none");
    $(".content-in").css("display","none")
    $("#newlist").css("display","block");
    $("#management").css("display","none");
    $("#qianhe").css("display","none");
    $.ajax({
        type: "post",
        url: "http://kxqh.api.milisx.xyz/api/content/getarticledetail",
        dateType: "json",
        data: {
            "ArticleId": $(this).attr("id")
        },
        success: function (data) {
            // console.log(data.data);
            $(".ma-right h3").text(data.data.Title);
            $(".ma-center div").html(data.data.Body);
            $(".ma-center img").attr('src', data.data.CoverPhoto);
            $(".Prevpage span").text(data.obj.PreviousArticleTitle).attr('id',data.obj.PreviousArticleId);
            $(".Nextpage span").text(data.obj.NextArticleTitle).attr('id',data.obj.NextArticleId);
            $(".xx-zi .time").text("发表时间   "+data.data.CreateTime);
            $(".xx-zi .name").text("发表编辑  "+data.data.UserId);
        }
    })
});
$(".Prevpage span").click(function(){
    // alert("aa");
    // console.log($(this).attr("id"));
    $.ajax({
        type: "post",
        url: "http://kxqh.api.milisx.xyz/api/content/getarticledetail",
        dateType: "json",
        data: {
            "ArticleId": $(this).attr("id")
        },
        success: function (data) {
            // console.log(data.data);
            $(".ma-right h3").text(data.data.Title);
            $(".ma-center div").html(data.data.Body);
            $(".ma-center img").attr('src', data.data.CoverPhoto);
            $(".Prevpage span").text(data.obj.PreviousArticleTitle).attr('id',data.obj.PreviousArticleId);
            $(".Nextpage span").text(data.obj.NextArticleTitle).attr('id',data.obj.NextArticleId);
            $(".xx-zi .time").text("发表时间   "+data.data.CreateTime);
            $(".xx-zi .name").text("发表编辑  "+data.data.UserId);
        }
    })
});
$(".Nextpage span").click(function(){
    // alert("aa");
    // console.log($(this).attr("id"));
    $.ajax({
        type: "post",
        url: "http://kxqh.api.milisx.xyz/api/content/getarticledetail",
        dateType: "json",
        data: {
            "ArticleId": $(this).attr("id")
        },
        success: function (data) {
            // console.log(data.data);
            $(".ma-right h3").text(data.data.Title);
            $(".ma-center div").html(data.data.Body);
            $(".ma-center img").attr('src', data.data.CoverPhoto);
            $(".Prevpage span").text(data.obj.PreviousArticleTitle).attr('id',data.obj.PreviousArticleId);
            $(".Nextpage span").text(data.obj.NextArticleTitle).attr('id',data.obj.NextArticleId);
            $(".xx-zi .time").text("发表时间   "+data.data.CreateTime);
            $(".xx-zi .name").text("发表编辑  "+data.data.UserId);
        }
    })
});
$(".bd1 li").on("click", "a", function () {
    // console.log($(this).attr("id"))
    $(".content").css("display","none")
    $(".content-in").css("display","none")
    $("#newlist").css("display","block");
    $("#management").css("display","none");
    $("#qianhe").css("display","none");
    $.ajax({
        type: "post",
        url: "http://kxqh.api.milisx.xyz/api/content/getarticledetail",
        dateType: "json",
        data: {
            "ArticleId": $(this).attr("id")
        },
        success: function (data) {
            // console.log(data.data);

            $(".ma-right h3").text(data.data.Title);
            $(".ma-center>div").html(data.data.Body);
            $(".ma-center img").attr('src', data.data.CoverPhoto);
            $(".Prevpage span").text(data.obj.PreviousArticleTitle).attr('id',data.obj.PreviousArticleId);
            $(".Nextpage span").text(data.obj.NextArticleTitle).attr('id',data.obj.NextArticleId);
            $(".xx-zi .time").text("发表时间   "+data.data.CreateTime);
            $(".xx-zi .name").text("发表编辑  "+data.data.UserId);
        }
    })
});
$(".bd2 li").on("click", "a", function () {
    // console.log($(this).attr("id"))
    $(".content").css("display","none");
    $(".content-in").css("display","none");
    $("#newlist").css("display","block");
    $("#management").css("display","none");
    $("#qianhe").css("display","none");
    $.ajax({
        type: "post",
        url: "http://kxqh.api.milisx.xyz/api/content/getarticledetail",
        dateType: "json",
        data: {
            "ArticleId": $(this).attr("id")
        },
        success: function (data) {
            // console.log(data.data);
            $(".aa1").text("基层动态");
            $(".ma-right h3").text(data.data.Title);
            $(".ma-center div").html(data.data.Body);
            $(".ma-center img").attr('src', data.data.CoverPhoto);
            $(".Prevpage span").text(data.obj.PreviousArticleTitle).attr('id',data.obj.PreviousArticleId);
            $(".Nextpage span").text(data.obj.NextArticleTitle).attr('id',data.obj.NextArticleId);
            $(".xx-zi .time").text("发表时间   "+data.data.CreateTime);
            $(".xx-zi .name").text("发表编辑  "+data.data.UserId);
        }
    })
});
$(".new-center li").on("click", "a", function () {
    // console.log($(this).attr("id"));
    $(".content").css("display","none")
    $(".content-in").css("display","none")
    $("#newlist").css("display","none");
    $("#management").css("display","block");
    $("#qianhe").css("display","none");
    $.ajax({
        type: "post",
        url: "http://kxqh.api.milisx.xyz/api/content/getarticledetail",
        dateType: "json",
        data: {
            "ArticleId": $(this).attr("id")
        },
        success: function (data) {
            // console.log(data.data);

            $(".ma-right h3").text(data.data.Title);
            $(".ma-center div").html(data.data.Body);
            $(".ma-center img").attr('src', data.data.CoverPhoto);
            $(".aa1").text("安全生产");
            $(".Prevpage span").text(data.obj.PreviousArticleTitle).attr('id',data.obj.PreviousArticleId);
            $(".Nextpage span").text(data.obj.NextArticleTitle).attr('id',data.obj.NextArticleId);
            $(".xx-zi .time").text("发表时间   "+data.data.CreateTime);
            $(".xx-zi .name").text("发表编辑  "+data.data.UserId);
        }
    })
})
$(".new-center1 li").on("click", "a", function () {
    // console.log($(this).attr("id"))
    $(".content").css("display","none")
    $(".content-in").css("display","none")
    $("#newlist").css("display","none");
    $("#management").css("display","none");
    $("#qianhe").css("display","block");
    $.ajax({
        type: "post",
        url: "http://kxqh.api.milisx.xyz/api/content/getarticledetail",
        dateType: "json",
        data: {
            "ArticleId": $(this).attr("id")
        },
        success: function (data) {
            console.log(data.data);
            $(".ma-right h3").text(data.data.Title);
            $(".ma-center div").html(data.data.Body);
            $(".ma-center img").attr('src', data.data.CoverPhoto);
            $(".aa1").text("前和党建");
            $(".Prevpage span").text(data.obj.PreviousArticleTitle).attr('id',data.obj.PreviousArticleId);
            $(".Nextpage span").text(data.obj.NextArticleTitle).attr('id',data.obj.NextArticleId);
            $(".xx-zi .time").text("发表时间   "+data.data.CreateTime);
            $(".xx-zi .name").text("发表编辑  "+data.data.UserId);
        }
    })
})
$(".new-click li").on("click", "a", function () {
    // console.log($(this).attr("id"))
    $(".content").css("display","none")
    $(".content-in").css("display","none")
    $("#newlist").css("display","block");
    $("#management").css("display","none");
    $("#qianhe").css("display","none");
    $.ajax({
        type: "post",
        url: "http://kxqh.api.milisx.xyz/api/content/getarticledetail",
        dateType: "json",
        data: {
            "ArticleId": $(this).attr("id")
        },
        success: function (data) {
            console.log(data.data);
            $(".ma-center img").css("display", "block")
            $(".ma-right h3").text(data.data.Title);
            $(".ma-center div").html(data.data.Body);
            $(".ma-center img").attr('src', data.data.CoverPhoto);
            $(".aa1").text("热点专题");
            $(".Prevpage span").text(data.obj.PreviousArticleTitle).attr('id',data.obj.PreviousArticleId);
            $(".Nextpage span").text(data.obj.NextArticleTitle).attr('id',data.obj.NextArticleId);
            $(".xx-zi .time").text("发表时间   "+data.data.CreateTime);
            $(".xx-zi .name").text("发表编辑  "+data.data.UserId);
        }
    })
})


$(".li0").click(function () {
    $(".ma-center").css("display","block");
    $(".xx-zi").css("display","block");
    $(".mylists").css("display","none");
    $(".mylists1").css("display","none");
    $.ajax({
        type: "POST",
        url: "http://kxqh.api.milisx.xyz/api/content/getarticledetail",
        dateType: "json",
        data: {
            "ArticleId": "2c1c1594-1aea-4c28-8e71-65e864edcd86"
        },
        success: function (data) {
            // console.log(data.data);
            $(".ma-center .wenben").css("display", "block");
            $(".title").text(data.data.Title);
            $(".patha").text(data.data.Title);
            $(".ma-center .wenben").html(data.data.Body);
            $(".ma-center ul").css("display", "none");
            $(".ma-center .firstli").css("display", "none")
            $(".ma-center>img").css("display", "none")
            $(".ma-center .xq").css("display", "none")
            $(".xx-zi .time").text("发表时间   "+data.data.CreateTime);
            $(".xx-zi .name").text("发表编辑  "+data.data.UserId);

        },
    });



});


$(".li1").click(function () {
    $(".pageInfo").css("display","none");
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
            $(".xx-zi").css("display","none");
            $(".ma-center ul").css("display", "block");
            $(".firstli").css("display", "block");
            $(".ma-center").css("display","none");
            $(".mylists1").css("display","none");
            $(".mylists").css("display","block");
            for (var i = 0; i < data.data.lst_categoryarticlelist.length; i++) {
                // console.log(data.data.lst_categoryarticlelist[i].Id);
                $(".mylists li a").eq(i).attr("id", data.data.lst_categoryarticlelist[i].Id);
                $(".mylists li p").eq(i).text(data.data.lst_categoryarticlelist[i].Title);
            }
        },
        error: function () {
            console.log("sss")
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
            $(".mylists img").eq(0).attr('src', data.data.CoverPhoto);
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
            $(".mylists img").eq(1).attr('src', data.data.CoverPhoto);
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
            $(".mylists img").eq(2).attr('src', data.data.CoverPhoto);
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
            $(".mylists img").eq(3).attr('src', data.data.CoverPhoto);
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


$(".li2").click(function () {
    $(".ma-center").css("display","block");
    $(".pageInfo").css("display","none");
    $(".mylists").css("display","none");
    $(".mylists1").css("display","none");
    $.ajax({
        type: "POST",
        url: "http://kxqh.api.milisx.xyz/api/content/getarticledetail",
        dateType: "json",
        data: {
            "ArticleId": "833fa9c6-d6e5-40b7-a1ea-829f5a0ebc15"
        },
        success: function (data) {
            // console.log(data.data);
            $(".ma-center .wenben").css("display", "block");
            $(".title").text(data.data.Title);
            $(".patha").text(data.data.Title);
            $(".ma-center .wenben").html(data.data.Body);
            $(".ma-center ul").css("display", "none");
            $(".ma-center .firstli").css("display", "none");
            $(".ma-center>img").css("display", "none");
            $(".ma-center .xq").css("display", "none")
        },
    });
});
$(".li3").click(function () {
    $(".pageInfo").css("display","none");
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
            $(".ma-center ul").css("display", "block");
            $(".firstli").css("display", "block");
            $(".ma-center").css("display","none");
            $(".xx-zi").css("display","none");
            $(".mylists").css("display","none");
            $(".mylists1").css("display","block");
            for (var i = 0; i < data.data.lst_categoryarticlelist.length; i++) {
                // console.log(data.data.lst_categoryarticlelist[i].CreateTime);
                $(".mylists1 li a").eq(i).attr("id", data.data.lst_categoryarticlelist[i].Id);
                $(".mylists1 li p").eq(i).text(data.data.lst_categoryarticlelist[i].Title);
            }
        },
        error: function () {
            // console.log("sss")
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
            $(".mylists1 img").eq(0).attr('src', data.data.CoverPhoto);
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
            $(".mylists1 img").eq(1).attr('src', data.data.CoverPhoto);
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
            $(".mylists1 img").eq(2).attr('src', data.data.CoverPhoto);
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
            $(".mylists1 img").eq(3).attr('src', data.data.CoverPhoto);
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
$(".li4").click(function () {

    var companyListData =function(){
        $.ajax({
            type: "post",
            url: "http://kxqh.api.milisx.xyz/api/content/getcategoryarticlelist",
            dateType: "json",
            data: {
                "categoryid": "ac1e5571-d81f-4fc7-886c-c4ba6d7a871a",
                "PageIndex": 1,
                "PageSize": 12
            },
            success: function (data) {
                // console.log(data.data);
                $(".patha").text("公司要闻");
                $(".title").text("公司要闻");
                $(".ma-center ul").css("display", "block");
                $(".firstli").css("display", "block");

                for (var i = 0; i < data.data.lst_categoryarticlelist.length; i++) {
                    // console.log(data.data.lst_categoryarticlelist[i].CreateTime);
                    $(".ma-center li a").eq(i).text(data.data.lst_categoryarticlelist[i].Title);
                    $(".ma-center li a").eq(i).attr("id", data.data.lst_categoryarticlelist[i].Id);
                    $(".x-zi a").attr("id",data.data.lst_categoryarticlelist[0].Id)
                    $(".ma-center .wenben").css("display", "none");
                    $(".ma-center .date").eq(i).text(data.data.lst_categoryarticlelist[i].CreateTime)
                }
//                 /*页码*/
//
//                     $("#pageBar").whjPaging("setPage", currPages, Math.ceil(data.Count / 6));
//
// // fenye
//                 var page = function (i) {
//                     $('#pageBar').whjPaging({
//                         totalPage: i,
//                         showPageNum: 4,
//                         isShowFL: true,//首末页面
//                         isShowPageSizeOpt: false,
//                         isShowSkip: false,
//                         isShowRefresh: false,
//                         isShowTotalPage: false,
//                         isResetPage: true,
//                         callBack: function (currPage, pageSize) {
//                             companyListData.PageIndex = currPage;
//                             currPages = currPage;
//                             companyListData();
//                         }
//                     });
//                 };
//                 page()
            }
        });
    }
    companyListData()
    $.ajax({
        type: "POST",
        url: "http://kxqh.api.milisx.xyz/api/content/getarticledetail",
        dateType: "json",
        data: {
            "ArticleId": "e8d16e6e-e783-4370-890b-6510578c3027"
        },
        success: function (data) {
            // console.log(data.data);
            $(".firstli img").attr('src', data.data.CoverPhoto);
            $(".firstli h1").text(data.data.Title);
            $(".firstli p").html(data.data.Body);
            $(".ma-center .xq").css("display", "none")
            $(".ma-center>img").css("display", "none");
            $(".pageInfo").css("display","none");

        },
    });
});
$(".li5").click(function () {
    $.ajax({
        type: "post",
        url: "http://kxqh.api.milisx.xyz/api/content/getcategoryarticlelist",
        dateType: "json",
        data: {
            "categoryid": "a460675f-8a68-4bbb-b0cd-825f7578fe00",
            "PageIndex": 1,
            "PageSize": 12
        },
        success: function (data) {
            console.log(data.data);
            $(".patha").text("基层动态");
            $(".title").text("基层动态");
            $(".ma-center ul").css("display", "block");
            $(".firstli").css("display", "block");

            for (var i = 0; i < data.data.lst_categoryarticlelist.length; i++) {
                // console.log(data.data.lst_categoryarticlelist[i].CreateTime);
                $(".ma-center li a").eq(i).text(data.data.lst_categoryarticlelist[i].Title);
                $(".ma-center li a").eq(i).attr("id", data.data.lst_categoryarticlelist[i].Id);
                $(".x-zi a").attr("id",data.data.lst_categoryarticlelist[0].Id)
                $(".ma-center .wenben").css("display", "none");
                $(".ma-center .date").eq(i).text(data.data.lst_categoryarticlelist[i].CreateTime);
                $(".pageInfo").css("display","none");
            }
        },
        error: function () {
            console.log("sss")
        }
    });
    $.ajax({
        type: "POST",
        url: "http://kxqh.api.milisx.xyz/api/content/getarticledetail",
        dateType: "json",
        data: {
            "ArticleId": "195c86eb-1e9c-4a86-8259-3653e137c179"
        },
        success: function (data) {
            // console.log(data.data);
            $(".firstli img").attr('src', data.data.CoverPhoto);
            $(".firstli h1").text(data.data.Title);
            $(".firstli p").html(data.data.Body); 
            $(".ma-center .xq").css("display", "none")
            $(".ma-center>img").css("display", "none");
            $(".pageInfo").css("display","none");

        },
    });
});
$(".li6").click(function () {
    $.ajax({
        type: "post",
        url: "http://kxqh.api.milisx.xyz/api/content/getcategoryarticlelist",
        dateType: "json",
        data: {
            "categoryid": "e6e0ea92-0f43-418b-b838-b88b69744e57",
            "PageIndex": 1,
            "PageSize": 12
        },
        success: function (data) {
            console.log(data.data);
            $(".patha").text("特别报道");
            $(".title").text("特别报道");
            $(".ma-center ul").css("display", "block");
            $(".firstli").css("display", "block");

            for (var i = 0; i < data.data.lst_categoryarticlelist.length; i++) {
                // console.log(data.data.lst_categoryarticlelist[i].CreateTime);
                $(".ma-center li a").eq(i).text(data.data.lst_categoryarticlelist[i].Title);
                $(".ma-center li a").eq(i).attr("id", data.data.lst_categoryarticlelist[i].Id);
                $(".x-zi a").attr("id",data.data.lst_categoryarticlelist[0].Id)
                $(".ma-center .wenben").css("display", "none");
                $(".ma-center .date").eq(i).text(data.data.lst_categoryarticlelist[i].CreateTime);
                $(".pageInfo").css("display","none");
            }
        },
        error: function () {
            console.log("sss")
        }
    });
    $.ajax({
        type: "POST",
        url: "http://kxqh.api.milisx.xyz/api/content/getarticledetail",
        dateType: "json",
        data: {
            "ArticleId": "63226dcb-a850-40ee-948f-21cc3df7c5e3"
        },
        success: function (data) {
            // console.log(data.data);
            $(".firstli img").attr('src', data.data.CoverPhoto);
            $(".firstli h1").text(data.data.Title);
            $(".firstli p").html(data.data.Body);
            $(".ma-center .xq").css("display", "none")
            $(".ma-center>img").css("display", "none");
            $(".pageInfo").css("display","none");

        },
    });
});
$(".li7").click(function () {
    $.ajax({
        type: "post",
        url: "http://kxqh.api.milisx.xyz/api/content/getcategoryarticlelist",
        dateType: "json",
        data: {
            "categoryid": "c8e12965-b96e-4d88-986b-5063e79bac7a",
            "PageIndex": 1,
            "PageSize": 12
        },
        success: function (data) {
            console.log(data.data);
            $(".patha").text("热点专题");
            $(".title").text("热点专题");
            $(".ma-center ul").css("display", "block");
            $(".firstli").css("display", "block");

            for (var i = 0; i < data.data.lst_categoryarticlelist.length; i++) {
                // console.log(data.data.lst_categoryarticlelist[i].CreateTime);
                $(".ma-center li a").eq(i).text(data.data.lst_categoryarticlelist[i].Title);
                $(".ma-center li a").eq(i).attr("id", data.data.lst_categoryarticlelist[i].Id);
                $(".x-zi a").attr("id",data.data.lst_categoryarticlelist[0].Id)
                $(".ma-center .wenben").css("display", "none");
                $(".ma-center .date").eq(i).text(data.data.lst_categoryarticlelist[i].CreateTime);
                $(".pageInfo").css("display","none");
            }
        },
        error: function () {
            console.log("sss")
        }
    });
    $.ajax({
        type: "POST",
        url: "http://kxqh.api.milisx.xyz/api/content/getarticledetail",
        dateType: "json",
        data: {
            "ArticleId": "8ce04421-7f39-44c7-ae3d-a54f259aa1b7"
        },
        success: function (data) {
            // console.log(data.data);
            $(".firstli img").attr('src', data.data.CoverPhoto);
            $(".firstli h1").text(data.data.Title);
            $(".firstli p").html(data.data.Body);
            $(".ma-center .xq").css("display", "none")
            $(".ma-center>img").css("display", "none");
            $(".pageInfo").css("display","none");

        },
    });
});
$(".li8").click(function () {
    $.ajax({
        type: "post",
        url: "http://kxqh.api.milisx.xyz/api/content/getcategoryarticlelist",
        dateType: "json",
        data: {
            "categoryid": "a5a566c1-0bc3-4bcb-a43d-aaf9644c13cd",
            "PageIndex": 1,
            "PageSize": 12
        },
        success: function (data) {
            console.log(data.data);
            $(".patha").text("生产动态");
            $(".title").text("生产动态");
            $(".ma-center ul").css("display", "block");
            $(".firstli").css("display", "block");

            for (var i = 0; i < data.data.lst_categoryarticlelist.length; i++) {
                // console.log(data.data.lst_categoryarticlelist[i].CreateTime);
                $(".ma-center li a").eq(i).text(data.data.lst_categoryarticlelist[i].Title);
                $(".ma-center li a").eq(i).attr("id", data.data.lst_categoryarticlelist[i].Id);
                $(".x-zi a").attr("id",data.data.lst_categoryarticlelist[0].Id)
                $(".ma-center .wenben").css("display", "none");
                $(".ma-center .date").eq(i).text(data.data.lst_categoryarticlelist[i].CreateTime);
                $(".pageInfo").css("display","none");
            }
        },
        error: function () {
            console.log("sss")
        }
    });
    $.ajax({
        type: "POST",
        url: "http://kxqh.api.milisx.xyz/api/content/getarticledetail",
        dateType: "json",
        data: {
            "ArticleId": "bd8dc204-1241-48d7-acb5-6e16017666ce"
        },
        success: function (data) {
            // console.log(data.data);
            $(".firstli img").attr('src', data.data.CoverPhoto);
            $(".firstli h1").text(data.data.Title);
            $(".firstli p").html(data.data.Body);
            $(".ma-center .xq").css("display", "none")
            $(".ma-center>img").css("display", "none");
            $(".pageInfo").css("display","none");

        },
    });
});
$(".li9").click(function () {
    $.ajax({
        type: "post",
        url: "http://kxqh.api.milisx.xyz/api/content/getcategoryarticlelist",
        dateType: "json",
        data: {
            "categoryid": "b6b4e273-fe79-4a92-9232-05d48696b2af",
            "PageIndex": 1,
            "PageSize": 12
        },
        success: function (data) {
            console.log(data.data);
            $(".patha").text("安全文化");
            $(".title").text("安全文化");
            $(".ma-center ul").css("display", "block");
            $(".firstli").css("display", "block");

            for (var i = 0; i < data.data.lst_categoryarticlelist.length; i++) {
                // console.log(data.data.lst_categoryarticlelist[i].CreateTime);
                $(".ma-center li a").eq(i).text(data.data.lst_categoryarticlelist[i].Title);
                $(".ma-center li a").eq(i).attr("id", data.data.lst_categoryarticlelist[i].Id);
                $(".x-zi a").attr("id",data.data.lst_categoryarticlelist[0].Id)
                $(".ma-center .wenben").css("display", "none");
                $(".ma-center .date").eq(i).text(data.data.lst_categoryarticlelist[i].CreateTime);
                $(".pageInfo").css("display","none");
            }
        },
        error: function () {
            console.log("sss")
        }
    });
    $.ajax({
        type: "POST",
        url: "http://kxqh.api.milisx.xyz/api/content/getarticledetail",
        dateType: "json",
        data: {
            "ArticleId": "4a180fd3-675f-4ee0-9b17-7abf9bd90247"
        },
        success: function (data) {
            // console.log(data.data);
            $(".firstli img").attr('src', data.data.CoverPhoto);
            $(".firstli h1").text(data.data.Title);
            $(".firstli p").html(data.data.Body);
            $(".ma-center .xq").css("display", "none")
            $(".ma-center>img").css("display", "none");
            $(".pageInfo").css("display","none");

        },
    });
});
$(".li10").click(function () {
    $.ajax({
        type: "post",
        url: "http://kxqh.api.milisx.xyz/api/content/getcategoryarticlelist",
        dateType: "json",
        data: {
            "categoryid": "f790e6c8-db86-4271-a4da-00ac17b0ac37",
            "PageIndex": 1,
            "PageSize": 12
        },
        success: function (data) {
            console.log(data.data);
            $(".patha").text("法律法规");
            $(".title").text("法律法规");
            $(".ma-center ul").css("display", "block");
            $(".firstli").css("display", "block");

            for (var i = 0; i < data.data.lst_categoryarticlelist.length; i++) {
                // console.log(data.data.lst_categoryarticlelist[i].CreateTime);
                $(".ma-center li a").eq(i).text(data.data.lst_categoryarticlelist[i].Title);
                $(".ma-center li a").eq(i).attr("id", data.data.lst_categoryarticlelist[i].Id);
                $(".x-zi a").attr("id",data.data.lst_categoryarticlelist[0].Id)
                $(".ma-center .wenben").css("display", "none");
                $(".ma-center .date").eq(i).text(data.data.lst_categoryarticlelist[i].CreateTime);
                $(".pageInfo").css("display","none");
            }
        },
        error: function () {
            console.log("sss")
        }
    });
    $.ajax({
        type: "POST",
        url: "http://kxqh.api.milisx.xyz/api/content/getarticledetail",
        dateType: "json",
        data: {
            "ArticleId": "bfc776af-232d-4e37-aa75-3d30e95dce09"
        },
        success: function (data) {
            // console.log(data.data);
            $(".firstli img").attr('src', data.data.CoverPhoto);
            $(".firstli h1").text(data.data.Title);
            $(".firstli p").html(data.data.Body);
            $(".ma-center .xq").css("display", "none")
            $(".ma-center>img").css("display", "none");
            $(".pageInfo").css("display","none");

        },
    });
});
$(".li11").click(function () {
    $.ajax({
        type: "post",
        url: "http://kxqh.api.milisx.xyz/api/content/getcategoryarticlelist",
        dateType: "json",
        data: {
            "categoryid": "64235dcc-ba31-4f35-8fcd-48a8b0982165",
            "PageIndex": 1,
            "PageSize": 12
        },
        success: function (data) {
            console.log(data.data);
            $(".patha").text("生态矿山");
            $(".title").text("生态矿山");
            $(".ma-center ul").css("display", "block");
            $(".firstli").css("display", "block");

            for (var i = 0; i < data.data.lst_categoryarticlelist.length; i++) {
                // console.log(data.data.lst_categoryarticlelist[i].CreateTime);
                $(".ma-center li a").eq(i).text(data.data.lst_categoryarticlelist[i].Title);
                $(".ma-center li a").eq(i).attr("id", data.data.lst_categoryarticlelist[i].Id);
                $(".x-zi a").attr("id",data.data.lst_categoryarticlelist[0].Id)
                $(".ma-center .wenben").css("display", "none");
                $(".ma-center .date").eq(i).text(data.data.lst_categoryarticlelist[i].CreateTime);
                $(".pageInfo").css("display","none");
            }
        },
        error: function () {
            console.log("sss")
        }
    });
    $.ajax({
        type: "POST",
        url: "http://kxqh.api.milisx.xyz/api/content/getarticledetail",
        dateType: "json",
        data: {
            "ArticleId": "b196e032-3eae-4af0-ad37-756ab2ecb4d9"
        },
        success: function (data) {
            // console.log(data.data);
            $(".firstli img").attr('src', data.data.CoverPhoto);
            $(".firstli h1").text(data.data.Title);
            $(".firstli p").html(data.data.Body);
            $(".ma-center .xq").css("display", "none")
            $(".ma-center>img").css("display", "none");
            $(".pageInfo").css("display","none");

        },
    });
});
$(".li12").click(function () {
    $.ajax({
        type: "post",
        url: "http://kxqh.api.milisx.xyz/api/content/getcategoryarticlelist",
        dateType: "json",
        data: {
            "categoryid": "cd5c323e-5d09-41f6-82b7-9a98b2431370",
            "PageIndex": 1,
            "PageSize": 12
        },
        success: function (data) {
            console.log(data.data);
            $(".patha").text("党建动态");
            $(".title").text("党建动态");
            $(".ma-center ul").css("display", "block");
            $(".firstli").css("display", "block");

            for (var i = 0; i < data.data.lst_categoryarticlelist.length; i++) {
                // console.log(data.data.lst_categoryarticlelist[i].CreateTime);
                $(".ma-center li a").eq(i).text(data.data.lst_categoryarticlelist[i].Title);
                $(".ma-center li a").eq(i).attr("id", data.data.lst_categoryarticlelist[i].Id);
                $(".x-zi a").attr("id",data.data.lst_categoryarticlelist[0].Id)
                $(".ma-center .wenben").css("display", "none");
                $(".ma-center .date").eq(i).text(data.data.lst_categoryarticlelist[i].CreateTime);
                $(".pageInfo").css("display","none");
            }
        },
        error: function () {
            console.log("sss")
        }
    });
    $.ajax({
        type: "POST",
        url: "http://kxqh.api.milisx.xyz/api/content/getarticledetail",
        dateType: "json",
        data: {
            "ArticleId": "71719455-7879-4807-838d-7350cefeb31c"
        },
        success: function (data) {
            // console.log(data.data);
            $(".firstli img").attr('src', data.data.CoverPhoto);
            $(".firstli h1").text(data.data.Title);
            $(".firstli p").html(data.data.Body);
            $(".ma-center .xq").css("display", "none")
            $(".ma-center>img").css("display", "none");
            $(".pageInfo").css("display","none");

        },
    });
});
$(".li13").click(function () {
    $.ajax({
        type: "post",
        url: "http://kxqh.api.milisx.xyz/api/content/getcategoryarticlelist",
        dateType: "json",
        data: {
            "categoryid": "37a17e18-c055-43e6-80be-147a81e78350",
            "PageIndex": 1,
            "PageSize": 12
        },
        success: function (data) {
            console.log(data.data);
            $(".patha").text("廉政建设");
            $(".title").text("廉政建设");
            $(".ma-center ul").css("display", "block");
            $(".firstli").css("display", "block");

            for (var i = 0; i < data.data.lst_categoryarticlelist.length; i++) {
                // console.log(data.data.lst_categoryarticlelist[i].CreateTime);
                $(".ma-center li a").eq(i).text(data.data.lst_categoryarticlelist[i].Title);
                $(".ma-center li a").eq(i).attr("id", data.data.lst_categoryarticlelist[i].Id);
                $(".x-zi a").attr("id",data.data.lst_categoryarticlelist[0].Id)
                $(".ma-center .wenben").css("display", "none");
                $(".ma-center .date").eq(i).text(data.data.lst_categoryarticlelist[i].CreateTime);
                $(".pageInfo").css("display","none");
            }
        },
        error: function () {
            console.log("sss")
        }
    });
    $.ajax({
        type: "POST",
        url: "http://kxqh.api.milisx.xyz/api/content/getarticledetail",
        dateType: "json",
        data: {
            "ArticleId": "d48fe9de-654e-4a38-816b-6d391e9ec8d8"
        },
        success: function (data) {
            // console.log(data.data);
            $(".firstli img").attr('src', data.data.CoverPhoto);
            $(".firstli h1").text(data.data.Title);
            $(".firstli p").html(data.data.Body);
            $(".ma-center .xq").css("display", "none")
            $(".ma-center>img").css("display", "none");
            $(".pageInfo").css("display","none");

        },
    });
});
$(".li14").click(function () {
    $.ajax({
        type: "post",
        url: "http://kxqh.api.milisx.xyz/api/content/getcategoryarticlelist",
        dateType: "json",
        data: {
            "categoryid": "27faa66a-c165-410c-8139-ad7318d41bfd",
            "PageIndex": 1,
            "PageSize": 12
        },
        success: function (data) {
            console.log(data.data);
            $(".patha").text("上级精神");
            $(".title").text("上级精神");
            $(".ma-center ul").css("display", "block");
            $(".firstli").css("display", "block");

            for (var i = 0; i < data.data.lst_categoryarticlelist.length; i++) {
                // console.log(data.data.lst_categoryarticlelist[i].CreateTime);
                $(".ma-center li a").eq(i).text(data.data.lst_categoryarticlelist[i].Title);
                $(".ma-center li a").eq(i).attr("id", data.data.lst_categoryarticlelist[i].Id);
                $(".x-zi a").attr("id",data.data.lst_categoryarticlelist[0].Id)
                $(".ma-center .wenben").css("display", "none");
                $(".ma-center .date").eq(i).text(data.data.lst_categoryarticlelist[i].CreateTime);
                $(".pageInfo").css("display","none");
            }
        },
        error: function () {
            console.log("sss")
        }
    });
    $.ajax({
        type: "POST",
        url: "http://kxqh.api.milisx.xyz/api/content/getarticledetail",
        dateType: "json",
        data: {
            "ArticleId": "04a8d3ff-7b15-4755-91cf-4a936a2057ff"
        },
        success: function (data) {
            // console.log(data.data);
            $(".firstli img").attr('src', data.data.CoverPhoto);
            $(".firstli h1").text(data.data.Title);
            $(".firstli p").html(data.data.Body);
            $(".ma-center .xq").css("display", "none")
            $(".ma-center>img").css("display", "none");
            $(".pageInfo").css("display","none");

        },
    });
});
$(".li15").click(function () {
    $.ajax({
        type: "post",
        url: "http://kxqh.api.milisx.xyz/api/content/getcategoryarticlelist",
        dateType: "json",
        data: {
            "categoryid": "722c2e2f-35d1-4712-84fb-4d78516ce7be",
            "PageIndex": 1,
            "PageSize": 12
        },
        success: function (data) {
            console.log(data.data);
            $(".patha").text("团建工作");
            $(".title").text("团建工作");
            $(".ma-center ul").css("display", "block");
            $(".firstli").css("display", "block");

            for (var i = 0; i < data.data.lst_categoryarticlelist.length; i++) {
                // console.log(data.data.lst_categoryarticlelist[i].CreateTime);
                $(".ma-center li a").eq(i).text(data.data.lst_categoryarticlelist[i].Title);
                $(".ma-center li a").eq(i).attr("id", data.data.lst_categoryarticlelist[i].Id);
                $(".x-zi a").attr("id",data.data.lst_categoryarticlelist[0].Id)
                $(".ma-center .wenben").css("display", "none");
                $(".ma-center .date").eq(i).text(data.data.lst_categoryarticlelist[i].CreateTime);
                $(".pageInfo").css("display","none");
            }
        },
        error: function () {
            console.log("sss")
        }
    });
    $.ajax({
        type: "POST",
        url: "http://kxqh.api.milisx.xyz/api/content/getarticledetail",
        dateType: "json",
        data: {
            "ArticleId": "c2bc9fc7-07d9-4d3e-a73b-659092f100b8"
        },
        success: function (data) {
            // console.log(data.data);
            $(".firstli img").attr('src', data.data.CoverPhoto);
            $(".firstli h1").text(data.data.Title);
            $(".firstli p").html(data.data.Body);
            $(".ma-center .xq").css("display", "none")
            $(".ma-center>img").css("display", "none");
            $(".pageInfo").css("display","none");

        },
    });
});
$(".li16").click(function () {
    $.ajax({
        type: "post",
        url: "http://kxqh.api.milisx.xyz/api/content/getcategoryarticlelist",
        dateType: "json",
        data: {
            "categoryid": "7a14ec45-a68d-4be0-a698-2a70e9122bf8",
            "PageIndex": 1,
            "PageSize": 12
        },
        success: function (data) {
            // console.log(data.data);
            $(".patha").text("经营动态");
            $(".title").text("经营动态");
            $(".ma-center ul").css("display", "block");
            $(".firstli").css("display", "block");

            for (var i = 0; i < data.data.lst_categoryarticlelist.length; i++) {
                // console.log(data.data.lst_categoryarticlelist[i].CreateTime);
                $(".ma-center li a").eq(i).text(data.data.lst_categoryarticlelist[i].Title);
                $(".ma-center li a").eq(i).attr("id", data.data.lst_categoryarticlelist[i].Id);
                $(".x-zi a").attr("id",data.data.lst_categoryarticlelist[0].Id)
                $(".ma-center .wenben").css("display", "none");
                $(".ma-center .date").eq(i).text(data.data.lst_categoryarticlelist[i].CreateTime);
                $(".pageInfo").css("display","none");
            }
        },
        error: function () {
            console.log("sss")
        }
    });
    $.ajax({
        type: "POST",
        url: "http://kxqh.api.milisx.xyz/api/content/getarticledetail",
        dateType: "json",
        data: {
            "ArticleId": "86798375-632c-4d8a-9e4a-a1c8d2e38945"
        },
        success: function (data) {
            // console.log(data.data);
            $(".firstli img").attr('src', data.data.CoverPhoto);
            $(".firstli h1").text(data.data.Title);
            $(".firstli p").html(data.data.Body);
            $(".ma-center .xq").css("display", "none")
            $(".ma-center>img").css("display", "none");
            $(".pageInfo").css("display","none");

        },
    });
});
$(".li17").click(function () {
    $.ajax({
        type: "post",
        url: "http://kxqh.api.milisx.xyz/api/content/getcategoryarticlelist",
        dateType: "json",
        data: {
            "categoryid": "24d61bb2-7670-40c0-bc62-a5f6324df3d2",
            "PageIndex": 1,
            "PageSize": 12
        },
        success: function (data) {
            console.log(data.data);
            $(".patha").text("创新高低");
            $(".title").text("创新高低");
            $(".ma-center ul").css("display", "block");
            $(".firstli").css("display", "block");

            for (var i = 0; i < data.data.lst_categoryarticlelist.length; i++) {
                // console.log(data.data.lst_categoryarticlelist[i].CreateTime);
                $(".ma-center li a").eq(i).text(data.data.lst_categoryarticlelist[i].Title);
                $(".ma-center li a").eq(i).attr("id", data.data.lst_categoryarticlelist[i].Id);
                $(".x-zi a").attr("id",data.data.lst_categoryarticlelist[0].Id)
                $(".ma-center .wenben").css("display", "none");
                $(".ma-center .date").eq(i).text(data.data.lst_categoryarticlelist[i].CreateTime);
                $(".pageInfo").css("display","none");
            }
        },
        error: function () {
            console.log("sss")
        }
    });
    $.ajax({
        type: "POST",
        url: "http://kxqh.api.milisx.xyz/api/content/getarticledetail",
        dateType: "json",
        data: {
            "ArticleId": "2b8ba8bf-7964-436b-8dec-2b6bfef33425"
        },
        success: function (data) {
            // console.log(data.data);
            $(".firstli img").attr('src', data.data.CoverPhoto);
            $(".firstli h1").text(data.data.Title);
            $(".firstli p").html(data.data.Body);
            $(".ma-center .xq").css("display", "none")
            $(".ma-center>img").css("display", "none");
            $(".pageInfo").css("display","none");

        },
    });
});
$(".li18").click(function () {
    $.ajax({
        type: "post",
        url: "http://kxqh.api.milisx.xyz/api/content/getcategoryarticlelist",
        dateType: "json",
        data: {
            "categoryid": "9be72063-ec73-4fa5-8be2-6f106f9591eb",
            "PageIndex": 1,
            "PageSize": 12
        },
        success: function (data) {
            console.log(data.data);
            $(".patha").text("降本增效");
            $(".title").text("降本增效");
            $(".ma-center ul").css("display", "block");
            $(".firstli").css("display", "block");

            for (var i = 0; i < data.data.lst_categoryarticlelist.length; i++) {
                // console.log(data.data.lst_categoryarticlelist[i].CreateTime);
                $(".ma-center li a").eq(i).text(data.data.lst_categoryarticlelist[i].Title);
                $(".ma-center li a").eq(i).attr("id", data.data.lst_categoryarticlelist[i].Id);
                $(".x-zi a").attr("id",data.data.lst_categoryarticlelist[0].Id)
                $(".ma-center .wenben").css("display", "none");
                $(".ma-center .date").eq(i).text(data.data.lst_categoryarticlelist[i].CreateTime);
                $(".pageInfo").css("display","none");
            }
        },
        error: function () {
            console.log("sss")
        }
    });
    $.ajax({
        type: "POST",
        url: "http://kxqh.api.milisx.xyz/api/content/getarticledetail",
        dateType: "json",
        data: {
            "ArticleId": "445326c8-aa68-4b1a-94f6-d8c25ddd5f44"
        },
        success: function (data) {
            // console.log(data.data);
            $(".firstli img").attr('src', data.data.CoverPhoto);
            $(".firstli h1").text(data.data.Title);
            $(".firstli p").html(data.data.Body);
            $(".ma-center .xq").css("display", "none")
            $(".ma-center>img").css("display", "none");
            $(".pageInfo").css("display","none");

        },
    });
});
$(".li19").click(function () {
    $.ajax({
        type: "post",
        url: "http://kxqh.api.milisx.xyz/api/content/getcategoryarticlelist",
        dateType: "json",
        data: {
            "categoryid": "6c8b4cdd-ef4b-4e3d-ae87-901be775867d",
            "PageIndex": 1,
            "PageSize": 12
        },
        success: function (data) {
            console.log(data.data);
            $(".patha").text("行业聚焦");
            $(".title").text("行业聚焦");
            $(".ma-center ul").css("display", "block");
            $(".firstli").css("display", "block");

            for (var i = 0; i < data.data.lst_categoryarticlelist.length; i++) {
                // console.log(data.data.lst_categoryarticlelist[i].CreateTime);
                $(".ma-center li a").eq(i).text(data.data.lst_categoryarticlelist[i].Title);
                $(".ma-center li a").eq(i).attr("id", data.data.lst_categoryarticlelist[i].Id);
                $(".x-zi a").attr("id",data.data.lst_categoryarticlelist[0].Id)
                $(".ma-center .wenben").css("display", "none");
                $(".ma-center .date").eq(i).text(data.data.lst_categoryarticlelist[i].CreateTime);
                $(".pageInfo").css("display","none");
            }
        },
        error: function () {
            console.log("sss")
        }
    });
    $.ajax({
        type: "POST",
        url: "http://kxqh.api.milisx.xyz/api/content/getarticledetail",
        dateType: "json",
        data: {
            "ArticleId": "53b29788-9b8f-41ec-92b2-56978c1d2535"
        },
        success: function (data) {
            // console.log(data.data);
            $(".firstli img").attr('src', data.data.CoverPhoto);
            $(".firstli h1").text(data.data.Title);
            $(".firstli p").html(data.data.Body);
            $(".ma-center .xq").css("display", "none")
            $(".ma-center>img").css("display", "none");
            $(".pageInfo").css("display","none");

        },
    });
});
$(".li20").click(function () {
    $.ajax({
        type: "post",
        url: "http://kxqh.api.milisx.xyz/api/content/getcategoryarticlelist",
        dateType: "json",
        data: {
            "categoryid": "ac435425-69ea-4aa9-bc1c-4952e72bae63",
            "PageIndex": 1,
            "PageSize": 12
        },
        success: function (data) {
            console.log(data.data);
            $(".patha").text("人文活动");
            $(".title").text("人文活动");
            $(".ma-center ul").css("display", "block");
            $(".firstli").css("display", "block");

            for (var i = 0; i < data.data.lst_categoryarticlelist.length; i++) {
                // console.log(data.data.lst_categoryarticlelist[i].CreateTime);
                $(".ma-center li a").eq(i).text(data.data.lst_categoryarticlelist[i].Title);
                $(".ma-center li a").eq(i).attr("id", data.data.lst_categoryarticlelist[i].Id);
                $(".x-zi a").attr("id",data.data.lst_categoryarticlelist[0].Id)
                $(".ma-center .wenben").css("display", "none");
                $(".ma-center .date").eq(i).text(data.data.lst_categoryarticlelist[i].CreateTime);
                $(".pageInfo").css("display","none");
            }
        },
        error: function () {
            console.log("sss")
        }
    });
    $.ajax({
        type: "POST",
        url: "http://kxqh.api.milisx.xyz/api/content/getarticledetail",
        dateType: "json",
        data: {
            "ArticleId": "48acf2d7-e25d-4f41-9644-129f5c9505bc"
        },
        success: function (data) {
            // console.log(data.data);
            $(".firstli img").attr('src', data.data.CoverPhoto);
            $(".firstli h1").text(data.data.Title);
            $(".firstli p").html(data.data.Body);
            $(".ma-center .xq").css("display", "none")
            $(".ma-center>img").css("display", "none");
            $(".pageInfo").css("display","none");

        },
    });
});
$(".li21").click(function () {
    $.ajax({
        type: "post",
        url: "http://kxqh.api.milisx.xyz/api/content/getcategoryarticlelist",
        dateType: "json",
        data: {
            "categoryid": "4cbfe924-8359-48cb-a11a-e20c8dbf69c5",
            "PageIndex": 1,
            "PageSize": 12
        },
        success: function (data) {
            console.log(data.data);
            $(".patha").text("职工风采");
            $(".title").text("职工风采");
            $(".ma-center ul").css("display", "block");
            $(".firstli").css("display", "block");

            for (var i = 0; i < data.data.lst_categoryarticlelist.length; i++) {
                // console.log(data.data.lst_categoryarticlelist[i].CreateTime);
                $(".ma-center li a").eq(i).text(data.data.lst_categoryarticlelist[i].Title);
                $(".ma-center li a").eq(i).attr("id", data.data.lst_categoryarticlelist[i].Id);
                $(".x-zi a").attr("id",data.data.lst_categoryarticlelist[0].Id)
                $(".ma-center .wenben").css("display", "none");
                $(".ma-center .date").eq(i).text(data.data.lst_categoryarticlelist[i].CreateTime);
                $(".pageInfo").css("display","none");
            }
        },
        error: function () {
            console.log("sss")
        }
    });
    $.ajax({
        type: "POST",
        url: "http://kxqh.api.milisx.xyz/api/content/getarticledetail",
        dateType: "json",
        data: {
            "ArticleId": "dee8fb92-dcec-4ba5-afce-2d3b5a4b14ca"
        },
        success: function (data) {
            // console.log(data.data);
            $(".firstli img").attr('src', data.data.CoverPhoto);
            $(".firstli h1").text(data.data.Title);
            $(".firstli p").html(data.data.Body);
            $(".ma-center .xq").css("display", "none")
            $(".ma-center>img").css("display", "none");
            $(".pageInfo").css("display","none");

        },
    });
});
$(".li22").click(function () {
    $.ajax({
        type: "post",
        url: "http://kxqh.api.milisx.xyz/api/content/getcategoryarticlelist",
        dateType: "json",
        data: {
            "categoryid": "ca89efd2-a5de-46c4-af68-78a8a962fb62",
            "PageIndex": 1,
            "PageSize": 12
        },
        success: function (data) {
            console.log(data.data);
            $(".patha").text("前和故事");
            $(".title").text("前和故事");
            $(".ma-center ul").css("display", "block");
            $(".firstli").css("display", "block");

            for (var i = 0; i < data.data.lst_categoryarticlelist.length; i++) {
                // console.log(data.data.lst_categoryarticlelist[i].CreateTime);
                $(".ma-center li a").eq(i).text(data.data.lst_categoryarticlelist[i].Title);
                $(".ma-center li a").eq(i).attr("id", data.data.lst_categoryarticlelist[i].Id);
                $(".x-zi a").attr("id",data.data.lst_categoryarticlelist[0].Id)
                $(".ma-center .wenben").css("display", "none");
                $(".ma-center .date").eq(i).text(data.data.lst_categoryarticlelist[i].CreateTime);
                $(".pageInfo").css("display","none");
            }
        },
        error: function () {
            console.log("sss")
        }
    });
    $.ajax({
        type: "POST",
        url: "http://kxqh.api.milisx.xyz/api/content/getarticledetail",
        dateType: "json",
        data: {
            "ArticleId": "0c03911f-bb56-4ef8-8d5f-c210908ba601"
        },
        success: function (data) {
            // console.log(data.data);
            $(".firstli img").attr('src', data.data.CoverPhoto);
            $(".firstli h1").text(data.data.Title);
            $(".firstli p").html(data.data.Body);
            $(".ma-center .xq").css("display", "none")
            $(".ma-center>img").css("display", "none");
            $(".pageInfo").css("display","none");

        },
    });
});
$(".li23").click(function () {
    $.ajax({
        type: "post",
        url: "http://kxqh.api.milisx.xyz/api/content/getcategoryarticlelist",
        dateType: "json",
        data: {
            "categoryid": "830e9ffd-6d44-40ab-9aa9-fd38141e1d5c",
            "PageIndex": 1,
            "PageSize": 12
        },
        success: function (data) {
            console.log(data.data);
            $(".patha").text("帮扶济困");
            $(".title").text("帮扶济困");
            $(".ma-center ul").css("display", "block");
            $(".firstli").css("display", "block");

            for (var i = 0; i < data.data.lst_categoryarticlelist.length; i++) {
                // console.log(data.data.lst_categoryarticlelist[i].CreateTime);
                $(".ma-center li a").eq(i).text(data.data.lst_categoryarticlelist[i].Title);
                $(".ma-center li a").eq(i).attr("id", data.data.lst_categoryarticlelist[i].Id);
                $(".x-zi a").attr("id",data.data.lst_categoryarticlelist[0].Id)
                $(".ma-center .wenben").css("display", "none");
                $(".ma-center .date").eq(i).text(data.data.lst_categoryarticlelist[i].CreateTime);
                $(".pageInfo").css("display","none");
            }
        },
        error: function () {
            console.log("sss")
        }
    });
    $.ajax({
        type: "POST",
        url: "http://kxqh.api.milisx.xyz/api/content/getarticledetail",
        dateType: "json",
        data: {
            "ArticleId": "e28f11d9-ce23-4483-a08e-d7d06a6c73a1"
        },
        success: function (data) {
            // console.log(data.data);
            $(".firstli img").attr('src', data.data.CoverPhoto);
            $(".firstli h1").text(data.data.Title);
            $(".firstli p").html(data.data.Body);
            $(".ma-center .xq").css("display", "none")
            $(".ma-center>img").css("display", "none")
            $(".pageInfo").css("display","none");
        },
    });
});
$(".li24").click(function () {
    $.ajax({
        type: "post",
        url: "http://kxqh.api.milisx.xyz/api/content/getcategoryarticlelist",
        dateType: "json",
        data: {
            "categoryid": "49d74a56-ec5b-4383-b3f8-7ee7bd995dd6",
            "PageIndex": 1,
            "PageSize": 12
        },
        success: function (data) {
            console.log(data.data);
            $(".patha").text("魅力前和");
            $(".title").text("魅力前和");
            $(".ma-center ul").css("display", "block");
            $(".firstli").css("display", "block");

            for (var i = 0; i < data.data.lst_categoryarticlelist.length; i++) {
                // console.log(data.data.lst_categoryarticlelist[i].CreateTime);
                $(".ma-center li a").eq(i).text(data.data.lst_categoryarticlelist[i].Title);
                $(".ma-center li a").eq(i).attr("id", data.data.lst_categoryarticlelist[i].Id);
                $(".x-zi a").attr("id",data.data.lst_categoryarticlelist[0].Id)
                $(".ma-center .wenben").css("display", "none");
                $(".ma-center .date").eq(i).text(data.data.lst_categoryarticlelist[i].CreateTime);
                $(".pageInfo").css("display","none");
            }
        },
        error: function () {
            console.log("sss")
        }
    });
    $.ajax({
        type: "POST",
        url: "http://kxqh.api.milisx.xyz/api/content/getarticledetail",
        dateType: "json",
        data: {
            "ArticleId": "cfd138e4-977e-43c1-acbe-43815d262820"
        },
        success: function (data) {
            // console.log(data.data);
            $(".firstli img").attr('src', data.data.CoverPhoto);
            $(".firstli h1").text(data.data.Title);
            $(".firstli p").html(data.data.Body);
            $(".ma-center .xq").css("display", "none")
            $(".ma-center>img").css("display", "none")
            $(".pageInfo").css("display","none");
        },
    });
});
$(".li25").click(function () {
    $.ajax({
        type: "post",
        url: "http://kxqh.api.milisx.xyz/api/content/getcategoryarticlelist",
        dateType: "json",
        data: {
            "categoryid": "9d0f6295-6b2e-42b5-84ad-ced75a776fc1",
            "PageIndex": 1,
            "PageSize": 12
        },
        success: function (data) {
            console.log(data.data);
            $(".patha").text("原创天地");
            $(".title").text("原创天地");
            $(".ma-center ul").css("display", "block");
            $(".firstli").css("display", "block");

            for (var i = 0; i < data.data.lst_categoryarticlelist.length; i++) {
                // console.log(data.data.lst_categoryarticlelist[i].CreateTime);
                $(".ma-center li a").eq(i).text(data.data.lst_categoryarticlelist[i].Title);
                $(".ma-center li a").eq(i).attr("id", data.data.lst_categoryarticlelist[i].Id);
                $(".x-zi a").attr("id",data.data.lst_categoryarticlelist[0].Id)
                $(".ma-center .wenben").css("display", "none");
                $(".ma-center .date").eq(i).text(data.data.lst_categoryarticlelist[i].CreateTime)
            }
        },
        error: function () {
            console.log("sss")
        }
    });
    $.ajax({
        type: "POST",
        url: "http://kxqh.api.milisx.xyz/api/content/getarticledetail",
        dateType: "json",
        data: {
            "ArticleId": "6c6854d7-68ec-4a3e-827a-48c2681050f2"
        },
        success: function (data) {
            // console.log(data.data);
            $(".firstli img").attr('src', data.data.CoverPhoto);
            $(".firstli h1").text(data.data.Title);
            $(".firstli p").html(data.data.Body);
            $(".ma-center .xq").css("display", "none")
            $(".ma-center>img").css("display", "none")
            $(".pageInfo").css("display","none");
        },
    });
});

$(".li26").click(function () {
    $(".pageInfo").css("display","none");
    $.ajax({
        type: "post",
        url: "http://kxqh.api.milisx.xyz/api/content/getcategoryarticlelist",
        dateType: "json",
        data: {
            "categoryid": "77378bd9-b680-404b-b6eb-ba2e5530e275",
            "PageIndex": 1,
            "PageSize": 12
        },
        success: function (data) {
            console.log(data.data);
            $(".patha").text("书香前和");
            $(".title").text("书香前和");
            $(".ma-center ul").css("display", "block");
            $(".firstli").css("display", "block");

            for (var i = 0; i < data.data.lst_categoryarticlelist.length; i++) {
                // console.log(data.data.lst_categoryarticlelist[i].CreateTime);
                $(".ma-center li a").eq(i).text(data.data.lst_categoryarticlelist[i].Title);
                $(".ma-center li a").eq(i).attr("id", data.data.lst_categoryarticlelist[i].Id);
                $(".x-zi a").attr("id",data.data.lst_categoryarticlelist[0].Id)
                $(".ma-center .wenben").css("display", "none");
                $(".ma-center .date").eq(i).text(data.data.lst_categoryarticlelist[i].CreateTime)
            }
        },
        error: function () {
            console.log("sss")
        }
    });
    $.ajax({
        type: "POST",
        url: "http://kxqh.api.milisx.xyz/api/content/getarticledetail",
        dateType: "json",
        data: {
            "ArticleId": "615d3300-0893-4dc7-be50-f34c3eb115c0"
        },
        success: function (data) {
            // console.log(data.data);
            $(".firstli img").attr('src', data.data.CoverPhoto);
            $(".firstli h1").text(data.data.Title);
            $(".firstli p").html(data.data.Body);
            $(".ma-center .xq").css("display", "none")
            $(".ma-center>img").css("display", "none")

        },
    });
});
$(".li27").click(function () {
    $(".pageInfo").css("display","none");
    $.ajax({
        type: "post",
        url: "http://kxqh.api.milisx.xyz/api/content/getcategoryarticlelist",
        dateType: "json",
        data: {
            "categoryid": "186120af-fdfa-4d89-b853-361afe92810b",
            "PageIndex": 1,
            "PageSize": 12
        },
        success: function (data) {
            console.log(data.data);
            $(".patha").text("阅读推荐");
            $(".title").text("阅读推荐");
            $(".ma-center ul").css("display", "block");
            $(".firstli").css("display", "block");

            for (var i = 0; i < data.data.lst_categoryarticlelist.length; i++) {
                // console.log(data.data.lst_categoryarticlelist[i].CreateTime);
                $(".ma-center li a").eq(i).text(data.data.lst_categoryarticlelist[i].Title);
                $(".ma-center li a").eq(i).attr("id", data.data.lst_categoryarticlelist[i].Id);
                $(".x-zi a").attr("id",data.data.lst_categoryarticlelist[0].Id)
                $(".ma-center .wenben").css("display", "none");
                $(".ma-center .date").eq(i).text(data.data.lst_categoryarticlelist[i].CreateTime)
            }
        },
        error: function () {
            console.log("sss")
        }
    });
    $.ajax({
        type: "POST",
        url: "http://kxqh.api.milisx.xyz/api/content/getarticledetail",
        dateType: "json",
        data: {
            "ArticleId": "a7844d0e-f590-4303-8043-fc3d5489ac7a"
        },
        success: function (data) {
            // console.log(data.data);
            $(".firstli img").attr('src', data.data.CoverPhoto);
            $(".firstli h1").text(data.data.Title);
            $(".firstli p").html(data.data.Body);
            $(".ma-center .xq").css("display", "none")
            $(".ma-center>img").css("display", "none")
        },
    });
});


// //
// window.location.reload()
// (function () {
//     location.reload(0)
// })();
// var texa = "";
// // for(var i = 0; i < $(".macenter li").length; i ++){
// $.ajax({
//     type: "POST",
//     url: "http://kxqh.api.milisx.xyz/api/content/getcategoryarticlelist",
//     dateType: "json",
//     data: {
//         "categoryid": "ac1e5571-d81f-4fc7-886c-c4ba6d7a871a",
//         "PageIndex": 1,
//         "PageSize": 12
//     },
//     success: function (data) {
//         // li[i].id = data.data[i].Id
//         for (var i = 0; i < 5; i++) {
//             $(".ma-center li")[i].id = data.data.lst_categoryarticlelist[i].Id;
//
//             texa =$(".ma-center li")[i].id
//             console.log(texa);
//         }
//     }
// });
$(".ma-center li").on("click", "a", function () {
    $(".pageInfo").css("display","block");
    $.ajax({
        type: "POST",
        url: "http://kxqh.api.milisx.xyz/api/content/getarticledetail",
        dataType: "json",
        data: {
            "ArticleId": $(this).attr("id"),
        },
        success: function (data) {
            // console.log(data.data);
            $(".ma-center .xq").css("display", "block");
            $(".ma-right>h3").text(data.data.Title);
            $(".ma-center .xq").html(data.data.Body);
            $(".ma-center img").attr('src', data.data.CoverPhoto);
            $(".ma-center ul").css("display", "none");
            $(".ma-center .firstli").css("display", "none");
            $(".ma-center>img").css("display", "block");
            $(".Prevpage span").text(data.obj.PreviousArticleTitle).attr('id',data.obj.PreviousArticleId);
            $(".Nextpage span").text(data.obj.NextArticleTitle).attr('id',data.obj.NextArticleId);
        }
    })
});
$(".mylists li").on("click", "a", function () {
    $(".ma-center").css("display","block");
    $(".mylists").css("display","none");
    $(".pageInfo").css("display","block");
    $.ajax({
        type: "POST",
        url: "http://kxqh.api.milisx.xyz/api/content/getarticledetail",
        dataType: "json",
        data: {
            "ArticleId": $(this).attr("id"),
        },
        success: function (data) {
            // console.log(data.data);
            $(".ma-center .xq").css("display", "block");
            $(".ma-right>h3").text(data.data.Title);
            $(".ma-center .xq").html(data.data.Body);
            $(".ma-center img").attr('src', data.data.CoverPhoto);
            $(".ma-center ul").css("display", "none");
            $(".ma-center .firstli").css("display", "none");
            $(".ma-center>img").css("display", "block");
            $(".Prevpage span").text(data.obj.PreviousArticleTitle).attr('id',data.obj.PreviousArticleId);
            $(".Nextpage span").text(data.obj.NextArticleTitle).attr('id',data.obj.NextArticleId);
        }
    })
});
$(".mylists1 li").on("click", "a", function () {
    $(".ma-center").css("display","block");
    $(".mylists1").css("display","none");
    $(".pageInfo").css("display","block");
    $.ajax({
        type: "POST",
        url: "http://kxqh.api.milisx.xyz/api/content/getarticledetail",
        dataType: "json",
        data: {
            "ArticleId": $(this).attr("id"),
        },
        success: function (data) {
            // console.log(data.data);
            $(".ma-center .xq").css("display", "block");
            $(".ma-right>h3").text(data.data.Title);
            $(".ma-center .xq").html(data.data.Body);
            $(".ma-center img").attr('src', data.data.CoverPhoto);
            $(".ma-center ul").css("display", "none");
            $(".ma-center .firstli").css("display", "none");
            $(".ma-center>img").css("display", "block")
            $(".Prevpage span").text(data.obj.PreviousArticleTitle).attr('id',data.obj.PreviousArticleId);
            $(".Nextpage span").text(data.obj.NextArticleTitle).attr('id',data.obj.NextArticleId);
        }
    })
});

$(".button").click(function () {
    $(".content").css("display","none")
    $(".content-in").css("display","none")
    $("#search").css("display","block")
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
$(".links a").click(function () {
    $(".content-in").css("display","none")
    $(".content").css("display","none")
    $("#search").css("display","none")
    $("#ma").css("display","block")
});
$(".x-zi a").click(function () {
    $.ajax({
        type: "POST",
        url: "http://kxqh.api.milisx.xyz/api/content/getarticledetail",
        dataType: "json",
        data: {
            "ArticleId": $(this).attr("id"),
        },
        success: function (data) {
            // console.log(data.data);
            $(".ma-center .xq").css("display", "block");
            $(".ma-right>h3").text(data.data.Title);
            $(".ma-center .xq").html(data.data.Body);
            $(".ma-center img").attr('src', data.data.CoverPhoto);
            $(".ma-center ul").css("display", "none");
            $(".ma-center .firstli").css("display", "none");
            $(".ma-center>img").css("display", "block")
        }
    })
})
