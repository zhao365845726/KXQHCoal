
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
                                 <a href="#"><img  src=""></a>
                            </li>
                            <li>
                                 <a href="#" ><img src=""></a>
                            </li>
                            <li>
                                  <a href="#"><img  src=""></a>
                            </li>
                            <li>
                                 <a href="#" ><img  src=""></a>
                            </li>
                            <li>
                                 <a href="#" ><img  src=""></a>
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
                                    <router-link to="/page1" class="a1"></router-link>
                                </li>
                                <li>
                                    <span class="date"></span>
                                    <router-link to="/page1" class="a2"></router-link>
                                </li>
                                <li>
                                    <span class="date"></span>
                                    <router-link to="/page1" class="a3"></router-link>
                                </li>
                                <li>
                                    <span class="date"></span>
                                    <router-link to="/page1" class="a4"></router-link>
                                </li>
                                <li>
                                    <span class="date"></span>
                                    <router-link to="/page1" class="a5"></router-link>
                                </li>
                               
                            </ul>
                            <ul class="video-sp-list" style="display: none;">
                                <li class="first">
                                    <span class="date">02-25</span>
                                    <a href="#" target="_blank">
                                        “改革创新、奋发有为“大讨论宣传片
                                    </a>
                                </li>
                                <li>
                                    <span class="date">02-25</span>
                                    <a href="#" target="_blank">
                                       
                                    </a>
                                </li>
                                <li>
                                    <span class="date">02-25</span>
                                    <a href="#" target="_blank">
                                        
                                    </a>
                                </li>
                                <li>
                                    <span class="date">02-25</span>
                                    <a href="#" target="_blank">
                                        
                                    </a>
                                </li>
                                <li>
                                    <span class="date">02-21</span>
                                    <a href="#" target="_blank">
                                        
                                    </a>
                                </li>
                                <li class="last">
                                    <span class="date">02-20</span>
                                    <a href="/#" target="_blank">
                                        
                                    </a>
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
                                    <router-link to="/page1" class="a6"></router-link>
                                </li>
                                <li>
                                    <span class="date"></span>
                                    <router-link to="/page1" class="a7"></router-link>
                                </li>
                                <li>
                                    <span class="date"></span>
                                    <router-link to="/page1" class="a8"></router-link>
                                </li>
                                <li>
                                    <span class="date"></span>
                                    <router-link to="/page1" class="a9"></router-link>
                                </li>
                                <li>
                                    <span class="date"></span>
                                    <router-link to="/page1" class="a10"></router-link>
                                </li>
                               
                            </ul>
                            <ul style="display: none">
                                <li class="first">
                                    <span class="date">02-21</span>
                                    <a href="" target="_blank" >
                                    </a>
                                </li>
                                <li>
                                    <span class="date">02-20</span>
                                    <a href=""  >
                                    </a>
                                </li>
                                <li>
                                    <span class="date">02-19</span>
                                    <a href="" target="_blank" >
                                    </a>
                                </li>
                                <li>
                                    <span class="date">02-19</span>
                                    <a href="" target="_blank">
                                    </a>
                                </li>
                                <li>
                                    <span class="date">02-18</span>
                                    <a href="">
                                        
                                    </a>
                                </li>
                                <li class="last">
                                    <span class="date">02-18</span>
                                    <a href="" target="_blank">
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row content-banner"><img src="img/5bcd378b51126.jpg" alt=""></div>
            <div class="row news-content">
           
                <div class="col-lg-4">
                    <div class="news-head">
                        <ul>
                            <li class="on"><a>安全生产</a><a href="security.html">+more</a></li>
                            <li class="" style="display: none"><a ></a></li>
                            <li class="" style="display: none"><a ></a></li>
                        </ul>
                    </div>
                    <div class="new-center">
                        <div>
                            <ul>
                                <li>
                                    <span class="date"></span>
                                    <router-link to="/page1" class="a11"></router-link>
                                </li>
                                <li>
                                    <span class="date"></span>
                                    <router-link to="/page1" class="a12"></router-link>
                                </li>
                                <li>
                                    <span class="date"></span>
                                    <router-link to="/page1" class="a13"></router-link>
                                </li>
                                <li>
                                    <span class="date"></span>
                                    <router-link to="/page1" class="a14"></router-link>
                                </li>
                                <li>
                                    <span class="date"></span>
                                    <router-link to="/page1" class="a15"></router-link>
                                </li>
                                <li>
                                    <span class="date"></span>
                                    <router-link to="/page1" class="a16"></router-link>
                                </li>
                                <li>
                                    <span class="date"></span>
                                    <router-link to="/page1" class="a17"></router-link>
                                </li>
                                <li>
                                    <span class="date"></span>
                                    <router-link to="/page1" class="a18"></router-link>
                                </li>
                                <li>
                                    <span class="date"></span>
                                    <router-link to="/page1" class="a19"></router-link>
                                </li>
                                <li>
                                    <span class="date"></span>
                                    <router-link to="/page1" class="a20"></router-link>
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
                                    <router-link to="/page1" class="a21"></router-link>
                                </li>
                                <li>
                                    <span class="date"></span>
                                    <router-link to="/page1" class="a22"></router-link>
                                </li>
                                <li>
                                    <span class="date"></span>
                                    <router-link to="/page1" class="a23"></router-link>
                                </li>
                                <li>
                                    <span class="date"></span>
                                    <router-link to="/page1" class="a24"></router-link>
                                </li>
                                <li>
                                    <span class="date"></span>
                                    <router-link to="/page1" class="a25"></router-link>
                                </li>
                                <li>
                                    <span class="date"></span>
                                    <router-link to="/page1" class="a26"></router-link>
                                </li>
                                <li>
                                    <span class="date"></span>
                                    <router-link to="/page1" class="a27"></router-link>
                                </li>
                                <li>
                                    <span class="date"></span>
                                    <router-link to="/page1" class="a28"></router-link>
                                </li>
                                <li>
                                    <span class="date"></span>
                                    <router-link to="/page1" class="a29"></router-link>
                                </li>
                                <li>
                                    <span class="date"></span>
                                    <router-link to="/page1" class="a30"></router-link>
                                </li>
                            </ul>
                        </div>
                        <div style="display: none">
                            <ul>
                                <li>
                                    <span class="date">02-23</span>
                                    <a href="" target="_blank" title="标题：高平市第六届人民代表大会第四次会议公告发表时间：2019-02-23">高平市第六届人民代表大会第四次会议公告</a>
                                </li>
                                <li>
                                    <span class="date">02-23</span>
                                    <a href="/xxgk/rsxx/content_71584" target="_blank" title="标题：高平市第六届人民代表大会第四次会议公告发表时间：2019-02-23">高平市第六届人民代表大会第四次会议公告</a>
                                </li>
                                <li>
                                    <span class="date">02-02</span>
                                    <a href="/xxgk/rsxx/content_71011" target="_blank" title="标题：高平市人大常委会任职名单发表时间：2019-02-02">高平市人大常委会任职名单</a>
                                </li>
                                <li>
                                    <span class="date">02-02</span>
                                    <a href="/xxgk/rsxx/content_71012" target="_blank" title="标题： 高平市人大常委会免职名单发表时间：2019-02-02">高平市人大常委会免职名单</a>
                                </li>
                                <li>
                                    <span class="date">01-16</span>
                                    <a href="/xxgk/rsxx/content_69298" target="_blank" title="标题：高平市2018年部分事业单位公开招聘工作人员拟聘用人员公示发表时间：2019-01-16">高平市2018年部分事业单位公开招聘工作人员拟聘…</a>
                                </li>
                                <li>
                                    <span class="date">01-14</span>
                                    <a href="/xxgk/rsxx/content_69224" target="_blank" title="标题：高平市人大常委会公告发表时间：2019-01-14">高平市人大常委会公告</a>
                                </li>
                                <li>
                                    <span class="date">01-08</span>
                                    <a href="/xxgk/rsxx/content_69097" target="_blank" title="标题：全市干部大会召开　胡晓刚任市委书记发表时间：2019-01-08">全市干部大会召开　胡晓刚任市委书记</a>
                                </li>
                                <li>
                                    <span class="date">12-24</span>
                                    <a href="/xxgk/rsxx/content_68805" target="_blank" title="标题：高平市人力资源和社会保障局关于拟安置李锋梅同志等100名“4050”下岗失业人员从事公益性岗位的公示发表时间：2018-12-24">高平市人力资源和社会保障局关于拟安置李锋梅同…</a>
                                </li>
                                <li>
                                    <span class="date">12-21</span>
                                    <a href="/xxgk/rsxx/content_68749" target="_blank" title="标题：高平市人大常委会任职名单发表时间：2018-12-21">高平市人大常委会任职名单</a>
                                </li>
                            </ul>
                        </div>
                        <div style="display:none;">
                            <ul>
                                <li>
                                    <span class="date">02-26</span>
                                    <a href="/xxgk/zcjd/content_71666" target="_blank" title="标题：准确把握总体要求和主要任务发表时间：2019-02-26">准确把握总体要求和主要任务</a>
                                </li>
                                <li>
                                    <span class="date">02-26</span>
                                    <a href="/xxgk/zcjd/content_71665" target="_blank" title="标题：重点抓好十个关键环节发表时间：2019-02-26">重点抓好十个关键环节</a>
                                </li>
                                <li>
                                    <span class="date">02-26</span>
                                    <a href="/xxgk/zcjd/content_71664" target="_blank" title="标题：通过大讨论带动整体工作实现“六个新突破”发表时间：2019-02-26">通过大讨论带动整体工作实现“六个新突破”</a>
                                </li>
                                <li>
                                    <span class="date">02-19</span>
                                    <a href="/xxgk/zcjd/content_71230" target="_blank" title="标题：【图解】我省新增3处“国字号”森林公园发表时间：2019-02-19">【图解】我省新增3处“国字号”森林公园</a>
                                </li>
                                <li>
                                    <span class="date">02-19</span>
                                    <a href="/xxgk/zcjd/content_71229" target="_blank" title="标题：全省“改革创新、奋发有为”大讨论要这么干发表时间：2019-02-19">全省“改革创新、奋发有为”大讨论要这么干</a>
                                </li>
                                <li>
                                    <span class="date">02-02</span>
                                    <a href="/xxgk/zcjd/content_71061" target="_blank" title="标题：【图解】山西启动国有企业工资决定机制改革发表时间：2019-02-02">【图解】山西启动国有企业工资决定机制改革</a>
                                </li>
                                <li>
                                    <span class="date">02-02</span>
                                    <a href="/xxgk/zcjd/content_71062" target="_blank" title="标题：【省委经济工作会议“十大亮点”解读之十】进一步加强和改进党对经济工作的领导发表时间：2019-02-02">【省委经济工作会议“十大亮点”解读之十】进一…</a>
                                </li>
                                <li>
                                    <span class="date">02-01</span>
                                    <a href="/xxgk/zcjd/content_70910" target="_blank" title="标题：【图解】改革“一子落”，转型“满盘活”发表时间：2019-02-01">【图解】改革“一子落”，转型“满盘活”</a>
                                </li>
                                <li>
                                    <span class="date">01-24</span>
                                    <a href="/xxgk/zcjd/content_69649" target="_blank" title="标题：【图解】从税务视角看山西能源革命发表时间：2019-01-24">【图解】从税务视角看山西能源革命</a>
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
                                <router-link to="/page1"></router-link>
                            </li>
                            <li>
                                <em class="number">02</em>
                                <router-link to="/page1" ></router-link>
                            </li>
                            <li>
                                <em class="number">03</em>
                                <router-link to="/page1"></router-link>
                            </li>
                            <li>
                                <em class="number">04</em>
                                <router-link to="/page1"></router-link>
                            </li>
                            <li>
                                <em class="number">05</em>
                                <router-link to="/page1"></router-link>
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
//     {
//         path: "/ssqh",
//         component: {
//             template: `
//             <div>
//     <div class="path container">
//         <em>您的位置：</em><a href="/">首页</a>
//         &gt;<a href="" class="patha"></a>
//     </div>
//     <div class="ma-content container row">
//         <div class="ma-left col-lg-3">
//             <h3>专栏</h3>
//             <div class="">
//                 <ul class="menuList">
//                     <li><a href="javascript:;" class="li0"></a></li>
//                     <li><a href="javascript:;" class="li1"></a></li>
//                     <li><a href="javascript:;" class="li2"></a></li>
//                     <li><a href="javascript:;" class="li3"></a></li>
//                 </ul>
//             </div>
//         </div>
//         <div class="ma-right col-lg-9">
//             <h3 class="title"></h3>
//             <div class="xx-zi">
//                 <span name="time">发表时间　2019-03-05 08:33:38</span>
//                 <span name="name">发表编辑　admin</span>
//             </div>
//             <div class="ma-center">
//                 <div class="firstli">
//                     <div class="x-pic">
//                         <img src="" alt="">
//                     </div>
//                     <div class="x-zi">
//                         <h1></h1>
//                         <h3>
//                             <p></p>
//                             <a href="">查看详情</a>
//                        </h3>
//                     </div>
//                 </div>
//                 <ul>
//                 <li><router-link to="/page1"></router-link><span class="date"></span></li>
//                 <li><a href=""></a><span class="date"></span></li>
//                 <li><a href=""></a><span class="date"></span></li>
//                 <li><a href=""></a><span class="date"></span></li>
//                 <li><a href=""></a><span class="date"></span></li>
//                 </ul>
//                 <div class="wenben">
//
//                 </div>
//             </div>
//         </div>
//     </div>
// </div>
//             `
//         }
//     },
//     {
//         path: "/xwsx",
//         component: {
//             template: `
//             <div>
//     <div class="path container">
//         <em>您的位置：</em><a href="/">首页</a>
//         &gt;<a href="" class="patha"></a>
//     </div>
//     <div class="ma-content container row">
//         <div class="ma-left col-lg-3">
//             <h3>专栏</h3>
//             <div class="">
//                 <ul class="menuList">
//                     <li><a href="javascript:;" class="li4"></a></li>
//                     <li><a href="javascript:;" class="li5"></a></li>
//                     <li><a href="javascript:;" class="li6"></a></li>
//                     <li><a href="javascript:;" class="li7"></a></li>
//                 </ul>
//             </div>
//         </div>
//         <div class="ma-right col-lg-9">
//             <h3 class="title"></h3>
//             <div class="xx-zi">
//                 <span name="time">发表时间　2019-03-05 08:33:38</span>
//                 <span name="name">发表编辑　admin</span>
//             </div>
//             <div class="ma-center">
//                 <div class="firstli">
//                     <div class="x-pic">
//                         <img src="" alt="">
//                     </div>
//                     <div class="x-zi">
//                         <h1></h1>
//                         <h3>
//                             <p></p>
//                             <a href="">查看详情</a>
//                        </h3>
//                     </div>
//                 </div>
//                 <ul>
//                 <li><a href=""></a><span class="date"></span></li>
//                 <li><a href=""></a><span class="date"></span></li>
//                 <li><a href=""></a><span class="date"></span></li>
//                 <li><a href=""></a><span class="date"></span></li>
//                 <li><a href=""></a><span class="date"></span></li>
//                 </ul>
//                 <div class="wenben">
//
//                 </div>
//             </div>
//         </div>
//     </div>
// </div>
//             `
//         }
//     },
//     {
//         path: "/aqsc",
//         component: {
//             template: `
//             <div>
//     <div class="path container">
//         <em>您的位置：</em><a href="/">首页</a>
//         &gt;<a href="" class="patha"></a>
//     </div>
//     <div class="ma-content container row">
//         <div class="ma-left col-lg-3">
//             <h3>专栏</h3>
//             <div class="">
//                 <ul class="menuList">
//                     <li><a href="javascript:;" class="li8"></a></li>
//                     <li><a href="javascript:;" class="li9"></a></li>
//                     <li><a href="javascript:;" class="li10"></a></li>
//                     <li><a href="javascript:;" class="li11"></a></li>
//                 </ul>
//             </div>
//         </div>
//         <div class="ma-right col-lg-9">
//             <h3 class="title"></h3>
//             <div class="xx-zi">
//                 <span name="time">发表时间　2019-03-05 08:33:38</span>
//                 <span name="name">发表编辑　admin</span>
//             </div>
//             <div class="ma-center">
//                 <div class="firstli">
//                     <div class="x-pic">
//                         <img src="" alt="">
//                     </div>
//                     <div class="x-zi">
//                         <h1></h1>
//                         <h3>
//                             <p></p>
//                             <a href="">查看详情</a>
//                        </h3>
//                     </div>
//                 </div>
//                 <ul>
//                 <li><a href=""></a><span class="date"></span></li>
//                 <li><a href=""></a><span class="date"></span></li>
//                 <li><a href=""></a><span class="date"></span></li>
//                 <li><a href=""></a><span class="date"></span></li>
//                 <li><a href=""></a><span class="date"></span></li>
//                 </ul>
//                 <div class="wenben">
//
//                 </div>
//             </div>
//         </div>
//     </div>
// </div>
//             `
//         }
//     },
//     {
//         path: "/qhdj",
//         component: {
//             template: `
//             <div>
//     <div class="path container">
//         <em>您的位置：</em><a href="/">首页</a>
//         &gt;<a href="" class="patha"></a>
//     </div>
//     <div class="ma-content container row">
//         <div class="ma-left col-lg-3">
//             <h3>专栏</h3>
//             <div class="">
//                 <ul class="menuList">
//                     <li><a href="javascript:;" class="li12"></a></li>
//                     <li><a href="javascript:;" class="li13"></a></li>
//                     <li><a href="javascript:;" class="li14"></a></li>
//                     <li><a href="javascript:;" class="li15"></a></li>
//                 </ul>
//             </div>
//         </div>
//         <div class="ma-right col-lg-9">
//             <h3 class="title"></h3>
//             <div class="xx-zi">
//                 <span name="time">发表时间　2019-03-05 08:33:38</span>
//                 <span name="name">发表编辑　admin</span>
//             </div>
//             <div class="ma-center">
//                 <div class="firstli">
//                     <div class="x-pic">
//                         <img src="" alt="">
//                     </div>
//                     <div class="x-zi">
//                         <h1></h1>
//                         <h3>
//                             <p></p>
//                             <a href="">查看详情</a>
//                        </h3>
//                     </div>
//                 </div>
//                 <ul>
//                 <li><a href=""></a><span class="date"></span></li>
//                 <li><a href=""></a><span class="date"></span></li>
//                 <li><a href=""></a><span class="date"></span></li>
//                 <li><a href=""></a><span class="date"></span></li>
//                 <li><a href=""></a><span class="date"></span></li>
//                 </ul>
//                 <div class="wenben">
//
//                 </div>
//             </div>
//         </div>
//     </div>
// </div>
//              `
//         }
//     },
//     {
//         path: "/jygl",
//         component: {
//             template: `
//             <div>
//     <div class="path container">
//         <em>您的位置：</em><a href="/">首页</a>
//         &gt;<a href="" class="patha"></a>
//     </div>
//     <div class="ma-content container row">
//         <div class="ma-left col-lg-3">
//             <h3>专栏</h3>
//             <div class="">
//                 <ul class="menuList">
//                     <li><a href="javascript:;" class="li16"></a></li>
//                     <li><a href="javascript:;" class="li17"></a></li>
//                     <li><a href="javascript:;" class="li18"></a></li>
//                     <li><a href="javascript:;" class="li19"></a></li>
//                 </ul>
//             </div>
//         </div>
//         <div class="ma-right col-lg-9">
//             <h3 class="title"></h3>
//             <div class="xx-zi">
//                 <span name="time">发表时间　2019-03-05 08:33:38</span>
//                 <span name="name">发表编辑　admin</span>
//             </div>
//             <div class="ma-center">
//                 <div class="firstli">
//                     <div class="x-pic">
//                         <img src="" alt="">
//                     </div>
//                     <div class="x-zi">
//                         <h1></h1>
//                         <h3>
//                             <p></p>
//                             <a href="">查看详情</a>
//                        </h3>
//                     </div>
//                 </div>
//                 <ul>
//                 <li><a href=""></a><span class="date"></span></li>
//                 <li><a href=""></a><span class="date"></span></li>
//                 <li><a href=""></a><span class="date"></span></li>
//                 <li><a href=""></a><span class="date"></span></li>
//                 <li><a href=""></a><span class="date"></span></li>
//                 </ul>
//                 <div class="wenben">
//
//                 </div>
//             </div>
//         </div>
//     </div>
// </div>
//             `
//         }
//     },
//     {
//         path: "/xfqh",
//         component: {
//             template: `
//             <div>
//     <div class="path container">
//         <em>您的位置：</em><a href="/">首页</a>
//         &gt;<a href="" class="patha"></a>
//     </div>
//     <div class="ma-content container row">
//         <div class="ma-left col-lg-3">
//             <h3>专栏</h3>
//             <div class="">
//                 <ul class="menuList">
//                     <li><a href="javascript:;" class="li20"></a></li>
//                     <li><a href="javascript:;" class="li21"></a></li>
//                     <li><a href="javascript:;" class="li22"></a></li>
//                     <li><a href="javascript:;" class="li23"></a></li>
//                 </ul>
//             </div>
//         </div>
//         <div class="ma-right col-lg-9">
//             <h3 class="title"></h3>
//             <div class="xx-zi">
//                 <span name="time">发表时间　2019-03-05 08:33:38</span>
//                 <span name="name">发表编辑　admin</span>
//             </div>
//             <div class="ma-center">
//                 <div class="firstli">
//                     <div class="x-pic">
//                         <img src="" alt="">
//                     </div>
//                     <div class="x-zi">
//                         <h1></h1>
//                         <h3>
//                             <p></p>
//                             <a href="">查看详情</a>
//                        </h3>
//                     </div>
//                 </div>
//                 <ul>
//                 <li><a href=""></a><span class="date"></span></li>
//                 <li><a href=""></a><span class="date"></span></li>
//                 <li><a href=""></a><span class="date"></span></li>
//                 <li><a href=""></a><span class="date"></span></li>
//                 <li><a href=""></a><span class="date"></span></li>
//                 </ul>
//                 <div class="wenben">
//
//                 </div>
//             </div>
//         </div>
//     </div>
// </div>
//             `
//         }
//     },
//     {
//         path: "/qhwy",
//         component: {
//             template: `
//             <div>
//     <div class="path container">
//         <em>您的位置：</em><a href="/">首页</a>
//         &gt;<a href="" class="patha"></a>
//     </div>
//     <div class="ma-content container row">
//         <div class="ma-left col-lg-3">
//             <h3>专栏</h3>
//             <div class="">
//                 <ul class="menuList">
//                     <li><a href="javascript:;" class="li24"></a></li>
//                     <li><a href="javascript:;" class="li25"></a></li>
//                     <li><a href="javascript:;" class="li26"></a></li>
//                     <li><a href="javascript:;" class="li27"></a></li>
//                 </ul>
//             </div>
//         </div>
//         <div class="ma-right col-lg-9">
//             <h3 class="title"></h3>
//             <div class="xx-zi">
//                 <span name="time">发表时间　2019-03-05 08:33:38</span>
//                 <span name="name">发表编辑　admin</span>
//             </div>
//             <div class="ma-center">
//                 <div class="firstli">
//                     <div class="x-pic">
//                         <img src="" alt="">
//                     </div>
//                     <div class="x-zi">
//                         <h1></h1>
//                         <h3>
//                             <p></p>
//                             <a href="">查看详情</a>
//                        </h3>
//                     </div>
//                 </div>
//                 <ul>
//                 <li><a href=""></a><span class="date"></span></li>
//                 <li><a href=""></a><span class="date"></span></li>
//                 <li><a href=""></a><span class="date"></span></li>
//                 <li><a href=""></a><span class="date"></span></li>
//                 <li><a href=""></a><span class="date"></span></li>
//                 </ul>
//                 <div class="wenben">
//
//                 </div>
//             </div>
//         </div>
//     </div>
// </div>
//             `
//         }
//     },
//     {
//         path: "/ma",
//         component: {
//             template: `
//             <div>
//     <div class="path container">
//         <em>您的位置：</em><a href="/">首页</a>
//         &gt;<a href="">官方二维码</a>
//     </div>
//     <div class="ma-content container row">
//        <div class="ma-left col-lg-3">
//            <h3>官方微信群</h3>
//        </div>
//         <div class="ma-right col-lg-9">
//             <h3 class="title">官方微信群</h3>
//             <div class="property">
//                 <span>【字体：<a href="javascript:;" data-power-command="reducefont">小</a> <a href="javascript:;" data-power-command="enlargefont">大</a>】</span>
//             </div>
//             <div class="ma-center">
//
//                 <p>请扫描以下二维码进入“官方微信群”</p>
//                 <p><img src="img/erweima.jpg" alt=""></p>
//
//             </div>
//         </div>
//     </div>
// </div>
//             `
//         }
//     },
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
              <div>
    <div class="path container">
        <em>您的位置：</em><a href="/">首页</a>
        &gt;<a href="" class="aa1">企业文化</a>
    </div>
    <div class="ma-content container row">
        <div class="ma-left col-lg-3">
            <h3>专栏</h3>
            <div class="bd">
                <ul class="menuList">
                    <li><a href="page.html">企业简介</a></li>
                    <li><a href="page.html">企业文化</a></li>
                    <li><a href="page.html">企业荣誉</a></li>
                    <li><a href="page.html">产品介绍</a></li>
                </ul>
            </div>
        </div>
        <div class="ma-right col-lg-9">
            <h3 class="title">企业文化</h3>
            
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

    //     {
    //         path:"/page3",
    //         component:{
    //             template:`
    //             <div>
    //     <div class="path container">
    //         <em>您的位置：</em><a href="/">首页</a>
    //         &gt;<a href="">产品介绍</a>
    //     </div>
    //     <div class="ma-content container row">
    //         <div class="ma-left col-lg-3">
    //             <h3>专栏</h3>
    //             <div class="bd">
    //                 <ul class="menuList">
    //                     <li><router-link to="/page">企业简介</router-link></li>
    //                     <li><router-link to="/page1">企业文化</router-link></li>
    //                     <li><router-link to="/page2">企业荣誉</router-link></li>
    //                     <li class="on"><router-link to="/page3">产品介绍</router-link></li>
    //                 </ul>
    //             </div>
    //         </div>
    //         <div class="ma-right col-lg-9">
    //             <h3 class="title">产品介绍</h3>
    //             <div class="property">
    //                 <span>【字体：<a href="javascript:;">小</a> <a href="javascript:;">大</a>】</span>
    //             </div>
    //             <div class="ma-center">
    //                 <div>
    //
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // </div>
    //             `
    //         }
    //     },
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
var timera = setInterval(rightBtnHandle, 2000);
$focusNews.mouseenter(function () {
    clearInterval(timera);
});
$focusNews.mouseleave(function () {
    timera = setInterval(rightBtnHandle, 2000);
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
                    "categoryid": "71839a52-fbf9-47b7-a864-36e727b86023",
                    "PageIndex": 1,
                    "PageSize": 10
                }
            },
            success: function (data) {
                console.log(data)
                for (var i = 0; i < data.data.lst_part_one.length; i++) {
                    // console.log(data.data.lst_part_one[i].Id);
                    $(".bd1 li a").eq(i).text(data.data.lst_part_one[i].Title);
                    $(".bd1 li a").eq(i).attr("id", data.data.lst_part_one[i].Id)
                    $(".bd1 .date").eq(i).text(data.data.lst_part_one[i].CreateTime);
                    $(".bd2 li a").eq(i).text(data.data.lst_part_two[i].Title);
                    $(".bd2 li a").eq(i).attr("id", data.data.lst_part_two[i].Id)
                    $(".bd2 .date").eq(i).text(data.data.lst_part_two[i].CreateTime)
                    $(".test img").eq(i).attr('src', data.data.lst_part_one[i].CoverPhoto)
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
                console.log(data);
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

// $(".navt1").click(function () {
//     $.ajax({
//         type: "POST",
//         url: "http://kxqh.api.milisx.xyz/api/content/getnavcategorylist",
//         dateType: "json",
//         data:{
//             "navid": "f0bc988f-77a4-4044-af50-1c93f1859fa8",
//             "PageIndex": 1,
//             "PageSize": 12
//         },
//         success: function(data){
//             console.log(data.data);
//             for(var i = 0;i < data.data.lst_viewnavcategory.length; i ++){
//                 // console.log(data.data.lst_viewnavcategory[i]);
//                 $(".menuList li a").eq(i).text(data.data.lst_viewnavcategory[i].Name)
//             }
//         },
//     });
//     $.ajax({
//         type: "POST",
//         url: "http://kxqh.api.milisx.xyz/api/content/getarticledetail",
//         dateType: "json",
//         data:{
//             "ArticleId": "2c1c1594-1aea-4c28-8e71-65e864edcd86"
//         },
//         success: function(data){
//             // console.log(data.data);
//             $(".ma-center .wenben").css("display","block");
//             $(".title").text(data.data.Title);
//             $(".patha").text(data.data.Title);
//             $(".ma-center .wenben").html(data.data.Body);
//             $(".ma-center ul").css("display","none")
//             $(".ma-center .firstli").css("display","none")
//         },
//     });
// });
// $(".navt2").click(function () {
//
// });
// $(".navt3").click(function () {
//     $.ajax({
//         type: "POST",
//         url: "http://kxqh.api.milisx.xyz/api/content/getnavcategorylist",
//         dateType: "json",
//         data:{
//             "navid": "fefb6175-f4b7-4205-ae94-5f655757d926",
//             "PageIndex": 1,
//             "PageSize": 20
//         },
//         success: function(data){
//             // console.log(data)
//             for(var i = 0;i < data.data.lst_viewnavcategory.length; i ++){
//                 // console.log(data.data.lst_viewnavcategory[i]);
//                 $(".menuList li a").eq(i).text(data.data.lst_viewnavcategory[i].Name)
//             }
//         },
//     });
//     $.ajax({
//         type: "post",
//         url: "http://kxqh.api.milisx.xyz/api/content/getcategoryarticlelist",
//         dateType: "json",
//         data:{
//             "categoryid": "a5a566c1-0bc3-4bcb-a43d-aaf9644c13cd",
//             "PageIndex": 1,
//             "PageSize": 12
//         },
//         success: function (data) {
//             // console.log(data.data);
//             $(".patha").text("生产动态");
//             $(".title").text("生产动态");
//             $(".ma-center ul").css("display","block");
//             $(".firstli").css("display","block");
//
//             for(var i =0 ; i< data.data.lst_categoryarticlelist.length; i ++){
//                 // console.log(data.data.lst_categoryarticlelist[i].CreateTime);
//                 $(".ma-center li a").eq(i).text(data.data.lst_categoryarticlelist[i].Title);
//                 $(".ma-center .wenben").css("display","none");
//                 $(".ma-center .date").eq(i).text(data.data.lst_categoryarticlelist[i].CreateTime)
//             }
//         },
//         error: function () {
//             console.log("sss")
//         }
//     });
//     $.ajax({
//         type: "POST",
//         url: "http://kxqh.api.milisx.xyz/api/content/getarticledetail",
//         dateType: "json",
//         data:{
//             "ArticleId": "bd8dc204-1241-48d7-acb5-6e16017666ce"
//         },
//         success: function(data){
//             // console.log(data.data);
//             $(".firstli img").attr('src',data.data.CoverPhoto);
//             $(".firstli h1").text(data.data.Title);
//             $(".firstli p").html(data.data.Body);
//
//         },
//     });
// });
// $(".navt4").click(function () {
//
//
// });
// $(".navt5").click(function () {
//
// });
// $(".navt6").click(function () {
//
// });
// $(".navt7").click(function () {
//
// });
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
        }
    })
});


