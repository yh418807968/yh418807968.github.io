(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{206:function(t,a,s){"use strict";s.r(a);var r=s(28),v=Object(r.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"前言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),s("p",[t._v("本文按时间顺序，并以浏览器进程为贯穿全文的核心脉络，梳理从输入url到页面显示这一过程。\n"),s("img",{attrs:{src:"https://tva1.sinaimg.cn/large/00831rSTgy1gcquotrl1jj30vq0dawgz.jpg",alt:""}})]),t._v(" "),s("h2",{attrs:{id:"处理用户输入"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#处理用户输入"}},[t._v("#")]),t._v(" 处理用户输入")]),t._v(" "),s("p",[t._v("完整的url由协议、域名、路径和端口号这4部分组成，不过并不需要全部齐全才能被识别为url。浏览器对一些缺失的部分为提供默认值，比如输入baidu.com，浏览器会自动补全为https://www.baidu.com/。\n如果判断为一个非url地址，就会利用搜索引擎进行搜索；否则，则进入以下步骤。\n以下以url为https://www.baidu.com/为例，进行说明。")]),t._v(" "),s("h2",{attrs:{id:"查询资源缓存"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查询资源缓存"}},[t._v("#")]),t._v(" 查询资源缓存")]),t._v(" "),s("p",[t._v("如果有缓存资源，那么直接返回资源给浏览器进程，跳过以下的"),s("a",{attrs:{href:"#%E8%8E%B7%E5%8F%96%E8%B5%84%E6%BA%90"}},[t._v("获取资源步骤")]),t._v("，直接进入后续"),s("a",{attrs:{href:"#%E6%B8%B2%E6%9F%93"}},[t._v("渲染步骤")]),t._v("；如果在缓存中没有查找到资源，那么直接以下"),s("a",{attrs:{href:"#%E8%8E%B7%E5%8F%96%E8%B5%84%E6%BA%90"}},[t._v("获取资源步骤")]),t._v("。")]),t._v(" "),s("p",[t._v("（此处涉及到浏览器缓存，内容较多，此处不展开，见"),s("RouterLink",{attrs:{to:"/pages/network/http缓存.html"}},[t._v("http缓存")]),t._v("）")],1),t._v(" "),s("h2",{attrs:{id:"获取资源"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#获取资源"}},[t._v("#")]),t._v(" 获取资源")]),t._v(" "),s("p",[t._v("此时，浏览器要将http请求发给url对应的域名服务器，但是域名是给人理解的，机器并不理解，因此首先我们需要知道域名对应的能让机器看懂的地址：ip地址。")]),t._v(" "),s("h3",{attrs:{id:"dns解析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dns解析"}},[t._v("#")]),t._v(" DNS解析")]),t._v(" "),s("p",[t._v("查询IP地址的方法就是询问最近的DNS服务器。既然要向服务器发送请求，那我们的计算机上一定有相应的客户端，这就是DNS解析器。")]),t._v(" "),s("blockquote",[s("p",[t._v("DNS解析器实际上是一段程序，包含在操作系统的Socket库中，这里不详细说明。\nDNS解析器向DNS服务器发起查询请求，在收到响应数据IP地址后，会将IP地址写入浏览器指定的内存地址中，以便之后直接访问到。")])]),t._v(" "),s("h4",{attrs:{id:"查看缓存"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看缓存"}},[t._v("#")]),t._v(" 查看缓存")]),t._v(" "),s("ul",[s("li",[t._v("首先，DNS解析器查看浏览器缓存，有则直接使用缓存数据")]),t._v(" "),s("li",[t._v("若浏览器缓存中没有，就继续查看本机操作系统缓存\n在Windows中可以通过C:\\Windows\\System32\\drivers\\etc\\hosts文件来设置，在Linux中这个配置是 /etc/hosts。")])]),t._v(" "),s("h4",{attrs:{id:"向域名服务器查询"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#向域名服务器查询"}},[t._v("#")]),t._v(" 向域名服务器查询")]),t._v(" "),s("p",[t._v("如果没有缓存数据，则需要向DNS服务器发起查询请求。")]),t._v(" "),s("ul",[s("li",[t._v("1、向LDNS（本地域名服务器）查询")])]),t._v(" "),s("p",[t._v("LDNS查询自己的缓存，如果存在则返回给客户端；若不存在，则LDNS将充当客户端的角色，向根域名服务器发起一个DNS解析请求。")]),t._v(" "),s("blockquote",[s("p",[t._v("根域DNS服务器的IP地址仅有13个，而且几乎不发生变化。这些地址会被保存在所有DNS服务器中，保证任一DNS服务器都可以访问到根域服务器。")])]),t._v(" "),s("ul",[s("li",[t._v("2、LDNS向根域名服务器查询")])]),t._v(" "),s("p",[t._v("根域名服务器是最高级的域名服务器，存储着所有的顶级域名服务器的域名和IP地址。\n根域名服务器将url对应的顶级域名服务器(com)的地址返回给LDNS。")]),t._v(" "),s("ul",[s("li",[t._v("3、LDNS向顶级域名服务器查询")])]),t._v(" "),s("p",[t._v("LDNS向顶级域名服务器发起请求，顶级域名服务器将权威域名服务器(baidu.com)的地址返回给LDNS。")]),t._v(" "),s("ul",[s("li",[t._v("4、LDNS向权威域名服务器查询")])]),t._v(" "),s("p",[t._v("LDNS向权威域名服务发起请求，权威域名服务查询映射关系表，返回url对应的ip。")]),t._v(" "),s("ul",[s("li",[t._v("5、LDNS将结果返回给客户端")])]),t._v(" "),s("p",[t._v("LDNS接收到ip地址后，将ip地址返回给客户端，同时会缓存这个域名和IP的对应关系，以便下次使用。客户端接收到ip后，也会缓存到本地系统中，以便下次使用。")]),t._v(" "),s("h4",{attrs:{id:"整体流程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#整体流程"}},[t._v("#")]),t._v(" 整体流程")]),t._v(" "),s("p",[t._v("借用下"),s("a",{attrs:{href:"https://juejin.im/post/5b83b0bfe51d4538c63131a8#heading-11",target:"_blank",rel:"noopener noreferrer"}},[t._v("一文读懂一个URL请求的过程是怎样的"),s("OutboundLink")],1),t._v("d的图片\n"),s("img",{attrs:{src:"https://tva1.sinaimg.cn/large/00831rSTgy1gcr7fb0o0nj30lc0bracc.jpg",alt:""}}),t._v("\n先查看缓存，然后向本地域名服务器发起请求，然后由本地域名服务器代替客户端向远端的域名服务器发起迭代请求，最后将结果返回给客户端。")]),t._v(" "),s("h3",{attrs:{id:"tcp连接"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tcp连接"}},[t._v("#")]),t._v(" TCP连接")]),t._v(" "),s("p",[t._v("http是基于tcp协议的，而tcp是面向连接的，因此在发起http请求之前，要先建立TCP连接。\n以下只简要说明，详细过程可参考"),s("RouterLink",{attrs:{to:"/pages/network/TCP/TCP连接的建立和断开.html"}},[t._v("TCP连接的建立和断开")])],1),t._v(" "),s("h4",{attrs:{id:"三次握手建立连接"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三次握手建立连接"}},[t._v("#")]),t._v(" 三次握手建立连接")]),t._v(" "),s("ul",[s("li",[t._v("客户端：hello，你可以听到吗（SYN=1）？")]),t._v(" "),s("li",[t._v("服务端：我可以听到（ACK=1），你可以听到吗（SYN=1）?")]),t._v(" "),s("li",[t._v("客户端：我也可以听到（ACK=1）\n于是接下来开始愉快的通信了。也就是每一方发起时，对方都需要确认，这样2放一共就需要4次，而接收方的发起和确认可以同时，于是最少需要3次。")])]),t._v(" "),s("h4",{attrs:{id:"四次挥手断开连接"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#四次挥手断开连接"}},[t._v("#")]),t._v(" 四次挥手断开连接")]),t._v(" "),s("ul",[s("li",[t._v("客户端：hello，你要断开了，不再发送消息了（FIN=1）？")]),t._v(" "),s("li",[t._v("服务端：好的，我知道了，你断开吧（ACK=1）?")]),t._v(" "),s("li",[t._v("服务端：我也要断开了，不再发消息了（FIN=1）")]),t._v(" "),s("li",[t._v("客户端：好的，我知道了，你断开吧（ACK=1）\n因为一方断开后，另一方仍然可以发送消息，因此断开需要4次，也就是客户端发起->服务端确认，服务端发起->客户端确认。")])]),t._v(" "),s("h3",{attrs:{id:"发起http请求和接收http请求"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#发起http请求和接收http请求"}},[t._v("#")]),t._v(" 发起http请求和接收http请求")]),t._v(" "),s("p",[t._v("tcp连接后，就可以开始发起http请求了。")]),t._v(" "),s("h4",{attrs:{id:"报文"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#报文"}},[t._v("#")]),t._v(" 报文")]),t._v(" "),s("p",[t._v("HTTP的请求报文与响应报文结构一样，都是分为报文首部和报文主体部分，请求报文中的主体部分主要发送给服务端的数据，而响应报文中的主体则是客户端需要的响应数据。\n"),s("img",{attrs:{src:"https://tva1.sinaimg.cn/large/00831rSTgy1gcr8ugi5f4j30xg0eowl6.jpg",alt:""}}),t._v("\n报文首部包含：")]),t._v(" "),s("ul",[s("li",[t._v("请求行（仅请求报文）: 包含用于请求的方法，请求URI和HTTP版本")]),t._v(" "),s("li",[t._v("状态行（仅响应报文）: 包含表明响应结果的状态码，原因短语和HTTP版本")]),t._v(" "),s("li",[t._v("首部字段: 包含表示请求和响应的各种条件和属性的各类首部。\n"),s("img",{attrs:{src:"https://tva1.sinaimg.cn/large/00831rSTgy1gcr8wllf1vj30hb0fb40v.jpg",alt:""}})])]),t._v(" "),s("p",[s("strong",[t._v("【常见的状态码】")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("1XX处理中\n1XX的状态码实际很少用到，偶尔会见到101的状态码\n101 Switching Protocols：表示客户端使用 Upgrade 头字段，要求在 HTTP 协议的基础上改成其他的协议继续通信，比如 WebSocket。而如果服务器也同意变更协议，就会发送状态码 101，但这之后的数据传输就不会再使用 HTTP 了。")])]),t._v(" "),s("li",[s("p",[t._v("2XX成功：")])])]),t._v(" "),s("p",[t._v("200 OK：客户端请求被服务器正常处理"),s("br"),t._v("\n204 No Content：请求处理成功，但没有资源可返回")]),t._v(" "),s("ul",[s("li",[t._v("3XX重定向")])]),t._v(" "),s("p",[t._v("301 Moved Permanently：永久重定向，此次请求的资源已经不存在了，需要改用新的 URI 再次访问"),s("br"),t._v("\n302 Found： 临时重定向，请求的资源还在，但需要暂时用另一个 URI 来访问。"),s("br"),t._v("\n304Not Modified：客户端发送附带条件的请求时，服务器允许请求访问资源，但因发生请求后未满足条件的情况下，直接返回304,返回时不包含任何响应的主体部分。")]),t._v(" "),s("p",[t._v("【注意区分301与302】\n"),s("strong",[t._v("相同点")]),t._v("：301 和 302 都会在响应头里使用字段 Location 指明后续要跳转的 URL，浏览器都会重定向到新的 URL"),s("br"),t._v(" "),s("strong",[t._v("不同点")]),t._v("：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("301永久重定向，比如你的网站升级到了 HTTPS，原来的 HTTP 不打算用了，这就是“永久”的，所以要配置 301 跳转，把所有的 HTTP 流量都切换到 HTTPS；")])]),t._v(" "),s("li",[s("p",[t._v("302临时重定向，比如今天夜里网站后台要系统维护，服务暂时不可用，这就属于“临时”的，可以配置成 302 跳转，把流量临时切换到一个静态通知页面，浏览器看到这个 302 就知道这只是暂时的情况，不会做缓存优化，第二天还会访问原来的地址。")])]),t._v(" "),s("li",[s("p",[t._v("4XX客户端错误")])])]),t._v(" "),s("p",[t._v("400 Bad Request： 请求报文存在语法错误。"),s("br"),t._v("\n403 Forbidden： 服务器拒绝对请求资源的访问"),s("br"),t._v("\n404 Not Found： 服务器上无该资源。网页不存在。"),s("br")]),t._v(" "),s("ul",[s("li",[t._v("5XX 服务器错误")])]),t._v(" "),s("p",[t._v("500 Internal Server Error：服务器内部出现错误"),s("br"),t._v("\n503 Service Unavailable：服务器当前很忙，暂时无法响应服务。此状态一般为临时状态，可能一会不忙了，就可以继续提供服务；此状态通常还会有一个“Retry-After”字段，指示客户端可以在多久以后再次尝试发送请求。")]),t._v(" "),s("p",[t._v("浏览器按请求报文格式组装好报文后，便像url对应的服务器发起请求。")]),t._v(" "),s("h4",{attrs:{id:"发起请求-返回结果"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#发起请求-返回结果"}},[t._v("#")]),t._v(" 发起请求 & 返回结果")]),t._v(" "),s("p",[t._v("数据经过应用层->传输层->网络层->数据链路层->物理层，最终将请求发出；然后又经过物理层->数据链路层->网络层->传输层->应用层传到服务器，服务器端接收到请求，开始处理请求。")]),t._v(" "),s("p",[t._v("服务端根据请求报文处理请求，并将结果返回给客户端，根据资源的不同状况返回对应的状态码。这里也存在缓存机制，具体见"),s("RouterLink",{attrs:{to:"/pages/network/http缓存.html"}},[t._v("http缓存")]),t._v("）。")],1),t._v(" "),s("h4",{attrs:{id:"对html类型的处理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#对html类型的处理"}},[t._v("#")]),t._v(" 对HTML类型的处理")]),t._v(" "),s("p",[t._v("客户端的网络进程接收到响应头之后，会根据响应头中的 content-type 字段来判断文件的类型。若资源为zip或其他类型，会启动下载；若资源为html类型content-type 的值是“text/html”），则浏览器进程将网络进程接收到的 HTML 数据提交给渲染进程。具体过程如下：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("浏览器进程接收到网络进程传来的头信息，便想渲染进程发起”提交数据“的消息")])]),t._v(" "),s("li",[s("p",[t._v("渲染进程接到消息后，会与网路进程建立传输数据的”管道“")])]),t._v(" "),s("li",[s("p",[t._v("渲染进程接收数据完成后(接收过程中会进行渲染，下一节讲到），会返回”完成“的消息给浏览器进程")])]),t._v(" "),s("li",[s("p",[t._v("浏览器收到消息后，会"),s("strong",[t._v("更新浏览器界面状态，包括了安全状态、地址栏的 URL、前进后退的历史状态，并更新 Web 页面（在此之前页面都还是展示的旧页面）")])])])]),t._v(" "),s("h2",{attrs:{id:"渲染"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#渲染"}},[t._v("#")]),t._v(" 渲染")]),t._v(" "),s("blockquote",[s("p",[t._v("浏览器进程接收到网络进程的响应头数据之后，浏览器进程将网络进程接收到的 HTML 数据提交给渲染进程，由渲染进程负责渲染页面")])]),t._v(" "),s("h3",{attrs:{id:"整体流程-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#整体流程-2"}},[t._v("#")]),t._v(" 整体流程")]),t._v(" "),s("ul",[s("li",[t._v("1、解析HTML，构建DOM树")]),t._v(" "),s("li",[t._v("2、解析CSS，生成CSS规则树")]),t._v(" "),s("li",[t._v("3.1、合并DOM树和CSS规则，生成render树")]),t._v(" "),s("li",[t._v("3.2、布局render树（Layout/reflow），负责各元素尺寸、位置的计算")]),t._v(" "),s("li",[t._v("4、绘制render树（paint），绘制页面像素信息")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://tva1.sinaimg.cn/large/00831rSTgy1gcrcf9nsy9j30p009sjrz.jpg",alt:""}})]),t._v(" "),s("h3",{attrs:{id:"_1、构建dom树"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、构建dom树"}},[t._v("#")]),t._v(" 1、构建DOM树")]),t._v(" "),s("p",[t._v("因为浏览器无法直接理解和使用html，所以需要将html转换为浏览器能够理解的结构——DOM树。")]),t._v(" "),s("p",[t._v("在渲染引擎内部，有一个叫 HTML 解析器（HTMLParser）的模块，它的职责就是负责将 HTML 字节流转换为 DOM 结构。")]),t._v(" "),s("blockquote",[s("p",[t._v("Q:关于html 解析器是等整个 html 文档加载完成之后开始解析的，还是随着 html 文档边加载边解析的？")]),t._v(" "),s("p",[t._v("A:一边接收一边解析。网络进程和渲染进程就像有个管道，网络进程一边往里面放，渲染进程一边读，并将其解析为DOM。")])]),t._v(" "),s("p",[t._v("过程如下")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("Bytes → characters → tokens → nodes → DOM\n")])])]),s("p",[s("img",{attrs:{src:"https://tva1.sinaimg.cn/large/00831rSTgy1gcrch1s5r3j30p00dutav.jpg",alt:""}})]),t._v(" "),s("ul",[s("li",[t._v("1、解码：浏览器将接收的字节流（Bytes）基于编码方式解析为字符（characters）")]),t._v(" "),s("li",[t._v("2、分词：通过分词器（也就是词法分析）将字符转换为 Token，分为Tag Token 和文本Token")]),t._v(" "),s("li",[t._v("3、tokens->nodes")]),t._v(" "),s("li",[t._v("4、nodes->DOM")])]),t._v(" "),s("p",[t._v("第3步和第4步其实是同时进行的，需要将 Token 解析为 DOM 节点，并将 DOM 节点添加到 DOM 树中。")]),t._v(" "),s("p",[t._v("HTML 解析器维护了一个"),s("strong",[t._v("Token栈结构")]),t._v("，该 Token 栈主要用来计算节点之间的父子关系，在第一个阶段中生成的 Token 会被按照顺序压到这个栈中。具体的处理规则如下所示：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("如果压入到栈中的是"),s("strong",[t._v("StartTag Token")]),t._v("，HTML 解析器会为该 Token 创建一个 DOM 节点，然后将该节点加入到 DOM 树中，它的父节点就是栈中相邻的那个元素生成的节点。")])]),t._v(" "),s("li",[s("p",[t._v("如果分词器解析出来是"),s("strong",[t._v("文本 Token")]),t._v("，那么会生成一个文本节点，然后将该节点加入到 DOM 树中，文本 Token 是不需要压入到栈中，它的父节点就是当前栈顶 Token 所对应的 DOM 节点。")])]),t._v(" "),s("li",[s("p",[t._v("如果分词器解析出来的是"),s("strong",[t._v("EndTag 标签")]),t._v("，比如是 EndTag div，HTML 解析器会查看 Token 栈顶的元素是否是 StarTag div，如果是，就将 StartTag  div 从栈中弹出，表示该 div 元素解析完成。\n通过分词器产生的新 Token 就这样不停地压栈和出栈，整个解析过程就这样一直持续下去，直到分词器将所有字节流分词完成。")])])]),t._v(" "),s("h4",{attrs:{id:"javascript如何影响dom的构建"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#javascript如何影响dom的构建"}},[t._v("#")]),t._v(" JavaScript如何影响DOM的构建")]),t._v(" "),s("p",[t._v("在DOM树构建的中途，如果遇到script标签，解析器会停止解析 HTML（因为接下来的JavaScript 可能要修改当前已经生成的 DOM 结构），而去加载、解析和执行 JS 代码。")]),t._v(" "),s("ul",[s("li",[s("p",[s("strong",[t._v("如果是内嵌JavaScript")])]),t._v(" "),s("p",[t._v("直接执行脚本，执行完后HTML继续解析")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("如果是引入 JavaScript 文件")])]),t._v(" "),s("p",[t._v("需要先下载JavaScript，下载过程也会阻塞DOM的渲染。下载速度受网络环境等诸多因素影响，通常比较慢。可以采取一些方案优化：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("Chrome 浏览器针对这一点会进行预解析操作，也就是当渲染引擎收到字节流之后，会开启一个预解析线程，用来分析 HTML 文件中包含的 JavaScript、CSS 等相关文件，解析到相关文件之后，预解析线程会提前下载这些文件。")])]),t._v(" "),s("li",[s("p",[t._v("也可以使用 CDN 来加速 JavaScript 文件的加载，压缩 JavaScript 文件的体积")])]),t._v(" "),s("li",[s("p",[t._v("如果 JavaScript 文件中没有操作 DOM 相关代码，也可以将该 JavaScript 脚本设置为异步加载，通过 async 或 defer 来标记代码\n（async一旦加载完成，会立即执行；而defer需要在 DOMContentLoaded 事件之前执行）")])])])])]),t._v(" "),s("h3",{attrs:{id:"_2、构建css规则树"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2、构建css规则树"}},[t._v("#")]),t._v(" 2、构建CSS规则树")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("Bytes → characters → tokens → nodes → CSSOM\n")])])]),s("p",[t._v("并根据继承、优先级层叠等规则生成如下CSS树：\n"),s("img",{attrs:{src:"https://tva1.sinaimg.cn/large/00831rSTgy1gcrci2zxr6j30g608b0tj.jpg",alt:""}})]),t._v(" "),s("h4",{attrs:{id:"css如何影响dom的构建"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#css如何影响dom的构建"}},[t._v("#")]),t._v(" CSS如何影响DOM的构建")]),t._v(" "),s("p",[t._v("通常我们认为CSS不会影响DOM的构建，因为它并不会操作或改变DOM，但是"),s("strong",[t._v("CSS可以通过JavaScript来阻塞DOM的构建")]),t._v("。")]),t._v(" "),s("p",[t._v("因为JavaScript是可以改变样式的，也就是具有修改CSSOM的能力，而JavaScript脚本里是否有改变样式的操作，这一点在执行JavaScript之前是不可知的。因此，为保证JavaScript脚本的正确执行，在执行JavaScript之前，CSSOM必须要先准备好（不然万一有修改CSSOM的操作呢）。")]),t._v(" "),s("p",[t._v("也就是说，若在构建DOM的中途存在阻塞DOM构建的JavaScript脚本，而此页面中还包含了外部 CSS 文件的引用，或者通过 style 标签内置了 CSS 内容，那么此时就需要等目前的CSSOM（基于目前生成完的部分DOM树）构建完毕后，再开始JavaScript脚本的执行，等一切结束了，再继续DOM的构建。")]),t._v(" "),s("p",[t._v("整个流程如图：\n"),s("img",{attrs:{src:"https://tva1.sinaimg.cn/large/00831rSTgy1gcs95n94fkj30vq0djac9.jpg",alt:""}})]),t._v(" "),s("blockquote",[s("p",[t._v("这个阶段最终输出的内容是每个DOM节点的样式，并被保存在 ComputedStyle 的结构内，通过浏览器的element->Computed可以查看")])]),t._v(" "),s("h3",{attrs:{id:"_3、布局"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3、布局"}},[t._v("#")]),t._v(" 3、布局")]),t._v(" "),s("p",[t._v("我们已经有了DOM树和CSS树，但这不足以显示页面，因为还不知道元素的具体几何位置信息。因此此过程就是"),s("strong",[t._v("计算DOM元素的几何位置")]),t._v("。")]),t._v(" "),s("h4",{attrs:{id:"_3-1、构建render树"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1、构建render树"}},[t._v("#")]),t._v(" 3.1、构建render树")]),t._v(" "),s("p",[t._v("dom树中包含了很多页面渲染不需要的元素，比如head、dispaly:none的元素，因此显示之前需要再生成一棵只包含可见元素的render树")]),t._v(" "),s("ul",[s("li",[t._v("遍历 DOM 树中的所有可见节点，并把这些节点加到布局树中；")]),t._v(" "),s("li",[t._v("会忽略掉不可见元素")])]),t._v(" "),s("h4",{attrs:{id:"_3-2、布局render树"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-2、布局render树"}},[t._v("#")]),t._v(" 3.2、布局render树")]),t._v(" "),s("p",[t._v("根据render树计算dom元素的具体几何位置（主要定位坐标和大小，是否换行，各种position overflow z-index属性。），计算完后，会将内容写入render树，也就是输出的是一个更详细带有位置新的render树。\n"),s("img",{attrs:{src:"https://tva1.sinaimg.cn/large/00831rSTgy1gcrckkqt5uj30p00bognc.jpg",alt:""}})]),t._v(" "),s("h3",{attrs:{id:"_4、绘制render树"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4、绘制render树"}},[t._v("#")]),t._v(" 4、绘制render树")]),t._v(" "),s("p",[t._v("虽然现在我们已经有了详细的render树，但是还没到着手绘制页面的时候。")]),t._v(" "),s("h4",{attrs:{id:"分层"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#分层"}},[t._v("#")]),t._v(" 分层")]),t._v(" "),s("p",[t._v("由于页面有很多复杂的效果，如一些复杂的 3D 变换、页面滚动，或者使用 z-indexing 做 z 轴排序等，因此渲染引擎还需要为特定的节点生成专用的图层，并生成一棵对应的图层树")]),t._v(" "),s("p",[t._v("要理解什么是图层，可以打开浏览器“开发者工具”的“Layers”标签，看看\n"),s("img",{attrs:{src:"https://tva1.sinaimg.cn/large/00831rSTgy1gdfely12onj30vq0tvdjx.jpg",alt:""}}),t._v("\n可以看到一个页面被分成了很多层，最终我们看到的画面是所有图层叠加在一起的结果。刚刚上面的图层叠加最终展示的页面如下图\n"),s("img",{attrs:{src:"https://tva1.sinaimg.cn/large/00831rSTgy1gdfenimz2nj30vq0o4dio.jpg",alt:""}})]),t._v(" "),s("p",[s("strong",[t._v("并不是布局树的每个节点都会单独分一层，只有特定类型的节点才会单独分层，如果没有单独分层的节点，就从属于其父节点的图层")]),t._v("。\n"),s("img",{attrs:{src:"https://tva1.sinaimg.cn/large/00831rSTgy1gcrcltzy7zj30vq0iqq4u.jpg",alt:""}})]),t._v(" "),s("p",[t._v("那哪些特定的元素会生成单独的图层呢？")]),t._v(" "),s("p",[s("strong",[t._v("1、拥有层叠上下文属性的元素")])]),t._v(" "),s("p",[t._v("如果用坐标系的角度来看一个页面，看我们看到的是一个x轴和y轴构成的页面，但实际上还有z轴，拥有层叠上下文的元素，在z轴上的位置是不同的\n"),s("img",{attrs:{src:"https://tva1.sinaimg.cn/large/00831rSTgy1gdfewv3uaoj30vq0gp0tj.jpg",alt:""}})]),t._v(" "),s("p",[t._v("元素的透明度、明确定位属性的元素、CSS3的转换等这些都是拥有层叠上下文的，详细可参见"),s("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Understanding_z_index/The_stacking_context",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN-层叠上下文"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("strong",[t._v("2、需要裁减的地方")])]),t._v(" "),s("p",[t._v("什么是裁减？")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("style")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token style"}},[s("span",{pre:!0,attrs:{class:"token language-css"}},[t._v("\n      "),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 200"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 200"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("overflow")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("auto"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" gray"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("style")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("所以元素有了层叠上下文的属性或者需要被剪裁，那么就会被提升成为单独一层，你可以参看下图："),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("从上图我们可以看到，document层上有A和B层，而B层之上又有两个图层。这些图层组织在一起也是一颗树状结构。"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("图层树是基于布局树来创建的，为了找出哪些元素需要在哪些层中，渲染引擎会遍历布局树来创建层树（Update LayerTree）。"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" \n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("打开“Layers”可以看到，文字部分超出了div的范围，是单独一个图层，而展示在div范围内的内容就是通过裁减后的。\n"),s("img",{attrs:{src:"https://tva1.sinaimg.cn/large/00831rSTgy1gdff8902t7j326n0u0dnj.jpg",alt:""}}),t._v("\n如果我们注释掉"),s("code",[t._v("overflow:auto")]),t._v("，则页面不存在裁减了，则会发现页面只有一层了\n"),s("img",{attrs:{src:"https://tva1.sinaimg.cn/large/00831rSTgy1gdff75644ij31w60nmgrp.jpg",alt:""}})]),t._v(" "),s("h4",{attrs:{id:"图层绘制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#图层绘制"}},[t._v("#")]),t._v(" 图层绘制")]),t._v(" "),s("p",[t._v("分好层后，就需要对每个图层进行绘制了。绘制并不是一蹴而就，而是要一步步来，就和画画一样，先画蓝天作为背景，再画一个草地，再在草地上画一些小花....")]),t._v(" "),s("p",[t._v("渲染引擎也是类似，在绘制一个图层时，将一个图层的绘制拆分成很多小的绘制指令。\n"),s("img",{attrs:{src:"https://tva1.sinaimg.cn/large/00831rSTgy1gcrcm5stv2j30vq0grgnd.jpg",alt:""}})]),t._v(" "),s("p",[t._v("还是刚刚的页面，，打开“开发者工具”的“Layers”标签，选择“document”层\n"),s("img",{attrs:{src:"https://tva1.sinaimg.cn/large/00831rSTgy1gdffftoshaj319o0u0aib.jpg",alt:""}}),t._v("\n左侧可以看到绘制指令，可以拖动右侧的进度条查看具体过程。\n"),s("img",{attrs:{src:"https://tva1.sinaimg.cn/large/00831rSTgy1gdffh0dzzlj31fw0u07ds.jpg",alt:""}})]),t._v(" "),s("p",[s("strong",[t._v("以上的绘制过程只是为每个图层形成了一系列的绘制指令，并没有真正的绘制出页面")]),t._v("，接下来就要开始真正的绘制页面了。而真正的绘制过程，是由渲染引擎中的合成线程来完成的。也就是当图层的绘制列表准备好之后，主线程会把该绘制列表提交（commit）给合成线程。\n"),s("img",{attrs:{src:"https://tva1.sinaimg.cn/large/00831rSTgy1gdffohc933j30vq0cwgnd.jpg",alt:""}})]),t._v(" "),s("h4",{attrs:{id:"分块"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#分块"}},[t._v("#")]),t._v(" 分块")]),t._v(" "),s("p",[t._v("完成了上面的步骤，此时渲染引擎的主线程已经将绘制指令提交给了合成线程，合成线程开始绘制页面。")]),t._v(" "),s("p",[t._v("有的页面很长，而用户一次性只能看到展示出来的一部分（也就是浏览器窗口的大小，我们称为“视口”），在这种情况下如果要将页面的所有图层的所有内容全部绘制出来，就会产生太大的开销，而且也没有必要。")]),t._v(" "),s("p",[t._v("基于这个原因，"),s("strong",[t._v("合成线程会将图层分为图块")]),t._v("，这些图块的大小通常是 256x256 或者 512x512。\n"),s("img",{attrs:{src:"https://tva1.sinaimg.cn/large/00831rSTgy1gdffygciamj30vq0rndjd.jpg",alt:""}})]),t._v(" "),s("p",[t._v("合成线程会优先绘制视口附近的图块，这一过程是由栅格化来实现的。")]),t._v(" "),s("h4",{attrs:{id:"栅格化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#栅格化"}},[t._v("#")]),t._v(" 栅格化")]),t._v(" "),s("p",[t._v("所谓栅格化，就是指"),s("strong",[t._v("将图块转换为位图")]),t._v("。图块是栅格化执行的最小单位。渲染进程维护了一个栅格化的线程池，所有的图块栅格化都是在线程池内执行的。\n"),s("img",{attrs:{src:"https://tva1.sinaimg.cn/large/00831rSTgy1gdfg3odz2jj30vq0it0v5.jpg",alt:""}})]),t._v(" "),s("p",[t._v("通常，栅格化过程都是由GPU来加速生成的，生成的位图被保存在 GPU 内存中。而GPU操作时运行在GPU进程中，\n因此如果栅格化使用了GPU，则会涉及到跨进程通信。\n"),s("img",{attrs:{src:"https://tva1.sinaimg.cn/large/00831rSTgy1gdfg60km8wj30vq0ntgop.jpg",alt:""}})]),t._v(" "),s("h4",{attrs:{id:"合成"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#合成"}},[t._v("#")]),t._v(" 合成")]),t._v(" "),s("p",[t._v("经过栅格化，此时绘制指令已经变成了一张张图片（一个图层对应一张图片），此时合成线程就会将这些图片合成为“一张”图片，并生成一个绘制图块的命令——“DrawQuad”，然后将该命令提交给浏览器进程，浏览器进程收到此命令，将其页面内容绘制到内存中。")]),t._v(" "),s("h4",{attrs:{id:"显示"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#显示"}},[t._v("#")]),t._v(" 显示")]),t._v(" "),s("p",[t._v("图层合成完毕后生成了最终的页面，此时浏览器会把页面数据发送给显卡，由显卡来显示页面。我们先来看看"),s("strong",[t._v("显卡的工作机制")]),t._v("。")]),t._v(" "),s("p",[t._v("显卡有前缓冲区和后缓冲区，每次接收到页面数据后，显卡会将其合成为新的图像，并保存进后缓冲区；一旦显卡将数据写入后缓冲区，系统就会调换前缓冲区和后缓冲区。显示器就是从显卡的前缓冲区读取最新合成的图像，并显示出来")]),t._v(" "),s("p",[t._v("大多数显示器的更新频率一般是60次/秒，也就意味着要想实现流畅的动画效果，显示器一秒钟得从显卡前缓冲区读取60张图片，那么显卡就得一秒钟存放60张图片进入后缓冲区。")]),t._v(" "),s("p",[t._v("我们把渲染流水线生成的每一张图片称为一帧，把渲染流水线每秒更新了多少帧称为帧率，比如滚动过程中 1 秒更新了 60 帧，那么帧率就是 60Hz（或者 60FPS）。如果页面太复杂，渲染引擎生成某些帧的时间过久，显卡一秒钟就收不到足够的帧数，那么显示器还是以不变的频率更新，但却读不到足够的图片，这时用户就会感觉到卡顿。")]),t._v(" "),s("h3",{attrs:{id:"小结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[t._v("#")]),t._v(" 小结")]),t._v(" "),s("p",[t._v("至此，整个渲染过程就结束了，用一张图来概括一下。\n"),s("img",{attrs:{src:"https://tva1.sinaimg.cn/large/00831rSTgy1gdfjb4vxzxj313s0pkdis.jpg",alt:""}})]),t._v(" "),s("h2",{attrs:{id:"结束"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#结束"}},[t._v("#")]),t._v(" 结束")]),t._v(" "),s("p",[t._v("渲染结束，渲染进程会通过IPC告知浏览器进程，停止展示tab的spinner")]),t._v(" "),s("h2",{attrs:{id:"页面的变化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#页面的变化"}},[t._v("#")]),t._v(" 页面的变化")]),t._v(" "),s("p",[t._v("上面讲到的都是页面的背后发生了什么，那在这个过程中，我们所看到的页面是怎样变化的呢？主要有以下几个阶段：")]),t._v(" "),s("ul",[s("li",[t._v("第一个阶段: 旧页面。从输入url，到网络进程获取完数据，并向浏览进程发送”提交数据“的消息（也就是本文的获取资源阶段结束），页面都会保持为原页面。")])]),t._v(" "),s("blockquote",[s("p",[t._v("第一阶段结束后，浏览器进程会"),s("strong",[t._v("更新浏览器界面状态，包括了安全状态、地址栏的 URL、前进后退的历史状态，并更新 Web 页面（在此之前页面都还是展示的旧页面）")])])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("第二个阶段: 白屏。提交数据之后渲染进程会创建一个空白页面，并等待 CSS 文件和 JavaScript 文件的加载完成，生成 CSSOM 和 DOM，然后合成布局树。")])]),t._v(" "),s("li",[s("p",[t._v("第三个阶段: 首帧渲染。布局树构建完成后，开始绘制，直到完成首帧渲染")])])]),t._v(" "),s("blockquote",[s("p",[t._v("第三阶段结束后，浏览器进程会停止展示tab的spinner（spinner在开始导航时，被改变为了记载中的loading状态）")])]),t._v(" "),s("ul",[s("li",[t._v("第四个阶段: 完整页面渲染。等首次渲染完成之后，就开始进入完整页面的生成阶段了，然后页面会一点点被绘制出来。")])]),t._v(" "),s("h2",{attrs:{id:"参考"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://www.infoq.cn/article/CS9-WZQlNR5h05HHDo1b",target:"_blank",rel:"noopener noreferrer"}},[t._v("史上最全！图解浏览器的工作原理"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://juejin.im/post/5b83b0bfe51d4538c63131a8#heading-21",target:"_blank",rel:"noopener noreferrer"}},[t._v("一文读懂一个URL请求的过程是怎样的"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"!https://juejin.im/post/5aa5cb846fb9a028e25d2fb1#comment"}},[t._v("从输入URL到页面加载的过程？如何由一道题完善自己的前端知识体系！")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://segmentfault.com/a/1190000012925872#articleHeader16",target:"_blank",rel:"noopener noreferrer"}},[t._v("从浏览器多进程到JS单线程，JS运行机制最全面的一次梳理"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://time.geekbang.org/column/article/117637",target:"_blank",rel:"noopener noreferrer"}},[t._v("极客时间课程《浏览器工作原理与实践》"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=v.exports}}]);