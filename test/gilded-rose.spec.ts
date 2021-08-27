const { expect } = require ('chai');
const { Item, GildedRose } = require ('../app/gilded-rose');

describe('Gilded Rose', function () {

    it('should decrease quality by 1 for normal items before sell by date but not go below zero ', function() {
        const gildedRose = new GildedRose([ new Item('apple', 5, 2), new Item('banana',3,0) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(1);
        expect(items[1].quality).to.equal(0);
    });

    it('should decrease quality by 2 for normal items after sell by date including sell by date is zero but not go below zero ', function() {
        const gildedRose = new GildedRose([ new Item('chocolate', -3, 4), new Item('sweet', -2, 1), new Item('milk', -1, 0),new Item('cereal', 0, 4) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(2);
        expect(items[1].quality).to.equal(0);
        expect(items[2].quality).to.equal(0);
        expect(items[3].quality).to.equal(2);
    });

    it('should increase quality by 1 for Aged Brie but never exceed 50 before sell by date', function() {
        const gildedRose = new GildedRose([ new Item('Aged Brie', 10, 49), new Item('Aged Brie', 10, 50) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(50);
        expect(items[1].quality).to.equal(50);
    });

    it('should increase quality by 2 for Aged Brie but never exceed 50 after sell by date inclding when sell by date is zero', function() {
        const gildedRose = new GildedRose([ new Item('Aged Brie', 10, 49), new Item('Aged Brie', 10, 50),new Item('Aged Brie', 0, 40) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(50);
        expect(items[1].quality).to.equal(50);
        expect(items[2].quality).to.equal(42);
    });

    it('should increase quality by 1 for Backstage passes but never exceed 50 if sell by date is 11 days or more', function() {
        const gildedRose = new GildedRose([ 
        new Item('Backstage passes to a TAFKAL80ETC concert', 11, 40), 
        new Item('Backstage passes to a TAFKAL80ETC concert', 15, 50),
       ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(41);
        expect(items[1].quality).to.equal(50);
    });

    it('should increase quality by 2 for Backstage passes if sell by date is 10 days or less, by + 3 if sell by date is 5 days or less, and to zero when sell by date is zero or less', function() {
        const gildedRose = new GildedRose([ 
            new Item('Backstage passes to a TAFKAL80ETC concert', 10, 40), 
            new Item('Backstage passes to a TAFKAL80ETC concert', 5, 40),
            new Item('Backstage passes to a TAFKAL80ETC concert', 0, 40),
            new Item('Backstage passes to a TAFKAL80ETC concert', 1, 40),
        ]);

        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(42);
        expect(items[1].quality).to.equal(43);
        expect(items[2].quality).to.equal(0);
        expect(items[3].quality).to.equal(43);
    });

    it('should decrease SellIn value by 1 each day except for Sulfuras', function() {
        const gildedRose = new GildedRose([ 
            new Item('Sulfuras, Hand of Ragnaros', 10, 80), 
            new Item('apple', 5, 40),
        ]);

        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).to.equal(10);
        expect(items[1].sellIn).to.equal(4);
       
    });


});
