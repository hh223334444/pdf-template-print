/// <reference path="../lib/wangeditor/dist/wangeditor.js" />
// 第一，菜单 class ，Button 菜单继承 BtnMenu class
class PageHeader extends window.wangEditor.BtnMenu {
    constructor(editor) {
        // data-title属性表示当鼠标悬停在该按钮上时提示该按钮的功能简述
        const $elem = E.$(
            `<div class="w-e-menu" data-title="编辑页眉">
            <svg t="1613807780527" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1120" width="16" height="16"><path d="M697.856 32l-96 96H212.352c-27.744 0-49.792 19.616-52.16 43.712L160 176v672c0 24.576 20.48 45.536 47.52 47.808l4.832 0.192h599.296c27.744 0 49.792-19.616 52.16-43.712L864 848V454.112l95.168-95.104c0.256 1.44 0.48 2.88 0.64 4.384L960 368v480c0 77.76-63.136 140.32-141.44 143.84l-6.912 0.16H212.352c-79.136 0-144.512-60.384-148.16-137.184L64 848v-672c0-77.76 63.136-140.32 141.44-143.84L212.32 32h485.504z m35.616 122.72l135.776 135.776-369.376 369.376-163.872 28.128 28.128-163.872L733.44 154.72zM944 80a96 96 0 0 1 4.32 131.168l-4.32 4.608-29.504 29.44-135.744-135.744 29.472-29.472a96 96 0 0 1 135.776 0z" p-id="1121"></path></svg>
            </div>`
        )
        super($elem, editor)
    }
    // 菜单点击事件
    clickHandler() {
        // 做任何你想做的事情
        // 可参考【常用 API】文档，来操作编辑器
        if ($(".header").length !== 0 || $(".footer").length!==0) {
            $(".header").each(function (index, obj) {
                obj.style.borderBottom = "1px solid";
                obj.setAttribute("contenteditable", true);
            })
            $(".footer").each(function (index, obj) {
                obj.style.borderTop = "1px solid";
                obj.setAttribute("contenteditable", true);
            })
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