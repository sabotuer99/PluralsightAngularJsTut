/**
 * Created by troy on 3/6/15.
 */

eventsApp.controller("EditProfileController", function ($scope, gravatarUrlBuilder){
    $scope.user = {};

    $scope.getGravatarUrl = function(email) {
        return  gravatarUrlBuilder.buildGravatarUrl(email);
    }
});