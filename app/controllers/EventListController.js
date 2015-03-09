/**
 * Created by troy on 3/8/15.
 */

eventsApp.controller('EventListController',
    function ($scope, $location, eventData) {
        $scope.events = eventData.getAllEvents();
    }
)