/*
自定义日期插件
 */ 
define(function(){
    function joeDatePicker(opts){
        this.options=opts;
        this.ele=opts.ele;
        this.init();
    }
    joeDatePicker.prototype.init=function(){
        this.bind();
    };
    joeDatePicker.prototype.render=function(){

    };
    joeDatePicker.prototype.bind=function(){
        var dateWrap=document.createElement('div');
        var _ele=this.ele,
            _this=this;
        this.ele.addEventListener('focus',showDate,false);
        this.ele.addEventListener('blur',hideDate,false)
        function showDate(){
            dateWrap.innerHTML=_this.createDateDialog();
            dateWrap.style.cssText='1px solid #F00; padding:10px; position:absolute; left:0; top:0; background-color:#FFF;';
            _ele.parentNode.appendChild(dateWrap);
        };
        function hideDate(){
            _ele.parentNode.removeChild(dateWrap);  
        }
    };
    joeDatePicker.prototype.createDateDialog=function(){
        var dataDialog=document.createElement('div');
        dataDialog.innerHTML='';
        return dataDialog;   
    };
    return joeDatePicker;
});