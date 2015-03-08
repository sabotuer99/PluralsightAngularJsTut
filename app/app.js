/**
 * Created by troy on 3/3/15.
 */
'use strict';

var eventsApp = angular.module('eventsApp', ['ngSanitize', 'ngResource', 'ngCookies', 'ngRoute'])
    .config(function($routeProvider) {
        $routeProvider.when('/newEvent',
            {
                templateUrl:'templates/newEvent.html',
                controller: 'EditEventController'
            })
            .when('/editProfile',
            {
                templateUrl:'templates/editProfile.html',
                controller: 'EditProfileController'
            })
            .when('/eventDetails',
            {
                templateUrl:'templates/eventDetails.html',
                controller: 'EventController'
            });
    });
    //.factory('myCache', function($cacheFactory) {
    //    return $cacheFactory('myCache', {capacity:3});
    //})