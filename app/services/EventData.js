/**
 * Created by troy on 3/6/15.
 */
eventsApp.factory("eventData", function ($http, $log, $q) {
    return {
        getEvent: function () {
            var deferred = $q.defer();
            console.log("before http call...")
            $http({method: 'GET', url: '/data/event/1.json'}).
                success(function (data, status, headers, config) {
                    //$log.info(data, status, headers, config);
                    deferred.resolve(data);
                }).
                error(function (data, status, headers, config) {
                    //$log.warn(data, status, headers, config);
                    deferred.reject(status);
                });
            console.log("after http call...")
            return deferred.promise;
        }
    };
});
