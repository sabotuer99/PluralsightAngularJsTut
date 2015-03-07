/**
 * Created by twhorten on 3/5/2015.
 */
eventsApp.controller('EditEventController',
    function ($scope, eventData) {
        $scope.saveEvent = function(event, newEventForm) {
            console.log(newEventForm);
            if(newEventForm.$valid) {
                eventData.save(event)
                    .then(
                    function(response) {console.log('success', response)},
                    function(response) {console.log('failure', response)}
                );
            }
        };

        $scope.cancelEdit = function() {
            window.location = "/EventDetails.html";
        };



    });