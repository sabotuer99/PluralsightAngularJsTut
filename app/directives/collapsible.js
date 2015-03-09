/**
 * Created by twhorten on 3/9/2015.
 */

eventsApp.directive('collapsible', function () {
    return {
        restrict: 'E',
        replace: true,
        template: '<div><h4 class="well-title" ng-click="toggleVisibility()">{{title}}</h4><div ng-transclude ng-show="visible"></div></div>',
        controller: function ($scope) {

            $scope.visible = true;

            $scope.toggleVisibility = function () {
                console.log("called toggle visibility!")
                $scope.visible = !$scope.visible;
            }
        },
        transclude: true,
        scope: {
            title: '='
        }
    }
})
