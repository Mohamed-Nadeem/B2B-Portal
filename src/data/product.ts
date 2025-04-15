export interface Product {
  itemNumber: string;
  description: string;
  packSize: string;
  unitOfMessure: string;
  quantity: number;
}
  
export const mockProducts: Product[] = [
  // { id: 1, name: 'Burger Bun', price: 2.5 },
  // { id: 2, name: 'White Bread', price: 3.0 },
  // { id: 3, name: 'Croissant', price: 4.0 },
  { itemNumber: '50-4110', description: 'BB REGULAR BUN (1x2x30) BS', packSize: '1x2x30', unitOfMessure: 'BS', quantity: 0 },
  { itemNumber: '50-4111', description: 'BB QUARTER POUND (1x2x30) BS', packSize: '1x2x30', unitOfMessure: 'BS', quantity: 0 },
  { itemNumber: '50-4112', description: 'BB BIG MAC BUN (1x1x30) BS', packSize: '1x1x30', unitOfMessure: 'BS', quantity: 0 },
  { itemNumber: '50-4113', description: 'BUN WATER SPLIT NO PRESERVATIVE', packSize: '1x2x20', unitOfMessure: 'BS', quantity: 0 },
  { itemNumber: '50-4114', description: 'BUN BIG & TASTY NO PRESERVATIVE', packSize: '1x2x20', unitOfMessure: 'BS', quantity: 0 },
  { itemNumber: '50-4115', description: 'BUN 4.5 DOUBLE SPLIT (1X12X6)', packSize: '1x12x6', unitOfMessure: 'BS', quantity: 0 },
  { itemNumber: '50-4116', description: 'MCD LONG GLAZED BUN (1X4X16) BS', packSize: '1x4x16', unitOfMessure: 'BS', quantity: 0 },
];