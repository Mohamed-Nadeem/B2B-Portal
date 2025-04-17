import { Product, Order } from '../types';

export const mockProducts: Product[] = [
  { itemNumber: '50-4110', description: 'BB REGULAR BUN (1x2x30) BS', packSize: '1x2x30', unitOfMeasure: 'BS'},
  { itemNumber: '50-4111', description: 'BB QUARTER POUND (1x2x30) BS', packSize: '1x2x30', unitOfMeasure: 'BS'},
  { itemNumber: '50-4112', description: 'BB BIG MAC BUN (1x1x30) BS', packSize: '1x1x30', unitOfMeasure: 'BS'},
  { itemNumber: '50-4113', description: 'BUN WATER SPLIT NO PRESERVATIVE', packSize: '1x2x20', unitOfMeasure: 'BS'},
  { itemNumber: '50-4114', description: 'BUN BIG & TASTY NO PRESERVATIVE', packSize: '1x2x20', unitOfMeasure: 'BS'},
  { itemNumber: '50-4115', description: 'BUN 4.5 DOUBLE SPLIT (1X12X6)', packSize: '1x12x6', unitOfMeasure: 'BS'},
  { itemNumber: '50-4116', description: 'MCD LONG GLAZED BUN (1X4X16) BS', packSize: '1x4x16', unitOfMeasure: 'BS'},
];

export const mockOrders: Order[] = [
  { id: 'P72A2004423', date: '2025-04-10', value: 100.0, status: 'Delivered' },
  { id: 'P72A2004424', date: '2025-04-12', value: 150.0, status: 'Pending' },
];