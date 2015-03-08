/**
 * Created by troy on 3/3/15.
 */
eventsApp.controller('EventController',
    function ($scope, eventData, $anchorScroll) {

        $scope.snippet = '<span style="color:red">hi there</span>';
        $scope.boolValue = true;
        $scope.sortorder = 'name';

        //$scope.event = eventData.getEvent();

        //this was before using $resource
        //promise unwrapping is deprecated, use .then
        $scope.event = eventData.getEvent().then(function (event) {
            console.log(event);
            $scope.event = event;
        }, function(status) {
            console.log(status);
        });

        $scope.upVoteSession = function (session) {
            session.upVoteCount++;
        };

        $scope.downVoteSession = function (session) {
            session.upVoteCount--;
        }

        $scope.scrollToSession = function() {
            $anchorScroll();
        }

    }
);
