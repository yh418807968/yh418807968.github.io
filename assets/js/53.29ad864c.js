(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{273:function(t,n,e){"use strict";e.r(n);var a=e(28),s=Object(a.a)({},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[e("a",{attrs:{href:"https://leetcode-cn.com/problems/delete-node-in-a-linked-list/",target:"_blank",rel:"noopener noreferrer"}},[t._v("237-删除链表中的节点"),e("OutboundLink")],1)]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("deleteNode")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("node")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    node"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" node"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val\n    node"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" node"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h3",{attrs:{id:"思路分析"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#思路分析"}},[t._v("#")]),t._v(" 思路分析")]),t._v(" "),e("p",[t._v("注意此题，只给了node参数，并没有指明要删除节点的链表head。\n比如对于1->2->3，要删除2，此时只给了2，拿不到上一个元素1，要怎么办？")]),t._v(" "),e("ul",[e("li",[t._v("先把下一个节点的值给当前节点"),e("code",[t._v("node.val = node.next.val")]),t._v("，然后删除下一个节点"),e("code",[t._v("node.next = node.next.next")]),t._v("，相当于删了当前节点！")])])])}),[],!1,null,null,null);n.default=s.exports}}]);