/**
 * Created by troy on 3/6/15.
 */
eventsApp.factory("eventData", function ($resource, $q, $timeout){/*, $http, $log, $q*/
    var resource = $resource('/data/event/:id', {id:'@id'}, {
        "getAll": {method: "GET", isArray:true, params: {something:"foo"}//,
        //"getAllEvents": {method: "GET", isArray:true, url:"/data/event"}
        }});
    return {
        getEvent: function (eventId) {
            var deferred = $q.defer();

            $timeout(function () {
                resource.get({id:eventId},
                function (event) {
                    deferred.resolve(event);
                },
                function (response) {
                    deferred.reject(response);
                });
            }, 0);
            return deferred.promise;
            //
            //replace with resource call
            //
            //var deferred = $q.defer();
            //console.log("before http call...");
            //$http({method: 'GET', url: '/data/event/1'}).
            //    success(function (data, status, headers, config) {
            //        //$log.info(data, status, headers, config);
            //        deferred.resolve(data);
            //    }).
            //    error(function (data, status, headers, config) {
            //        //$log.warn(data, status, headers, config);
            //        deferred.reject(status);
            //    });
            //console.log("after http call...");
            //return deferred.promise;
        },
        save: function(event) {
            var deferred = $q.defer();

            resource.save(event,
            function(response) {deferred.resolve(response);}),
            function(response) {deferred.reject(response);}

            return deferred.promise;
        },
        getAllEvents: function () {
            return resource.query();
        }
    };
});
