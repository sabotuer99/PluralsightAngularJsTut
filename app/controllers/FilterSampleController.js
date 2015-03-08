/**
 * Created by troy on 3/7/15.
 */
eventsApp.controller('FilterSampleController',
    //function ($scope, $filter){
    //    $scope.data = {};
    //
    //    var durations = $filter('durations');
    //    $scope.data.duration1 = durations(1);
    //    $scope.data.duration2 = durations(2);
    //    $scope.data.duration3 = durations(3);
    //    $scope.data.duration4 = durations(4);
    //}

    function ($scope, durationsFilter){
        $scope.data = {};

        var durations = durationsFilter;
        $scope.data.duration1 = durations(1);
        $scope.data.duration2 = durations(2);
        $scope.data.duration3 = durations(3);
        $scope.data.duration4 = durations(4);
    }
);