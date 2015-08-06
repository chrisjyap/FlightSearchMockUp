/**
 * Created by Chris on 8/5/2015.
 */

angular.module('myApp.services', []).factory('httpRequest', ['$http', '$location', function($http, $location){
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
}]);