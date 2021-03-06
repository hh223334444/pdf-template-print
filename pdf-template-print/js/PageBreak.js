﻿/// <reference path="../lib/wangeditor/dist/wangeditor.js" />
// 第一，菜单 class ，Button 菜单继承 BtnMenu class
class PageBreak extends window.wangEditor.BtnMenu {
    constructor(editor) {
        // data-title属性表示当鼠标悬停在该按钮上时提示该按钮的功能简述
        const $elem = E.$(
            `<div class="w-e-menu" data-title="添加分页符">
                <svg t="1613807980462" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1967" width="16" height="16"><path d="M847.56308 444.137403 175.928337 444.137403c-37.036521 0-67.163679-30.127158-67.163679-67.162656L108.764658 108.321054c0-12.353352 10.014074-22.387893 22.387893-22.387893s22.387893 10.034541 22.387893 22.387893l0 268.653693c0 12.353352 10.014074 22.387893 22.387893 22.387893l671.63372 0c12.328793 0 22.387893-10.034541 22.387893-22.387893L869.94995 108.321054c0-12.353352 10.057053-22.387893 22.387893-22.387893 12.329816 0 22.38687 10.034541 22.38687 22.387893l0 268.653693C914.725736 414.010245 884.598578 444.137403 847.56308 444.137403z" p-id="1968"></path><path d="M131.153574 533.688975 86.377788 533.688975c-12.373819 0-22.387893-10.05603-22.387893-22.387893 0-12.352329 10.014074-22.38687 22.387893-22.38687l44.775786 0c12.373819 0 22.387893 10.034541 22.387893 22.38687C153.540444 523.632945 143.527392 533.688975 131.153574 533.688975z" p-id="1969"></path><path d="M265.479909 533.688975l-44.775786 0c-12.373819 0-22.387893-10.05603-22.387893-22.387893 0-12.352329 10.014074-22.38687 22.387893-22.38687l44.775786 0c12.375865 0 22.38687 10.034541 22.38687 22.38687C287.866778 523.632945 277.85475 533.688975 265.479909 533.688975z" p-id="1970"></path><path d="M399.807267 533.688975l-44.775786 0c-12.373819 0-22.38687-10.05603-22.38687-22.387893 0-12.352329 10.014074-22.38687 22.38687-22.38687l44.775786 0c12.373819 0 22.38687 10.034541 22.38687 22.38687C422.194136 523.632945 412.181085 533.688975 399.807267 533.688975z" p-id="1971"></path><path d="M534.133601 533.688975l-44.775786 0c-12.372795 0-22.387893-10.05603-22.387893-22.387893 0-12.352329 10.015098-22.38687 22.387893-22.38687l44.775786 0c12.331863 0 22.387893 10.034541 22.387893 22.38687C556.521494 523.632945 546.465464 533.688975 534.133601 533.688975z" p-id="1972"></path><path d="M668.459936 533.688975l-44.775786 0c-12.33084 0-22.38687-10.05603-22.38687-22.387893 0-12.352329 10.05603-22.38687 22.38687-22.38687l44.775786 0c12.329816 0 22.388916 10.034541 22.388916 22.38687C690.848852 523.632945 680.789753 533.688975 668.459936 533.688975z" p-id="1973"></path><path d="M802.787294 533.688975l-44.776809 0c-12.328793 0-22.385846-10.05603-22.385846-22.387893 0-12.352329 10.057053-22.38687 22.385846-22.38687l44.776809 0c12.329816 0 22.38687 10.034541 22.38687 22.38687C825.174164 523.632945 815.117111 533.688975 802.787294 533.688975z" p-id="1974"></path><path d="M937.114652 533.688975l-44.776809 0c-12.33084 0-22.387893-10.05603-22.387893-22.387893 0-12.352329 10.057053-22.38687 22.387893-22.38687l44.776809 0c12.328793 0 22.38687 10.034541 22.38687 22.38687C959.501522 523.632945 949.443445 533.688975 937.114652 533.688975z" p-id="1975"></path><path d="M892.338866 936.669002c-12.33084 0-22.387893-10.05603-22.387893-22.38687L869.950973 645.627417c0-12.329816-10.0591-22.385846-22.387893-22.385846L175.928337 623.24157c-12.373819 0-22.387893 10.05603-22.387893 22.385846l0 268.654716c0 12.33084-10.014074 22.38687-22.387893 22.38687s-22.387893-10.05603-22.387893-22.38687L108.764658 645.627417c0-37.034475 30.127158-67.162656 67.163679-67.162656l671.63372 0c37.035498 0 67.162656 30.127158 67.162656 67.162656l0 268.654716C914.725736 926.612972 904.667659 936.669002 892.338866 936.669002z" p-id="1976"></path></svg>
            </div>`
        )
        super($elem, editor)
    }
    // 菜单点击事件
    clickHandler() {
        // 做任何你想做的事情
        // 可参考【常用 API】文档，来操作编辑器
        if (editor.txt.html() !== "") {
            editor.txt.append("<div id='pagebreak' readonly='true' contenteditable='false'  style='min-height: 20px;width: 21cm;background-color: #eee;margin-left:-76px; z-index: 10001'></div><div style='page-break-after: always;'></div><p><br></p>")
        }
        if ($("#pageheader").length !== 0) {
            editor.txt.append("<div id='pageheader' class='header' contenteditable='false'  style='min-height:65px;position: relative'><p style='position: absolute; bottom: 0;padding:0px;margin: 0px;width: 100%;'><br></p></div><div id='pageheadimg' class='pageheadimg' readonly='true' contenteditable='fale' style='min-height: 20px;width: 18cm;margin-left: -19px;z-index: 10001;'><span style='border-bottom: 1px solid gray;border-right: 1px solid gray;float: left;'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span style='border-bottom: 1px solid gray;border-left: 1px solid gray;float: right;'>&nbsp;&nbsp;&nbsp;&nbsp;</span></div><div id='pagecontent' class='content' style='height: 912px;width:100% ;'><p><br></p></div><div id='pagefooterimg' class='pagefooterimg' readonly='true' contenteditable='fale' style='min-height: 20px;width: 18cm;margin-left: -19px;z-index: 10001;'><span style='border-top: 1px solid gray;border-right: 1px solid gray;float: left;'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span style='border-top: 1px solid gray;border-left: 1px solid gray;float: right;'>&nbsp;&nbsp;&nbsp;&nbsp;</span></div><div id='pagefooter' class='footer' contenteditable='false' style='min-height:65px;'><br></div>")
        }

        if ($(".header").length !== 0 || $(".footer").length !== 0) {
            if ($(".header").first().get(0).getAttribute("contenteditable") === "true") {
                $(".header").each(function (index, obj) {
                    obj.style.borderBottom = "1px solid";
                    obj.setAttribute("contenteditable", true);
                })
            }
            if ($(".footer").first().get(0).getAttribute("contenteditable") === "true") {
                $(".footer").each(function (index, obj) {
                    obj.style.borderTop = "1px solid";
                    obj.setAttribute("contenteditable", true);
                })
            }
        }
    }
    // 菜单是否被激活（如果不需要，这个函数可以空着）
    // 1. 激活是什么？光标放在一段加粗、下划线的文本时，菜单栏里的 B 和 U 被激活，如下图
    // 2. 什么时候执行这个函数？每次编辑器区域的选区变化（如鼠标操作、键盘操作等），都会触发各个菜单的 tryChangeActive 函数，重新计算菜单的激活状态
    tryChangeActive() {
        // 激活菜单
        // 1. 菜单 DOM 节点会增加一个 .w-e-active 的 css class
        // 2. this.this.isActive === true
        this.active()

        // // 取消激活菜单
        // // 1. 菜单 DOM 节点会删掉 .w-e-active
        // // 2. this.this.isActive === false
        // this.unActive()
    }
}