/**
 * Created by troy on 3/3/15.
 */
'use strict';

var eventsApp = angular.module('eventsApp', ['ngSanitize', 'ngResource'])
    .factory('myCache', function($cacheFactory) {
        return $cacheFactory('myCache', {capacity:3});
    })