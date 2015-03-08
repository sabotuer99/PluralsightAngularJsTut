/**
 * Created by troy on 3/7/15.
 */
eventsApp.controller('TimeoutSampleController',
    function ($scope, $timeout, $interval){

        //fun exercise but kinda pointless and evil too lol
        //
        //var colors = ["greenyellow", "lawngreen", "lime", "chartreuse"]
        //var index = 0;
        //
        //$interval(function () {
        //    index++;
        //    if(index == colors.length)
        //        index = 0;
        //    $scope.color = colors[index];
        //},200);


        var promise = $timeout( function() {
            $scope.name = "John Doe";
        }, 3000);

        //setTimeout is on a seperate thread, Angular will not know
        //about the model update...
        //setTimeout( function() {
        //    $scope.name = "John Doe";
        //}, 3000);

        $scope.cancel = function() {
            $timeout.cancel(promise);
            console.log("canceled...");
        }

    }
);