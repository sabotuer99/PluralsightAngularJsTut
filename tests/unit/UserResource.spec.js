/**
 * Created by twhorten on 3/10/2015.
 */

describe('userResource', function () {

    var scope;

    beforeEach(module('eventsApp'));

    beforeEach(inject (function ($rootScope) {
        scope = $rootScope.$new();
    }));

    describe('get', function () {

        it('should issue a GET request to /data/user/bob when the username is bob', inject(function(userResource, $httpBackend, $rootScope) {
            $httpBackend.when('GET','/data/user/bob').respond({name: 'Robert'});
            var user = userResource.get({userName: 'bob'});
            $httpBackend.flush();

            expect(user.name).toBe('Robert');
        }))
    })
})