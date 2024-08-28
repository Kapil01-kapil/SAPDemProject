sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel" // Added JSONModel dependency
], function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("project5.controller.View1", {
        onInit: function () {
            // JSON model setup

            var oData = { "scName" : "Vikas Bal Vidya Mandir",
                "ownMobile" : "2121212121",
                      "ownName" : "Vikas singh",
                "ownMail" : "info.vikask41@gmail.com",
                "ownStatus":"Active",
                "scaddress": "Opposite KPIT Cummins, IT Park, Phase 1, Hinjawadi, Pune, Maharashtra 411057",
                
                "studentDetails":[{
                "stuId":"101",
                "stuName":"Nikhil Kumar",
                "stuMobNo":"1111111111",
                "stuEmail":"Nikhil@yahoo.com",
                "stuStand":"10th"
                },{
                "stuId":"102",
                "stuName":"Akash Kumar",
                "stuMobNo":"2222222222",
                "stuEmail":"Akash@gmail.com",
                "stuStand":"7th"
                },{
                "stuId":"103",
                "stuName":"Rahul Kumar",
                "stuMobNo":"3333333333",
                "stuEmail":"Rahul@yahoo.com",
                "stuStand":"10th"
                },{
                "stuId":"104",
                "stuName":"Nishant Kumar",
                "stuMobNo":"4444444444",
                "stuEmail":"Nishant@yahoo.com",
                "stuStand":"5th"
                },{
                "stuId":"105",
                "stuName":"Kunal singh Rajput",
                "stuMobNo":"555555555",
                "stuEmail":"Rajput@yahoo.com",
                "stuStand":"10th"
                }
                ],
                "branchDetails":[{
                "BRCode":"PSA001",
                "BRPRName":"DR.Prashnat singh",
                "Location":"Shivaji Chowk / Hinjawadi Chowk",
                "Email":"ShivajiChowk@gmail.com",
                "TelephoneNo":"2323232323"
                },{
                "BRCode":"PPCMCA002",
                "BRPRName":"DR.vikas singh",
                "Location":"Mahavir ChowkChinchwad, Pimpri-Chinchwad",
                "Email":"ChowkChinchwad@gmail.com",
                "TelephoneNo":"3434343434"
                },{
                "BRCode":"PWCEA003",
                "BRPRName":"ER.Ashutosh Jha",
                "Location":"Wakadkar Wasti Rd,Casa Imperia",
                "Email":"CasaImperia@gmail.com",
                "TelephoneNo":"4545454545"
                },
                {
                "BRCode":"PSA004",
                "BRPRName":"ER.Gopal singh",
                "Location":"near Pune Junction railway station",
                "Email":"punerailway@gmail.com",
                "TelephoneNo":"6767676767"
                },
                {
                    "stuId":"101",
                    "stuName":"Nikhil Kumar",
                    "stuMobNo":"1111111111",
                    "stuEmail":"Nikhil@yahoo.com",
                    "stuStand":"10th"
                    },{
                    "stuId":"102",
                    "stuName":"Akash Kumar",
                    "stuMobNo":"2222222222",
                    "stuEmail":"Akash@gmail.com",
                    "stuStand":"7th"
                    },{
                    "stuId":"103",
                    "stuName":"Rahul Kumar",
                    "stuMobNo":"3333333333",
                    "stuEmail":"Rahul@yahoo.com",
                    "stuStand":"10th"
                    },{
                    "stuId":"104",
                    "stuName":"Nishant Kumar",
                    "stuMobNo":"4444444444",
                    "stuEmail":"Nishant@yahoo.com",
                    "stuStand":"5th"
                    },{
                    "stuId":"105",
                    "stuName":"Kunal singh Rajput",
                    "stuMobNo":"555555555",
                    "stuEmail":"Rajput@yahoo.com",
                    "stuStand":"10th"
                    }
                    ],
                    "branchDetails":[{
                    "BRCode":"PSA001",
                    "BRPRName":"DR.Prashnat singh",
                    "Location":"Shivaji Chowk / Hinjawadi Chowk",
                    "Email":"ShivajiChowk@gmail.com",
                    "TelephoneNo":"2323232323"
                    },{
                    "BRCode":"PPCMCA002",
                    "BRPRName":"DR.vikas singh",
                    "Location":"Mahavir ChowkChinchwad, Pimpri-Chinchwad",
                    "Email":"ChowkChinchwad@gmail.com",
                    "TelephoneNo":"3434343434"
                    },{
                    "BRCode":"PWCEA003",
                    "BRPRName":"ER.Ashutosh Jha",
                    "Location":"Wakadkar Wasti Rd,Casa Imperia",
                    "Email":"CasaImperia@gmail.com",
                    "TelephoneNo":"4545454545"
                    },
                    {
                    "BRCode":"PSA004",
                    "BRPRName":"ER.Gopal singh",
                    "Location":"near Pune Junction railway station",
                    "Email":"punerailway@gmail.com",
                    "TelephoneNo":"6767676767"
                    },
                    {
                        "stuId":"101",
                        "stuName":"Nikhil Kumar",
                        "stuMobNo":"1111111111",
                        "stuEmail":"Nikhil@yahoo.com",
                        "stuStand":"10th"
                        },{
                        "stuId":"102",
                        "stuName":"Akash Kumar",
                        "stuMobNo":"2222222222",
                        "stuEmail":"Akash@gmail.com",
                        "stuStand":"7th"
                        },{
                        "stuId":"103",
                        "stuName":"Rahul Kumar",
                        "stuMobNo":"3333333333",
                        "stuEmail":"Rahul@yahoo.com",
                        "stuStand":"10th"
                        },{
                        "stuId":"104",
                        "stuName":"Nishant Kumar",
                        "stuMobNo":"4444444444",
                        "stuEmail":"Nishant@yahoo.com",
                        "stuStand":"5th"
                        },{
                        "stuId":"105",
                        "stuName":"Kunal singh Rajput",
                        "stuMobNo":"555555555",
                        "stuEmail":"Rajput@yahoo.com",
                        "stuStand":"10th"
                        }
                        ],
                        "branchDetails":[{
                        "BRCode":"PSA001",
                        "BRPRName":"DR.Prashnat singh",
                        "Location":"Shivaji Chowk / Hinjawadi Chowk",
                        "Email":"ShivajiChowk@gmail.com",
                        "TelephoneNo":"2323232323"
                        },{
                        "BRCode":"PPCMCA002",
                        "BRPRName":"DR.vikas singh",
                        "Location":"Mahavir ChowkChinchwad, Pimpri-Chinchwad",
                        "Email":"ChowkChinchwad@gmail.com",
                        "TelephoneNo":"3434343434"
                        },{
                        "BRCode":"PWCEA003",
                        "BRPRName":"ER.Ashutosh Jha",
                        "Location":"Wakadkar Wasti Rd,Casa Imperia",
                        "Email":"CasaImperia@gmail.com",
                        "TelephoneNo":"4545454545"
                        },
                        {
                        "BRCode":"PSA004",
                        "BRPRName":"ER.Gopal singh",
                        "Location":"near Pune Junction railway station",
                        "Email":"punerailway@gmail.com",
                        "TelephoneNo":"6767676767"
                        },
                        {
                            "stuId":"101",
                            "stuName":"Nikhil Kumar",
                            "stuMobNo":"1111111111",
                            "stuEmail":"Nikhil@yahoo.com",
                            "stuStand":"10th"
                            },{
                            "stuId":"102",
                            "stuName":"Akash Kumar",
                            "stuMobNo":"2222222222",
                            "stuEmail":"Akash@gmail.com",
                            "stuStand":"7th"
                            },{
                            "stuId":"103",
                            "stuName":"Rahul Kumar",
                            "stuMobNo":"3333333333",
                            "stuEmail":"Rahul@yahoo.com",
                            "stuStand":"10th"
                            },{
                            "stuId":"104",
                            "stuName":"Nishant Kumar",
                            "stuMobNo":"4444444444",
                            "stuEmail":"Nishant@yahoo.com",
                            "stuStand":"5th"
                            },{
                            "stuId":"105",
                            "stuName":"Kunal singh Rajput",
                            "stuMobNo":"555555555",
                            "stuEmail":"Rajput@yahoo.com",
                            "stuStand":"10th"
                            }
                            ],
                            "branchDetails":[{
                            "BRCode":"PSA001",
                            "BRPRName":"DR.Prashnat singh",
                            "Location":"Shivaji Chowk / Hinjawadi Chowk",
                            "Email":"ShivajiChowk@gmail.com",
                            "TelephoneNo":"2323232323"
                            },{
                            "BRCode":"PPCMCA002",
                            "BRPRName":"DR.vikas singh",
                            "Location":"Mahavir ChowkChinchwad, Pimpri-Chinchwad",
                            "Email":"ChowkChinchwad@gmail.com",
                            "TelephoneNo":"3434343434"
                            },{
                            "BRCode":"PWCEA003",
                            "BRPRName":"ER.Ashutosh Jha",
                            "Location":"Wakadkar Wasti Rd,Casa Imperia",
                            "Email":"CasaImperia@gmail.com",
                            "TelephoneNo":"4545454545"
                            },
                            {
                            "BRCode":"PSA004",
                            "BRPRName":"ER.Gopal singh",
                            "Location":"near Pune Junction railway station",
                            "Email":"punerailway@gmail.com",
                            "TelephoneNo":"6767676767"
                            },
                            {
                                "stuId":"101",
                                "stuName":"Nikhil Kumar",
                                "stuMobNo":"1111111111",
                                "stuEmail":"Nikhil@yahoo.com",
                                "stuStand":"10th"
                                },{
                                "stuId":"102",
                                "stuName":"Akash Kumar",
                                "stuMobNo":"2222222222",
                                "stuEmail":"Akash@gmail.com",
                                "stuStand":"7th"
                                },{
                                "stuId":"103",
                                "stuName":"Rahul Kumar",
                                "stuMobNo":"3333333333",
                                "stuEmail":"Rahul@yahoo.com",
                                "stuStand":"10th"
                                },{
                                "stuId":"104",
                                "stuName":"Nishant Kumar",
                                "stuMobNo":"4444444444",
                                "stuEmail":"Nishant@yahoo.com",
                                "stuStand":"5th"
                                },{
                                "stuId":"105",
                                "stuName":"Kunal singh Rajput",
                                "stuMobNo":"555555555",
                                "stuEmail":"Rajput@yahoo.com",
                                "stuStand":"10th"
                                }
                                ],
                                "branchDetails":[{
                                "BRCode":"PSA001",
                                "BRPRName":"DR.Prashnat singh",
                                "Location":"Shivaji Chowk / Hinjawadi Chowk",
                                "Email":"ShivajiChowk@gmail.com",
                                "TelephoneNo":"2323232323"
                                },{
                                "BRCode":"PPCMCA002",
                                "BRPRName":"DR.vikas singh",
                                "Location":"Mahavir ChowkChinchwad, Pimpri-Chinchwad",
                                "Email":"ChowkChinchwad@gmail.com",
                                "TelephoneNo":"3434343434"
                                },{
                                "BRCode":"PWCEA003",
                                "BRPRName":"ER.Ashutosh Jha",
                                "Location":"Wakadkar Wasti Rd,Casa Imperia",
                                "Email":"CasaImperia@gmail.com",
                                "TelephoneNo":"4545454545"
                                },
                                {
                                "BRCode":"PSA004",
                                "BRPRName":"ER.Gopal singh",
                                "Location":"near Pune Junction railway station",
                                "Email":"punerailway@gmail.com",
                                "TelephoneNo":"6767676767"
                                },
                                {
                                    "stuId":"101",
                                    "stuName":"Nikhil Kumar",
                                    "stuMobNo":"1111111111",
                                    "stuEmail":"Nikhil@yahoo.com",
                                    "stuStand":"10th"
                                    },{
                                    "stuId":"102",
                                    "stuName":"Akash Kumar",
                                    "stuMobNo":"2222222222",
                                    "stuEmail":"Akash@gmail.com",
                                    "stuStand":"7th"
                                    },{
                                    "stuId":"103",
                                    "stuName":"Rahul Kumar",
                                    "stuMobNo":"3333333333",
                                    "stuEmail":"Rahul@yahoo.com",
                                    "stuStand":"10th"
                                    },{
                                    "stuId":"104",
                                    "stuName":"Nishant Kumar",
                                    "stuMobNo":"4444444444",
                                    "stuEmail":"Nishant@yahoo.com",
                                    "stuStand":"5th"
                                    },{
                                    "stuId":"105",
                                    "stuName":"Kunal singh Rajput",
                                    "stuMobNo":"555555555",
                                    "stuEmail":"Rajput@yahoo.com",
                                    "stuStand":"10th"
                                    }
                                    ],
                                    "branchDetails":[{
                                    "BRCode":"PSA001",
                                    "BRPRName":"DR.Prashnat singh",
                                    "Location":"Shivaji Chowk / Hinjawadi Chowk",
                                    "Email":"ShivajiChowk@gmail.com",
                                    "TelephoneNo":"2323232323"
                                    },{
                                    "BRCode":"PPCMCA002",
                                    "BRPRName":"DR.vikas singh",
                                    "Location":"Mahavir ChowkChinchwad, Pimpri-Chinchwad",
                                    "Email":"ChowkChinchwad@gmail.com",
                                    "TelephoneNo":"3434343434"
                                    },{
                                    "BRCode":"PWCEA003",
                                    "BRPRName":"ER.Ashutosh Jha",
                                    "Location":"Wakadkar Wasti Rd,Casa Imperia",
                                    "Email":"CasaImperia@gmail.com",
                                    "TelephoneNo":"4545454545"
                                    },
                                    {
                                    "BRCode":"PSA004",
                                    "BRPRName":"ER.Gopal singh",
                                    "Location":"near Pune Junction railway station",
                                    "Email":"punerailway@gmail.com",
                                    "TelephoneNo":"6767676767"
                                    },
                                    {
                                        "stuId":"101",
                                        "stuName":"Nikhil Kumar",
                                        "stuMobNo":"1111111111",
                                        "stuEmail":"Nikhil@yahoo.com",
                                        "stuStand":"10th"
                                        },{
                                        "stuId":"102",
                                        "stuName":"Akash Kumar",
                                        "stuMobNo":"2222222222",
                                        "stuEmail":"Akash@gmail.com",
                                        "stuStand":"7th"
                                        },{
                                        "stuId":"103",
                                        "stuName":"Rahul Kumar",
                                        "stuMobNo":"3333333333",
                                        "stuEmail":"Rahul@yahoo.com",
                                        "stuStand":"10th"
                                        },{
                                        "stuId":"104",
                                        "stuName":"Nishant Kumar",
                                        "stuMobNo":"4444444444",
                                        "stuEmail":"Nishant@yahoo.com",
                                        "stuStand":"5th"
                                        },{
                                        "stuId":"105",
                                        "stuName":"Kunal singh Rajput",
                                        "stuMobNo":"555555555",
                                        "stuEmail":"Rajput@yahoo.com",
                                        "stuStand":"10th"
                                        }
                                        ],
                                        "branchDetails":[{
                                        "BRCode":"PSA001",
                                        "BRPRName":"DR.Prashnat singh",
                                        "Location":"Shivaji Chowk / Hinjawadi Chowk",
                                        "Email":"ShivajiChowk@gmail.com",
                                        "TelephoneNo":"2323232323"
                                        },{
                                        "BRCode":"PPCMCA002",
                                        "BRPRName":"DR.vikas singh",
                                        "Location":"Mahavir ChowkChinchwad, Pimpri-Chinchwad",
                                        "Email":"ChowkChinchwad@gmail.com",
                                        "TelephoneNo":"3434343434"
                                        },{
                                        "BRCode":"PWCEA003",
                                        "BRPRName":"ER.Ashutosh Jha",
                                        "Location":"Wakadkar Wasti Rd,Casa Imperia",
                                        "Email":"CasaImperia@gmail.com",
                                        "TelephoneNo":"4545454545"
                                        },
                                        {
                                        "BRCode":"PSA004",
                                        "BRPRName":"ER.Gopal singh",
                                        "Location":"near Pune Junction railway station",
                                        "Email":"punerailway@gmail.com",
                                        "TelephoneNo":"6767676767"
                                        }
                ]
              };
            var oModel = new JSONModel(oData);
            this.getView().setModel(oModel,  "genericAlias");


            // var oModel = new JSONModel(sap.ui.require.toUrl("model/Data.json"));
            // console.log("json", oModel);

            // // Setting model to view with alias 'genericAlias'
            // this.getView().setModel(oModel, "genericAlias");
        },

        // When the 'Print' button is clicked, this method is called
        handlePrint: function () {
            var oModelData = this.getView().getModel("genericAlias").getData();
            var sFullHtml = "";

            // Generate header HTML
            sFullHtml += this.getHeaderForm(oModelData);

            // Generate Student Details table
            var sStudentTable = "<table border='1' style='margin-top:150px;width: 1000px;' align='center'>" +
                "<caption style='color:green;font-weight: bold;font-size: large;'>Student Details</caption>" +
                "<tr><th style='color:green'>Student Id</th>" +
                "<th style='color:green'>Student Name</th>" +
                "<th style='color:green'>Student Mobile No.</th>" +
                "<th style='color:green'>Student Email-ID</th>" +
                "<th style='color:green'>Student Standard</th></tr>";

            // Add rows dynamically to the Student Details table
            oModelData.studentDetails.forEach(function (student) {
                sStudentTable += "<tr>" +
                    "<td>" + student.stuId + "</td>" +
                    "<td>" + student.stuName + "</td>" +
                    "<td>" + student.stuMobNo + "</td>" +
                    "<td>" + student.stuEmail + "</td>" +
                    "<td>" + student.stuStand + "</td>" +
                    "</tr>";
            });
            sStudentTable += "</table>";
            sFullHtml += sStudentTable;

            // Generate Branch Details table
            var sBranchTable = "<table border='1' style='margin-top:50px;width: 1000px;' align='center'>" +
                "<caption style='color:green;font-weight: bold;font-size: large;'>Branch Details</caption>" +
                "<tr><th style='color:green'>Branch Code</th>" +
                "<th style='color:green'>Branch Principal Name</th>" +
                "<th style='color:green'>Location</th>" +
                "<th style='color:green'>Email-ID</th>" +
                "<th style='color:green'>Telephone No.</th></tr>";

            // Add rows dynamically to the Branch Details table
            oModelData.branchDetails.forEach(function (branch) {
                sBranchTable += "<tr>" +
                    "<td>" + branch.BRCode + "</td>" +
                    "<td>" + branch.BRPRName + "</td>" +
                    "<td>" + branch.Location + "</td>" +
                    "<td>" + branch.Email + "</td>" +
                    "<td>" + branch.TelephoneNo + "</td>" +
                    "</tr>";
            });
            sBranchTable += "</table>";
            sFullHtml += sBranchTable;

            // Open a new window for printing
            var oWindow = window.open("", "prntExample");
          
            oWindow.document.write(sFullHtml);
            setTimeout(function () {
                oWindow.print();
                oWindow.close();
            }, 1000);
        },

        // Method to generate the header section
        getHeaderForm: function (oModelData) {
            var sModulePath = sap.ui.require.toUrl("print/image/logo.jpg");
            return "<img src='" + sModulePath + "' style='margin-left:60rem' width='100px' height='80px'/>" +
                "<hr/><div>" +
                "<div style='float:left'>" +
                "<p>School Name: " + oModelData.scName + "</p>" +
                "<p>Owner Name: " + oModelData.ownName + "</p>" +
                "<p>Owner Email: " + oModelData.ownMail + "</p>" +
                "</div><div style='float:right'>" +
                "<p>Owner Mobile No: " + oModelData.ownMobile + "</p>" +
                "<p>Owner Status: " + oModelData.ownStatus + "</p>" +
                "<p>School Address: " + oModelData.scaddress + "</p>" +
                "</div></div>";
        }
    });
});
