/**
 * Created by fer on 26/09/16.
 */
describe('megaNumber tests', function(){

    var $filter, megaNumberFilter;

    beforeEach(module('utilsModule'));

    beforeEach(inject(function(_$filter_){
        $filter = _$filter_;

        megaNumberFilter = $filter('megaNumber');
    }));

    it('1,500,000,000 is converted to 1.5B', function(){
        const value = 1.5 * Math.pow(10,9);
        var result = megaNumberFilter(value);

        expect(result).toBe("1.5B");
    });

    it('1,490,000,000 is rounded to 1.5B', function(){
        const value = 1.49 * Math.pow(10,9);
        var result = megaNumberFilter(value);

        expect(result).toBe("1.5B");
    });

    it('1,550,000,000 is rounded to 1.6B', function(){
        const value = 1.55 * Math.pow(10,9);
        var result = megaNumberFilter(value);

        expect(result).toBe("1.6B");
    });

    it('1,500,000 is converted to 1.5M', function(){
        const value = 1.5 * Math.pow(10,6);
        var result = megaNumberFilter(value);

        expect(result).toBe("1.5M");
    });

    it('1,500 is converted to 1.5K', function(){
        const value = 1.5 * Math.pow(10,3);
        var result = megaNumberFilter(value);

        expect(result).toBe("1.5K");
    });

    it('1,550 is rounded to 1.6K', function(){
        const value = 1.55 * Math.pow(10,3);
        var result = megaNumberFilter(value);

        expect(result).toBe("1.6K");
    });

    it('1,555 is rounded to 1.56K with 2 decimal places', function(){
        const value = 1555;
        var result = megaNumberFilter(value, 2);

        expect(result).toBe("1.56K");
    });

    it('999 is rounded to 1K', function(){
        const value = 999;
        var result = megaNumberFilter(value);

        expect(result).toBe("1K");
    });

    it('990,000 is rounded to 1M', function(){
        const value = 990000;
        var result = megaNumberFilter(value);

        expect(result).toBe("1M");
    });

    it('990,000 is not rounded to 1M if 2 decimal places', function(){
        const value = 990000;
        var result = megaNumberFilter(value, 2);

        expect(result).toBe("990K");
    });

    it('-999 is rounded to -1K', function(){
        const value = -999;
        var result = megaNumberFilter(value);

        expect(result).toBe("-1K");
    });

    it('0 is still 0', function(){
        const value = 0;
        var result = megaNumberFilter(value);

        expect(result).toBe("0");
    });

    it('null is still null', function(){
        var result = megaNumberFilter(null);
        expect(result).toBe(null);
    });

});