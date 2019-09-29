export interface Product {
  name: string;
  price: number;
}

// mock data for the app and unit test
export function generateMockProducts(): Product[] {
  return [
    {
      name: 'Bread',
      price: 3.5,
    },
    {
      name: 'Water',
      price: 8,
    },
    {
      name: 'Fruit',
      price: 10,
    },
    {
      name: 'Ice Cream',
      price: 10.8,
    },
    {
      name: 'Orange Juice',
      price: 3.7,
    },
  ];
}
