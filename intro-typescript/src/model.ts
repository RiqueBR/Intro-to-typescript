let gradualTyping = "This value could be a number but I'm assigning it to be a string adding the 'any' keyword" as any;

let displayName: string = "Jess's standing desk";
let inventoryType: string = "furniture";
let trackingNumber: string = "FD123455";
let createDate: Date = new Date();
let originalCost: number | string = 425;

// This could also be written as
type Cost = number | string
let newCost: Cost = 650

if(typeof originalCost === "number") {
  let cost: number = originalCost
} else {
  let anotherCost = originalCost
}

enum InventoryItemType {
  Computer = "computer",
  Furniture = "furniture"
}

interface InventoryItem {
  displayName: string;
  inventoryType: "computer" | "furniture";
  readonly trackingNumber: string; // readonly won't allow this property to be reassigned
  createDate: Date;
  originalCost?: number; // Question mark makes property optional

  addNote?: (note: string) => string;
}

function getInventoryItem(trackingNumber: string): InventoryItem {
  return null;
}

function saveInventoryItem(item: InventoryItem) {

}

let inventoryItem = getInventoryItem(trackingNumber);

let updatedInventoryItem = inventoryItem;

inventoryItem.createDate = new Date();

saveInventoryItem({
  displayName: "MacBook Pro 15 Retina",
  inventoryType: "computer",
  trackingNumber: "MBP123456",
  createDate: new Date(),
  originalCost: 1449
});