$(".bd1 li").on("click", "a", function () {
    // console.log($(this).attr("id"))
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
            // $(".aa1").text("公司要闻")
        }
    })
});
$(".bd2 li").on("click", "a", function () {
    // console.log($(this).attr("id"))
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
            // $(".aa1").text("公司要闻")
        }
    })
});
$(".new-center li").on("click", "a", function () {
    console.log($(this).attr("id"))
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
            // $(".aa1").text("公司要闻")
        }
    })
})
$(".new-center1 li").on("click", "a", function () {
    console.log($(this).attr("id"))
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
            // $(".aa1").text("公司要闻")
        }
    })
})
$(".new-click li").on("click", "a", function () {
    console.log($(this).attr("id"))
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
            // $(".aa1").text("公司要闻")
        }
    })
})
// $(".a1").click(function () {
//
//     $.ajax({
//         type: "post",
//         url: "http://kxqh.api.milisx.xyz/api/content/getarticledetail",
//         dateType: "json",
//         data:{
//             "ArticleId": "e8d16e6e-e783-4370-890b-6510578c3027"
//         },
//         success: function (data) {
//             console.log(data.data);
//             $(".ma-right h3").text(data.data.Title);
//             $(".ma-center div").html(data.data.Body);
//             $(".ma-center img").attr('src',data.data.CoverPhoto);
//             $(".aa1").text("公司要闻")
//         }
//     })
// });
// $(".a2").click(function () {
//     $.ajax({
//         type: "post",
//         url: "http://kxqh.api.milisx.xyz/api/content/getarticledetail",
//         dateType: "json",
//         data:{
//             "ArticleId": "6b9fd486-d3bf-41f4-bdf4-a130ce0a7279"
//         },
//         success: function (data) {
//             console.log(data.data);
//             $(".ma-right h3").text(data.data.Title);
//             $(".ma-center div").html(data.data.Body);
//             $(".ma-center img").attr('src',data.data.CoverPhoto);
//         }
//     })
// });
// $(".a3").click(function () {
//     $.ajax({
//         type: "post",
//         url: "http://kxqh.api.milisx.xyz/api/content/getarticledetail",
//         dateType: "json",
//         data:{
//             "ArticleId": "6c7e6611-ae11-472e-97dc-f00adb8c5af8"
//         },
//         success: function (data) {
//             console.log(data.data);
//             $(".ma-right h3").text(data.data.Title);
//             $(".ma-center div").html(data.data.Body);
//             $(".ma-center img").attr('src',data.data.CoverPhoto);
//         }
//     })
// });
// $(".a4").click(function () {
//     $.ajax({
//         type: "post",
//         url: "http://kxqh.api.milisx.xyz/api/content/getarticledetail",
//         dateType: "json",
//         data:{
//             "ArticleId": "2e68284f-ba19-4ea5-adb7-72e435f4d250"
//         },
//         success: function (data) {
//             console.log(data.data);
//             $(".ma-right h3").text(data.data.Title);
//             $(".ma-center div").html(data.data.Body);
//             $(".ma-center img").attr('src',data.data.CoverPhoto);
//         }
//     })
// });
// $(".a5").click(function () {
//     $.ajax({
//         type: "post",
//         url: "http://kxqh.api.milisx.xyz/api/content/getarticledetail",
//         dateType: "json",
//         data:{
//             "ArticleId": "f4bf59d6-e235-45fa-9f06-5bd1fe6b64e3"
//         },
//         success: function (data) {
//             console.log(data.data);
//             $(".ma-right h3").text(data.data.Title);
//             $(".ma-center div").html(data.data.Body);
//             $(".ma-center img").attr('src',data.data.CoverPhoto);
//         }
//     })
// });
// $(".a6").click(function () {
//     $.ajax({
//         type: "post",
//         url: "http://kxqh.api.milisx.xyz/api/content/getarticledetail",
//         dateType: "json",
//         data:{
//             "ArticleId": "195c86eb-1e9c-4a86-8259-3653e137c179"
//         },
//         success: function (data) {
//             console.log(data.data);
//             $(".ma-right h3").text(data.data.Title);
//             $(".ma-center div").html(data.data.Body);
//             $(".ma-center img").attr('src',data.data.CoverPhoto);
//         }
//     })
// });
// $(".a7").click(function () {
//     $.ajax({
//         type: "post",
//         url: "http://kxqh.api.milisx.xyz/api/content/getarticledetail",
//         dateType: "json",
//         data:{
//             "ArticleId": "7b75e0d1-0604-45d9-9e2c-581c174032e2"
//         },
//         success: function (data) {
//             console.log(data.data);
//             $(".ma-right h3").text(data.data.Title);
//             $(".ma-center div").html(data.data.Body);
//             $(".ma-center img").attr('src',data.data.CoverPhoto);
//         }
//     })
// });
// $(".a8").click(function () {
//     $.ajax({
//         type: "post",
//         url: "http://kxqh.api.milisx.xyz/api/content/getarticledetail",
//         dateType: "json",
//         data:{
//             "ArticleId": "abfbf025-e8ea-41e2-bb6c-d9a7564832ce"
//         },
//         success: function (data) {
//             console.log(data.data);
//             $(".ma-right h3").text(data.data.Title);
//             $(".ma-center div").html(data.data.Body);
//             $(".ma-center img").attr('src',data.data.CoverPhoto);
//         }
//     })
// });
// $(".a9").click(function () {
//     $.ajax({
//         type: "post",
//         url: "http://kxqh.api.milisx.xyz/api/content/getarticledetail",
//         dateType: "json",
//         data:{
//             "ArticleId": "72a4cb90-6397-4caa-b3ce-06ccabc997ef"
//         },
//         success: function (data) {
//             console.log(data.data);
//             $(".ma-right h3").text(data.data.Title);
//             $(".ma-center div").html(data.data.Body);
//             $(".ma-center img").attr('src',data.data.CoverPhoto);
//         }
//     })
// });
// $(".a10").click(function () {
//     $.ajax({
//         type: "post",
//         url: "http://kxqh.api.milisx.xyz/api/content/getarticledetail",
//         dateType: "json",
//         data:{
//             "ArticleId": "32ef8cc3-8a88-4537-81a1-003fbb08d833"
//         },
//         success: function (data) {
//             console.log(data.data);
//             $(".ma-right h3").text(data.data.Title);
//             $(".ma-center div").html(data.data.Body);
//             $(".ma-center img").attr('src',data.data.CoverPhoto);
//         }
//     })
// });
// $(".a11").click(function () {
//     $.ajax({
//         type: "post",
//         url: "http://kxqh.api.milisx.xyz/api/content/getarticledetail",
//         dateType: "json",
//         data:{
//             "ArticleId": "bd8dc204-1241-48d7-acb5-6e16017666ce"
//         },
//         success: function (data) {
//             console.log(data.data);
//             $(".ma-right h3").text(data.data.Title);
//             $(".ma-center div").html(data.data.Body);
//             $(".ma-center img").attr('src',data.data.CoverPhoto);
//         }
//     })
// });
// $(".a12").click(function () {
//     $.ajax({
//         type: "post",
//         url: "http://kxqh.api.milisx.xyz/api/content/getarticledetail",
//         dateType: "json",
//         data:{
//             "ArticleId": "4e1fdba7-3517-4bfb-9332-c7563f89c30b"
//         },
//         success: function (data) {
//             console.log(data.data);
//             $(".ma-right h3").text(data.data.Title);
//             $(".ma-center div").html(data.data.Body);
//             $(".ma-center img").attr('src',data.data.CoverPhoto);
//         }
//     })
// });
// $(".a13").click(function () {
//     $.ajax({
//         type: "post",
//         url: "http://kxqh.api.milisx.xyz/api/content/getarticledetail",
//         dateType: "json",
//         data:{
//             "ArticleId": "b196e032-3eae-4af0-ad37-756ab2ecb4d9"
//         },
//         success: function (data) {
//             console.log(data.data);
//             $(".ma-right h3").text(data.data.Title);
//             $(".ma-center div").html(data.data.Body);
//             $(".ma-center img").attr('src',data.data.CoverPhoto);
//         }
//     })
// });
// $(".a14").click(function () {
//     $.ajax({
//         type: "post",
//         url: "http://kxqh.api.milisx.xyz/api/content/getarticledetail",
//         dateType: "json",
//         data:{
//             "ArticleId": "f20a32bd-3c6f-4576-b0d2-e876316dfd10"
//         },
//         success: function (data) {
//             console.log(data.data);
//             $(".ma-right h3").text(data.data.Title);
//             $(".ma-center div").html(data.data.Body);
//             $(".ma-center img").attr('src',data.data.CoverPhoto);
//         }
//     })
// });
// $(".a15").click(function () {
//     $.ajax({
//         type: "post",
//         url: "http://kxqh.api.milisx.xyz/api/content/getarticledetail",
//         dateType: "json",
//         data:{
//             "ArticleId": "d7e3ad64-c052-493d-b0d1-462b9fdb6396"
//         },
//         success: function (data) {
//             console.log(data.data);
//             $(".ma-right h3").text(data.data.Title);
//             $(".ma-center div").html(data.data.Body);
//             $(".ma-center img").attr('src',data.data.CoverPhoto);
//         }
//     })
// });
// $(".a16").click(function () {
//     $.ajax({
//         type: "post",
//         url: "http://kxqh.api.milisx.xyz/api/content/getarticledetail",
//         dateType: "json",
//         data:{
//             "ArticleId": "67b47dc5-79f9-4a15-97ea-52423950c5a3"
//         },
//         success: function (data) {
//             console.log(data.data);
//             $(".ma-right h3").text(data.data.Title);
//             $(".ma-center div").html(data.data.Body);
//             $(".ma-center img").attr('src',data.data.CoverPhoto);
//         }
//     })
// });
// $(".a17").click(function () {
//     $.ajax({
//         type: "post",
//         url: "http://kxqh.api.milisx.xyz/api/content/getarticledetail",
//         dateType: "json",
//         data:{
//             "ArticleId": "2c3616b5-5163-42f4-943a-5db571ad5913"
//         },
//         success: function (data) {
//             console.log(data.data);
//             $(".ma-right h3").text(data.data.Title);
//             $(".ma-center div").html(data.data.Body);
//             $(".ma-center img").attr('src',data.data.CoverPhoto);
//         }
//     })
// });
// $(".a18").click(function () {
//     $.ajax({
//         type: "post",
//         url: "http://kxqh.api.milisx.xyz/api/content/getarticledetail",
//         dateType: "json",
//         data:{
//             "ArticleId": "bfc776af-232d-4e37-aa75-3d30e95dce09"
//         },
//         success: function (data) {
//             console.log(data.data);
//             $(".ma-right h3").text(data.data.Title);
//             $(".ma-center div").html(data.data.Body);
//             $(".ma-center img").attr('src',data.data.CoverPhoto);
//         }
//     })
// });
// $(".a19").click(function () {
//     $.ajax({
//         type: "post",
//         url: "http://kxqh.api.milisx.xyz/api/content/getarticledetail",
//         dateType: "json",
//         data:{
//             "ArticleId": "1a4394ed-98c5-4d88-a9f0-58d3007a3f71"
//         },
//         success: function (data) {
//             console.log(data.data);
//             $(".ma-right h3").text(data.data.Title);
//             $(".ma-center div").html(data.data.Body);
//             $(".ma-center img").attr('src',data.data.CoverPhoto);
//         }
//     })
// });
// $(".a20").click(function () {
//     $.ajax({
//         type: "post",
//         url: "http://kxqh.api.milisx.xyz/api/content/getarticledetail",
//         dateType: "json",
//         data:{
//             "ArticleId": "d4fc3c1a-5e01-401b-bcbe-f8cfbe30001c"
//         },
//         success: function (data) {
//             console.log(data.data);
//             $(".ma-right h3").text(data.data.Title);
//             $(".ma-center div").html(data.data.Body);
//             $(".ma-center img").attr('src',data.data.CoverPhoto);
//         }
//     })
// });
// $(".a21").click(function () {
//     $.ajax({
//         type: "post",
//         url: "http://kxqh.api.milisx.xyz/api/content/getarticledetail",
//         dateType: "json",
//         data:{
//             "ArticleId": "c2bc9fc7-07d9-4d3e-a73b-659092f100b8"
//         },
//         success: function (data) {
//             console.log(data.data);
//             $(".ma-right h3").text(data.data.Title);
//             $(".ma-center div").html(data.data.Body);
//             $(".ma-center img").attr('src',data.data.CoverPhoto);
//         }
//     })
// });
// $(".a22").click(function () {
//     $.ajax({
//         type: "post",
//         url: "http://kxqh.api.milisx.xyz/api/content/getarticledetail",
//         dateType: "json",
//         data:{
//             "ArticleId": "94190c9a-5be0-47c2-b8e5-daff9a064e03"
//         },
//         success: function (data) {
//             console.log(data.data);
//             $(".ma-right h3").text(data.data.Title);
//             $(".ma-center div").html(data.data.Body);
//             $(".ma-center img").attr('src',data.data.CoverPhoto);
//         }
//     })
// });
// $(".a23").click(function () {
//     $.ajax({
//         type: "post",
//         url: "http://kxqh.api.milisx.xyz/api/content/getarticledetail",
//         dateType: "json",
//         data:{
//             "ArticleId": "46962f59-c50a-4f26-a8e2-31b18446719e"
//         },
//         success: function (data) {
//             console.log(data.data);
//             $(".ma-right h3").text(data.data.Title);
//             $(".ma-center div").html(data.data.Body);
//             $(".ma-center img").attr('src',data.data.CoverPhoto);
//         }
//     })
// });
// $(".a24").click(function () {
//     $.ajax({
//         type: "post",
//         url: "http://kxqh.api.milisx.xyz/api/content/getarticledetail",
//         dateType: "json",
//         data:{
//             "ArticleId": "d1cf0bb1-3f1b-45f1-9df2-62c991377048"
//         },
//         success: function (data) {
//             console.log(data.data);
//             $(".ma-right h3").text(data.data.Title);
//             $(".ma-center div").html(data.data.Body);
//             $(".ma-center img").attr('src',data.data.CoverPhoto);
//         }
//     })
// });
// $(".a25").click(function () {
//     $.ajax({
//         type: "post",
//         url: "http://kxqh.api.milisx.xyz/api/content/getarticledetail",
//         dateType: "json",
//         data:{
//             "ArticleId": "2aa2f9be-0936-4dd8-9b1a-f29a8f7c26e9"
//         },
//         success: function (data) {
//             console.log(data.data);
//             $(".ma-right h3").text(data.data.Title);
//             $(".ma-center div").html(data.data.Body);
//             $(".ma-center img").attr('src',data.data.CoverPhoto);
//         }
//     })
// });
// $(".a26").click(function () {
//     $.ajax({
//         type: "post",
//         url: "http://kxqh.api.milisx.xyz/api/content/getarticledetail",
//         dateType: "json",
//         data:{
//             "ArticleId": "04a8d3ff-7b15-4755-91cf-4a936a2057ff"
//         },
//         success: function (data) {
//             console.log(data.data);
//             $(".ma-right h3").text(data.data.Title);
//             $(".ma-center div").html(data.data.Body);
//             $(".ma-center img").attr('src',data.data.CoverPhoto);
//         }
//     })
// });
// $(".a27").click(function () {
//     $.ajax({
//         type: "post",
//         url: "http://kxqh.api.milisx.xyz/api/content/getarticledetail",
//         dateType: "json",
//         data:{
//             "ArticleId": "b16afc01-6b25-44fe-814c-d1fa2bcec317"
//         },
//         success: function (data) {
//             console.log(data.data);
//             $(".ma-right h3").text(data.data.Title);
//             $(".ma-center div").html(data.data.Body);
//             $(".ma-center img").attr('src',data.data.CoverPhoto);
//         }
//     })
// });
// $(".a28").click(function () {
//     $.ajax({
//         type: "post",
//         url: "http://kxqh.api.milisx.xyz/api/content/getarticledetail",
//         dateType: "json",
//         data:{
//             "ArticleId": "0c514ad4-933e-4652-bfc0-01dd7ddf5718"
//         },
//         success: function (data) {
//             console.log(data.data);
//             $(".ma-right h3").text(data.data.Title);
//             $(".ma-center div").html(data.data.Body);
//             $(".ma-center img").attr('src',data.data.CoverPhoto);
//         }
//     })
// });
// $(".a29").click(function () {
//     $.ajax({
//         type: "post",
//         url: "http://kxqh.api.milisx.xyz/api/content/getarticledetail",
//         dateType: "json",
//         data:{
//             "ArticleId": "6b9129dd-989b-43b2-918a-f081ac123102"
//         },
//         success: function (data) {
//             console.log(data.data);
//             $(".ma-right h3").text(data.data.Title);
//             $(".ma-center div").html(data.data.Body);
//             $(".ma-center img").attr('src',data.data.CoverPhoto);
//         }
//     })
// });
// $(".a30").click(function () {
//     $.ajax({
//         type: "post",
//         url: "http://kxqh.api.milisx.xyz/api/content/getarticledetail",
//         dateType: "json",
//         data:{
//             "ArticleId": "8ca0497b-c538-4d0a-9f9e-635f6628652d"
//         },
//         success: function (data) {
//             console.log(data.data);
//             $(".ma-right h3").text(data.data.Title);
//             $(".ma-center div").html(data.data.Body);
//             $(".ma-center img").attr('src',data.data.CoverPhoto);
//         }
//     })
// });
// $(".a31").click(function () {
//     $.ajax({
//         type: "post",
//         url: "http://kxqh.api.milisx.xyz/api/content/getarticledetail",
//         dateType: "json",
//         data:{
//             "ArticleId": "8ce04421-7f39-44c7-ae3d-a54f259aa1b7"
//         },
//         success: function (data) {
//             console.log(data.data);
//             $(".ma-right h3").text(data.data.Title);
//             $(".ma-center div").html(data.data.Body);
//             $(".ma-center img").attr('src',data.data.CoverPhoto);
//         }
//     })
// });
// $(".a32").click(function () {
//     $.ajax({
//         type: "post",
//         url: "http://kxqh.api.milisx.xyz/api/content/getarticledetail",
//         dateType: "json",
//         data:{
//             "ArticleId": "0b128095-e6f9-48dc-b251-a71d306d141e"
//         },
//         success: function (data) {
//             console.log(data.data);
//             $(".ma-right h3").text(data.data.Title);
//             $(".ma-center div").html(data.data.Body);
//             $(".ma-center img").attr('src',data.data.CoverPhoto);
//         }
//     })
// });
// $(".a33").click(function () {
//     $.ajax({
//         type: "post",
//         url: "http://kxqh.api.milisx.xyz/api/content/getarticledetail",
//         dateType: "json",
//         data:{
//             "ArticleId": "fb81fd33-bf93-4a32-ae44-5a07aedc1aae"
//         },
//         success: function (data) {
//             console.log(data.data);
//             $(".ma-right h3").text(data.data.Title);
//             $(".ma-center div").html(data.data.Body);
//             $(".ma-center img").attr('src',data.data.CoverPhoto);
//         }
//     })
// });$(".a34").click(function () {
//     $.ajax({
//         type: "post",
//         url: "http://kxqh.api.milisx.xyz/api/content/getarticledetail",
//         dateType: "json",
//         data:{
//             "ArticleId": "099f0c10-ab78-47d6-be26-da3a75b1d861"
//         },
//         success: function (data) {
//             console.log(data.data);
//             $(".ma-right h3").text(data.data.Title);
//             $(".ma-center div").html(data.data.Body);
//             $(".ma-center img").attr('src',data.data.CoverPhoto);
//         }
//     })
// });
// $(".a35").click(function () {
//     $.ajax({
//         type: "post",
//         url: "http://kxqh.api.milisx.xyz/api/content/getarticledetail",
//         dateType: "json",
//         data:{
//             "ArticleId": "0498cb4a-7a44-4680-96f7-62af2d680618"
//         },
//         success: function (data) {
//             console.log(data.data);
//             $(".ma-right h3").text(data.data.Title);
//             $(".ma-center div").html(data.data.Body);
//             $(".ma-center img").attr('src',data.data.CoverPhoto);
//         }
//     })
// });

