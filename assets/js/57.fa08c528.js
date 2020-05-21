(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{279:function(v,a,t){"use strict";t.r(a);var _=t(28),r=Object(_.a)({},(function(){var v=this,a=v.$createElement,t=v._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h2",{attrs:{id:"什么是v8"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是v8"}},[v._v("#")]),v._v(" 什么是V8?")]),v._v(" "),t("p",[v._v("V8是一个由Google开发的开源JavaScript引擎，目前用在Chrome浏览器和Node.js中，核心功能是执行易于人类理解的代码。")]),v._v(" "),t("p",[v._v("V8其实可以看做一个虚拟机，即通过模拟实际计算机的各种功能来实现代码的执行，如模拟CPU、堆栈、寄存器等。对于JavaScript来说，V8就是它的整个世界，因此执行JavaScript时不需要关心现实中操作系统的差异，只需要按虚拟机的指令来写代码就可以了。")]),v._v(" "),t("p",[v._v("V8执行代码的过程分为2步：")]),v._v(" "),t("ul",[t("li",[v._v("编译：将代码转换为低级中间代码或者机器码（机器能理解的代码）")]),v._v(" "),t("li",[v._v("执行：执行编译后的代码，输出结果。")])]),v._v(" "),t("p",[v._v("那为什么V8不直接执行我们写的代码，而要先编译呢？")]),v._v(" "),t("h2",{attrs:{id:"高级代码为什么需要先编译？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#高级代码为什么需要先编译？"}},[v._v("#")]),v._v(" 高级代码为什么需要先编译？")]),v._v(" "),t("p",[v._v("代码是人类编写的，但是需要机器来执行的，这就像一本中文书，要给外国人读，如何让他能读懂？我们需要一个翻译官，而这个翻译官翻译的过程就是编译的过程。")]),v._v(" "),t("p",[v._v("人类写的代码我们已经都知道是怎样的了，那么我们来看下机器能理解的语言是什么样的，这样才能知道要翻译成什么样？")]),v._v(" "),t("p",[v._v("计算机的大脑是CPU，CPU能执行的是一串二进制的指令（关于CPU为什么能执行二进制的指令，可以了解下计算机的组成及原理）。为了完成复杂的工作，我们需要提供给CPU一堆二进制的指令，我们把这些指令称为指令集（Instructions），也就是机器语言。")]),v._v(" "),t("p",[v._v("机器能懂这些指令，但是我们人类难以记住这些二进制指令，于是我们将二进制指令集转换为了方便人类记忆的符号，这就是"),t("strong",[v._v("汇编指令")]),v._v("。")]),v._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[v._v("1000100111011000  机器指令\nmov ax,bx         汇编指令\n")])])]),t("p",[v._v("此时，翻译官就要上线了，我们只需要编写汇编代码，然后通过汇编编译器将其翻译成机器码，计算机就可以执行了。\n"),t("img",{attrs:{src:"https://tva1.sinaimg.cn/large/007S8ZIlgy1geroy5ehkfj30vq085q3r.jpg",alt:""}})]),v._v(" "),t("p",[v._v("然而，汇编语言依然很繁琐，一个简单的功能需要大量的汇编代码，主要表现在2点：")]),v._v(" "),t("ul",[t("li",[t("strong",[v._v("不同的CPU有着不同的指令集")]),v._v("。如果使用汇编代码，我们需要为每种CPU编写特定的代码，这可比为不同浏览器做兼容麻烦多了，是巨大而又枯燥的工作")]),v._v(" "),t("li",[t("strong",[v._v("需要了解计算机的相关组成等硬件知识")]),v._v("。编写汇编语言时，我们可能要操作寄存器、内存等，这需要我们对计算机的架构有一定了解。")])]),v._v(" "),t("p",[v._v("因此，我们需要一个能适应不同CPU架构，且屏蔽计算机内部细节的，让我们能专心处理业务的语言，而这就是高级语言。比如Java、C、C++、JavaScript等。")]),v._v(" "),t("p",[v._v("同样的，计算机不能理解并执行我们的高级语言，因此我们需要给机器翻译一下，一般有两种方式：")]),v._v(" "),t("ul",[t("li",[v._v("1、解释执行")]),v._v(" "),t("li",[v._v("2、编译执行")])]),v._v(" "),t("h4",{attrs:{id:"解释执行"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解释执行"}},[v._v("#")]),v._v(" 解释执行")]),v._v(" "),t("p",[v._v("需要先将输入的源代码通过解析器编译成中间代码，之后直接使用解释器解释执行中间代码，然后直接输出结果\n"),t("img",{attrs:{src:"https://tva1.sinaimg.cn/large/007S8ZIlgy1gerp9czqzbj30vq06vab2.jpg",alt:""}})]),v._v(" "),t("h4",{attrs:{id:"编译执行"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#编译执行"}},[v._v("#")]),v._v(" 编译执行")]),v._v(" "),t("p",[v._v("编译执行需要先将源代码转换为中间代码，然后我们的编译器再将中间代码编译成机器代码。通常编译成的机器代码是以二进制文件形式存储的，需要执行这段程序的时候直接执行二进制文件就可以了。还可以使用虚拟机将编译后的机器代码保存在内存中，然后直接执行内存中的二进制代码\n"),t("img",{attrs:{src:"https://tva1.sinaimg.cn/large/007S8ZIlgy1gerpbyltsej30vq096ab0.jpg",alt:""}})]),v._v(" "),t("p",[v._v("两种方式各有优缺点：解释执行启动速度快，但执行速度慢；编译执行启动速度慢，执行速度快。")]),v._v(" "),t("p",[v._v("不同的高级语言采用的方式不一样，比如C语言是采用编译执行，而Java、JavaScript则需要对应的虚拟机模拟计算机的编译执行流程。")]),v._v(" "),t("p",[v._v("JavaScript流行的虚拟也很多，V8就是Chrome采用的虚拟机。")]),v._v(" "),t("h2",{attrs:{id:"v8是怎么执行javascript代码的？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#v8是怎么执行javascript代码的？"}},[v._v("#")]),v._v(" V8是怎么执行JavaScript代码的？")]),v._v(" "),t("p",[v._v("V8并没有采用以上的某种单一技术，而是结合了编译执行和解释执行，我们将这种技术成为JIT(Just In Time)技术。下图是V8的执行流程图。")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://tva1.sinaimg.cn/large/007S8ZIlgy1gesu60jj4gj30vq0gsju1.jpg",alt:""}})]),v._v(" "),t("ul",[t("li",[v._v("首先，在启动执行JavaScript之前，需要"),t("strong",[v._v("准备一些基础环境")]),v._v("，比如堆栈空间、全局上下文、消息循环系统等")]),v._v(" "),t("li",[v._v("基础环境准备好后，就可以向V8提交待执行的代码了。V8看不懂提交过来的一堆字符串，所以需要"),t("strong",[v._v("结构化")]),v._v("这些字符串，生成抽象语法树(AST)，同时生成相关的作用域。")]),v._v(" "),t("li",[v._v("生成字节码")]),v._v(" "),t("li",[v._v("解释器按顺序解释执行字节码，并输出结果")]),v._v(" "),t("li",[v._v("在执行的过程中，会有一个监控解释器执行状态的模块（图中的机器人），若发现一段代码被重复多次执行，机器人就会将这段代码标记为热点代码")]),v._v(" "),t("li",[v._v("被标记为热点的代码，V8就会将其字节码传给优化编译器，优化编译器将其字节码编译为二进制码并进行优化操作（优化后的二进制机器码的执行效率会得到大幅提升）。之后如果再执行到这段代码，V8就会直接执行其二进制代码，这样执行速度就会有很大提升。")])]),v._v(" "),t("p",[v._v("不过在JavaScript执行过程中，对象的结构和属性可以被任意修改，这将会导致被优化后的二进制机器码变成无效的代码，这时优化编译器会对其做反优化操作，经过反优化后，下次执行这段代码时又会采用解释执行的方式执行其字节码。")]),v._v(" "),t("h4",{attrs:{id:"v8运行时环境"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#v8运行时环境"}},[v._v("#")]),v._v(" V8运行时环境")]),v._v(" "),t("p",[v._v("上面提到，在V8执行代码之前，浏览器需要准备一些基础环境，这就是V8的运行时环境。这其中有一部分是由V8自身提供，比如JavaScript的核心功能和垃圾回收系统；有一部分是由宿主环境提供，比如全局执行上下文、事件循环系统，堆空间和栈空间。")]),v._v(" "),t("p",[v._v("什么是宿主环境？宿主这个词是在生物上是指为病毒等寄生物提供生存环境的生物。V8的宿主环境可以是浏览器中的渲染进程、也可以是Node.js进程，这些宿主环境为为 V8 提供基础的消息循环系统、全局变量、Web API，而 V8 的核心是实现了 ECMAScript 标准。")]),v._v(" "),t("p",[v._v("由于 V8 是寄生在浏览器或者 Node.js 这些宿主中的，因此，V8 也是被这些宿主启动的。比如，在 Chrome 中，只要打开一个渲染进程，渲染进程便会初始化 V8。")])])}),[],!1,null,null,null);a.default=r.exports}}]);