/**
 * Created by troy on 3/8/15.
 */
eventsApp.directive('eventThumbnail', function () {
    return {
        scope: {
            event:"=",
            showDetails: '&'
        },
        restrict: 'E',
        templateUrl:'templates/directives/eventThumbnail.html',
        replace: true
    }
})