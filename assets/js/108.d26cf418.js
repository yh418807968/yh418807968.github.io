(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{317:function(a,s,e){"use strict";e.r(s);var t=e(28),r=Object(t.a)({},(function(){var a=this,s=a.$createElement,e=a._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h2",{attrs:{id:"base64的来源"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#base64的来源"}},[a._v("#")]),a._v(" Base64的来源")]),a._v(" "),e("p",[a._v("Base64的主要用途是将不可打印字符转换成可打印字符，为什么需要这样转换呢？")]),a._v(" "),e("p",[a._v("因为有些网络传输渠道并不能支持传输所有字节，一些不可见字符（如控制字符）在传统的邮件系统中就无法传输，而例如图片文件不可能每个字节都是可见字符，这样就导致这些场景的用途受到很大限制。Base64正是解决这一问题，通过64个可见字符来编码各种字符，使得数据在各渠道上得以正常传输。")]),a._v(" "),e("h2",{attrs:{id:"base64的原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#base64的原理"}},[a._v("#")]),a._v(" Base64的原理")]),a._v(" "),e("p",[a._v("首先，我们看一下Base64的索引表。")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://tva1.sinaimg.cn/large/00831rSTgy1gd0ju73qf2j30980cw75l.jpg",alt:""}})]),a._v(" "),e("p",[a._v('可以看到一共有64个字符，包括"A-Z,a-z,0-9,+,/"。在编码过程中，将原字符经过一些变化得到一个小于64的数值，然后将该数值按上图的索引表对应到相应的新字符，新字符就是原字符的Base64编码。\n下面以一个例子来看一下具体过程。')]),a._v(" "),e("p",[e("img",{attrs:{src:"https://tva1.sinaimg.cn/large/00831rSTgy1gd0jvi53zej30b503xt94.jpg",alt:""}})]),a._v(" "),e("p",[a._v("文本“Man”采用ASCII码编码，在计算机中以二进制位的形式保存，每个字符文本为8位，而Base64的一个字符只有6位，6位如何表示8位呢？ 那么就是每3个字符可以通过4个Base64字符来表示，例子中的“Man”就表示为“TWFu”。")]),a._v(" "),e("blockquote",[e("p",[a._v("汉字如何转换为Base64编码？")]),a._v(" "),e("p",[a._v("汉字有多种编码，比如utf-8，gbk等，不同的编码方式对应的Base64不一样。比如'严'的utf-8编码为E4B8A5，写成二进制就是三字节的\"11100100 10111000 10100101\"，将此二进制按以上方式转换得到的Base64编码为5Lil。")])]),a._v(" "),e("p",[a._v("每3个字符进行编码，就有可能出现不够3个字符的情况，怎么办？不足3个字符时，在末尾补0凑足6的倍数。另外，Base64的最小单位是4个字符（24位）一组，因此在补0后仍然不足24位的时候，每6位补一个“=”。具体见以下例子。")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://tva1.sinaimg.cn/large/00831rSTgy1gd0k0qlbxij30c8063my3.jpg",alt:""}})]),a._v(" "),e("p",[a._v("因此，Base64只可能在末尾出现一个或者两个“=”，中间不可能出现“=”，这一点也可以用来区分多段Base64编码。")]),a._v(" "),e("h2",{attrs:{id:"为什么不是base32-base16"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#为什么不是base32-base16"}},[a._v("#")]),a._v(" 为什么不是Base32/Base16")]),a._v(" "),e("p",[a._v("Base64编码对应传统字符的字符比是4:3，如果是Base32则字符比是8:5，如果是Base16则字符比是2:1，显然Base64的比例最高，可以以更少的字符转换同样的文本；而如果Base128或者更高，则需要更大编码字符集；所以Base64是在字符集大小与长度比之间取得一个较好的平衡。")]),a._v(" "),e("h2",{attrs:{id:"采用base64对图片编码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#采用base64对图片编码"}},[a._v("#")]),a._v(" 采用Base64对图片编码")]),a._v(" "),e("p",[a._v("对图片采用Base64编码：")]),a._v(" "),e("ul",[e("li",[a._v("不需要额外的请求（Base64编码本质上是一种将二进制数据转成文本数据的方案，因此转换后图片是以文本字符串的形式内嵌在html中）")]),a._v(" "),e("li",[a._v("适用于较小且颜色简单的图片（由于Base64会导致字节数增加，因此不要用于大的图片）")])]),a._v(" "),e("h2",{attrs:{id:"参考"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[a._v("#")]),a._v(" 参考")]),a._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://www.cnblogs.com/luguo3000/p/3940197.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("从原理上搞定编码（四）-- Base64编码"),e("OutboundLink")],1)]),a._v(" "),e("li",[e("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2008/06/base64.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("Base64笔记"),e("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=r.exports}}]);