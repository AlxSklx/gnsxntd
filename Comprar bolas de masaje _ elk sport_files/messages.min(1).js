define(['jquery','uiComponent','underscore','Magento_Customer/js/customer-data','jquery/jquery-storageapi'],function($,Component,_,customerData){'use strict';return Component.extend({defaults:{cookieMessages:[],messages:[]},initialize:function(){this._super();this.cookieMessages=_.unique($.cookieStorage.get('mage-messages'),'text');this.messages=customerData.get('messages').extend({disposableCustomerData:'messages'});if(!_.isEmpty(this.messages().messages)){customerData.set('messages',{});}
$.cookieStorage.set('mage-messages','');}});});