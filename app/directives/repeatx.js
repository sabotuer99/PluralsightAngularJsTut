/**
 * Created by twhorten on 3/9/2015.
 *
 * Trying to get the "compile:" version to work with the routing
 * was making me fucking crazy, so I gave up and just made the link
 * function version better (compiles once)
 *
 * also, changing the style to red makes more sense as it's own directive
 *
 * The stand alone version of the sample worked just fine, so I'm at a loss...
 *
 */

eventsApp.directive('repeatX', function ($document, $q, $compile) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs, controller){

            var clone = element.clone();
            var repeatCount = Number(attrs.repeatX);
            clone.removeAttr('repeat-x');
            var repeat = angular.element("<div></div>");


            for(var i = 0; i < repeatCount; i++) {
                repeat.append(clone.clone());
            }

            element.replaceWith($compile(repeat.html())(scope));

        }
        //priority:10000000,
        //compile: function (element, attributes) {
        //
        //    var clone = element.clone();
        //    var repeatCount = Number(attributes.repeatX);
        //
        //    clone.removeAttr('repeat-x');
        //
        //    console.log(clone.toString());
        //    //var repeat = angular.element("<div></div>");
        //
        //
        //    var bucket = angular.element("<div></div>");
        //    element.after(bucket);
        //
        //    for (var i = 0; i < repeatCount; i++) {
        //        bucket.append(clone.clone());
        //    }
        //
        //    //element.replaceWith(angular.element("<div></div>"));
        //
        //    //console.log($document);
        //    //console.log(element);
        //
        //
        //    return {
        //        pre: function (scope, element, attrs, controller) {
        //            attrs.$observe('text', function (newValue) {
        //                if (newValue === 'Hello World') {
        //                    element.css('color', 'red');
        //                }
        //            });
        //        }
        //    }
        //}
    };
}).directive('helloRed', function () {
    return {
        restrict: 'A',
        link: function (scope, element, attrs, controller) {
            attrs.$observe('text', function (newValue) {
                if (newValue === 'Hello World') {
                    element.css('color', 'red');
                }
            });
        }
    }
})