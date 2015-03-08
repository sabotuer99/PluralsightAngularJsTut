/**
 * Created by troy on 3/7/15.
 */
eventsApp.controller('CacheSampleController',
    function ($scope, myCache){
        $scope.addToCache = function(key, value) {
            myCache.put(key, value);
        };

        $scope.readFromCache = function(key) {
            return myCache.get(key);
        };

        $scope.getCacheStats = function() {
            return myCache.info();
        };
    }
);