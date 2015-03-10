/**
 * Created by troy on 3/9/15.
 */

describe('EventListController', function () {
    var scope, $controllerConstructor, mockEventData;

    mockEventData = {getAllEvents: function () {return {};}};

    beforeEach(module("eventsApp"));

    beforeEach(inject (function ($controller, $rootScope) {
        scope = $rootScope.$new();
        var testSinon = sinon.stub({test: true});
        console.log(testSinon);
        //mockEventData = sinon.stub({getAllEvents: function () {}});
        $controllerConstructor = $controller;
    }));

    it('should set the scope events to the result of eventData.getAllEvents', function() {
        var mockEvents = {};
        //mockEventData.getAllEvents.returns(mockEvents);

        var ctrl = $controllerConstructor("EventListController",
            {$scope: scope, $location: {}, eventData: mockEventData})

        expect(scope.events).toBeTruthy(mockEvents);
    })
})