import { expect, describe, it } from "vitest";
import { BackstagePass, Conjured, Cheese, Legendary, Item, items, updateQuality, updateItem, updateLegendary, updateCheese, updateConjured, updateBackstagePass} from "./gilded-rose.js";

describe("updateQuality", () => {
  it("executes specifics updates based on that item's subclass", () => { 

    const testBasic = new Item("basic", 5, 3);
    const testConjured = new Conjured("Conjured Sword of Doom", 3, 6 );
    const testBackstagePass = new BackstagePass("Backstage passes to a TAFKAL80ETC concert", 10, 11);
    const testLegendary = new Legendary("Sulfuras, Hand of Ragnaros", 0, 80);
    const testCheese = new Cheese("Aged Brie", 2, 0);
    items.push(testBasic, testConjured, testBackstagePass, testLegendary, testCheese);
    updateQuality();
    expect(testBasic.quality).toBe(2);
    expect(testBasic.sellIn).toBe(4);
    expect(testConjured.quality).toBe(4);
    expect(testConjured.sellIn).toBe(2);
    expect(testBackstagePass.quality).toBe(13);
    expect(testBackstagePass.sellIn).toBe(9);
    expect(testLegendary.quality).toBe(80);
    expect(testLegendary.sellIn).toBe(0);
    expect(testCheese.quality).toBe(1);
    expect(testCheese.sellIn).toBe(1);
  });
});

describe("updateQuality", () => {
  it("executes specific updates based on that item's subclass", () => {
    const testBasic = new Item("+5 Dexterity Vest", 10, 20);
    const testConjured = new Conjured("Conjured Sword of Doom", 3, 6 );
    const testBackstagePass = new BackstagePass("Backstage passes to a TAFKAL80ETC concert", 15, 20);
    const testLegendary = new Legendary("Sulfuras, Hand of Ragnaros", 0, 80);
    const testCheese = new Cheese("Aged Brie", 2, 0);

    items.push(testBasic, testConjured, testBackstagePass, testLegendary, testCheese);
    updateQuality(15);

    expect(testBasic.quality).toBe(0);
    expect(testBasic.sellIn).toBe(-5);
    expect(testConjured.quality).toBe(0);
    expect(testConjured.sellIn).toBe(-12);
    expect(testBackstagePass.quality).toBe(47);
    expect(testBackstagePass.sellIn).toBe(0);
    expect(testLegendary.quality).toBe(80);
    expect(testLegendary.sellIn).toBe(0);
    expect(testCheese.quality).toBe(0);
    expect(testCheese.sellIn).toBe(-13);
  });
})

describe("updateItem", () => {
  it ("reduces quality and sellIn of basic items by 1", () => {

    const item = new Item("basic", 5, 3);
    updateItem(item)
    expect(item.quality).toBe(2);
    expect(item.sellIn).toBe(4);

  })
});

describe("updateItem", () => {
  it("reduces quality and sellIn of basic items by 1", () => {
    const item = new Item("+5 Dexterity Vest", 10, 20);
    updateItem(item, 2)
    expect(item.quality).toBe(18);
    expect(item.sellIn).toBe(8);
  })
})

describe("updateLegendary", () => {
  it ("As 'Legendary' item, does not reduce quality and leaves the sell by date to default", () => {
    const item = new Legendary("Sulfuras, Hand of Ragnaros", 0, 80);
    updateLegendary(item);
    expect(item.quality).toBe(80);
    expect(item.sellIn).toBe(0)
  })
})

describe("updateCheese", () => {
  it("As sellIn decreases by 1 day, quality increases by 1. After sellIn is less than 0, quality then decreases by 1.", () => {
    const item = new Cheese("Aged Brie", 2, 0);
    updateCheese(item);
    expect(item.quality).toBe(1);
    expect(item.sellIn).toBe(1);
  })
})

describe("updateConjured", () => {
  it("As sellIn decreases by 1, the quality decreases by 2. After sellIn is less than 0, quality decreases by 4", () => {
    const item = new Conjured("Conjured Sword of Doom", 3, 6 );
    updateConjured(item);
    expect(item.quality).toBe(4);
    expect(item.sellIn).toBe(2);
  })
})

describe("updateBackstagePass", ()=> {
  it("When item is between 10 and 5 days, value increases by 2. When item is between 5 and 0 days, value increase by 3.", () => {
    const item = new BackstagePass("Backstage passes to a TAFKAL80ETC concert", 10, 11);
    updateBackstagePass(item);
    expect(item.quality).toBe(13);
    expect(item.sellIn).toBe(9);
  })
})