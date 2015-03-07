/**
 * Created by troy on 3/6/15.
 */

eventsApp.controller("EditProfileController", function ($scope, gravatarUrlBuilder, md5Hasher){
    $scope.user = {};

    $scope.getGravatarUrl = function(email) {
        return  gravatarUrlBuilder.buildGravatarUrl(email, md5Hasher);
    }
});