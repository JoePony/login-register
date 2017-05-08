/*
弹出框模块
 */ 
define(function(){
    function DialogBounce(opts){
        this.default={
            width:150,
            opacity:0.3,
            time:1000,
            appendToEle:document.body
        };
        this.opts=$.extend({}, this.default, opts);
        this.init();
    }
    DialogBounce.prototype.init=function(){
        this.render();
    };
    DialogBounce.prototype.render=function(){
        var dialog=document.createElement('div');   
        var opts=this.opts;
        $(dialog).css({
            width:opts.width,
            height:opts.height,
            padding:'15px 0',
            textAlign:'center',
            color:'#FFF',
            borderRadius:'6px'
        });
        dialog.className+=' center-dialog pack-align-center';
        dialog.innerHTML=opts.msg;
        opts.appendToEle.appendChild(dialog);
        $(dialog).delay(opts.time).fadeOut('fast');
    };
    return DialogBounce;
});