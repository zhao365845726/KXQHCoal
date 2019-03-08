
// ----------------vue

var routes = [
    {
        path: "/",
        component: {
            template: `
            <div class="container">
        <div class="content">
            <!--高平头条-->
            <div class="headBox row">
                <ul class="headNew col-lg-8 col-mid-12">
                    <li class="toutiao"></li>
                    <li class="headNew-content">
                        <ul>
                            <li><a class="tit" href="#" title="">全市“改革创新、奋发有为”大讨论联络督导部署会议召开</a></li>
                            <li><a class="tit" href="#" title="">高平市第六届人民代表大会第四次会议胜利闭幕</a></li>
                            <li><a class="tit" href="#" title=""> 原健当选高平市人民政府市长</a></li>
                        </ul>
                    </li>
                </ul>
                <div class="picLink col-lg-4 col-mid-0">
                    <ul>
                        <li>市委</li>
                        <li>人大</li>
                        <li>政府</li>
                        <li><a title="政协" href="http://zx.sxgp.gov.cn" target="_blank">政协</a></li>
                    </ul>
                </div>
            </div>
            <!--最新信息-->
            <div class="slider row">
                <!--轮播图-->
                <div class="focusNews col-lg-6">
                    <div class="bd">
                        <ul class="test">
                            <li>
                                <div class="pic">
                                    <ul>
                                        <li>
                                            <a href="#" target="_blank"><img alt="市人大代表分团讨论人大常委会及两院工作报告" src="img/c3c1477b883746749a7025f27ddb6eeb_590_400.jpg"></a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="con">
                                    <h3 class="title"><a class="tit" href="#" title="市人大代表分团讨论人大常委会及两院工作报告">市人大代表分团讨论人大常委会及两院工作报告</a></h3>
                                    <span class="titleBg"></span>
                                </div>
                            </li>
                            <li>
                                <div class="pic">
                                    <ul>
                                        <li>
                                            <a href="#" target="_blank"><img alt="市人大代表分团讨论人大常委会及两院工作报告" src="img/1.jpg"></a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="con">
                                    <h3 class="title"><a class="tit" href="#" >市人大代表分团讨论人大常委会及两院工作报告</a></h3>
                                    <span class="titleBg"></span>
                                </div>
                            </li>
                            <li>
                                <div class="pic">
                                    <ul>
                                        <li>
                                            <a href="#" target="_blank"><img alt="市人大代表分团讨论人大常委会及两院工作报告" src="img/2.jpg"></a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="con">
                                    <h3 class="title"><a class="tit" href="#" >市人大代表分团讨论人大常委会及两院工作报告</a></h3>
                                    <span class="titleBg"></span>
                                </div>
                            </li>
                            <li>
                                <div class="pic">
                                    <ul>
                                        <li>
                                            <a href="#" target="_blank"><img alt="市人大代表分团讨论人大常委会及两院工作报告" src="img/3.jpg"></a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="con">
                                    <h3 class="title"><a class="tit" href="#" >市人大代表分团讨论人大常委会及两院工作报告</a></h3>
                                    <span class="titleBg"></span>
                                </div>
                            </li>
                            <li>
                                <div class="pic">
                                    <ul>
                                        <li>
                                            <a href="#" target="_blank"><img alt="市人大代表分团讨论人大常委会及两院工作报告" src="img/4.jpg"></a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="con">
                                    <h3 class="title"><a class="tit" href="#" >市人大代表分团讨论人大常委会及两院工作报告</a></h3>
                                    <span class="titleBg"></span>
                                </div>
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
                <!--政务基层-->
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
                                <li v-for="">
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
                                    <a href="#" target="_blank" title="标题：“改革创新、奋发有为“大讨论宣传片发表时间：2019-02-25">
                                        “改革创新、奋发有为“大讨论宣传片
                                    </a>
                                </li>
                                <li>
                                    <span class="date">02-25</span>
                                    <a href="#" target="_blank" title="标题：2019年2月22日高平新闻发表时间：2019-02-25">
                                        2019年2月22日高平新闻
                                    </a>
                                </li>
                                <li>
                                    <span class="date">02-25</span>
                                    <a href="#" target="_blank" title="标题：2019年2月23日高平新闻发表时间：2019-02-25">
                                        2019年2月23日高平新闻
                                    </a>
                                </li>
                                <li>
                                    <span class="date">02-25</span>
                                    <a href="#" target="_blank" title="标题：2019年2月21日高平新闻发表时间：2019-02-25">
                                        2019年2月21日高平新闻
                                    </a>
                                </li>
                                <li>
                                    <span class="date">02-21</span>
                                    <a href="#" target="_blank" title="标题：2019年2月20日高平新闻发表时间：2019-02-21">
                                        2019年2月20日高平新闻
                                    </a>
                                </li>
                                <li class="last">
                                    <span class="date">02-20</span>
                                    <a href="/#" target="_blank" title="标题：2019年2月19日高平新闻发表时间：2019-02-20">
                                        2019年2月19日高平新闻
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
                                    <a href="/xxgk/xwzx/wjsd/content_71378" target="_blank" title="标题：高平农商银行居民储蓄存款突破100亿元表时间：2019-02-21">高平农商银行居民储蓄存款突破100亿元
                                    </a>
                                </li>
                                <li>
                                    <span class="date">02-20</span>
                                    <a href="/xxgk/xwzx/wjsd/content_71315" target="_blank" title="标题：高平石末举行“拜先师、塑美德”诵读活动发表时间：2019-02-20">高平石末举行“拜先师、塑美德”诵读活动
                                    </a>
                                </li>
                                <li>
                                    <span class="date">02-19</span>
                                    <a href="/xxgk/xwzx/wjsd/content_71215" target="_blank" title="标题：高平市青少年乒乓球比赛激情开赛发表时间：2019-02-19">高平市青少年乒乓球比赛激情开赛
                                    </a>
                                </li>
                                <li>
                                    <span class="date">02-19</span>
                                    <a href="/xxgk/xwzx/wjsd/content_71214" target="_blank" title="标题：高平上党落子剧团到赤祥村慰问演出发表时间：2019-02-19">高平上党落子剧团到赤祥村慰问演出
                                    </a>
                                </li>
                                <li>
                                    <span class="date">02-18</span>
                                    <a href="/xxgk/xwzx/wjsd/content_71199" target="_blank" title="标题：中国村庄之年俗 | 出行祈福、蒸花馍...看太行山上古老乡村的春节习俗发表时间：2019-02-18">
                                        中国村庄之年俗 | 出行祈福、蒸花馍...看太行山上古老乡村…
                                    </a>
                                </li>
                                <li class="last">
                                    <span class="date">02-18</span>
                                    <a href="/xxgk/xwzx/wjsd/content_71180" target="_blank" title="标题：【新春走基层】“改革开放40年 喜看米山新变化”图片展发表时间：2019-02-18">【新春走基层】“改革开放40年 喜看米山新变化”图片展
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <!--新闻中心-->
            <div class="row news-content">
                <div class="col-lg-4">
                    <div class="news-head">
                        <ul>
                            <li class="on"><a title="国务院要闻" href="/xxgk/xwzx/gwyyw">安全生产</a></li>
                            <li class="" style="display: none"><a title="山西动态" href="/xxgk/xwzx/sxdt">山西动态</a></li>
                            <li class="" style="display: none"><a title="晋城动态" href="/xxgk/xwzx/jcdt">晋城动态</a></li>
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
                                    <a href="/xxgk/xwzx/sxdt/content_71645" target="_blank" title="标题：（新春走基层·代表委员履职）点亮“煤亮子”的美好生活——全国人大代表董林履职故事发表时间：2019-02-25">（新春走基层·代表委员履职）点亮“煤亮子”的…</a>
                                </li>
                                <li>
                                    <span class="date">02-25</span>
                                    <a href="/xxgk/xwzx/sxdt/content_71642" target="_blank" title="标题：太原延长重污染天气橙色预警 2月25日0时-2月28日24时发表时间：2019-02-25">太原延长重污染天气橙色预警 2月25日0时-2月28…
                                    </a>
                                </li>
                                <li>
                                    <span class="date">02-25</span>
                                    <a href="/xxgk/xwzx/sxdt/content_71643" target="_blank" title="标题：2019年太原市即将谋划这些事项！发表时间：2019-02-25">2019年太原市即将谋划这些事项！
                                    </a>
                                </li>
                                <li>
                                    <span class="date">02-25</span>
                                    <a href="/xxgk/xwzx/sxdt/content_71644" target="_blank" title="标题：山西将全面铺开汾河中游示范区工程建设发表时间：2019-02-25">山西将全面铺开汾河中游示范区工程建设
                                    </a>
                                </li>
                                <li>
                                    <span class="date">02-25</span>
                                    <a href="/xxgk/xwzx/sxdt/content_71640" target="_blank" title="标题：八大关键词看2019年太原经济社会如何发展？发表时间：2019-02-25">八大关键词看2019年太原经济社会如何发展？</a>
                                </li>
                                <li>
                                    <span class="date">02-25</span>
                                    <a href="/xxgk/xwzx/sxdt/content_71641" target="_blank" title="标题：山西2019年将围绕4大生态保护修复完成营造林400万亩发表时间：2019-02-25">山西2019年将围绕4大生态保护修复完成营造林400…
                                    </a>
                                </li>
                                <li>
                                    <span class="date">02-22</span>
                                    <a href="/xxgk/xwzx/sxdt/content_71475" target="_blank" title="标题：2018年山西发放失业保险稳岗补贴4.3亿元发表时间：2019-02-22">2018年山西发放失业保险稳岗补贴4.3亿元</a>
                                </li>
                                <li>
                                    <span class="date">02-22</span>
                                    <a href="/xxgk/xwzx/sxdt/content_71476" target="_blank" title="标题：黄土地上：一个小山村的“脱贫”大戏发表时间：2019-02-22">黄土地上：一个小山村的“脱贫”大戏</a>
                                </li>
                                <li>
                                    <span class="date">02-22</span>
                                    <a href="/xxgk/xwzx/sxdt/content_71473" target="_blank" title="标题：1月份，山西CPI同比上涨1.8%发表时间：2019-02-22">1月份，山西CPI同比上涨1.8%</a>
                                </li>

                            </ul>
                        </div>
                        <div style="display: none;">
                            <ul>
                                <li>
                                    <span class="date">02-26</span>
                                    <a href="/xxgk/xwzx/jcdt/content_71678" target="_blank" title="标题：晋城市七届人大五次会议隆重开幕发表时间：2019-02-26">晋城市七届人大五次会议隆重开幕</a>
                                </li>
                                <li>
                                    <span class="date">02-26</span>
                                    <a href="/xxgk/xwzx/jcdt/content_71676" target="_blank" title="标题：市七届人大五次会议主席团举行第二次会议发表时间：2019-02-26">市七届人大五次会议主席团举行第二次会议</a>
                                </li>
                                <li>
                                    <span class="date">02-26</span>
                                    <a href="/xxgk/xwzx/jcdt/content_71677" target="_blank" title="标题：张志川参加阳城代表团审议发表时间：2019-02-26">张志川参加阳城代表团审议</a>
                                </li>
                                <li>
                                    <span class="date">02-26</span>
                                    <a href="/xxgk/xwzx/jcdt/content_71675" target="_blank" title="标题：“改革创新，奋发有为”晋城的事大家想大家说大家干·“金点子”征集启事发表时间：2019-02-26">“改革创新，奋发有为”晋城的事大家想大家说大…</a>
                                </li>
                                <li>
                                    <span class="date">02-26</span>
                                    <a href="/xxgk/xwzx/jcdt/content_71674" target="_blank" title="标题：李根田参加高平代表团审议发表时间：2019-02-26">李根田参加高平代表团审议</a>
                                </li>
                                <li>
                                    <span class="date">02-26</span>
                                    <a href="/xxgk/xwzx/jcdt/content_71673" target="_blank" title="标题：范丽霞参加阳城代表团审议发表时间：2019-02-26">范丽霞参加阳城代表团审议</a>
                                </li>
                                <li>
                                    <span class="date">02-26</span>
                                    <a href="/xxgk/xwzx/jcdt/content_71672" target="_blank" title="标题：我市召开“两会”第三场新闻发布会发表时间：2019-02-26">我市召开“两会”第三场新闻发布会</a>
                                </li>
                                <li>
                                    <span class="date">02-26</span>
                                    <a href="/xxgk/xwzx/jcdt/content_71669" target="_blank" title="标题：刘锋参加市七届人大五次会议城区代表团审议发表时间：2019-02-26">刘锋参加市七届人大五次会议城区代表团审议</a>
                                </li>
                                <li>
                                    <span class="date">02-25</span>
                                    <a href="/xxgk/xwzx/jcdt/content_71651" target="_blank" title="标题：政协晋城市七届四次会议隆重开幕发表时间：2019-02-25">政协晋城市七届四次会议隆重开幕</a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 bgc">
                    <div class="news-head1">
                        <ul>
                            <li class="on"><a title="公示公告" href="">前和党建</a></li>
                            <li class="" style="display: none"><a title="人事信息" href="">人事信息</a></li>
                            <li class="" style="display: none"><a title="政策解读" href="">政策解读</a></li>
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
                                    <a href="/xxgk/rsxx/content_71585" target="_blank" title="标题：高平市第六届人民代表大会第四次会议公告发表时间：2019-02-23">高平市第六届人民代表大会第四次会议公告</a>
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
                        <h3>热点专题</h3>
                    </div>
                    <div class="new-click">
                        <ul>
                            <li class="li1">
                                <em class="number">01</em>
                                <router-link to="/page1" class="a31"></router-link>
                            </li>
                            <li class="li1">
                                <em class="number">02</em>
                                <router-link to="/page1" class="a32"></router-link>
                            </li>
                            <li class="li1">
                                <em class="number">03</em>
                                <router-link to="/page1" class="a33"></router-link>
                            </li>
                            <li>
                                <em class="number">04</em>
                                <router-link to="/page1" class="a34"></router-link>
                            </li>
                            <li>
                                <em class="number">05</em>
                                <router-link to="/page1" class="a35"></router-link>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </div>
            <!--中心banner-->
            <div class="row center-banner">
                <ul>
                    <li><a href=""><img src="img/5.jpg" alt=""></a></li>
                </ul>
            </div>
            <!--政务公开-->
            <div class=" row pub-file">
                <div class="col-lg-3 col-md-4">
                    <div class="hd3">
                        <h3><a href="/xxgk">政府信息公开</a></h3>
                    </div>
                    <div class="bd3">
                        <ul class="menuList">
                            <li class="li1"><a title="政府信息公开指南" href="/xxgk/zfxxgkzn">政府信息公开指南</a></li>
                            <li class="li2"><a title="政府信息公开报告" href="/xxgk/zfxxgkbg">政府信息公开报告</a></li>
                            <li class="li3"><a title="政府信息公开规定" href="/xxgk/zfxxgkgd">政府信息公开规定</a></li>
                            <li class="li4"><a title="依申请公开" href="/infopublicity/applicationform">依申请公开</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-4 col-mad-8">
                    <div class="hd4">
                        <h3><a href="/xxgk/zxgk">最新公开</a></h3>
                    </div>
                    <div class="bd4">
                        <ul>
                            <li>
                                <span class="date">02-27</span>
                                <a class="tit" href="/publicity_gpshjbhj/info201212060216/info201212060219/20948" target="_blank" title="高平市环境保护局关于高平市龙凤铁艺铸业提标技术改造建设项目环境影响报告表的批复">高平市环境保护局关于高平市龙凤艺铸公…</a>
                            </li>
                            <li>
                                <span class="date">02-27</span>
                                <a class="tit" href="/publicity_gpshjbhj/info201212060216/info201212060219/20944" target="_blank" title="高平市环保局拟对建设项目环境影响评价文件作出审批意见的公示">高平市环保局拟对建设境影响评价文件作出…</a>
                            </li>
                            <li>
                                <span class="date">02-26</span>
                                <a class="tit" href="/publicity_gpsfzhggj/info201212060151/info201212060158/20946" target="_blank" title="高平市发展和改革局2019年春节供应数量公示">高平市发展和改革19年春节供应数量公示</a>
                            </li>
                            <li>
                                <span class="date">02-26</span>
                                <a class="tit" href="/publicity_gpshjbhj/info201212060216/info201212060219/20945" target="_blank" title="高平市环境保护局关于高平市危险废物综合收贮服务站建设项目环境影响报告表的批复">高平市环境保于高平市危险废物综合收贮服…</a>
                            </li>
                            <li>
                                <span class="date">02-26</span>
                                <a class="tit" href="/publicity_gpshjbhj/info201212060216/info201212060219/20943" target="_blank" title="高平市环境保护局建设项目环境影响评价受理情况">高平市环护局建设项目环境影响评价受理情况</a>
                            </li>
                            <li>
                                <span class="date">02-26</span>
                                <a class="tit" href="/publicity_dcjdbsc/info201212060141/info2012120601492/20942" target="_blank" title="动态：东城街街道召开传达学习高平市“两会” 精神大会">动态：东城街街道召达学习高平市“两会” …</a>
                            </li>
                            <li>
                                <span class="date">02-25</span>
                                <a class="tit" href="/publicity_mczrmzf/info201212060141/info2012120601492/20947" target="_blank" title="动态：马村镇“多会合一” 安排部署当前重点工作">动态：马村镇“多会合 安排部署当前重点工作</a>
                            </li>
                            <li>
                                <span class="date">02-25</span>
                                <a class="tit" href="/publicity_gpsschzljdglj/info201212060209/info201212060213/20941" target="_blank" title="高平市市场和质量监督管理局行政处罚信息公示（2019年第3期）">高平市市场和质管理局行政处罚信息公示（…</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-5">
                    <div class="hd5">
                        <ul>
                            <li class="on"><a href="/publicity_gpsrmzfbgs?customercategoryid=69">本级文件</a></li>
                            <li class=""><a href="/xxgk/xwzx/gwywj">国务院文件</a></li>
                            <li><a href="/xxgk/xwzx/szfwj">省政府文件</a></li>
                            <li class=""><a href="/xxgk/xwzx/jcswj">晋城市文件</a></li>
                        </ul>
                    </div>
                    <div class="bd5">
                        <ul style="display: block;">
                            <li>	 <span class="date">01-22</span>
                                <a target="_blank" href="/publicity/info201212060285/20778">关于春节、元宵节期间禁止堆燃年火积火的通告</a>
                            </li>
                            <li>	 <span class="date">01-17</span>
                                <a target="_blank" href="/publicity/info201212060285/20912">关于2019年度全市煤矿春节停产停建及节后复产复建工作的通知</a>
                            </li>
                            <li>	 <span class="date">01-16</span>
                                <a target="_blank" href="/publicity/info201212060285/20910">关于印发高平市2019年春运道路交通安全工作实施方案的通知</a>
                            </li>
                            <li>	 <span class="date">01-15</span>
                                <a target="_blank" href="/publicity/info201212060285/20911">关于印发《“两会”和春节期间开展全市安全生产集中检查工作方...</a>
                            </li>
                            <li>	 <span class="date">12-29</span>
                                <a target="_blank" href="/publicity/info201212060170/info201212060171/20684">关于印发高平市2018年土地例行督察整改工作实施方案的通知</a>
                            </li>
                            <li>	 <span class="date">12-25</span>
                                <a target="_blank" href="/publicity/info201212060259/info201212060263/20683">关于国有企业家属区社区管理职能移交的意见</a>
                            </li>
                            <li>	 <span class="date">12-20</span>
                                <a target="_blank" href="/publicity/info201212060141/info201212060149/20627">关于落实晋城市政府取消一批行政许可等事项的通知</a>
                            </li>
                            <li>	 <span class="date">12-20</span>
                                <a target="_blank" href="/publicity/info201212060141/info201212060149/20626">关于落实和承接晋城市政府继续取消和下放一批行政职权事项的通知</a>
                            </li>
                        </ul>
                        <ul style="display: none;">
                            <li class="first">
                                <span class="date">02-15</span>
                                <a href="/xxgk/xwzx/gwywj/content_71172" target="_blank" title="标题：国务院办公厅关于有效发挥政府性融资担保基金作用切实支持小微企业和“三农”发展的指导意见发表时间：2019-02-15">国务院办公厅关于有效发挥政府性融资担保基金作用切实支持小微企…</a>
                            </li>
                            <li>
                                <span class="date">02-15</span>
                                <a href="/xxgk/xwzx/gwywj/content_71171" target="_blank" title="标题：国务院关于印发国家职业教育改革实施方案的通知发表时间：2019-02-15">国务院关于印发国家职业教育改革实施方案的通知</a>
                            </li>
                            <li>
                                <span class="date">01-31</span>
                                <a href="/xxgk/xwzx/gwywj/content_71170" target="_blank" title="标题：国务院办公厅关于加强三级公立医院绩效考核工作的意见发表时间：2019-01-31">国务院办公厅关于加强三级公立医院绩效考核工作的意见</a>
                            </li>
                            <li>
                                <span class="date">01-28</span>
                                <a href="/xxgk/xwzx/gwywj/content_71169" target="_blank" title="标题：国务院关于促进综合保税区高水平开放高质量发展的若干意见发表时间：2019-01-28">国务院关于促进综合保税区高水平开放高质量发展的若干意见</a>
                            </li>
                            <li>
                                <span class="date">01-22</span>
                                <a href="/xxgk/xwzx/gwywj/content_71168" target="_blank" title="标题：国务院办公厅关于开展城镇小区配套幼儿园治理工作的通知发表时间：2019-01-22">国务院办公厅关于开展城镇小区配套幼儿园治理工作的通知</a>
                            </li>
                            <li>
                                <span class="date">01-21</span>
                                <a href="/xxgk/xwzx/gwywj/content_71167" target="_blank" title="标题：国务院办公厅关于印发“无废城市”建设试点工作方案的通知发表时间：2019-01-21">国务院办公厅关于印发“无废城市”建设试点工作方案的通知</a>
                            </li>
                            <li>
                                <span class="date">01-18</span>
                                <a href="/xxgk/xwzx/gwywj/content_71166" target="_blank" title="标题：国务院办公厅关于印发国家组织药品集中采购和使用试点方案的通知发表时间：2019-01-18">国务院办公厅关于印发国家组织药品集中采购和使用试点方案的通知</a>
                            </li>
                            <li class="last">
                                <span class="date">01-15</span>
                                <a href="/xxgk/xwzx/gwywj/content_69347" target="_blank" title="标题：国务院办公厅关于深入开展消费扶贫助力打赢脱贫攻坚战的指导意见发表时间：2019-01-15">国务院办公厅关于深入开展消费扶贫助力打赢脱贫攻坚战的指导意见</a>
                            </li>
                        </ul>
                        <ul style="display: none;">
                            <li class="first">
                                <span class="date">02-03</span>
                                <a href="/xxgk/xwzx/szfwj/content_71478" target="_blank" title="标题：山西省人民政府 关于2017年度山西省科学技术奖励的决定发表时间：2019-02-03">山西省人民政府 关于2017年度山西省科学技术奖励的决定</a>
                            </li>
                            <li>
                                <span class="date">01-11</span>
                                <a href="/xxgk/xwzx/szfwj/content_71261" target="_blank" title="标题：山西省人民政府 关于做好当前和今后一个时期 促进就业工作的实施意见发表时间：2019-01-11">山西省人民政府 关于做好当前和今后一个时期 促进就业工作的实施…</a>
                            </li>
                            <li>
                                <span class="date">01-08</span>
                                <a href="/xxgk/xwzx/szfwj/content_71477" target="_blank" title="标题：山西省人民政府 关于印发山西省矿山环境治理恢复 基金管理办法的通知发表时间：2019-01-08">山西省人民政府 关于印发山西省矿山环境治理恢复 基金管理办法的…</a>
                            </li>
                            <li>
                                <span class="date">12-29</span>
                                <a href="/xxgk/xwzx/szfwj/content_69775" target="_blank" title="标题：山西省人民政府 关于改革国有企业工资决定机制的实施意见发表时间：2018-12-29">山西省人民政府 关于改革国有企业工资决定机制的实施意见</a>
                            </li>
                            <li>
                                <span class="date">12-26</span>
                                <a href="/xxgk/xwzx/szfwj/content_69789" target="_blank" title="标题：山西省人民政府 关于同意繁峙至大营高速公路转按 经营性公路管理的批复发表时间：2018-12-26">山西省人民政府 关于同意繁峙至大营高速公路转按 经营性公路管理…</a>
                            </li>
                            <li>
                                <span class="date">12-26</span>
                                <a href="/xxgk/xwzx/szfwj/content_69788" target="_blank" title="标题：山西省人民政府 关于霍州至永和关高速公路西段永和至永和关段 设置收费公路收费站的批复发表时间：2018-12-26">山西省人民政府 关于霍州至永和关高速公路西段永和至永和关段 设…</a>
                            </li>
                            <li>
                                <span class="date">12-26</span>
                                <a href="/xxgk/xwzx/szfwj/content_69786" target="_blank" title="标题：山西省人民政府 关于山西省汾河水利建筑工程有限公司 划转至省国资委的批复发表时间：2018-12-26">山西省人民政府 关于山西省汾河水利建筑工程有限公司 划转至省国…</a>
                            </li>
                            <li class="last">
                                <span class="date">12-25</span>
                                <a href="/xxgk/xwzx/szfwj/content_69784" target="_blank" title="标题：山西省人民政府 关于同意设立阳城经济技术开发区的批复发表时间：2018-12-25">山西省人民政府 关于同意设立阳城经济技术开发区的批复</a>
                            </li>

                        </ul>
                        <ul style="display: none;">
                            <li class="first">
                                <span class="date">01-16</span>
                                <a href="/xxgk/xwzx/jcswj/content_69791" target="_blank" title="标题：关于印发晋城市基本公共服务领域市级与县（市、区）共同财政事权和支出责任划分改革方案的通知（晋市政办〔2018〕96号）发表时间：2019-01-16">关于印发晋城市基本公共服务领域市级与县（市、区）共同财政事权…</a>
                            </li>
                            <li>
                                <span class="date">01-10</span>
                                <a href="/xxgk/xwzx/jcswj/content_69790" target="_blank" title="标题：关于开展老年人照顾服务工作的实施意见（晋市政办〔2018〕94号）发表时间：2019-01-10">关于开展老年人照顾服务工作的实施意见（晋市政办〔2018〕94号）</a>
                            </li>
                            <li>
                                <span class="date">01-09</span>
                                <a href="/xxgk/xwzx/jcswj/content_69787" target="_blank" title="标题：关于印发晋城市公共资源配置领域政府信息公开实施方案的通知（晋市政办〔2018〕90号）发表时间：2019-01-09">关于印发晋城市公共资源配置领域政府信息公开实施方案的通知（晋…</a>
                            </li>
                            <li>
                                <span class="date">01-09</span>
                                <a href="/xxgk/xwzx/jcswj/content_69785" target="_blank" title="标题：关于推进社会公益事业建设领域政府信息公开的实施意见（晋市政办〔2018〕89号）发表时间：2019-01-09">关于推进社会公益事业建设领域政府信息公开的实施意见（晋市政办…</a>
                            </li>
                            <li>
                                <span class="date">01-08</span>
                                <a href="/xxgk/xwzx/jcswj/content_69782" target="_blank" title="标题：关于印发晋城市修复和提升市区楼体及景观亮化实施方案的通知（晋市政办〔2018〕92号）发表时间：2019-01-08">关于印发晋城市修复和提升市区楼体及景观亮化实施方案的通知（晋…</a>
                            </li>
                            <li>
                                <span class="date">01-08</span>
                                <a href="/xxgk/xwzx/jcswj/content_69778" target="_blank" title="标题：晋城市人民政府办公厅关于推进涉农资金统筹整合的实施意见（晋市政办〔2018〕88号）发表时间：2019-01-08">晋城市人民政府办公厅关于推进涉农资金统筹整合的实施意见（晋市…</a>
                            </li>
                            <li>
                                <span class="date">01-03</span>
                                <a href="/xxgk/xwzx/jcswj/content_69776" target="_blank" title="标题：关于印发《晋城市居家和社区养老服务改革试点工作方案》的通知（晋市政办〔2018〕91号）发表时间：2019-01-03">关于印发《晋城市居家和社区养老服务改革试点工作方案》的通知（…</a>
                            </li>
                            <li class="last">
                                <span class="date">01-02</span>
                                <a href="/xxgk/xwzx/jcswj/content_69773" target="_blank" title="标题：关于印发晋城市非法集资举报奖励办法的通知（晋市政办〔2018〕87号）发表时间：2019-01-02">关于印发晋城市非法集资举报奖励办法的通知（晋市政办〔2018〕87…</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <!--推荐专栏-->
            <div class="row commend">
                <ul>
                    <li>
                        <a class="pic" href="/petition/list">
                            <img alt="市长信箱" src="img/2_220_60.png " width="220" height="60">
                        </a>
                    </li>
                    <li>
                        <a class="pic" href="http://oa.sxgp.gov.cn:88/" target="_blank">
                            <img alt="协同办公" src="img/bangong_220_60.png " width="220" height="60">
                        </a>
                    </li>
                    <li>
                        <a class="pic" href="http://rsjzp.sxgp.gov.cn/wsbm/webRegister/" target="_blank">
                            <img alt="事业单位招考报名入口" src="img/1_220_60.png " width="220" height="60">
                        </a>
                    </li>
                    <li>
                        <a class="pic" href="/ztzl/tjzl/czysgkzl" target="_blank">
                            <img alt="财政预算公开专栏" src="img/4_220_60.png " width="220" height="60">
                        </a>
                    </li>
                    <li>
                        <a class="pic" href="/ztzl/tjzl/czjsgkzl" target="_blank">
                            <img alt="财政决算公开专栏" src="img/5_220_60.png " width="220" height="60">
                        </a>
                    </li>
                </ul>
            </div>
            <!--专题专栏-->
            <div class="row special"></div>
            <!--走进高平-->
            <div class="row zjgp">
                <div class="had col-lg-12">
                    <h3><a title="走进高平" href="/zjgp">走进高平</a></h3>
                    <ul>
                        <li class="li1"><a title="VR  高平" href="http://www.sxgp.gov.cn/files/gaopingmap/map.html">VR 高平</a></li>
                        <li><a title="地理概况" href="/zjgp/dlgk">地理概况</a></li>
                        <li><a title="自然资源" href="/zjgp/zrzy">自然资源</a></li>
                        <li><a title="行政区划" href="/zjgp/hzqh">行政区划</a></li>
                    </ul>
                </div>
                <div class="left col-lg-6">
                    <div class="hd6">
                        <ul>
                            <li class="on"><a title="大美高平" href="/zjgp/dmgp">大美高平</a></li>
                            <li class=""><a title="长平文艺" href="/zjgp/zpwy">长平文艺</a></li>
                        </ul>
                    </div>
                    <div class="bd6">
                        <ul style="display: block;">
                            <li>
                                <div class="title">
                                    <a target="_blank" class="tit" href="/content_69026" title="程裕生：义务保护文物20余载 笔耕不辍编著大周文物史籍">程裕生：义务保护文物20余载 笔耕不辍…</a>
                                </div>
                                <div class="pic">
                                    <a target="_blank" href="/content_69026">
                                        <img alt="程裕生：义务保护文物20余载 笔耕不辍编著大周文物史籍" src="img/80595f430763440d97beb9e968dbf30c_240_135.jpg">
                                    </a>
                                </div>
                                <div class="con">
                                    <div class="intro">
                                        　　大周村历史悠久，文化底蕴深厚，现保存有古庙宇、古民居、古城堡等规模宏大的古建筑群，为国家级重点文物保护单位。走进马村镇大周村，古庙宇、古民居鳞次栉比，只见一位古稀老人站在汤王庙，四处张望着。这...
                                    </div>
                                    <div class="others">
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="title">
                                    <a target="_blank" class="tit" href="/content_68993" title="王有全：八方奔走集资修庙  凝聚民心守庙12年">王有全：八方奔走集资修庙  凝聚民心守…</a>
                                </div>
                                <div class="pic">
                                    <a target="_blank" href="/zjgp/dmgp/content_68993">
                                        <img alt="王有全：八方奔走集资修庙  凝聚民心守庙12年" src="img/edd5971867fa435cab0ac0f9579c4de2_240_135.jpg">
                                    </a>
                                </div>
                                <div class="con">
                                    <div class="intro">
                                        　　高平是华夏始祖神农炎帝的故里，在高平范围内至今保存有众多与神农炎帝有关的庙宇。在三甲镇三甲北村就保存有一座炎帝庙，为人们所供奉。　　“神农炎帝‘种五谷、尝百草、制耒耜、疗民疾’为人们所信奉，人...
                                    </div>
                                    <div class="others">
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <ul style="display: none;">
                            <li>
                                <div class="title">
                                    <a target="_blank" class="tit" href="/zjgp/zpwy/content_69359" title="放声炎帝">放声炎帝</a>
                                </div>
                                <div class="pic">
                                    <a target="_blank" href="/zjgp/zpwy/content_69359">
                                        <img alt="放声炎帝" src="img/afc06f1b7b3d4e5fbf4ea84f7a88fa26_240_135.jpg">
                                    </a>
                                </div>
                                <div class="con">
                                    <div class="intro">
                                        □ 狼者之风    红日如歌从东方冉冉升起    一个个声音抑扬顿挫铿锵有力    循声望去    巍巍羊头山神采奕奕    潺潺丹河水波光依依    笔耕煤海流金    读回梨乡记忆    朗朗诵声回荡炎帝故里    是你是我    感...
                                    </div>
                                    <div class="others">
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="title">
                                    <a target="_blank" class="tit" href="/zjgp/zpwy/content_68716" title="守   护">守   护</a>
                                </div>
                                <div class="pic">
                                    <a target="_blank" href="/zjgp/zpwy/content_68716">
                                        <img alt="守   护" src="img/26e2d1bdcafe4725bc42ceca1635c081_240_135.jpg">
                                    </a>
                                </div>
                                <div class="con">
                                    <div class="intro">
                                        　　是谁从晨曦的微光里一路走来　　　　　在那屹立千年的墙壁上　　　　　守护着岁月的妙笔丹青不蒙尘埃　　是谁从皎洁的月华中一路走来　　　　　在那光华沉淀的碑刻上　　　　　守护着历史的笔墨乾坤永放异彩...
                                    </div>
                                    <div class="others">
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="right col-lg-6">
                    <div class="hd7">
                        <ul>
                            <li class="on"><a title="风景名胜" href="/zjgp/fjms">风景名胜</a></li>
                            <li><a title="历史人文" href="/zjgp/lsrw">历史人文</a></li>
                            <li><a title="高平故事" href="/zjgp/gpgs">高平故事</a></li>
                        </ul>
                    </div>
                    <div class="bd7">
                        <ul class="picList">
                            <li class="first">
                                <div class="pic">
                                    <a href="/zjgp/fjms/content_67076" target="_blank">
                                        <img alt="良户村" src="img/f89a1e3e198d4e70933f2979f91e2e32_180_135.jpg" width="180" height="135">
                                    </a>
                                </div>
                                <div class="title">
                                    <a target="_blank" class="tit" href="/zjgp/fjms/content_67076" title="良户村">良户村</a>
                                </div>
                                <span class="titleBg"></span>
                            </li>
                            <li>
                                <div class="pic">
                                    <a href="/zjgp/fjms/content_66739" target="_blank">
                                        <img alt="大粮山" src="img/ec856726f90243f6b8ce8f12eff17971_180_135.jpg" width="180" height="135">
                                    </a>
                                </div>
                                <div class="title">
                                    <a target="_blank" class="tit" href="/zjgp/fjms/content_66739" title="大粮山">大粮山</a>
                                </div>
                                <span class="titleBg"></span>
                            </li>
                            <li>
                                <div class="pic">
                                    <a href="/zjgp/fjms/content_1170" target="_blank">
                                        <img alt="金峰寺" src="img/2f4c89843f3a48cdb2a50a6774e70efb_180_135.jpg" width="180" height="135">
                                    </a>
                                </div>
                                <div class="title">
                                    <a target="_blank" class="tit" href="/zjgp/fjms/content_1170" title="金峰寺">金峰寺</a>
                                </div>
                                <span class="titleBg"></span>
                            </li>
                            <li>
                                <div class="pic">
                                    <a href="/zjgp/fjms/content_1162" target="_blank">
                                        <img alt="定林寺" src="img/ad70b9d4be174ba2b1d1b40961498c8f_180_135.jpg" width="180" height="135">
                                    </a>
                                </div>
                                <div class="title">
                                    <a target="_blank" class="tit" href="/zjgp/fjms/content_1162" title="定林寺">定林寺</a>
                                </div>
                                <span class="titleBg"></span>
                            </li>
                            <li>
                                <div class="pic">
                                    <a href="/zjgp/fjms/content_29021" target="_blank">
                                        <img alt="崇明寺" src="img/d549611b2f6c48818c987c817d34a143_180_135.jpg" width="180" height="135">
                                    </a>
                                </div>
                                <div class="title">
                                    <a target="_blank" class="tit" href="/zjgp/fjms/content_29021" title="崇明寺">崇明寺</a>
                                </div>
                                <span class="titleBg"></span>
                            </li>
                            <li class="last">
                                <div class="pic">
                                    <a href="/zjgp/fjms/content_1230" target="_blank">
                                        <img alt="清梦观" src="img/a8ef909b1554412ba0475dcd433b9153_180_135.jpg" width="180" height="135">
                                    </a>
                                </div>
                                <div class="title">
                                    <a target="_blank" class="tit" href="/zjgp/fjms/content_1230" title="清梦观">清梦观</a>
                                </div>
                                <span class="titleBg"></span>
                            </li>
                        </ul>
                        <ul class="picList" style="display: none;">
                            <li class="first">
                                <div class="pic">
                                    <a href="/zjgp/lsrw/content_31566" target="_blank">
                                        <img alt="高平冶铸" src="img/20152108293_180_135.jpg" width="180" height="135">
                                    </a>
                                </div>
                                <div class="title">
                                    <a target="_blank" class="tit" href="/zjgp/lsrw/content_31566" title="高平冶铸">高平冶铸</a>
                                </div>
                                <span class="titleBg"></span>
                            </li>
                            <li>
                                <div class="pic">
                                    <a href="/zjgp/lsrw/content_31561" target="_blank">
                                        <img alt="高平戏剧" src="img/20152981211_180_135.jpg" width="180" height="135">
                                    </a>
                                </div>
                                <div class="title">
                                    <a target="_blank" class="tit" href="/zjgp/lsrw/content_31561" title="高平戏剧">高平戏剧</a>
                                </div>
                                <span class="titleBg"></span>
                            </li>
                            <li>
                                <div class="pic">
                                    <a href="/zjgp/lsrw/content_31393" target="_blank">
                                        <img alt="高平潞绸" src="img/201524131334_180_135.jpg" width="180" height="135">
                                    </a>
                                </div>
                                <div class="title">
                                    <a target="_blank" class="tit" href="/zjgp/lsrw/content_31393" title="高平潞绸">高平潞绸</a>
                                </div>
                                <span class="titleBg"></span>
                            </li>
                            <li>
                                <div class="pic">
                                    <a href="/zjgp/lsrw/content_31392" target="_blank">
                                        <img alt="高平黑陶" src="img/201524124731_180_135.jpg" width="180" height="135">
                                    </a>
                                </div>
                                <div class="title">
                                    <a target="_blank" class="tit" href="/zjgp/lsrw/content_31392" title="高平黑陶">高平黑陶</a>
                                </div>
                                <span class="titleBg"></span>
                            </li>
                            <li>
                                <div class="pic">
                                    <a href="/zjgp/lsrw/content_31365" target="_blank">
                                        <img alt="高平泥塑" src="img/201523172012_180_135.jpg" width="180" height="135">
                                    </a>
                                </div>
                                <div class="title">
                                    <a target="_blank" class="tit" href="/zjgp/lsrw/content_31365" title="高平泥塑">高平泥塑</a>
                                </div>
                                <span class="titleBg"></span>
                            </li>
                            <li class="last">
                                <div class="pic">
                                    <a href="/zjgp/lsrw/content_31361" target="_blank">
                                        <img alt="  高平雕塑" src="img/20152395054_180_135.jpg" width="180" height="135">
                                    </a>
                                </div>
                                <div class="title">
                                    <a target="_blank" class="tit" href="/zjgp/lsrw/content_31361" title="  高平雕塑">  高平雕塑</a>
                                </div>
                                <span class="titleBg"></span>
                            </li>
                        </ul>
                        <ul class="picList" style="display: none;">
                            <li class="first">
                                <div class="pic">
                                    <a href="/zjgp/gpgs/content_68714" target="_blank">
                                        <img alt="改革开放四十年丨致我们纯真幸福的童年" src="img/7176c42d7a67463386ead534f3987c98_180_135.jpg" width="180" height="135">
                                    </a>
                                </div>
                                <div class="title">
                                    <a target="_blank" class="tit" href="/zjgp/gpgs/content_68714" title="改革开放四十年丨致我们纯真幸福的童年">改革开放四十年丨致…</a>
                                </div>
                                <span class="titleBg"></span>
                            </li>

                            <li>
                                <div class="pic">
                                    <a href="/zjgp/gpgs/content_67427" target="_blank">
                                        <img alt="高平九莲灯溯源" src="img/d6003a6467934d8682ae35502d2ec919_180_135.jpg" width="180" height="135">

                                    </a>
                                </div>
                                <div class="title">
                                    <a target="_blank" class="tit" href="/zjgp/gpgs/content_67427" title="高平九莲灯溯源">高平九莲灯溯源</a>
                                </div>
                                <span class="titleBg"></span>
                            </li>
                            <li>
                                <div class="pic">
                                    <a href="/zjgp/gpgs/content_65901" target="_blank">

                                        <img alt="用快乐的视角看待生命" src="img/fcd4036562e64e8cb970a82f540570ff_180_135.jpg" width="180" height="135">

                                    </a>
                                </div>

                                <div class="title">
                                    <a target="_blank" class="tit" href="/zjgp/gpgs/content_65901" title="用快乐的视角看待生命">用快乐的视角看待生命</a>
                                </div>
                                <span class="titleBg"></span>
                            </li>
                            <li>
                                <div class="pic">
                                    <a href="/zjgp/gpgs/content_65782" target="_blank">
                                        <img alt="您靓丽 我开心" src="img/7b9028801c7b4756a49a23a306480eb5_180_135.png" width="180" height="135">
                                    </a>
                                </div>
                                <div class="title">
                                    <a target="_blank" class="tit" href="/zjgp/gpgs/content_65782" title="您靓丽 我开心">您靓丽 我开心</a>
                                </div>
                                <span class="titleBg"></span>
                            </li>
                            <li>
                                <div class="pic">
                                    <a href="/zjgp/gpgs/content_65897" target="_blank">
                                        <img alt="“臭豆腐”夫妻张剑锋申珊珊：创业滋味并不“臭”" src="img/c2fd095047924cb0b132c0939ad41e66_180_135.jpg" width="180" height="135">
                                    </a>
                                </div>
                                <div class="title">
                                    <a target="_blank" class="tit" href="/zjgp/gpgs/content_65897" title="“臭豆腐”夫妻张剑锋申珊珊：创业滋味并不“臭”">“臭豆腐”夫妻张剑…</a>
                                </div>
                                <span class="titleBg"></span>
                            </li>
                            <li class="last">
                                <div class="pic">
                                    <a href="/zjgp/gpgs/content_65898" target="_blank">
                                        <img alt="美甲师郭凯丽——“手上功夫”点亮美丽细节" src="img/b4547d90d17848d68d4666632cac2b60_180_135.jpg" width="180" height="135">
                                    </a>
                                </div>
                                <div class="title">
                                    <a target="_blank" class="tit" href="/zjgp/gpgs/content_65898" title="美甲师郭凯丽——“手上功夫”点亮美丽细节">美甲师郭凯丽——“…</a>
                                </div>
                                <span class="titleBg"></span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
         
           `
        }
    },
    {
        path:"/ssqh",
        component:{
            template:`
            <div>
    <div class="path container">
        <em>您的位置：</em><a href="/">首页</a>
        &gt;<a href="" class="patha"></a>
    </div>
    <div class="ma-content container row">
        <div class="ma-left col-lg-3">
            <h3>专栏</h3>
            <div class="">
                <ul class="menuList">
                    <li><a href="javascript:;" class="li0"></a></li>
                    <li><a href="javascript:;" class="li1"></a></li>
                    <li><a href="javascript:;" class="li2"></a></li>
                    <li><a href="javascript:;" class="li3"></a></li>
                </ul>
            </div>
        </div>
        <div class="ma-right col-lg-9">
            <h3 class="title"></h3>
            <div class="xx-zi">
                <span name="time">发表时间　2019-03-05 08:33:38</span>
                <span name="name">发表编辑　admin</span>
            </div>
            <div class="ma-center">
                <div class="firstli">
                    <div class="x-pic">
                        <img src="" alt="">
                    </div>
                    <div class="x-zi">
                        <h1></h1>
                        <h3>
                            <p></p>
                            <a href="">查看详情</a>
                       </h3>
                    </div>
                </div>
                <ul>
                <li><router-link to="/page1"></router-link><span class="date"></span></li>
                <li><a href=""></a><span class="date"></span></li>
                <li><a href=""></a><span class="date"></span></li>
                <li><a href=""></a><span class="date"></span></li>
                <li><a href=""></a><span class="date"></span></li>
                </ul>
                <div class="wenben">
                   
                </div>
            </div>
        </div>
    </div>
</div>
            `
        }
    },
    {
        path:"/xwsx",
        component:{
            template:`
            <div>
    <div class="path container">
        <em>您的位置：</em><a href="/">首页</a>
        &gt;<a href="" class="patha"></a>
    </div>
    <div class="ma-content container row">
        <div class="ma-left col-lg-3">
            <h3>专栏</h3>
            <div class="">
                <ul class="menuList">
                    <li><a href="javascript:;" class="li4"></a></li>
                    <li><a href="javascript:;" class="li5"></a></li>
                    <li><a href="javascript:;" class="li6"></a></li>
                    <li><a href="javascript:;" class="li7"></a></li>
                </ul>
            </div>
        </div>
        <div class="ma-right col-lg-9">
            <h3 class="title"></h3>
            <div class="xx-zi">
                <span name="time">发表时间　2019-03-05 08:33:38</span>
                <span name="name">发表编辑　admin</span>
            </div>
            <div class="ma-center">
                <div class="firstli">
                    <div class="x-pic">
                        <img src="" alt="">
                    </div>
                    <div class="x-zi">
                        <h1></h1>
                        <h3>
                            <p></p>
                            <a href="">查看详情</a>
                       </h3>
                    </div>
                </div>
                <ul>
                <li><a href=""></a><span class="date"></span></li>
                <li><a href=""></a><span class="date"></span></li>
                <li><a href=""></a><span class="date"></span></li>
                <li><a href=""></a><span class="date"></span></li>
                <li><a href=""></a><span class="date"></span></li>
                </ul>
                <div class="wenben">
                   
                </div>
            </div>
        </div>
    </div>
</div>
            `
        }
    },
    {
        path:"/aqsc",
        component:{
            template:`
            <div>
    <div class="path container">
        <em>您的位置：</em><a href="/">首页</a>
        &gt;<a href="" class="patha"></a>
    </div>
    <div class="ma-content container row">
        <div class="ma-left col-lg-3">
            <h3>专栏</h3>
            <div class="">
                <ul class="menuList">
                    <li><a href="javascript:;" class="li8"></a></li>
                    <li><a href="javascript:;" class="li9"></a></li>
                    <li><a href="javascript:;" class="li10"></a></li>
                    <li><a href="javascript:;" class="li11"></a></li>
                </ul>
            </div>
        </div>
        <div class="ma-right col-lg-9">
            <h3 class="title"></h3>
            <div class="xx-zi">
                <span name="time">发表时间　2019-03-05 08:33:38</span>
                <span name="name">发表编辑　admin</span>
            </div>
            <div class="ma-center">
                <div class="firstli">
                    <div class="x-pic">
                        <img src="" alt="">
                    </div>
                    <div class="x-zi">
                        <h1></h1>
                        <h3>
                            <p></p>
                            <a href="">查看详情</a>
                       </h3>
                    </div>
                </div>
                <ul>
                <li><a href=""></a><span class="date"></span></li>
                <li><a href=""></a><span class="date"></span></li>
                <li><a href=""></a><span class="date"></span></li>
                <li><a href=""></a><span class="date"></span></li>
                <li><a href=""></a><span class="date"></span></li>
                </ul>
                <div class="wenben">
                   
                </div>
            </div>
        </div>
    </div>
</div>
            `
        }
    },
    {
        path:"/qhdj",
        component:{
            template:`
            <div>
    <div class="path container">
        <em>您的位置：</em><a href="/">首页</a>
        &gt;<a href="" class="patha"></a>
    </div>
    <div class="ma-content container row">
        <div class="ma-left col-lg-3">
            <h3>专栏</h3>
            <div class="">
                <ul class="menuList">
                    <li><a href="javascript:;" class="li12"></a></li>
                    <li><a href="javascript:;" class="li13"></a></li>
                    <li><a href="javascript:;" class="li14"></a></li>
                    <li><a href="javascript:;" class="li15"></a></li>
                </ul>
            </div>
        </div>
        <div class="ma-right col-lg-9">
            <h3 class="title"></h3>
            <div class="xx-zi">
                <span name="time">发表时间　2019-03-05 08:33:38</span>
                <span name="name">发表编辑　admin</span>
            </div>
            <div class="ma-center">
                <div class="firstli">
                    <div class="x-pic">
                        <img src="" alt="">
                    </div>
                    <div class="x-zi">
                        <h1></h1>
                        <h3>
                            <p></p>
                            <a href="">查看详情</a>
                       </h3>
                    </div>
                </div>
                <ul>
                <li><a href=""></a><span class="date"></span></li>
                <li><a href=""></a><span class="date"></span></li>
                <li><a href=""></a><span class="date"></span></li>
                <li><a href=""></a><span class="date"></span></li>
                <li><a href=""></a><span class="date"></span></li>
                </ul>
                <div class="wenben">
                   
                </div>
            </div>
        </div>
    </div>
</div>
             `
        }
    },
    {
        path:"/jygl",
        component:{
            template:`
            <div>
    <div class="path container">
        <em>您的位置：</em><a href="/">首页</a>
        &gt;<a href="" class="patha"></a>
    </div>
    <div class="ma-content container row">
        <div class="ma-left col-lg-3">
            <h3>专栏</h3>
            <div class="">
                <ul class="menuList">
                    <li><a href="javascript:;" class="li16"></a></li>
                    <li><a href="javascript:;" class="li17"></a></li>
                    <li><a href="javascript:;" class="li18"></a></li>
                    <li><a href="javascript:;" class="li19"></a></li>
                </ul>
            </div>
        </div>
        <div class="ma-right col-lg-9">
            <h3 class="title"></h3>
            <div class="xx-zi">
                <span name="time">发表时间　2019-03-05 08:33:38</span>
                <span name="name">发表编辑　admin</span>
            </div>
            <div class="ma-center">
                <div class="firstli">
                    <div class="x-pic">
                        <img src="" alt="">
                    </div>
                    <div class="x-zi">
                        <h1></h1>
                        <h3>
                            <p></p>
                            <a href="">查看详情</a>
                       </h3>
                    </div>
                </div>
                <ul>
                <li><a href=""></a><span class="date"></span></li>
                <li><a href=""></a><span class="date"></span></li>
                <li><a href=""></a><span class="date"></span></li>
                <li><a href=""></a><span class="date"></span></li>
                <li><a href=""></a><span class="date"></span></li>
                </ul>
                <div class="wenben">
                   
                </div>
            </div>
        </div>
    </div>
</div>
            `
        }
    },
    {
        path:"/xfqh",
        component:{
            template:`
            <div>
    <div class="path container">
        <em>您的位置：</em><a href="/">首页</a>
        &gt;<a href="" class="patha"></a>
    </div>
    <div class="ma-content container row">
        <div class="ma-left col-lg-3">
            <h3>专栏</h3>
            <div class="">
                <ul class="menuList">
                    <li><a href="javascript:;" class="li20"></a></li>
                    <li><a href="javascript:;" class="li21"></a></li>
                    <li><a href="javascript:;" class="li22"></a></li>
                    <li><a href="javascript:;" class="li23"></a></li>
                </ul>
            </div>
        </div>
        <div class="ma-right col-lg-9">
            <h3 class="title"></h3>
            <div class="xx-zi">
                <span name="time">发表时间　2019-03-05 08:33:38</span>
                <span name="name">发表编辑　admin</span>
            </div>
            <div class="ma-center">
                <div class="firstli">
                    <div class="x-pic">
                        <img src="" alt="">
                    </div>
                    <div class="x-zi">
                        <h1></h1>
                        <h3>
                            <p></p>
                            <a href="">查看详情</a>
                       </h3>
                    </div>
                </div>
                <ul>
                <li><a href=""></a><span class="date"></span></li>
                <li><a href=""></a><span class="date"></span></li>
                <li><a href=""></a><span class="date"></span></li>
                <li><a href=""></a><span class="date"></span></li>
                <li><a href=""></a><span class="date"></span></li>
                </ul>
                <div class="wenben">
                   
                </div>
            </div>
        </div>
    </div>
</div>
            `
        }
    },
    {
        path:"/qhwy",
        component:{
            template:`
            <div>
    <div class="path container">
        <em>您的位置：</em><a href="/">首页</a>
        &gt;<a href="" class="patha"></a>
    </div>
    <div class="ma-content container row">
        <div class="ma-left col-lg-3">
            <h3>专栏</h3>
            <div class="">
                <ul class="menuList">
                    <li><a href="javascript:;" class="li24"></a></li>
                    <li><a href="javascript:;" class="li25"></a></li>
                    <li><a href="javascript:;" class="li26"></a></li>
                    <li><a href="javascript:;" class="li27"></a></li>
                </ul>
            </div>
        </div>
        <div class="ma-right col-lg-9">
            <h3 class="title"></h3>
            <div class="xx-zi">
                <span name="time">发表时间　2019-03-05 08:33:38</span>
                <span name="name">发表编辑　admin</span>
            </div>
            <div class="ma-center">
                <div class="firstli">
                    <div class="x-pic">
                        <img src="" alt="">
                    </div>
                    <div class="x-zi">
                        <h1></h1>
                        <h3>
                            <p></p>
                            <a href="">查看详情</a>
                       </h3>
                    </div>
                </div>
                <ul>
                <li><a href=""></a><span class="date"></span></li>
                <li><a href=""></a><span class="date"></span></li>
                <li><a href=""></a><span class="date"></span></li>
                <li><a href=""></a><span class="date"></span></li>
                <li><a href=""></a><span class="date"></span></li>
                </ul>
                <div class="wenben">
                   
                </div>
            </div>
        </div>
    </div>
</div>
            `
        }
    },
    {
        path: "/ma",
        component:{
            template: `
            <div>
    <div class="path container">
        <em>您的位置：</em><a href="/">首页</a>
        &gt;<a href="">官方二维码</a>
    </div>
    <div class="ma-content container row">
       <div class="ma-left col-lg-3">
           <h3>官方微信群</h3>
       </div>
        <div class="ma-right col-lg-9">
            <h3 class="title">官方微信群</h3>
            <div class="property">
                <span>【字体：<a href="javascript:;" data-power-command="reducefont">小</a> <a href="javascript:;" data-power-command="enlargefont">大</a>】</span>
            </div>
            <div class="ma-center">
            
                <p>请扫描以下二维码进入“官方微信群”</p>
                <p><img src="img/erweima.jpg" alt=""></p>
                
            </div>
        </div>
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
            <div class="property">
                <span>【字体：<a href="javascript:;">小</a> <a href="javascript:;">大</a>】</span>
            </div>
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
 var $focusNews= $(".focusNews");
 var $test = $(".bd");
 var $imageLis = $(".test li");
 var $cilclesLis = $(".hd ul li");
 $(".test ul").append($imageLis.eq(0).clone());
 var idx = 0;
 var timer = setInterval(rightBtnHandler, 2000);
    $focusNews.mouseenter(function(){
        clearInterval(timer);
    });
    $focusNews.mouseleave(function(){
        timer = setInterval(rightBtnHandler, 2000);
    });
    $(".rightBtn").mouseenter(rightBtnHandler);
    function rightBtnHandler(){
        if($test.is(":animated")) return;
        idx++;
        $test.animate({"left" : -570 * idx},300,function(){
            if(idx > 4){
                idx = 0;
                $test.css("left",0);
            }
        });
        changeCircle();
    }
    $(".leftBtn").mouseenter(function(){
        if($test.is(":animated")) return;
        idx--;
        if(idx < 0){
            idx = 4;
            $test.css("left",-5 * 570);
        }
        $test.animate({"left" : -570 * idx},300);
        changeCircle();
    });
    $cilclesLis.mouseenter(function(){
        idx = $(this).index();
        $test.animate({"left" : -570 * idx},300);
        changeCircle();
    });
    function changeCircle(){
        var n = idx <= 4 ? idx : 0;
        $cilclesLis.eq(n).addClass("on").siblings().removeClass("on");
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
$(function(){
    function loadData(){
        // 首页数据
        $.ajax({
            type: "POST",
            url: "http://kxqh.api.milisx.xyz/api/custom/qhhomedata",
            dateType: "json",
            data:{
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
                }
            },
            success: function(data){
                console.log(data);
               for( var i = 0; i < data.data.lst_part_one.length; i ++){
                    $(".bd1 li a").eq(i).text(data.data.lst_part_one[i].Title);
                   $(".bd1 li a").eq(i).attr("id",data.data.lst_part_one[i].Id)
                   $(".bd1 .date").eq(i).text(data.data.lst_part_one[i].CreateTime);
                   $(".bd2 li a").eq(i).text(data.data.lst_part_two[i].Title);
                   $(".bd2 li a").eq(i).attr("id",data.data.lst_part_two[i].Id)
                   $(".bd2 .date").eq(i).text(data.data.lst_part_two[i].CreateTime)
               }
               for( var i = 0; i < data.data.lst_part_four.length; i ++){
                    $(".new-center li a").eq(i).text(data.data.lst_part_four[i].Title);
                   $(".new-center li a").eq(i).attr("id",data.data.lst_part_four[i].Id)
                    $(".new-center .date").eq(i).text(data.data.lst_part_four[i].CreateTime);
                    $(".new-center1 li a").eq(i).text(data.data.lst_part_five[i].Title);
                   $(".new-center1 li a").eq(i).attr("id",data.data.lst_part_five[i].Id)
                    $(".new-center1 .date").eq(i).text(data.data.lst_part_five[i].CreateTime)
                }
                for( var i = 0; i < data.data.lst_part_six.length; i ++){
                    $(".new-click li a").eq(i).text(data.data.lst_part_six[i].Title);
                    $(".new-click li a").eq(i).attr("id",data.data.lst_part_six[i].Id)
                    $(".new-click .date").eq(i).text(data.data.lst_part_six[i].CreateTime);
                }

            },
        });
        // 首页导航
        $.ajax({
            type: "POST",
            url: "http://kxqh.api.milisx.xyz/api/custom/qhhomenav",
            dataType: "json",
            data:{},
            success: function(data){
                var text = "";
                var text1 = "";
                var index =0;
                for( var i = 0; i < data.data.length; i ++){
                    text = data.data[i].Name;
                    $(".navt").eq(i-1).text(text);
                    $(".navt").eq(i-1).attr("id",data.data[i].Id);
                    for(var j = 0;j <data.data[i].List_VNC.length; j ++){
                        index ++;
                        text1 = data.data[i].List_VNC[j].Name;
                        $(".navc").eq(index-1).text(text1);
                        $(".navc").eq(index-1).attr("id",data.data[i].List_VNC[j].Id);
                    }
                }
                console.log(data);
            }
        });
        // 首善前和

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
$(".bd1 li").on("click","a",function () {
    console.log($(this).attr("id"))
    $.ajax({
        type: "post",
        url: "http://kxqh.api.milisx.xyz/api/content/getarticledetail",
        dateType: "json",
        data:{
            "ArticleId": $(this).attr("id")
        },
        success: function (data) {
            console.log(data.data);
            $(".ma-right h3").text(data.data.Title);
            $(".ma-center div").html(data.data.Body);
            $(".ma-center img").attr('src',data.data.CoverPhoto);
            // $(".aa1").text("公司要闻")
        }
    })
});
$(".bd2 li").on("click","a",function () {
    console.log($(this).attr("id"))
    $.ajax({
        type: "post",
        url: "http://kxqh.api.milisx.xyz/api/content/getarticledetail",
        dateType: "json",
        data:{
            "ArticleId": $(this).attr("id")
        },
        success: function (data) {
            console.log(data.data);
            $(".ma-right h3").text(data.data.Title);
            $(".ma-center div").html(data.data.Body);
            $(".ma-center img").attr('src',data.data.CoverPhoto);
            // $(".aa1").text("公司要闻")
        }
    })
});
$(".new-center li").on("click","a",function () {
    console.log($(this).attr("id"))
    $.ajax({
        type: "post",
        url: "http://kxqh.api.milisx.xyz/api/content/getarticledetail",
        dateType: "json",
        data:{
            "ArticleId": $(this).attr("id")
        },
        success: function (data) {
            console.log(data.data);
            $(".ma-right h3").text(data.data.Title);
            $(".ma-center div").html(data.data.Body);
            $(".ma-center img").attr('src',data.data.CoverPhoto);
            // $(".aa1").text("公司要闻")
        }
    })
})
$(".new-center1 li").on("click","a",function () {
    console.log($(this).attr("id"))
    $.ajax({
        type: "post",
        url: "http://kxqh.api.milisx.xyz/api/content/getarticledetail",
        dateType: "json",
        data:{
            "ArticleId": $(this).attr("id")
        },
        success: function (data) {
            console.log(data.data);
            $(".ma-right h3").text(data.data.Title);
            $(".ma-center div").html(data.data.Body);
            $(".ma-center img").attr('src',data.data.CoverPhoto);
            // $(".aa1").text("公司要闻")
        }
    })
})
$(".new-click li").on("click","a",function () {
    console.log($(this).attr("id"))
    $.ajax({
        type: "post",
        url: "http://kxqh.api.milisx.xyz/api/content/getarticledetail",
        dateType: "json",
        data:{
            "ArticleId": $(this).attr("id")
        },
        success: function (data) {
            console.log(data.data);
            $(".ma-center img").css("display","block")
            $(".ma-right h3").text(data.data.Title);
            $(".ma-center div").html(data.data.Body);
            $(".ma-center img").attr('src',data.data.CoverPhoto);
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
$(".li1").click(function () {
    $.ajax({
        type: "post",
        url: "http://kxqh.api.milisx.xyz/api/content/getcategoryarticlelist",
        dateType: "json",
        data:{
            "categoryid": "b1c97066-0750-49d8-9b34-cb3f85f3a097",
            "PageIndex": 1,
            "PageSize": 12
        },
        success: function (data) {
            // console.log(data.data);
            $(".patha").text("企业文化");
            $(".title").text("企业文化");
            $(".ma-center ul").css("display","block");
            $(".firstli").css("display","block");

            for(var i =0 ; i< data.data.lst_categoryarticlelist.length; i ++){
                // console.log(data.data.lst_categoryarticlelist[i].CreateTime);
                $(".ma-center li a").eq(i).text(data.data.lst_categoryarticlelist[i].Title);
                $(".ma-center li a").attr("id",data.data.lst_categoryarticlelist[i].Id)
                $(".ma-center .wenben").css("display","none");
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
        data:{
            "ArticleId": "91a8822e-2cbd-4c1e-a1ea-dab964457a5c"
        },
        success: function(data){
            // console.log(data.data);
            $(".firstli img").attr('src',data.data.CoverPhoto);
            $(".firstli h1").text(data.data.Title);
            $(".firstli p").html(data.data.Body);
            $(".ma-center .xq").css("display","none")
            $(".ma-center>img").css("display","none")

        },
    });


});
$(".li0").click(function () {
    $.ajax({
        type: "POST",
        url: "http://kxqh.api.milisx.xyz/api/content/getarticledetail",
        dateType: "json",
        data:{
            "ArticleId": "2c1c1594-1aea-4c28-8e71-65e864edcd86"
        },
        success: function(data){
            // console.log(data.data);
            $(".ma-center .wenben").css("display","block");
            $(".title").text(data.data.Title);
            $(".patha").text(data.data.Title);
            $(".ma-center .wenben").html(data.data.Body);
            $(".ma-center ul").css("display","none");
            $(".ma-center .firstli").css("display","none")
            $(".ma-center>img").css("display","none")
            $(".ma-center .xq").css("display","none")
        },
    });



});
$(".li2").click(function () {
    $.ajax({
        type: "POST",
        url: "http://kxqh.api.milisx.xyz/api/content/getarticledetail",
        dateType: "json",
        data:{
            "ArticleId": "833fa9c6-d6e5-40b7-a1ea-829f5a0ebc15"
        },
        success: function(data){
            // console.log(data.data);
            $(".ma-center .wenben").css("display","block");
            $(".title").text(data.data.Title);
            $(".patha").text(data.data.Title);
            $(".ma-center .wenben").html(data.data.Body);
            $(".ma-center ul").css("display","none");
            $(".ma-center .firstli").css("display","none")
            $(".ma-center>img").css("display","none")
            $(".ma-center .xq").css("display","none")
        },
    });
});
$(".li3").click(function () {
    $.ajax({
        type: "post",
        url: "http://kxqh.api.milisx.xyz/api/content/getcategoryarticlelist",
        dateType: "json",
        data:{
            "categoryid": "11dea9ec-4d9b-4c09-9926-97d12929920c",
            "PageIndex": 1,
            "PageSize": 12
        },
        success: function (data) {
            console.log(data.data);
            $(".title").text("产品介绍");
            $(".patha").text("产品介绍");
            $(".ma-center ul").css("display","block");
            $(".firstli").css("display","block");

            for(var i =0 ; i< data.data.lst_categoryarticlelist.length; i ++){
                // console.log(data.data.lst_categoryarticlelist[i].CreateTime);
                $(".ma-center li a").eq(i).text(data.data.lst_categoryarticlelist[i].Title);
                $(".ma-center li a").eq(i).attr("id",data.data.lst_categoryarticlelist[i].Id);
                $(".ma-center .wenben").css("display","none");
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
        data:{
            "ArticleId": "896a48d1-de14-4b2a-84fb-18862f481902"
        },
        success: function(data){
            // console.log(data.data);
            $(".firstli img").attr('src',data.data.CoverPhoto);
            $(".firstli h1").text(data.data.Title);
            $(".firstli p").html(data.data.Body);
            $(".ma-center>img").css("display","none")
            $(".ma-center .xq").css("display","none")

        },
    });
});
$(".li4").click(function () {
    $.ajax({
        type: "post",
        url: "http://kxqh.api.milisx.xyz/api/content/getcategoryarticlelist",
        dateType: "json",
        data:{
            "categoryid": "ac1e5571-d81f-4fc7-886c-c4ba6d7a871a",
            "PageIndex": 1,
            "PageSize": 12
        },
        success: function (data) {
            console.log(data.data);
            $(".patha").text("公司要闻");
            $(".title").text("公司要闻");
            $(".ma-center ul").css("display","block");
            $(".firstli").css("display","block");

            for(var i =0 ; i< data.data.lst_categoryarticlelist.length; i ++){
                // console.log(data.data.lst_categoryarticlelist[i].CreateTime);
                $(".ma-center li a").eq(i).text(data.data.lst_categoryarticlelist[i].Title);
                $(".ma-center li a").eq(i).attr("id",data.data.lst_categoryarticlelist[i].Id);
                $(".ma-center .wenben").css("display","none");
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
        data:{
            "ArticleId": "e8d16e6e-e783-4370-890b-6510578c3027"
        },
        success: function(data){
            // console.log(data.data);
            $(".firstli img").attr('src',data.data.CoverPhoto);
            $(".firstli h1").text(data.data.Title);
            $(".firstli p").html(data.data.Body);

        },
    });
});
$(".li5").click(function () {
    $.ajax({
        type: "post",
        url: "http://kxqh.api.milisx.xyz/api/content/getcategoryarticlelist",
        dateType: "json",
        data:{
            "categoryid": "a460675f-8a68-4bbb-b0cd-825f7578fe00",
            "PageIndex": 1,
            "PageSize": 12
        },
        success: function (data) {
            console.log(data.data);
            $(".patha").text("基层动态");
            $(".title").text("基层动态");
            $(".ma-center ul").css("display","block");
            $(".firstli").css("display","block");

            for(var i =0 ; i< data.data.lst_categoryarticlelist.length; i ++){
                // console.log(data.data.lst_categoryarticlelist[i].CreateTime);
                $(".ma-center li a").eq(i).text(data.data.lst_categoryarticlelist[i].Title);
                $(".ma-center li a").eq(i).attr("id",data.data.lst_categoryarticlelist[i].Id);
                $(".ma-center .wenben").css("display","none");
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
        data:{
            "ArticleId": "195c86eb-1e9c-4a86-8259-3653e137c179"
        },
        success: function(data){
            // console.log(data.data);
            $(".firstli img").attr('src',data.data.CoverPhoto);
            $(".firstli h1").text(data.data.Title);
            $(".firstli p").html(data.data.Body);

        },
    });
});
$(".li6").click(function () {
    $.ajax({
        type: "post",
        url: "http://kxqh.api.milisx.xyz/api/content/getcategoryarticlelist",
        dateType: "json",
        data:{
            "categoryid": "e6e0ea92-0f43-418b-b838-b88b69744e57",
            "PageIndex": 1,
            "PageSize": 12
        },
        success: function (data) {
            console.log(data.data);
            $(".patha").text("特别报道");
            $(".title").text("特别报道");
            $(".ma-center ul").css("display","block");
            $(".firstli").css("display","block");

            for(var i =0 ; i< data.data.lst_categoryarticlelist.length; i ++){
                // console.log(data.data.lst_categoryarticlelist[i].CreateTime);
                $(".ma-center li a").eq(i).text(data.data.lst_categoryarticlelist[i].Title);
                $(".ma-center li a").eq(i).attr("id",data.data.lst_categoryarticlelist[i].Id);
                $(".ma-center .wenben").css("display","none");
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
        data:{
            "ArticleId": "63226dcb-a850-40ee-948f-21cc3df7c5e3"
        },
        success: function(data){
            // console.log(data.data);
            $(".firstli img").attr('src',data.data.CoverPhoto);
            $(".firstli h1").text(data.data.Title);
            $(".firstli p").html(data.data.Body);

        },
    });
});
$(".li7").click(function () {
    $.ajax({
        type: "post",
        url: "http://kxqh.api.milisx.xyz/api/content/getcategoryarticlelist",
        dateType: "json",
        data:{
            "categoryid": "c8e12965-b96e-4d88-986b-5063e79bac7a",
            "PageIndex": 1,
            "PageSize": 12
        },
        success: function (data) {
            console.log(data.data);
            $(".patha").text("热点专题");
            $(".title").text("热点专题");
            $(".ma-center ul").css("display","block");
            $(".firstli").css("display","block");

            for(var i =0 ; i< data.data.lst_categoryarticlelist.length; i ++){
                // console.log(data.data.lst_categoryarticlelist[i].CreateTime);
                $(".ma-center li a").eq(i).text(data.data.lst_categoryarticlelist[i].Title);
                $(".ma-center li a").eq(i).attr("id",data.data.lst_categoryarticlelist[i].Id);
                $(".ma-center .wenben").css("display","none");
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
        data:{
            "ArticleId": "8ce04421-7f39-44c7-ae3d-a54f259aa1b7"
        },
        success: function(data){
            // console.log(data.data);
            $(".firstli img").attr('src',data.data.CoverPhoto);
            $(".firstli h1").text(data.data.Title);
            $(".firstli p").html(data.data.Body);

        },
    });
});
$(".li8").click(function () {
    $.ajax({
        type: "post",
        url: "http://kxqh.api.milisx.xyz/api/content/getcategoryarticlelist",
        dateType: "json",
        data:{
            "categoryid": "a5a566c1-0bc3-4bcb-a43d-aaf9644c13cd",
            "PageIndex": 1,
            "PageSize": 12
        },
        success: function (data) {
            console.log(data.data);
            $(".patha").text("生产动态");
            $(".title").text("生产动态");
            $(".ma-center ul").css("display","block");
            $(".firstli").css("display","block");

            for(var i =0 ; i< data.data.lst_categoryarticlelist.length; i ++){
                // console.log(data.data.lst_categoryarticlelist[i].CreateTime);
                $(".ma-center li a").eq(i).text(data.data.lst_categoryarticlelist[i].Title);
                $(".ma-center li a").eq(i).attr("id",data.data.lst_categoryarticlelist[i].Id);
                $(".ma-center .wenben").css("display","none");
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
        data:{
            "ArticleId": "bd8dc204-1241-48d7-acb5-6e16017666ce"
        },
        success: function(data){
            // console.log(data.data);
            $(".firstli img").attr('src',data.data.CoverPhoto);
            $(".firstli h1").text(data.data.Title);
            $(".firstli p").html(data.data.Body);

        },
    });
});
$(".li9").click(function () {
    $.ajax({
        type: "post",
        url: "http://kxqh.api.milisx.xyz/api/content/getcategoryarticlelist",
        dateType: "json",
        data:{
            "categoryid": "b6b4e273-fe79-4a92-9232-05d48696b2af",
            "PageIndex": 1,
            "PageSize": 12
        },
        success: function (data) {
            console.log(data.data);
            $(".patha").text("安全文化");
            $(".title").text("安全文化");
            $(".ma-center ul").css("display","block");
            $(".firstli").css("display","block");

            for(var i =0 ; i< data.data.lst_categoryarticlelist.length; i ++){
                // console.log(data.data.lst_categoryarticlelist[i].CreateTime);
                $(".ma-center li a").eq(i).text(data.data.lst_categoryarticlelist[i].Title);
                $(".ma-center li a").eq(i).attr("id",data.data.lst_categoryarticlelist[i].Id);
                $(".ma-center .wenben").css("display","none");
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
        data:{
            "ArticleId": "4a180fd3-675f-4ee0-9b17-7abf9bd90247"
        },
        success: function(data){
            // console.log(data.data);
            $(".firstli img").attr('src',data.data.CoverPhoto);
            $(".firstli h1").text(data.data.Title);
            $(".firstli p").html(data.data.Body);

        },
    });
});
$(".li10").click(function () {
    $.ajax({
        type: "post",
        url: "http://kxqh.api.milisx.xyz/api/content/getcategoryarticlelist",
        dateType: "json",
        data:{
            "categoryid": "f790e6c8-db86-4271-a4da-00ac17b0ac37",
            "PageIndex": 1,
            "PageSize": 12
        },
        success: function (data) {
            console.log(data.data);
            $(".patha").text("法律法规");
            $(".title").text("法律法规");
            $(".ma-center ul").css("display","block");
            $(".firstli").css("display","block");

            for(var i =0 ; i< data.data.lst_categoryarticlelist.length; i ++){
                // console.log(data.data.lst_categoryarticlelist[i].CreateTime);
                $(".ma-center li a").eq(i).text(data.data.lst_categoryarticlelist[i].Title);
                $(".ma-center li a").eq(i).attr("id",data.data.lst_categoryarticlelist[i].Id);
                $(".ma-center .wenben").css("display","none");
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
        data:{
            "ArticleId": "bfc776af-232d-4e37-aa75-3d30e95dce09"
        },
        success: function(data){
            // console.log(data.data);
            $(".firstli img").attr('src',data.data.CoverPhoto);
            $(".firstli h1").text(data.data.Title);
            $(".firstli p").html(data.data.Body);

        },
    });
});
$(".li11").click(function () {
    $.ajax({
        type: "post",
        url: "http://kxqh.api.milisx.xyz/api/content/getcategoryarticlelist",
        dateType: "json",
        data:{
            "categoryid": "64235dcc-ba31-4f35-8fcd-48a8b0982165",
            "PageIndex": 1,
            "PageSize": 12
        },
        success: function (data) {
            console.log(data.data);
            $(".patha").text("生态矿山");
            $(".title").text("生态矿山");
            $(".ma-center ul").css("display","block");
            $(".firstli").css("display","block");

            for(var i =0 ; i< data.data.lst_categoryarticlelist.length; i ++){
                // console.log(data.data.lst_categoryarticlelist[i].CreateTime);
                $(".ma-center li a").eq(i).text(data.data.lst_categoryarticlelist[i].Title);
                $(".ma-center li a").eq(i).attr("id",data.data.lst_categoryarticlelist[i].Id);
                $(".ma-center .wenben").css("display","none");
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
        data:{
            "ArticleId": "b196e032-3eae-4af0-ad37-756ab2ecb4d9"
        },
        success: function(data){
            // console.log(data.data);
            $(".firstli img").attr('src',data.data.CoverPhoto);
            $(".firstli h1").text(data.data.Title);
            $(".firstli p").html(data.data.Body);

        },
    });
});
$(".li12").click(function () {
    $.ajax({
        type: "post",
        url: "http://kxqh.api.milisx.xyz/api/content/getcategoryarticlelist",
        dateType: "json",
        data:{
            "categoryid": "cd5c323e-5d09-41f6-82b7-9a98b2431370",
            "PageIndex": 1,
            "PageSize": 12
        },
        success: function (data) {
            console.log(data.data);
            $(".patha").text("党建动态");
            $(".title").text("党建动态");
            $(".ma-center ul").css("display","block");
            $(".firstli").css("display","block");

            for(var i =0 ; i< data.data.lst_categoryarticlelist.length; i ++){
                // console.log(data.data.lst_categoryarticlelist[i].CreateTime);
                $(".ma-center li a").eq(i).text(data.data.lst_categoryarticlelist[i].Title);
                $(".ma-center li a").eq(i).attr("id",data.data.lst_categoryarticlelist[i].Id);
                $(".ma-center .wenben").css("display","none");
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
        data:{
            "ArticleId": "71719455-7879-4807-838d-7350cefeb31c"
        },
        success: function(data){
            // console.log(data.data);
            $(".firstli img").attr('src',data.data.CoverPhoto);
            $(".firstli h1").text(data.data.Title);
            $(".firstli p").html(data.data.Body);

        },
    });
});
$(".li13").click(function () {
    $.ajax({
        type: "post",
        url: "http://kxqh.api.milisx.xyz/api/content/getcategoryarticlelist",
        dateType: "json",
        data:{
            "categoryid": "37a17e18-c055-43e6-80be-147a81e78350",
            "PageIndex": 1,
            "PageSize": 12
        },
        success: function (data) {
            console.log(data.data);
            $(".patha").text("廉政建设");
            $(".title").text("廉政建设");
            $(".ma-center ul").css("display","block");
            $(".firstli").css("display","block");

            for(var i =0 ; i< data.data.lst_categoryarticlelist.length; i ++){
                // console.log(data.data.lst_categoryarticlelist[i].CreateTime);
                $(".ma-center li a").eq(i).text(data.data.lst_categoryarticlelist[i].Title);
                $(".ma-center li a").eq(i).attr("id",data.data.lst_categoryarticlelist[i].Id);
                $(".ma-center .wenben").css("display","none");
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
        data:{
            "ArticleId": "d48fe9de-654e-4a38-816b-6d391e9ec8d8"
        },
        success: function(data){
            // console.log(data.data);
            $(".firstli img").attr('src',data.data.CoverPhoto);
            $(".firstli h1").text(data.data.Title);
            $(".firstli p").html(data.data.Body);

        },
    });
});
$(".li14").click(function () {
    $.ajax({
        type: "post",
        url: "http://kxqh.api.milisx.xyz/api/content/getcategoryarticlelist",
        dateType: "json",
        data:{
            "categoryid": "27faa66a-c165-410c-8139-ad7318d41bfd",
            "PageIndex": 1,
            "PageSize": 12
        },
        success: function (data) {
            console.log(data.data);
            $(".patha").text("上级精神");
            $(".title").text("上级精神");
            $(".ma-center ul").css("display","block");
            $(".firstli").css("display","block");

            for(var i =0 ; i< data.data.lst_categoryarticlelist.length; i ++){
                // console.log(data.data.lst_categoryarticlelist[i].CreateTime);
                $(".ma-center li a").eq(i).text(data.data.lst_categoryarticlelist[i].Title);
                $(".ma-center li a").eq(i).attr("id",data.data.lst_categoryarticlelist[i].Id);
                $(".ma-center .wenben").css("display","none");
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
        data:{
            "ArticleId": "04a8d3ff-7b15-4755-91cf-4a936a2057ff"
        },
        success: function(data){
            // console.log(data.data);
            $(".firstli img").attr('src',data.data.CoverPhoto);
            $(".firstli h1").text(data.data.Title);
            $(".firstli p").html(data.data.Body);

        },
    });
});
$(".li15").click(function () {
    $.ajax({
        type: "post",
        url: "http://kxqh.api.milisx.xyz/api/content/getcategoryarticlelist",
        dateType: "json",
        data:{
            "categoryid": "722c2e2f-35d1-4712-84fb-4d78516ce7be",
            "PageIndex": 1,
            "PageSize": 12
        },
        success: function (data) {
            console.log(data.data);
            $(".patha").text("团建工作");
            $(".title").text("团建工作");
            $(".ma-center ul").css("display","block");
            $(".firstli").css("display","block");

            for(var i =0 ; i< data.data.lst_categoryarticlelist.length; i ++){
                // console.log(data.data.lst_categoryarticlelist[i].CreateTime);
                $(".ma-center li a").eq(i).text(data.data.lst_categoryarticlelist[i].Title);
                $(".ma-center li a").eq(i).attr("id",data.data.lst_categoryarticlelist[i].Id);
                $(".ma-center .wenben").css("display","none");
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
        data:{
            "ArticleId": "c2bc9fc7-07d9-4d3e-a73b-659092f100b8"
        },
        success: function(data){
            // console.log(data.data);
            $(".firstli img").attr('src',data.data.CoverPhoto);
            $(".firstli h1").text(data.data.Title);
            $(".firstli p").html(data.data.Body);

        },
    });
});
$(".li16").click(function () {
    $.ajax({
        type: "post",
        url: "http://kxqh.api.milisx.xyz/api/content/getcategoryarticlelist",
        dateType: "json",
        data:{
            "categoryid": "7a14ec45-a68d-4be0-a698-2a70e9122bf8",
            "PageIndex": 1,
            "PageSize": 12
        },
        success: function (data) {
            // console.log(data.data);
            $(".patha").text("经营动态");
            $(".title").text("经营动态");
            $(".ma-center ul").css("display","block");
            $(".firstli").css("display","block");

            for(var i =0 ; i< data.data.lst_categoryarticlelist.length; i ++){
                // console.log(data.data.lst_categoryarticlelist[i].CreateTime);
                $(".ma-center li a").eq(i).text(data.data.lst_categoryarticlelist[i].Title);
                $(".ma-center li a").eq(i).attr("id",data.data.lst_categoryarticlelist[i].Id);
                $(".ma-center .wenben").css("display","none");
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
        data:{
            "ArticleId": "86798375-632c-4d8a-9e4a-a1c8d2e38945"
        },
        success: function(data){
            // console.log(data.data);
            $(".firstli img").attr('src',data.data.CoverPhoto);
            $(".firstli h1").text(data.data.Title);
            $(".firstli p").html(data.data.Body);

        },
    });
});
$(".li17").click(function () {
    $.ajax({
        type: "post",
        url: "http://kxqh.api.milisx.xyz/api/content/getcategoryarticlelist",
        dateType: "json",
        data:{
            "categoryid": "24d61bb2-7670-40c0-bc62-a5f6324df3d2",
            "PageIndex": 1,
            "PageSize": 12
        },
        success: function (data) {
            console.log(data.data);
            $(".patha").text("创新高低");
            $(".title").text("创新高低");
            $(".ma-center ul").css("display","block");
            $(".firstli").css("display","block");

            for(var i =0 ; i< data.data.lst_categoryarticlelist.length; i ++){
                // console.log(data.data.lst_categoryarticlelist[i].CreateTime);
                $(".ma-center li a").eq(i).text(data.data.lst_categoryarticlelist[i].Title);
                $(".ma-center li a").eq(i).attr("id",data.data.lst_categoryarticlelist[i].Id);
                $(".ma-center .wenben").css("display","none");
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
        data:{
            "ArticleId": "2b8ba8bf-7964-436b-8dec-2b6bfef33425"
        },
        success: function(data){
            // console.log(data.data);
            $(".firstli img").attr('src',data.data.CoverPhoto);
            $(".firstli h1").text(data.data.Title);
            $(".firstli p").html(data.data.Body);

        },
    });
});
$(".li18").click(function () {
    $.ajax({
        type: "post",
        url: "http://kxqh.api.milisx.xyz/api/content/getcategoryarticlelist",
        dateType: "json",
        data:{
            "categoryid": "9be72063-ec73-4fa5-8be2-6f106f9591eb",
            "PageIndex": 1,
            "PageSize": 12
        },
        success: function (data) {
            console.log(data.data);
            $(".patha").text("降本增效");
            $(".title").text("降本增效");
            $(".ma-center ul").css("display","block");
            $(".firstli").css("display","block");

            for(var i =0 ; i< data.data.lst_categoryarticlelist.length; i ++){
                // console.log(data.data.lst_categoryarticlelist[i].CreateTime);
                $(".ma-center li a").eq(i).text(data.data.lst_categoryarticlelist[i].Title);
                $(".ma-center li a").eq(i).attr("id",data.data.lst_categoryarticlelist[i].Id);
                $(".ma-center .wenben").css("display","none");
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
        data:{
            "ArticleId": "445326c8-aa68-4b1a-94f6-d8c25ddd5f44"
        },
        success: function(data){
            // console.log(data.data);
            $(".firstli img").attr('src',data.data.CoverPhoto);
            $(".firstli h1").text(data.data.Title);
            $(".firstli p").html(data.data.Body);

        },
    });
});
$(".li19").click(function () {
    $.ajax({
        type: "post",
        url: "http://kxqh.api.milisx.xyz/api/content/getcategoryarticlelist",
        dateType: "json",
        data:{
            "categoryid": "6c8b4cdd-ef4b-4e3d-ae87-901be775867d",
            "PageIndex": 1,
            "PageSize": 12
        },
        success: function (data) {
            console.log(data.data);
            $(".patha").text("行业聚焦");
            $(".title").text("行业聚焦");
            $(".ma-center ul").css("display","block");
            $(".firstli").css("display","block");

            for(var i =0 ; i< data.data.lst_categoryarticlelist.length; i ++){
                // console.log(data.data.lst_categoryarticlelist[i].CreateTime);
                $(".ma-center li a").eq(i).text(data.data.lst_categoryarticlelist[i].Title);
                $(".ma-center li a").eq(i).attr("id",data.data.lst_categoryarticlelist[i].Id);
                $(".ma-center .wenben").css("display","none");
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
        data:{
            "ArticleId": "53b29788-9b8f-41ec-92b2-56978c1d2535"
        },
        success: function(data){
            // console.log(data.data);
            $(".firstli img").attr('src',data.data.CoverPhoto);
            $(".firstli h1").text(data.data.Title);
            $(".firstli p").html(data.data.Body);

        },
    });
});
$(".li20").click(function () {
    $.ajax({
        type: "post",
        url: "http://kxqh.api.milisx.xyz/api/content/getcategoryarticlelist",
        dateType: "json",
        data:{
            "categoryid": "ac435425-69ea-4aa9-bc1c-4952e72bae63",
            "PageIndex": 1,
            "PageSize": 12
        },
        success: function (data) {
            console.log(data.data);
            $(".patha").text("人文活动");
            $(".title").text("人文活动");
            $(".ma-center ul").css("display","block");
            $(".firstli").css("display","block");

            for(var i =0 ; i< data.data.lst_categoryarticlelist.length; i ++){
                // console.log(data.data.lst_categoryarticlelist[i].CreateTime);
                $(".ma-center li a").eq(i).text(data.data.lst_categoryarticlelist[i].Title);
                $(".ma-center li a").eq(i).attr("id",data.data.lst_categoryarticlelist[i].Id);
                $(".ma-center .wenben").css("display","none");
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
        data:{
            "ArticleId": "48acf2d7-e25d-4f41-9644-129f5c9505bc"
        },
        success: function(data){
            // console.log(data.data);
            $(".firstli img").attr('src',data.data.CoverPhoto);
            $(".firstli h1").text(data.data.Title);
            $(".firstli p").html(data.data.Body);

        },
    });
});
$(".li21").click(function () {
    $.ajax({
        type: "post",
        url: "http://kxqh.api.milisx.xyz/api/content/getcategoryarticlelist",
        dateType: "json",
        data:{
            "categoryid": "4cbfe924-8359-48cb-a11a-e20c8dbf69c5",
            "PageIndex": 1,
            "PageSize": 12
        },
        success: function (data) {
            console.log(data.data);
            $(".patha").text("职工风采");
            $(".title").text("职工风采");
            $(".ma-center ul").css("display","block");
            $(".firstli").css("display","block");

            for(var i =0 ; i< data.data.lst_categoryarticlelist.length; i ++){
                // console.log(data.data.lst_categoryarticlelist[i].CreateTime);
                $(".ma-center li a").eq(i).text(data.data.lst_categoryarticlelist[i].Title);
                $(".ma-center li a").eq(i).attr("id",data.data.lst_categoryarticlelist[i].Id);
                $(".ma-center .wenben").css("display","none");
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
        data:{
            "ArticleId": "dee8fb92-dcec-4ba5-afce-2d3b5a4b14ca"
        },
        success: function(data){
            // console.log(data.data);
            $(".firstli img").attr('src',data.data.CoverPhoto);
            $(".firstli h1").text(data.data.Title);
            $(".firstli p").html(data.data.Body);

        },
    });
});
$(".li22").click(function () {
    $.ajax({
        type: "post",
        url: "http://kxqh.api.milisx.xyz/api/content/getcategoryarticlelist",
        dateType: "json",
        data:{
            "categoryid": "ca89efd2-a5de-46c4-af68-78a8a962fb62",
            "PageIndex": 1,
            "PageSize": 12
        },
        success: function (data) {
            console.log(data.data);
            $(".patha").text("前和故事");
            $(".title").text("前和故事");
            $(".ma-center ul").css("display","block");
            $(".firstli").css("display","block");

            for(var i =0 ; i< data.data.lst_categoryarticlelist.length; i ++){
                // console.log(data.data.lst_categoryarticlelist[i].CreateTime);
                $(".ma-center li a").eq(i).text(data.data.lst_categoryarticlelist[i].Title);
                $(".ma-center li a").eq(i).attr("id",data.data.lst_categoryarticlelist[i].Id);
                $(".ma-center .wenben").css("display","none");
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
        data:{
            "ArticleId": "0c03911f-bb56-4ef8-8d5f-c210908ba601"
        },
        success: function(data){
            // console.log(data.data);
            $(".firstli img").attr('src',data.data.CoverPhoto);
            $(".firstli h1").text(data.data.Title);
            $(".firstli p").html(data.data.Body);

        },
    });
});
$(".li23").click(function () {
    $.ajax({
        type: "post",
        url: "http://kxqh.api.milisx.xyz/api/content/getcategoryarticlelist",
        dateType: "json",
        data:{
            "categoryid": "830e9ffd-6d44-40ab-9aa9-fd38141e1d5c",
            "PageIndex": 1,
            "PageSize": 12
        },
        success: function (data) {
            console.log(data.data);
            $(".patha").text("帮扶济困");
            $(".title").text("帮扶济困");
            $(".ma-center ul").css("display","block");
            $(".firstli").css("display","block");

            for(var i =0 ; i< data.data.lst_categoryarticlelist.length; i ++){
                // console.log(data.data.lst_categoryarticlelist[i].CreateTime);
                $(".ma-center li a").eq(i).text(data.data.lst_categoryarticlelist[i].Title);
                $(".ma-center li a").eq(i).attr("id",data.data.lst_categoryarticlelist[i].Id);
                $(".ma-center .wenben").css("display","none");
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
        data:{
            "ArticleId": "e28f11d9-ce23-4483-a08e-d7d06a6c73a1"
        },
        success: function(data){
            // console.log(data.data);
            $(".firstli img").attr('src',data.data.CoverPhoto);
            $(".firstli h1").text(data.data.Title);
            $(".firstli p").html(data.data.Body);

        },
    });
});
$(".li24").click(function () {
    $.ajax({
        type: "post",
        url: "http://kxqh.api.milisx.xyz/api/content/getcategoryarticlelist",
        dateType: "json",
        data:{
            "categoryid": "49d74a56-ec5b-4383-b3f8-7ee7bd995dd6",
            "PageIndex": 1,
            "PageSize": 12
        },
        success: function (data) {
            console.log(data.data);
            $(".patha").text("魅力前和");
            $(".title").text("魅力前和");
            $(".ma-center ul").css("display","block");
            $(".firstli").css("display","block");

            for(var i =0 ; i< data.data.lst_categoryarticlelist.length; i ++){
                // console.log(data.data.lst_categoryarticlelist[i].CreateTime);
                $(".ma-center li a").eq(i).text(data.data.lst_categoryarticlelist[i].Title);
                $(".ma-center li a").eq(i).attr("id",data.data.lst_categoryarticlelist[i].Id);
                $(".ma-center .wenben").css("display","none");
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
        data:{
            "ArticleId": "cfd138e4-977e-43c1-acbe-43815d262820"
        },
        success: function(data){
            // console.log(data.data);
            $(".firstli img").attr('src',data.data.CoverPhoto);
            $(".firstli h1").text(data.data.Title);
            $(".firstli p").html(data.data.Body);

        },
    });
});
$(".li25").click(function () {
    $.ajax({
        type: "post",
        url: "http://kxqh.api.milisx.xyz/api/content/getcategoryarticlelist",
        dateType: "json",
        data:{
            "categoryid": "9d0f6295-6b2e-42b5-84ad-ced75a776fc1",
            "PageIndex": 1,
            "PageSize": 12
        },
        success: function (data) {
            console.log(data.data);
            $(".patha").text("原创天地");
            $(".title").text("原创天地");
            $(".ma-center ul").css("display","block");
            $(".firstli").css("display","block");

            for(var i =0 ; i< data.data.lst_categoryarticlelist.length; i ++){
                // console.log(data.data.lst_categoryarticlelist[i].CreateTime);
                $(".ma-center li a").eq(i).text(data.data.lst_categoryarticlelist[i].Title);
                $(".ma-center li a").eq(i).attr("id",data.data.lst_categoryarticlelist[i].Id);
                $(".ma-center .wenben").css("display","none");
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
        data:{
            "ArticleId": "6c6854d7-68ec-4a3e-827a-48c2681050f2"
        },
        success: function(data){
            // console.log(data.data);
            $(".firstli img").attr('src',data.data.CoverPhoto);
            $(".firstli h1").text(data.data.Title);
            $(".firstli p").html(data.data.Body);

        },
    });
});

$(".li26").click(function () {
    $.ajax({
        type: "post",
        url: "http://kxqh.api.milisx.xyz/api/content/getcategoryarticlelist",
        dateType: "json",
        data:{
            "categoryid": "77378bd9-b680-404b-b6eb-ba2e5530e275",
            "PageIndex": 1,
            "PageSize": 12
        },
        success: function (data) {
            console.log(data.data);
            $(".patha").text("书香前和");
            $(".title").text("书香前和");
            $(".ma-center ul").css("display","block");
            $(".firstli").css("display","block");

            for(var i =0 ; i< data.data.lst_categoryarticlelist.length; i ++){
                // console.log(data.data.lst_categoryarticlelist[i].CreateTime);
                $(".ma-center li a").eq(i).text(data.data.lst_categoryarticlelist[i].Title);
                $(".ma-center li a").eq(i).attr("id",data.data.lst_categoryarticlelist[i].Id);
                $(".ma-center .wenben").css("display","none");
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
        data:{
            "ArticleId": "615d3300-0893-4dc7-be50-f34c3eb115c0"
        },
        success: function(data){
            // console.log(data.data);
            $(".firstli img").attr('src',data.data.CoverPhoto);
            $(".firstli h1").text(data.data.Title);
            $(".firstli p").html(data.data.Body);

        },
    });
});
$(".li27").click(function () {
    $.ajax({
        type: "post",
        url: "http://kxqh.api.milisx.xyz/api/content/getcategoryarticlelist",
        dateType: "json",
        data:{
            "categoryid": "186120af-fdfa-4d89-b853-361afe92810b",
            "PageIndex": 1,
            "PageSize": 12
        },
        success: function (data) {
            console.log(data.data);
            $(".patha").text("阅读推荐");
            $(".title").text("阅读推荐");
            $(".ma-center ul").css("display","block");
            $(".firstli").css("display","block");

            for(var i =0 ; i< data.data.lst_categoryarticlelist.length; i ++){
                // console.log(data.data.lst_categoryarticlelist[i].CreateTime);
                $(".ma-center li a").eq(i).text(data.data.lst_categoryarticlelist[i].Title);
                $(".ma-center li a").eq(i).attr("id",data.data.lst_categoryarticlelist[i].Id);
                $(".ma-center .wenben").css("display","none");
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
        data:{
            "ArticleId": "a7844d0e-f590-4303-8043-fc3d5489ac7a"
        },
        success: function(data){
            // console.log(data.data);
            $(".firstli img").attr('src',data.data.CoverPhoto);
            $(".firstli h1").text(data.data.Title);
            $(".firstli p").html(data.data.Body);
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
$(".ma-center li").on("click","a",function () {
    $.ajax({
        type:"POST",
        url: "http://kxqh.api.milisx.xyz/api/content/getarticledetail",
        dataType: "json",
        data:{
            "ArticleId":$(this).attr("id"),
        },
        success: function (data) {
            // console.log(data.data);
            $(".ma-center .xq").css("display","block");
            $(".ma-right>h3").text(data.data.Title);
            $(".ma-center .xq").html(data.data.Body);
            $(".ma-center img").attr('src',data.data.CoverPhoto);
            $(".ma-center ul").css("display","none");
            $(".ma-center .firstli").css("display","none");
            $(".ma-center>img").css("display","block")
        }
    })
});


