
export type GroceryItemFrequency = 'once' | 'weekly' | 'bi-weekly' | 'monthly';

export type GroceryItemType = {
  id: string;
  name: string;
  purchased: boolean;
  frequency: GroceryItemFrequency;
};
