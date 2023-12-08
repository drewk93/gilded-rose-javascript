export class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}



export class Legendary extends Item {
  constructor(name, sellIn, quality){
    super(name, sellIn, quality);// Converts input to a boolean value
  }
  // updateQuality(){
  //   this.sellIn = 0;
  //   this.quality = 0;
  // }
}

export class Cheese extends Item{
  constructor(name, sellIn, quality){
    super(name, sellIn, quality)
  }
  // updateQuality(){
  //   this.sellIn-- // always executes
  //   if (this.sellIn >= 0 && this.quality > 0  && this.quality < 50) {
  //     this.quality++;
  //   }
  //   if(this.sellIn < 0){ // If the quality is less than 0;
  //     this.quality-= 2 // reduce quality
  //   } 
  // }
}

export class Conjured extends Item{
  constructor(name, sellIn, quality){
    super(name, sellIn, quality)
  }
  // updateQuality(){
  //   this.sellIn--
  //   if(this.sellin >= 0 && this.quality >= 0 && this.quality <= 50){
  //     this.quality -= 2
  //   }
  //   if (this.sellIn < 0){
  //     this.quality-= 4
  //   }
  // }
}

export class BackstagePass extends Item{
  constructor(name, sellIn, quality){
    super(name, sellIn, quality)
  }
  // updateQuality(){
  //   this,sellIn--
  //   if (this.sellIn <= 10 && item.sellIn >= 5){
  //     this.quality += 2
  //   } else if (this.sellIn <= 5 && item.sellIn >= 0){
  //     this.quality += 3
  //   } else if (this.sellIn < 0){
  //     item.quality = 0;
  //   }
  // }
}


export let items = [];

items.push(new Item("+5 Dexterity Vest", 10, 20));
items.push(new Cheese("Aged Brie", 2, 0));
items.push(new Item("Elixir of the Mongoose", 5, 7));
items.push(new Legendary("Sulfuras, Hand of Ragnaros", 0, 80));
items.push(new BackstagePass("Backstage passes to a TAFKAL80ETC concert", 0, 20));
items.push(new Conjured("Conjured Mana Cake", 3, 6));

export const updateQuality = () => {
  for (let item of items) {
    // Legendary Items
    if (item instanceof Legendary) {
    continue; // end execution, switch to next item;
    }
    // Cheese Items
    if (item instanceof Cheese){
        item.sellIn--; // decrement sellIn date
        if(item.sellIn >= 0){
          item.quality++
        } else if (item.sellIn < 0)  {
          item.quality-= 2
        }
        item.quality = Math.max(item.quality, 0); // set floor of quality to 0
        continue; // end execution, switch to next item;
    }
    // Conjured Items
    if (item instanceof Conjured) {
      item.sellIn--; // decrement sellIn date
      if (item.sellIn >= 0) {
        item.quality -= 2;
      } else {
        item.quality -= 4;
      }
      item.quality = Math.max(item.quality, 0);  // Set floor value of quality to 0
      continue; // end execution, switch to next item;
    }
    // BackstagePass Item
    if (item instanceof BackstagePass){
      item.sellIn--; // decrement sellIn date
      if(item.sellIn <= 10 && item.sellIn >= 5){
        item.quality += 2
      } else if (item.sellIn <= 5 && item.sellIn >= 0){
        item.quality +=3
      } else if (item.sellIn < 0){
        item.quality = 0;
      }
      item.quality = Math.max(item.quality, 0);  // Set floor value of quality to 0
      continue; // end execution, switch to next item;
    }


    if (item instanceof Item){
      item.sellIn--
      if(item.sellIn < 0){
        item.quality -= 2
      } else{
      item.quality--
      }
      continue;
    }
    }
}

const backstagePassItem = items.find(item => item instanceof BackstagePass);


console.log(backstagePassItem)
console.log('\n')
updateQuality()
console.log(backstagePassItem)
console.log('\n')
