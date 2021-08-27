export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

export class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    updateQuality() {


        for (let i = 0; i < this.items.length; i++) {

            if (this.items[i].name === 'Aged Brie') {

                if (this.items[i].quality < 50) {
                    this.items[i].quality += 1;
                }

                this.items[i].sellIn -= 1;

                if (this.items[i].quality < 50 && this.items[i].sellIn < 0) {
                    this.items[i].quality += 1;
                }
            }

           else if (this.items[i].name === 'Backstage passes to a TAFKAL80ETC concert') {
                if (this.items[i].quality < 50 && this.items[i].sellIn > 0) {
                this.items[i].quality += 1;
                }
                if (this.items[i].quality < 50 && this.items[i].sellIn < 11) {
                    this.items[i].quality += 1;
                }
                if (this.items[i].quality < 50 && this.items[i].sellIn < 6) {
                    this.items[i].quality += 1;
                }
                
                this.items[i].sellIn -= 1;
                if (this.items[i].sellIn < 0) {
                    this.items[i].quality = 0;
                }
            }

           else if (this.items[i].name === 'Sulfuras, Hand of Ragnaros'){
                //do nothing
            }
            else if (this.items[i].name !== 'Aged Brie'&& this.items[i].name !== 'Backstage passes to a TAFKAL80ETC concert' && this.items[i].name !== 'Sulfuras, Hand of Ragnaros' ) {
                if (this.items[i].quality > 0 ){
                    this.items[i].quality -=1;
                }
                this.items[i].sellIn -= 1;
                if(this.items[i].sellIn <0 && this.items[i].quality > 0) {
                    this.items[i].quality -=1;
                }
            }

        }
        return this.items;

    }
}

        /*for (let i = 0; i < this.items.length; i++) {
    
           // item is not brie and backstage pass so quality should decrease by 1 each day
            if (this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
                //quality of an item is never negative
                if (this.items[i].quality > 0) {
                    //"Sulfuras never has to be sold or decreases in quality"
                    if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
                        this.items[i].quality = this.items[i].quality - 1
                    }
                }
            // item is brie and backstage passes  
            } else {
                //quality of an item is never more than 50
                if (this.items[i].quality < 50) {
                    this.items[i].quality = this.items[i].quality + 1
                    // item is backstage pass
                    if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
                        // quality should increase by 2 when there are 10 days or less?
                        if (this.items[i].sellIn < 11) {
                            if (this.items[i].quality < 50) {
                                this.items[i].quality = this.items[i].quality + 1
                            }
                        }
                        // quality should increase by 3 when there are 5 days or less?
                        if (this.items[i].sellIn < 6) {
                            if (this.items[i].quality < 50) {
                                this.items[i].quality = this.items[i].quality + 1
                            }
                        }
                    }
                }
            }
            // if item is not "Sulfuras", then Selln value decreases by 1 each day
            if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
                this.items[i].sellIn = this.items[i].sellIn - 1;
            }
            // sell by date has passed
            if (this.items[i].sellIn < 0) {
                if (this.items[i].name != 'Aged Brie') {
                    if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
                       // item is not aged brie or backstage passes, shouldn't quality degrade twice as fast?
                       // quality of an item is never negative
                       if (this.items[i].quality > 0) {
                            if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
                                this.items[i].quality = this.items[i].quality - 1
                            }
                        }
                    // for backstage passes, quality drops to 0 after the concert
                    } else {
                        this.items[i].quality = this.items[i].quality - this.items[i].quality
                    }
                } else {
                    // quality of an item is never more than 50, aged brie increases quality by 1 again after sell by date
                    if (this.items[i].quality < 50) {
                        this.items[i].quality = this.items[i].quality + 1
                    }
                }
            }
        }
    
        return this.items;
    }
    }*/

    const gildedRose = new GildedRose([
        new Item('sweet', -2, 1),
        new Item('Banana', 2, 0),
        new Item('Apple', 5, 2),
        new Item('Chocolate', -1, 2),
        new Item('cereal', 0, 4),
        new Item('Sulfuras, Hand of Ragnaros', 70, 80),
        new Item('Aged Brie', 10, 49),
        new Item('Aged Brie', 10, 40),
        new Item('Aged Brie', -1, 45),
        new Item('Aged Brie', 0, 45),
        new Item('Backstage passes to a TAFKAL80ETC concert', 15, 40),
        new Item('Backstage passes to a TAFKAL80ETC concert', -1, 40),
        new Item('Backstage passes to a TAFKAL80ETC concert', 10, 40),
        new Item('Backstage passes to a TAFKAL80ETC concert', 5, 40),
    ]);

    console.log(gildedRose.updateQuality());