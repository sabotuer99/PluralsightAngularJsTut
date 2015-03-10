/**
 * Created by twhorten on 3/10/2015.
 */

eventsApp.factory('userResource', ['$resource', function ($resource) {
    var service = $resource('/data/user/:userName', {userName: '@userName'}, {});

    service.queryAll = function (callback) {
        return service.query({}, callback)
    };

    return service;

}]);