(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{274:function(t,s,a){"use strict";a.r(s);var e=a(28),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[a("a",{attrs:{href:"https://leetcode-cn.com/problems/middle-of-the-linked-list/",target:"_blank",rel:"noopener noreferrer"}},[t._v("876-链表的中间节点"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码"}},[t._v("#")]),t._v(" 代码")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" slow "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" head\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" fast "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" head\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fast "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" fast"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    fast "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" fast"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next\n    slow "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" slow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" slow\n")])])]),a("h3",{attrs:{id:"思路分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#思路分析"}},[t._v("#")]),t._v(" 思路分析")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("与链表的中间节点有关，首先想到快慢指针")])]),t._v(" "),a("li",[a("p",[t._v("对于偶数和奇数长度的链表，可以分别拿一个例子试下，会发现奇数长度的链表，比如[1,2,3,4,5]，结束条件是"),a("code",[t._v("fast.next === null")]),t._v("，偶数长度的链表，比如[1,2,3,4]，结束条件是"),a("code",[t._v("fast === null")])])])]),t._v(" "),a("h3",{attrs:{id:"复杂度分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#复杂度分析"}},[t._v("#")]),t._v(" 复杂度分析")]),t._v(" "),a("h4",{attrs:{id:"时间复杂度"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#时间复杂度"}},[t._v("#")]),t._v(" 时间复杂度")]),t._v(" "),a("p",[t._v("循环次数为n/2，复杂度为O(n)")]),t._v(" "),a("h4",{attrs:{id:"空间复杂度"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#空间复杂度"}},[t._v("#")]),t._v(" 空间复杂度")]),t._v(" "),a("p",[t._v("只用到了slow和fast两个指针，空间复杂度为O(1)")])])}),[],!1,null,null,null);s.default=r.exports}}]);