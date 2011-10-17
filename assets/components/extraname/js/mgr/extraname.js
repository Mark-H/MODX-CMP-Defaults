var ExtraName = function(config) {
    config = config || {};
    ExtraName.superclass.constructor.call(this,config);
};
Ext.extend(ExtraName,Ext.Component,{
    page:{},window:{},grid:{},tree:{},panel:{},combo:{},config: {}
});
Ext.reg('extraname',ExtraName);
ExtraName = new ExtraName();