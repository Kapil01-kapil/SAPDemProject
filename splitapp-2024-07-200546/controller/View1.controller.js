sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("splitapp.controller.View1", {
            onInit: function () {
                var oModel = new sap.ui.model.json.JSONModel({
                    items: [
                      { name: "U.P", description: "Description of U.P", image: "https://www.google.com/maps/vt/data=UX9K9ho8SsXj2e4jmysPQsj8O_snOfwtxYJnx6dUKc6CTfCiWuUeQxxAGw0cDDj9xn0UBnRJNBWoEuN_nn9uNeQBc8nWibFYpOafnIP3eMidV0MJ7wTFQokZF-k_zoQme263bfWoPb_ZGMwENTalCXzzMm3w2FtPgbWgwSBAzw33WfZyvGgXsdkb4UY0JTxbjBUGdX2irov--Jn5v-8SCPYZ6dqEGGR5tQEAywsyDmZ88ziEvMN4xyDOLQyp01Xe_YDlrZz1U6ZrvgiJmDjEc1IN4VTSxG9GB9BzDNB8lXzboVA" },
                      { name: "M.p", description: "Description of M.p", image: "https://www.google.com/maps/vt/data=KETLsX2jfzdKoPoW2U9E6nY8-qLkKK76VOyS52nAvqaTb0--BlKNFdErX8ELa70hktGVJQMrx0N3ObBZN5tqzygfLkyGZV-Z8f14wS3zg91ennihlxC4J-HhQdh2un8lRAVEAPClAnMhyq2-8N1mF4L99TL8Wbeqe4dVDV8Z9akrRn7tEY3ro5a2628Z-WGzpahir0zrPvpDfc4_awi134C-dJIVsnoxcwJ7jFFnmoy-R1DhIcOLSsH6sIZGpUeySqmnxc6O9xkHN0m3wVEcww7T1x7wq8uJj-tr_MWJ167P1kw" },
                      
                    ]
                   
                  });
               
                  var ChartModel = new sap.ui.model.json.JSONModel([ 
                    { category: "Apply", value: 10 }, 
                    { category: "Apply", value: 20 }, 
                    { category: "Origin", value: 29 },
                    { category: "Origin", value: 80 },
                    { category: "Origin", value: 26 }
                    
                  ] );
    this.getView().setModel(ChartModel,"model2");
                  this.getView().setModel(oModel);
            },
            onListItemPress: function (oEvent) {
                // Get selected item
                var oSelectedItem = oEvent.getSource();
                var oContext = oSelectedItem.getBindingContext();
                // var sPath = oContext.getPath();
          
                // Navigate to the detail page
                var oSplitApp = this.byId("SplitApp");
                oSplitApp.toDetail(this.createId("detailPage"));
          
                // Update detail page content
                var oDetailText = this.byId("detailText");
                var oDetailImage = this.byId("detailImage");
                var sText = oContext.getProperty("name");
                var sImage = oContext.getProperty("image");
                oDetailText.setText("Selected: " + sText);
                oDetailImage.setSrc(sImage);
          
                // // Optionally update chart data if it's dynamic
                // var oChartData = [
                //   { category: "Apply", value: Math.floor(Math.random() * 100) },
                //   { category: "Origin", value: Math.floor(Math.random() * 100) },
                
                // ];
                // console.log("oChartData==>",oChartData);
                // this.getView().getModel().setProperty("/chartData", oChartData);
              }
        });
    });
