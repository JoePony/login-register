/*
自定义标签切换组建
初始化自定义参数：
{
    tabs:切换标签的父元素,
    panes:切换标签的父元素,
    initialIndex:初始显示高亮的标签索引(可选参数),
    tabActiveClass:标签高亮样式名(可选参数，默认为tab-active),
    eventType:鼠标事件(可选参数，默认为click)
}
*/ 
define(function(){
    function TabSwitch(opts){
        //默认第一个标签高亮，默认高亮样式名位tab-active
        this.defaults={
            initialIndex:0, 
            tabActiveClass:'tab-active', 
            eventType:'click'
        };
        this.opts=$.extend({}, this.defaults, opts); 

        this.tabs=opts.tabs;
        this.tab=this.tabs.children;
        this.tabPanes=opts.panes;
        this.tabPane=this.tabPanes.children;

        this.initialIndex=this.opts.initialIndex;
        this.tabActiveClass=this.opts.tabActiveClass;
        this.eventType=this.opts.eventType;

        this.init();
    }
    TabSwitch.prototype.init=function(){
        $(this.tab[this.initialIndex]).addClass(this.tabActiveClass).siblings().removeClass(this.tabActiveClass);
        $(this.tabPane[this.initialIndex]).show(200).siblings().hide();
        this.bind();
    }

    TabSwitch.prototype.bind=function(){
        var tab=this.tab, 
            pane=this.tabPane,
            tabActiveClass=this.tabActiveClass;
        for(var i=0, len=tab.length; i<len; i++){
            tab[i]._index=i;
            tab[i].addEventListener(this.eventType,function(e){
                $(this).addClass(tabActiveClass).siblings().removeClass(tabActiveClass);
                $(pane[this._index]).siblings().fadeOut(0).end().fadeIn(200);
            })
        }
    }
    return TabSwitch;
});