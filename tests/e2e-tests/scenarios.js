'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function () {

    browser.get('/');

    it('should automatically redirect to events navigating to root', function () {
        expect(browser.getLocationAbsUrl()).toMatch("/events");
    });

    describe('events', function () {

        beforeEach(function () {
            browser.get('/');
        });

        it('should render the events page', function () {
            expect(element.all(by.css('h1')).first().getText()).toMatch(/Events/);
            expect(element.all(by.css('h2')).first().getText()).toMatch(/Angular Boot Camp/);
        });
    });

    describe('event details', function () {

        beforeEach(function () {
            browser.get('/event/2');
        });

        it('should render the event details page', function () {
            expect(element.all(by.css('h2')).first().getText()).toMatch(/CODE CAMP/);
        });

        it('should sessions by name', function () {
            expect(element.all(by.css('h4.well-title')).first().getText()).toMatch(/How To Be Awesome/);
        });

        it('should sessions by name', function () {
            expect(element.all(by.repeater('session in event.sessions')).count()).toBe(5);
        });

        it('should sessions by name', function () {
            element.all(by.cssContainingText('option', 'Introductory')).click();
            expect(element.all(by.repeater('session in event.sessions')).count()).toBe(2);
        });
    });

    //describe('event details', function () {
    //
    //    beforeEach(function () {
    //        browser.get('/event/2');
    //    });
    //
    //    it('should sessions by name', function () {
    //        expect(element.all(by.css('h4 .well-title')).first().getText()).toMatch(/How To Be Awesome/);
    //    });
    //});



});

//describe('event registration app', function () {
//    it('should automatically redirect to /events as teh default route', function () {
//        browser().navigate('/');
//        expect(browser().location().path()).toBe('/events');
//    })
//})

//describe('view1', function () {
//
//    beforeEach(function () {
//        browser.get('index.html#/view1');
//    });
//
//    it('should render view1 when user navigates to /view1', function () {
//        expect(element.all(by.css('h1')).first().getText()).
//            toMatch(/Events/);
//    });
//
//});


//describe('view2', function() {
//
//  beforeEach(function() {
//    browser.get('index.html#/view2');
//  });
//
//
//  it('should render view2 when user navigates to /view2', function() {
//    expect(element.all(by.css('[ng-view] p')).first().getText()).
//      toMatch(/partial for view 2/);
//  });
//
//});


