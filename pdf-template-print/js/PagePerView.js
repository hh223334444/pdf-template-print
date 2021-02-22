/// <reference path="../lib/wangeditor/dist/wangeditor.js" />
// 第一，菜单 class ，Button 菜单继承 BtnMenu class
class PagePerView extends window.wangEditor.BtnMenu {
    constructor(editor) {
        // data-title属性表示当鼠标悬停在该按钮上时提示该按钮的功能简述
        const $elem = E.$(
            `<div class="w-e-menu" data-title="模板预览">
                <svg t="1613811541627" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2901" width="24" height="24"><path d="M545 793.6H243.8c-11 0-20-9-20-20V250.4c0-11 9-20 20-20h432.4c11 0 20 9 20 20v131.8c0 11 9 20 20 20s20-9 20-20V250.4c0-33.1-26.9-60-60-60H243.8c-33.1 0-60 26.9-60 60v523.2c0 33.1 26.9 60 60 60H545c11 0 20-9 20-20s-8.9-20-20-20z" p-id="2902"></path><path d="M834.6 789.8l-88.8-91.7c23.4-28.7 37.5-65.4 37.5-105.3 0-92.1-74.9-167-167-167s-167 74.9-167 167 74.9 167 167 167c37.8 0 72.7-12.6 100.7-33.9l89 91.8c3.9 4 9.1 6 14.3 6 5 0 10.1-1.9 14-5.7 7.8-7.6 8-20.3 0.3-28.2z m-218.4-69.9c-70 0-127-57-127-127s57-127 127-127 127 57 127 127-57 127-127 127zM565 382.2c0-11-9-20-20-20H308.7c-11 0-20 9-20 20s9 20 20 20H545c11.1 0 20-9 20-20zM443.5 493.5c0-11-9-20-20-20H308.7c-11 0-20 9-20 20s9 20 20 20h114.8c11.1 0 20-8.9 20-20zM308.7 584.8c-11 0-20 9-20 20s9 20 20 20h61.7c11 0 20-9 20-20s-9-20-20-20h-61.7z" p-id="2903"></path></svg>
            </div>`
        )
        super($elem, editor)
    }
    // 菜单点击事件
    clickHandler() {
        // 做任何你想做的事情
        // 可参考【常用 API】文档，来操作编辑器
        window.open("template-print.html", "_blank ")
        localStorage.setItem("html", editor.txt.html());
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