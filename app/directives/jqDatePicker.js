/**
 * Created by troy on 3/9/15.
 */

eventsApp.directive('jqDatePicker', function () {
    return {
        restrict: 'A',
        link: function (scope, element, attr) {
            $(element).datepicker();
            console.log("Datepicker applied!");
        }
    }
})
