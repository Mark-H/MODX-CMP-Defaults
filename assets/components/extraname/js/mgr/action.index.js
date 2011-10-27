
Ext.onReady(function() {
    Ext.QuickTips.init();
    MODx.load({ xtype: 'extraname-page-index'});
});

/*
Index page configuration.
 */
ExtraName.page.Index = function(config) {
    config = config || {};
    Ext.applyIf(config,{
        renderTo: 'extraname',
        components: [{
            xtype: 'extraname-panel-header'
        },{
            xtype: 'modx-tabs',
            width: '98%',
            bodyStyle: 'padding: 10px 10px 10px 10px;',
            border: true,
            defaults: {
                border: false,
                autoHeight: true,
                bodyStyle: 'padding: 5px 8px 5px 5px;'
            },
            items: [{
                title: _('extraname.estates'),
                items: [{
                    xtype: 'extraname-grid-estates',
                    border: false
                }]
            },{
                title: _('extraname.listings'),
                items: [{
                    xtype: 'extraname-grid-listings',
                    border: false
                }]
            }]
        }]
    });
    ExtraName.page.Index.superclass.constructor.call(this,config);
};
Ext.extend(ExtraName.page.Index,MODx.Component);
Ext.reg('extraname-page-index',ExtraName.page.Index);

/*
Index page header configuration.
 */
ExtraName.panel.Header = function(config) {
    config = config || {};
    Ext.apply(config,{
        border: false
        ,baseCls: 'modx-formpanel'
        ,items: [{
            html: '<h2>'+_('extraname')+'</h2>'
            ,border: false
            ,cls: 'modx-page-header'
        }]
    });
    ExtraName.panel.Header.superclass.constructor.call(this,config);
};
Ext.extend(ExtraName.panel.Header,MODx.Panel);
Ext.reg('extraname-panel-header',ExtraName.panel.Header);
