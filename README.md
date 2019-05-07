# 项目入口	
🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉  
![描述](img/qd.jpg)  
小程序已经发布至市场，可以扫码体验         

# 项目介绍
### 为什么写这个项目
我设计这款产品，灵感来自于大家儿时在学生时代时，写的情侣日记这个点。我认为日记即是生活的一种表现形式，而两个人的日记写在一起，生活发生碰撞，
也许会有奇妙的化学反应。在如今这个竞争极为激烈的社会，生活越来越累，人与人之间的隔阂越来越远，人与人之间的关注越来越少。所以，两个人一起写写日记，
相互得知下彼此的生活情况，抱团取暖，一起生活！！

### 此款小程序有什么特点
1. 首先，这是一个双人使用的小程序
2. 主打双人日记功能，即两个人一起写日记  
3. 功能简约，即点即用    
4. 支持定位，即可以显示某人在某地上传日记（这个功能特别适合异地恋）ε=ε=ε=┏(゜ロ゜;)┛

# 源码介绍
## 页面构成
>Project  
>├─static                  //本地静态资源  
>├─utils                   //工具库  
>├─components							//组件库  
>│	 ├─add-diary						//组件-添加日记(卡片)  
>│	 ├─date-diary						//组件-日记日期  
>│	 ├─detail-diary         //组件-日记详情  
>│	 ├─edit-diary  					//组件-编辑日记  
>│	 ├─evaluate							//组件-评价  
>│	 ├─mine									//组件-我的  
>│	 ├─page-mask						//组件-遮罩  
>│	 ├─pair-diary						//组件-日记(卡片)  
>│	 ├─evaluate							//组件-评价  
>│	 ├─pair-invite					//组件-邀请(卡片)  
>│	 └─pair-invited					//组件-接受邀请  
>├─pages                   //  
>│  ├─aboutus              //关于我  
>│  ├─detail-diary         //日记详情页  
>│  ├─evaluate             //产品评价页  
>│  ├─edit-diary           //日记编辑页  
>│  ├─index         				//用户授权页  
>│  ├─mine          				//我的页面  
>│  ├─pair-invited         //接受邀请页  
>│  ├─job                  //选词页面  
>│  ├─me                   //设置页面  
>│  ├─my_word              //已挑选的单词展示页  
>│  ├─pair-user            //日记首页  
>│  ├─welcome              //欢迎页  
>│  └─test                	//测试页（用户一些接口测试）  
>└─models                  //模块库  

* 此款小程序深刻贯彻组件化思想，所以此产品主要由10个组件、工具库、模块库构成
* 模块部分写得有些冗余，写得不是很干净，还需要优化一下
* 组件分得不是很合理，有待优化

# 项目todoList
1. 完成日记上传完毕，服务通知功能
2. 优化模块部分的逻辑
3. 优化组件部分的逻辑

# 项目发展规划
1. 彻底开放匹配机制，用户可稍作个人信息编辑后，随机匹配用户，书写日记

# 备注
* 该项目目前并非用于商业，免费且开源，解释权归项目负责人所有
* 本项目目前仅支持文本内容的日记
* 本产品的数据统计由 阿拉丁 提供
* 本产品的后端服务由 知晓云 提供
* 感谢iconfont提供的免费图标
* 感谢百度地图提供的地图SDK

# 写在最后
这是一次伟大的尝试，福特创始人说过：“如果让我去问用户想要什么？他一定会说我想要一匹更快的马”。
所以，此产品发布前，我并没有做用户调研。而是直接上产品，去验证市场。

# 迭代记录
#### 1.0.1 用户组合Bug修改
#### 1.0.2 修复昵称显示，日记Detail页的进入小程序按钮的隐藏与显示 