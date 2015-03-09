/**
 * Created by troy on 3/8/15.
 */

eventsApp.controller('MainMenuController',
    function ($scope, $location, eventData) {
        $scope.createEvent = function () {
            console.log('absUrl: ', $location.absUrl());
            console.log('protocol: ', $location.protocol());
            console.log('port: ', $location.port());
            console.log('host: ', $location.host());
            console.log('path: ', $location.path());
            console.log('search: ', $location.search());
            console.log('hash: ', $location.hash());
            console.log('url: ', $location.url());

            //$location.replace();
            $location.url('/newEvent');
        };
    });