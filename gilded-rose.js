//
// ---CLASSES---
//


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
}

export class Cheese extends Item{
  constructor(name, sellIn, quality){
    super(name, sellIn, quality)
  }
}

export class Conjured extends Item{
  constructor(name, sellIn, quality){
    super(name, sellIn, quality)
  }
}

export class BackstagePass extends Item{
  constructor(name, sellIn, quality){
    super(name, sellIn, quality)
  }
}

//
// ---ITEM INSTANCES---
// 

// item array to receive all item instances
export let items = [];
// instances
items.push(new Item("+5 Dexterity Vest", 10, 20));
items.push(new Cheese("Aged Brie", 2, 0));
items.push(new Item("Elixir of the Mongoose", 5, 7));
items.push(new Legendary("Sulfuras, Hand of Ragnaros", 0, 80));
items.push(new BackstagePass("Backstage passes to a TAFKAL80ETC concert",15 , 20));
items.push(new Conjured("Conjured Mana Cake", 3, 6));

// 
// ---FUNCTIONS---
//

// Master Update Quality Function
export const updateQuality = (days) => {
  let day = 1
  do {
    items.forEach(item => {
      if (item.constructor === Item) {
        updateItem(item);
      } else if (item instanceof Legendary) {
        updateLegendary();
      } else if (item instanceof Cheese) {
        updateCheese(item);
      } else if (item instanceof Conjured) {
        updateConjured(item);
      } else if (item instanceof BackstagePass) {
        updateBackstagePass(item);
      }
    });
    day++
  }while(day <= days)
}

// Callback Update Functions

// checks basic items
export const updateItem = (item, days) => {
  item.sellIn-- // decrement sellIn date
  if(item.sellIn < 0){
    item.quality -= 2
  } else{
  item.quality--
  }
  item.quality = Math.max(item.quality, 0); // Set floor value of quality to 0;
  item.quality = Math.min(item.quality, 50); // Set ceiling value of quality to 50
}

export const updateLegendary = (item) =>{} // Implicit return;

export const updateCheese = (item) =>{
  item.sellIn--; // decrement sellIn date
  if(item.sellIn >= 0){
    item.quality++
  } else if (item.sellIn < 0)  {
    item.quality-= 2
  }
  item.quality = Math.max(item.quality, 0); // set floor of quality to 0
  item.quality = Math.min(item.quality, 50); // Set ceiling value of quality to 50
}

export const updateConjured = (item) => {
  item.sellIn--; // decrement sellIn date
  if (item.sellIn >= 0) {
    item.quality -= 2;
  } else if (item.sellIn < 0){
    item.quality -= 4;
  }
  item.quality = Math.max(item.quality, 0);  // Set floor value of quality to 0
  item.quality = Math.min(item.quality, 50); // Set ceiling value of quality to 50
}

export const updateBackstagePass = (item) => {
  item.sellIn--; // decrement sellIn date
  if(item.sellIn <= 10 && item.sellIn >= 5){
    item.quality += 2
  } else if (item.sellIn <= 5 && item.sellIn >= 0){
    item.quality +=3
  } else if (item.sellIn < 0){
    item.quality = 0;
  }
  item.quality = Math.max(item.quality, 0); // Set floor value of quality to 0
  item.quality = Math.min(item.quality, 50); // Set ceiling value of quality to 50
}

console.log(items)
updateQuality(15)
console.log(items)