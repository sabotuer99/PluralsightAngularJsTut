/**
 * Created by troy on 3/7/15.
 */

eventsApp.factory('$exceptionHandler', function () {
    return function (exception) {
        console.log("exception handled: " + exception.message);
    };
});