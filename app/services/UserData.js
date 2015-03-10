/**
 * Created by twhorten on 3/10/2015.
 */
eventsApp.factory('userData', ['userResource', function (userResource) {
    return {
        getUser: function (userName, callback) {
            return userResource.get({userName:userName}, function (user) {
                if(callback)
                    callback(user);
            })
        }
    }
}]);