require.config({
    paths: {
        jquery: '../lib/jquery-1.11.3.min',

        // validate表单验证库
        validate: '../lib/jquery.validate-v1.13.1.min',  
        //validateForm自定义组件
        validateForm: '../widget/validateForm',
        //标签切换自定义组件
        tabSwitch:'../widget/tabSwitch',

        setStorage:'../widget/setStorage',
        validateRegForm:'../widget/validateRegForm',
        validateLoginForm:'../widget/validateLoginForm',
        // joeDatePicker:'../widget/joeDatePicker',
        getStorage:'../widget/getStorage',
        dialogBounce:'../widget/dialogBounce'
        // Mock Server库
        // ,mock:'../lib/mock-min'
    }
});

require(['validateRegForm','validateLoginForm','tabSwitch'], function(validateRegForm,validateLoginForm,tabSwitch) {
    $(document).ready(function() {
        /* 初始化切换组建 */
        new tabSwitch({
            tabs:document.getElementById('tabs'),
            panes:document.getElementById('tab-panes'),
            initialIndex:0,
            tabActiveClass:'tab-active',
            eventType:'click'
        });

        /* 表单验证 */
        new validateRegForm();
        new validateLoginForm();

        /* 初始化自定义日期插件 */ 
        // new joeDatePicker({
        //     ele:document.querySelector('#birthday')
        // });
    });

});
