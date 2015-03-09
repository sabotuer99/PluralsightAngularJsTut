/**
 * Created by troy on 3/3/15.
 */
eventsApp.controller('EventController',
    function ($scope, eventData, $anchorScroll, $routeParams, $route) {

        $scope.snippet = '<span style="color:red">hi there</span>';
        $scope.boolValue = true;
        $scope.sortorder = 'name';

        console.log($route.current.foo);
        console.log($route.current.params.fob);
        console.log($route.current.params.eventId);
        console.log($route.current.pathParams.eventId);
        //$scope.event = eventData.getEvent();

        //this was before using $resource
        //promise unwrapping is deprecated, use .then
        //$scope.event = eventData.getEvent($routeParams.eventId).then(function (event) {
        //    console.log(event);
        //    $scope.event = event;
        //}, function(status) {
        //    console.log(status);
        //});

        $scope.event = $route.current.locals.event;

        $scope.upVoteSession = function (session) {
            session.upVoteCount++;
        };

        $scope.downVoteSession = function (session) {
            session.upVoteCount--;
        }

        $scope.scrollToSession = function() {
            $anchorScroll();
        }

        $scope.reload = function () {
            $route.reload();
        }

    }
);
