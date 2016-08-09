/**
 * Created by rush on 8/8/16.
 */
 var testApp = angular.module('testApp', ['dx']);

 testApp.controller('DataController', function DataController($scope) {

   var dataSource = [{
    month: "January",
    calls: 3
}, {
    month: "February",
    calls: 2
}, {
    month: "March",
    calls: 3
}, {
    month: "April",
    calls: 4
}, {
    month: "May",
    calls: 6
}, {
    month: "June",
    calls: 11
}, {
    month: "July",
    calls: 4
},{
    month: "August",
    calls: 4
},{
    month: "September",
    calls: 4
},{
    month: "November",
    calls: 4
},{
    month: "December",
    calls: 4
}];
   $scope.chartOptions = {
      dataSource: dataSource,
      series: {
          argumentField: "month",
          valueField: "calls",
          name: "Call drops",
          type: "bar",
          color: '#ffa500'
      }
  };
   var menuData = [{
     id: "1",
    name: "Log in",
},
{id: "2",
    name: "Monthly Report",}]


  $scope.orientation = "horizontal";
   $scope.menuOptions = {
       dataSource: menuData,
       displayExpr: "name",
       onItemClick: function (data) {
           var item = data.itemData;
           if(item.price) {
               $("#product-details > img").show();
               $("#product-details > img").attr("src", item.iconSrc);
               $("#product-details > .price").text("$" + item.price);
               $("#product-details > .name").text(item.text);
           }
       },
       bindingOptions: {
           showFirstSubmenuMode: "showFirstSubmenuMode",
           orientation: "orientation"
       }
   };


$scope.orientationOptions = {
    items: ["horizontal", "vertical"],
    bindingOptions: {
        value: "orientation"
    }
};


   var agents = [{"id":1,"first_name":"Douglas","last_name":"Hughes","call_duration":67,"salary":48},
{"id":2,"first_name":"Louise","last_name":"Ford","call_duration":59,"salary":98},
{"id":3,"first_name":"Douglas","last_name":"Lawrence","call_duration":39,"salary":43},
{"id":4,"first_name":"Earl","last_name":"Garrett","call_duration":52,"salary":5},
{"id":5,"first_name":"Margaret","last_name":"Parker","call_duration":54,"salary":73},
{"id":6,"first_name":"Patrick","last_name":"Chapman","call_duration":57,"salary":76},
{"id":7,"first_name":"Bobby","last_name":"Warren","call_duration":50,"salary":39},
{"id":8,"first_name":"Gary","last_name":"Lawrence","call_duration":65,"salary":74},
{"id":9,"first_name":"Carol","last_name":"Miller","call_duration":46,"salary":68},
{"id":10,"first_name":"Karen","last_name":"Dixon","call_duration":3,"salary":93},
{"id":11,"first_name":"Lawrence","last_name":"Baker","call_duration":93,"salary":47},
{"id":12,"first_name":"Joseph","last_name":"Moreno","call_duration":19,"salary":24},
{"id":13,"first_name":"Eric","last_name":"Banks","call_duration":11,"salary":37},
{"id":14,"first_name":"Billy","last_name":"Kelly","call_duration":29,"salary":14},
{"id":15,"first_name":"Robert","last_name":"Garrett","call_duration":96,"salary":71},
{"id":16,"first_name":"Sharon","last_name":"Cox","call_duration":65,"salary":76},
{"id":17,"first_name":"Virginia","last_name":"Murphy","call_duration":24,"salary":26},
{"id":18,"first_name":"Cheryl","last_name":"Miller","call_duration":10,"salary":43},
{"id":19,"first_name":"Tammy","last_name":"Williamson","call_duration":27,"salary":85},
{"id":20,"first_name":"Mary","last_name":"Robinson","call_duration":91,"salary":73},
{"id":21,"first_name":"Daniel","last_name":"Welch","call_duration":89,"salary":41},
{"id":22,"first_name":"Ann","last_name":"James","call_duration":92,"salary":92},
{"id":23,"first_name":"Amanda","last_name":"Wallace","call_duration":60,"salary":75},
{"id":24,"first_name":"Sandra","last_name":"Lee","call_duration":52,"salary":92},
{"id":25,"first_name":"Harold","last_name":"Mendoza","call_duration":29,"salary":72},
{"id":26,"first_name":"Teresa","last_name":"Brooks","call_duration":44,"salary":52},
{"id":27,"first_name":"Kathryn","last_name":"Morgan","call_duration":9,"salary":62},
{"id":28,"first_name":"Dennis","last_name":"Reyes","call_duration":25,"salary":30}];


     var agentProperties = {
         dataSource: agents,
         argumentField: "id",
         valueField: "call_duration",
         type: "line",
         showMinMax: true,
         tooltip: {
             format: "fixedPoint"
         }
     };
//
     $scope.line2010 = agentProperties;


 });
