/**
 * Created by twhorten on 3/5/2015.
 */
eventsApp.controller('EditEventController',
    function ($scope) {
        $scope.saveEvent = function(event, newEventForm) {
            console.log(newEventForm);
            if(newEventForm.$valid) {
                window.alert("event" + event.name + " saved!");
            }
        };

        $scope.cancelEdit = function() {
            window.location = "/EventDetails.html";
        };



    });