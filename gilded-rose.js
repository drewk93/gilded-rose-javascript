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
items.push(new BackstagePass("Backstage passes to a TAFKAL80ETC concert", 0, 20));
items.push(new Conjured("Conjured Mana Cake", 3, 6));

// 
// ---FUNCTIONS---
//

// Master Update Quality Function
export const updateQuality = () => {
  for (let item of items) {
    // Basic Items
    if (item.constructor === Item){ // Calls item.constructor directly to avoid hitting subclasses and iterating over them.
      updateItem(item);
      continue;
    }
    // Legendary Items
    if (item instanceof Legendary) { 
      updateLegendary();
      continue; // end execution on item, switch to next item;
    }
    // Cheese Items
    if (item instanceof Cheese){
        updateCheese(item)
        continue; // end execution on item, switch to next item;
    }
    // Conjured Items
    if (item instanceof Conjured) {
      updateConjured(item)
      continue; // end execution on item, switch to next item;
    }
    // BackstagePass Item
    if (item instanceof BackstagePass){
      updateBackstagePass(item);
      continue; // end execution on item, switch to next item;
    }
    // Basic Items
    }
}

// Callback Update Functions

// checks basic items
export const updateItem = (item) => {
  item.sellIn-- // decrement sellIn date
  if(item.sellIn < 0){
    item.quality -= 2
  } else{
  item.quality--
  }
  item.quality = Math.max(item.quality, 0); // Set floor value of quality to 0;
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
}

export const updateConjured = (item) => {
  item.sellIn--; // decrement sellIn date
  if (item.sellIn >= 0) {
    item.quality -= 2;
  } else {
    item.quality -= 4;
  }
  item.quality = Math.max(item.quality, 0);  // Set floor value of quality to 0
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
}