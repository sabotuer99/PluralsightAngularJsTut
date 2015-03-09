/**
 * Created by troy on 3/8/15.
 */
eventsApp.directive('dateKeys', function () {
        return {
            restrict: 'A',
            link: function (scope, element, attrs, controller) {
                element.on('keydown', function (event) {
                    if( isNumericKeyCode(event.keyCode)
                    || isForwardSlashKeyCode(event.keyCode)
                    || isNavigationKeyCode(event.keyCode)) {
                        console.log("valid keyCode!");
                        return true;
                    }
                    console.log("invalid Key, try again!");
                    event.stopPropagation();
                    event.preventDefault();
                    return false;
                });
            }
        };

        function isNumericKeyCode(keyCode) {
            return (keyCode >= 48 && keyCode <= 57)
                || (keyCode >= 96 && keyCode <= 105);
        }
        function isForwardSlashKeyCode(keyCode) {
            return keyCode == 191;
        }
        function isNavigationKeyCode(keyCode) {
            switch (keyCode) {
                case 8:  //backspace
                case 35: //end
                case 36: //home
                case 37: //left
                case 38: //up
                case 39: //right
                case 40: //down
                case 45: //ins
                case 46: //del
                    return true;
                default:
                    return false;
            }
        }
    });