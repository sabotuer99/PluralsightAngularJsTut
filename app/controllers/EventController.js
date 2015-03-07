/**
 * Created by troy on 3/3/15.
 */
eventsApp.controller('EventController',
    function ($scope, eventData) {

        $scope.snippet = '<span style="color:red">hi there</span>';
        $scope.boolValue = true;
        $scope.sortorder = 'name';

        $scope.event = eventData.getEvent(function(event) {
            $scope.event = event;
        });

        $scope.upVoteSession = function (session) {
            session.upVoteCount++;
        };

        $scope.downVoteSession = function (session) {
            session.upVoteCount--;
        }

    }
);
