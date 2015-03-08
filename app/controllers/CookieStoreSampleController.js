/**
 * Created by troy on 3/7/15.
 */
eventsApp.controller('CookieStoreSampleController',

    function ($scope, $cookieStore){
        $scope.event = {id: 1, name: 'My Event'};

        $scope.saveEventToCookie = function (event) {
            $cookieStore.put('event', event);
        };

        $scope.getEventFromCookie = function (event) {
            console.log($cookieStore.get('event'));
        };

        $scope.removeEventCookie = function (event) {
            $cookieStore.remove('event');
        };

    }
);