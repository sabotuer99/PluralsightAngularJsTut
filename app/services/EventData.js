/**
 * Created by troy on 3/6/15.
 */
eventsApp.factory("eventData", function ($resource, $q){/*, $http, $log, $q*/
    var resource = $resource('/data/event/:id', {id:'@id'}, {"getAll": {method: "GET", isArray:true, params: {something:"foo"}}});
    return {
        getEvent: function () {
            var deferred = $q.defer();

                resource.get({id:1},
                function (event) {
                    deferred.resolve(event);
                },
                function (response) {
                    deferred.reject(response);
                });

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
        }
    };
});
