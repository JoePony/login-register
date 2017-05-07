require.config({
    paths: {
        jquery: '../lib/jquery-1.11.3.min',

        // validate表单验证库
        validate: '../lib/jquery.validate-v1.13.1.min',  
        //validateForm自定义组件
        validateForm: '../widget/validateForm',
        //标签切换自定义组件
        tabSwitch:'../widget/tabSwitch'
        // Mock Server库
        // ,mock:'../lib/mock-min'
    }
});

require(['validateForm','tabSwitch'], function(validateForm,tabSwitch) {
    $(document).ready(function() {
        /* 初始化切换组建 */
        new tabSwitch({
            tabs:document.getElementById('tabs'),
            panes:document.getElementById('tab-panes'),
            initialIndex:0,
            tabActiveClass:'tab-active',
            eventType:'mouseover'
        });

        /* 表单验证 */
        new validateForm();
    });

});
