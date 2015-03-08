/**
 * Created by troy on 3/7/15.
 */
eventsApp.controller('LocaleSampleController',
    function ($scope, $locale){

        console.log($locale);
        $scope.myDate = Date.now();
        $scope.myFormat = $locale.DATETIME_FORMATS.longDate;


        throw {message: 'error message'};
    }
);