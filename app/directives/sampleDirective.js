/**
 * Created by troy on 3/8/15.
 */

eventsApp.directive('mySample', function ($compile) {
    return {
        scope: {},
        restrict:'E',
        template: "<input type='text' ng-model='sampleData' />{{sampleData}} <br/><br/>"
        //link: function(scope, element, attrs, controller) {
        //    var markup = "<input type='text' ng-model='sampleData' />{{sampleData}} <br/>";
        //    //original tutorial uses .html instead of .append, which didn't work right
        //    //stack overflow got me the answer I needed
        //    angular.element(element).append($compile(markup)(scope));
        //}
    };
});