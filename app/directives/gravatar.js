/**
 * Created by twhorten on 3/9/2015.
 */

eventsApp.directive('gravatar', function (gravatarUrlBuilder) {
    return {
        restrict: 'E',
        template: '<img />',
        replace: true,
        link: function (scope, element, attrs, controller) {
            attrs.$observe('email', function (newValue, oldValue) {
                if(newValue !== oldValue) {
                    attrs.$set('src', gravatarUrlBuilder.buildGravatarUrl(newValue));
                }
            });
        }
    }
});