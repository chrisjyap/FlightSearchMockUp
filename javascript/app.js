/**
 * Created by Chris on 8/4/2015.
 */
var myApp = angular.module('myApp', ['myApp.form']);

myApp.filter('sortStart', function(){
    return function(arr){
        return arr.sort(function(a, b){
            if (a.startTime > b.startTime) return 1;
            if (a.startTime < b.startTime) return -1;
            return 0;
        });
    }
});

myApp.factory('httpRequest', function($http, $location){
    return {
        getReq: function(obj) {
            $http.get('url', {params:obj}).then(function(data){
                return data;
            },function(err, statusCode){
                switch(statusCode){
                    case 401:
                        $location.path('/Unauth');
                        break;
                    case 403:
                        $location.path('/Forbidden');
                        break;
                    case 500:
                        $location.path('/ServerErr');
                        break;
                    default:
                        $location.path('/NotFound')
                }
            });
        },
        postReq: function(obj) {
            //posts to url backend. currently not needed
        }
    };
});