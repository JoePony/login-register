/*
设置storage模块
 */ 
define(function(){
    function SetStorage(opts){
        this.type=opts.type;
        this.operation=opts.operation;
        this.data=opts.data;
        this.init();
    }
    SetStorage.prototype.init=function(){
        if(this.type=='localStorage'){
            this.setLocalStorage(this.data);
        }else if(this.type=='sessionStorage'){
            this.setSessionStorage(this.data);
        }
        else{
            throw new Error('wrong storage type');
        }
    }
    SetStorage.prototype.setLocalStorage=function(){
        var args=arguments[0];
        for(var i=0,len=args.length; i<len; i++){
            localStorage.setItem(args[i].key, args[i].value);
        }
    };

    SetStorage.prototype.setSessionStorage=function(){
        var args=arguments[0];
        for(var i=0,len=args.length; i<len; i++){
            sessionStorage.setItem(args[i].key, args[i].value);
        }
    };
    return SetStorage;
})