sap.ui.define([
    'sap/ui/core/format/DateFormat'
], function(DateFormat) {
    'use strict';
    return{
        changeDate: function(date)
            {
                if (date) {
                    // console.log("Dummy : "+date)
                    var oDateFormat = DateFormat.getDateInstance({
                        pattern: "dd-MMM-yyyy" 
                    });
                    return oDateFormat.format(new Date());
                } else {
                    // return "";
                }  
            },
            addGmail: function(name)
            {
                return name+"gmail.com";
            }
    }
    
});