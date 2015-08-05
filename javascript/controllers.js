/**
 * Created by Chris on 8/4/2015.
 */

angular.module('myApp.form', []).controller('MainController', function ($scope, httpRequest, $filter){
    $scope.formObj = {};
    $scope.submitForm = function(){
        $scope.results = httpRequest.getReq($scope.formObj);
        $scope.results = $filter('sortStart')($scope.results.data);
        //throw $scope.results into some graph library/framework such as d3
        //$scope.results now an array of objects
        $scope.formObj = {};
    };
});

/*
    Assuming this is the result from backend:
    {data:[{
            startTime,
            endTime
            timeStart,
            timeEnd,
            flight#,
            price
        },
        {...},
        ...
    ],
    ...
    }

 */