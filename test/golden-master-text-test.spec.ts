const { expect } = require ('chai');
import { Item, GildedRose } from '../app/gilded-rose';

describe('Gilded Rose', function () {

    it('test', function() {
        const gildedRose = new GildedRose([

    new Item('Banana', 2, 0),
    new Item('Apple', 5, 2),
    new Item('Chocolate', -1, 5),
    new Item('cereal', 0, 4),
    new Item('Sulfuras, Hand of Ragnaros', 70, 80),
    new Item('Aged Brie', 10, 50),
    new Item('Aged Brie', 10, 40),
    new Item('Aged Brie', -1, 45),
    new Item('Aged Brie', 0, 45),
    new Item('Backstage passes to a TAFKAL80ETC concert', 15, 40),
    new Item('Backstage passes to a TAFKAL80ETC concert', -1, 40),
    new Item('Backstage passes to a TAFKAL80ETC concert', 0, 40),
    new Item('Backstage passes to a TAFKAL80ETC concert', 10, 40),
    new Item('Backstage passes to a TAFKAL80ETC concert', 5, 40),
     ]);
        
     const expectedOutput = [

        new Item('Banana', 1, 0),
        new Item('Apple', 4, 1),
        new Item('Chocolate', -2, 3),
        new Item('cereal', -1, 2),
        new Item('Sulfuras, Hand of Ragnaros', 70, 80),
        new Item('Aged Brie', 9, 50),
        new Item('Aged Brie', 9, 41),
        new Item('Aged Brie', -2, 47),
        new Item('Aged Brie', -1, 47),
        new Item('Backstage passes to a TAFKAL80ETC concert', 14, 41),
        new Item('Backstage passes to a TAFKAL80ETC concert', -2, 0),
        new Item('Backstage passes to a TAFKAL80ETC concert', -1, 0),
        new Item('Backstage passes to a TAFKAL80ETC concert', 9, 42),
        new Item('Backstage passes to a TAFKAL80ETC concert', 4, 43),
         
    ];
     
     const items = gildedRose.updateQuality();
     expect(items).to.deep.have.members(expectedOutput);
    });

});


// Add a master test here