/**
 * Created by twhorten on 3/9/2015.
 */

eventsApp.directive('repeatX', function ($document) {
    return {
        //restrict: 'A',
        //link: function(scope, element, attrs, controller){
        //    for(var i = 0; i < Number(attrs.repeatX) - 1; i++) {
        //        element.after($compile(element.clone().attr('repeat-x', 0))(scope));
        //    }
        //}
        compile: function (element, attributes) {

            for (var i = 0; i < Number(attributes.repeatX) - 1; i++) {
                element.after(element.clone().attr('repeat-x', 0));
            }

            console.log($document);
            console.log(element);


            return {
                pre: function (scope, element, attrs, controller) {
                    attrs.$observe('text', function (newValue) {
                        if (newValue === 'Hello World') {
                            element.css('color', 'red');
                        }
                    });
                }
            }
        }
    };
})