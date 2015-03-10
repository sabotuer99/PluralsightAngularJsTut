/**
 * Created by twhorten on 3/10/2015.
 */
describe('calendarHelper', function () {

    beforeEach(module("eventsApp"));

    it('should return January when given a zero', inject(function (calendarHelper) {
        expect(calendarHelper.getMonthName(0)).toBe('January');
    }))
})