$(".li0").click(function () {
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
        },
    });



});


$(".li1").click(function () {
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
            $(".ma-center ul").css("display", "block");
            $(".firstli").css("display", "block");

            for (var i = 0; i < data.data.lst_categoryarticlelist.length; i++) {
                console.log(data.data.lst_categoryarticlelist[i].Id);
                $(".ma-center li a").eq(i).text(data.data.lst_categoryarticlelist[i].Title);
                $(".ma-center li a").eq(i).attr("id",data.data.lst_categoryarticlelist[i].Id);
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
            "ArticleId": "91a8822e-2cbd-4c1e-a1ea-dab964457a5c"
        },
        success: function (data) {
            // console.log(data.data);
            // $(".title").css("display","none")
            $(".xx-zi").css("display","none")
            $(".firstli img").attr('src', data.data.CoverPhoto);
            $(".firstli h1").text(data.data.Title);
            $(".firstli p").html(data.data.Body);
            $(".ma-center .xq").css("display", "none")
            $(".ma-center>img").css("display", "none")

        },
    });


});


$(".li2").click(function () {
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
            $(".ma-center .firstli").css("display", "none")
            $(".ma-center>img").css("display", "none")
            $(".ma-center .xq").css("display", "none")
        },
    });
});
$(".li3").click(function () {
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
            "ArticleId": "896a48d1-de14-4b2a-84fb-18862f481902"
        },
        success: function (data) {
            // console.log(data.data);
            $(".firstli img").attr('src', data.data.CoverPhoto);
            $(".firstli h1").text(data.data.Title);
            $(".firstli p").html(data.data.Body);
            $(".ma-center>img").css("display", "none")
            $(".ma-center .xq").css("display", "none")

        },
    });
});
$(".li4").click(function () {
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
            console.log(data.data);
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
            "ArticleId": "e8d16e6e-e783-4370-890b-6510578c3027"
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
            "ArticleId": "195c86eb-1e9c-4a86-8259-3653e137c179"
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
            "ArticleId": "63226dcb-a850-40ee-948f-21cc3df7c5e3"
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
            "ArticleId": "8ce04421-7f39-44c7-ae3d-a54f259aa1b7"
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
            "ArticleId": "bd8dc204-1241-48d7-acb5-6e16017666ce"
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
            "ArticleId": "4a180fd3-675f-4ee0-9b17-7abf9bd90247"
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
            "ArticleId": "bfc776af-232d-4e37-aa75-3d30e95dce09"
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
            "ArticleId": "b196e032-3eae-4af0-ad37-756ab2ecb4d9"
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
            "ArticleId": "71719455-7879-4807-838d-7350cefeb31c"
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
            "ArticleId": "d48fe9de-654e-4a38-816b-6d391e9ec8d8"
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
            "ArticleId": "04a8d3ff-7b15-4755-91cf-4a936a2057ff"
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
            "ArticleId": "c2bc9fc7-07d9-4d3e-a73b-659092f100b8"
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
            "ArticleId": "86798375-632c-4d8a-9e4a-a1c8d2e38945"
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
            "ArticleId": "2b8ba8bf-7964-436b-8dec-2b6bfef33425"
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
            "ArticleId": "445326c8-aa68-4b1a-94f6-d8c25ddd5f44"
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
            "ArticleId": "53b29788-9b8f-41ec-92b2-56978c1d2535"
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
            "ArticleId": "48acf2d7-e25d-4f41-9644-129f5c9505bc"
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
            "ArticleId": "dee8fb92-dcec-4ba5-afce-2d3b5a4b14ca"
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
            "ArticleId": "0c03911f-bb56-4ef8-8d5f-c210908ba601"
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
            "ArticleId": "e28f11d9-ce23-4483-a08e-d7d06a6c73a1"
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
            "ArticleId": "cfd138e4-977e-43c1-acbe-43815d262820"
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

        },
    });
});

$(".li26").click(function () {
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
// /*页码*/
// if (firstFalg) {
//     page(Math.ceil(data.Count / 6));
//     firstFalg = false;
// } else {
//     $("#pageBar").whjPaging("setPage", currPages, Math.ceil(data.Count / 6));
// }
// // fenye
// var page = function (i) {
//     $('#pageBar').whjPaging({
//         totalPage: i,
//         showPageNum: 4,
//         isShowFL: true,//首末页面
//         isShowPageSizeOpt: false,
//         isShowSkip: false,
//         isShowRefresh: false,
//         isShowTotalPage: false,
//         isResetPage: true,
//         callBack: function (currPage, pageSize) {
//             companyListParam.PageIndex = currPage;
//             currPages = currPage;
//             companyListData();
//         }
//     });
// };