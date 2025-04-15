export interface Product {
  id: number;
  name: string;
  price: number;
}
  
  export const mockProducts: Product[] = [
  { id: 1, name: 'Burger Bun', price: 2.5 },
  { id: 2, name: 'White Bread', price: 3.0 },
  { id: 3, name: 'Croissant', price: 4.0 },
];