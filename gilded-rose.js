export class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}



export let items = [];

items.push(new Item("+5 Dexterity Vest", 10, 20));
items.push(new Item("Aged Brie", 2, 0));
items.push(new Item("Elixir of the Mongoose", 5, 7));
items.push(new Item("Sulfuras, Hand of Ragnaros", 0, 80));
items.push(new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20));
items.push(new Item("Conjured Mana Cake", 3, 6));

export const updateQuality = () => {
  for (let item of items) {
    if (item.quality >= 0){
      item.sellIn-- // Constant decrementing value

      if (item.name === "Sulfuras, Hand of Ragnaros" ){ // return, do not decrement quality.
        continue;
      }
      
      if (item.name === 'Aged Brie' && item.quality <= 50){
          item.quality++
          continue;
      }

      }
      // TAFKAL80ETC concert execution
      if (item.name == 'Backstage passes to a TAFKAL80ETC concert'){ 
        if (item.sellIn <= 10 && item.sellIn >= 5){
          item.quality += 2
        } else if (item.sellIn <= 5 && item.sellIn >= 0){
          item.quality += 3
        } else if (item.sellIn < 0){
          item.quality = 0
        }
        continue;
      }

      // Standard Item Execution
      if (item.sellIn < 0 || item.name.toLowerCase().includes('conjured')){
        item.quality -= 2
      } else {
        item.quality--
      }
    }
}

console.log(items)
updateQuality()
console.log(items)