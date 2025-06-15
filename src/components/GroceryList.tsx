
import { GroceryItemType, GroceryItemFrequency } from '@/types';
import { GroceryItem } from './GroceryItem';

interface GroceryListProps {
  items: GroceryItemType[];
  onTogglePurchased: (id: string) => void;
  onDeleteItem: (id: string) => void;
  onUpdateFrequency: (id: string, frequency: GroceryItemFrequency) => void;
}

export const GroceryList = ({ items, onTogglePurchased, onDeleteItem, onUpdateFrequency }: GroceryListProps) => {
  const toBuyItems = items.filter(item => !item.purchased);
  const purchasedItems = items.filter(item => item.purchased);

  return (
    <div>
      <section>
        <h2 className="text-xl font-bold text-foreground mb-4">To Buy ({toBuyItems.length})</h2>
        {toBuyItems.length > 0 ? (
          <div className="grid gap-2">
            {toBuyItems.map(item => (
              <GroceryItem
                key={item.id}
                item={item}
                onTogglePurchased={onTogglePurchased}
                onDeleteItem={onDeleteItem}
                onUpdateFrequency={onUpdateFrequency}
              />
            ))}
          </div>
        ) : (
          <p className="text-muted-foreground text-sm">Your list is empty. Add something above!</p>
        )}
      </section>

      {purchasedItems.length > 0 && (
        <section className="mt-8">
          <h2 className="text-xl font-bold text-foreground mb-4">Purchased ({purchasedItems.length})</h2>
          <div className="grid gap-2">
            {purchasedItems.map(item => (
              <GroceryItem
                key={item.id}
                item={item}
                onTogglePurchased={onTogglePurchased}
                onDeleteItem={onDeleteItem}
                onUpdateFrequency={onUpdateFrequency}
              />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};
