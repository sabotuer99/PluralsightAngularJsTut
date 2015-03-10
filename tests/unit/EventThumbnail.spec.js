/**
 * Created by twhorten on 3/10/2015.
 */

describe('eventThumbnail', function () {
    var el, stubShowDetails;

    beforeEach(module('eventsApp'));
    beforeEach(module('templates/directives/eventThumbnail.html'));

    beforeEach(inject(function ($compile, $rootScope) {
        //set up scope
        //ONLY use $rootScope, don't use a new scope
        var scope = $rootScope;
        scope.event = {name: 'Event Name', date: '123', time: '123', location: {address: '123', city: '123', state: '123'}};
        stubShowDetails = sinon.stub();
        scope.myShowDetails = stubShowDetails;

        //create and compile directive
        el = angular.element('<event-thumbnail event="event" show-details="myShowDetails(event)"/>');

        $compile(el)(scope);
        scope.$digest();
        console.log(el[0].outerHTML)
    }));

    it('should bind the data', function () {
        console.log(el);
        expect(el.text()).toContain('Event Name');
    });

    it('should bind to the scopes event', function () {
        //el.click() is not supported
        //$(el).click() doesn't work either...
        el.triggerHandler('click');
        expect(stubShowDetails.called).toBe(true);
    });

});