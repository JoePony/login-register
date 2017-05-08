/*
获取localStorag、sessionStorage
 */ 
define(function(){
    return (function(){
        var getStorage=function(opts){
            var type=opts.type,
                key=opts.key;
            var value;
            switch(type){
                case 'localStorage':
                    value=localStorage[key];
                    break;
                case 'sessionStorage':
                    value=sessionStorage[key];
                    break;
                default:
                    throw new Error('wrong storage type');
            }
            return value;
        };
        return {
            result:getStorage
        }
    })();
})  