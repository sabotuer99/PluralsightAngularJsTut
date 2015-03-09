/**
 * Created by troy on 3/3/15.
 */
'use strict';

var eventsApp = angular.module('eventsApp', ['ngSanitize', 'ngResource', 'ngCookies', 'ngRoute'])
    .config(function($routeProvider, $locationProvider) {
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
            .when('/event/:eventId',
            {
                foo:'bar',
                templateUrl:'templates/eventDetails.html',
                controller: 'EventController',
                resolve: {
                    event: function ($q, $route, eventData) {
                        var deferred = $q.defer();
                        eventData. getEvent($route.current.pathParams.eventId)
                            .then(function (event) { deferred.resolve(event)});
                        return deferred.promise;
                    }
                }
            })
            .when('/events',
            {
                templateUrl:'templates/eventList.html',
                controller: 'EventListController'
            })
            .when('/hello',
            {
                template:'<h1>Hello World</h1>',
                controller: 'EventListController'
            })
            .when('/sampleDirective',
            {
                templateUrl:'templates/sampleDirective.html',
                controller: 'SampleDirectiveController'
            })
            .otherwise({redirectTo: '/events'});
        $locationProvider.html5Mode(true);
    });
    //.factory('myCache', function($cacheFactory) {
    //    return $cacheFactory('myCache', {capacity:3});
    //})