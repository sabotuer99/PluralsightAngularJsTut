/**
 * Created by troy on 3/8/15.
 */
eventsApp.directive('upvote', function () {
    return {
        scope: {
            count:"=",
            upvote:"&",
            downvote:"&"
        },
        restrict: 'E',
        templateUrl:'/templates/directives/upvote.html',
        replace: true
    }
})