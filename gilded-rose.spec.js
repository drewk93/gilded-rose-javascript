import { expect, describe, it } from "vitest";
import { Item, items, updateQuality } from "./gilded-rose.js";

describe("updateQuality", () => {
  it("reduces quality and sellIn of basic items by 1", () => {
    

    const testItem = new Item("basic", 5, 3);
    const testItem2 = new Item("Conjured Sword of Doom", 3, 6 );
    const testItem3 = new Item("Backstage passes to a TAFKAL80ETC concert", 10, 11);
    const testItem4 = new Item("Sulfuras, Hand of Ragnaros", 0, 80);
    const testItem5 = new Item("Aged Brie", 2, 0);
    items.push(testItem, testItem2, testItem3, testItem4, testItem5);

    updateQuality();

    expect(testItem.quality).toBe(2);
    expect(testItem.sellIn).toBe(4);
    expect(testItem2.quality).toBe(4);
    expect(testItem2.sellIn).toBe(2);
    expect(testItem3.quality).toBe(13);
    expect(testItem3.sellIn).toBe(9);
    expect(testItem4.quality).toBe(80);
    expect(testItem4.sellIn).toBe(-1)
    expect(testItem5.quality).toBe(1);
    expect(testItem5.sellIn).toBe(1)
  });
});
