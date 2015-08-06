/**
 * Created by Chris on 8/4/2015.
 */
var myApp = angular.module('myApp', ['myApp.form', 'myApp.services']);

myApp.filter('sortStart', function(){
    return function(arr){
        return arr.sort(function(a, b){
            if (a.startTime > b.startTime) return 1;
            if (a.startTime < b.startTime) return -1;
            return 0;
        });
    }
});
