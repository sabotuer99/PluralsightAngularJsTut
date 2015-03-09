/**
 * Created by twhorten on 3/9/2015.
 */
eventsApp.directive('greeting', function () {
    return {
        restrict: 'E',
        replace: true,
        transclude:true,
        //priority: -1,
        template: "<div><button class=\"btn btn-primary\" ng-click=\"sayHello()\">Say Hello</button><div style=\"display:none\" ng-transclude></div></div>",
        //controller: function ($scope) {
        //    $scope.sayHello = function () {
        //        alert('Hello');
        //    }
        //}
        //controller: '@',
        //name: 'ctrl'
        controller: 'GreetingController'
    }
}).directive('finnish', function () {
    return {
        restrict: 'A',
        require: '^greeting',
        //priority: -1,
        //terminal: true,
        link: function (scope, element, attrs, controller) {
            controller.addGreeting('hei');
        }
    }
}).directive('hindi', function () {
    return {
        restrict: 'A',
        require: '^greeting',
        //priority: -2,
        link: function (scope, element, attrs, controller) {
            controller.addGreeting('नमस्ते');
        }
    }
});

eventsApp.controller('GreetingController', function ($scope){
    var greetings = ['hello'];
    $scope.sayHello = function() {
        alert(greetings.join(", "));
    };
    this.addGreeting = function(greeting) {
        greetings.push(greeting);
    };
});
