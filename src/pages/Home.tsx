
import { useState, useEffect } from 'react';
import { GroceryItemType, GroceryItemFrequency } from '@/types';
import { AddGroceryForm } from '@/components/AddGroceryForm';
import { GroceryList } from '@/components/GroceryList';
import { Header } from '@/components/Header';
import { List } from 'lucide-react';

const Index = () => {
  const [items, setItems] = useState<GroceryItemType[]>(() => {
    try {
      const savedItems = localStorage.getItem('groceryItems');
      return savedItems ? JSON.parse(savedItems) : [
        { id: '1', name: 'Organic Bananas', purchased: false, frequency: 'weekly' },
        { id: '2', name: 'Whole Wheat Bread', purchased: false, frequency: 'weekly' },
        { id: '3', name: 'Paper Towels', purchased: true, frequency: 'monthly' },
      ];
    } catch (error) {
      console.error("Failed to parse grocery items from localStorage", error);
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('groceryItems', JSON.stringify(items));
  }, [items]);

  const handleAddItem = (name: string) => {
    const newItem: GroceryItemType = {
      id: new Date().toISOString(),
      name,
      purchased: false,
      frequency: 'once',
    };
    setItems(prevItems => [newItem, ...prevItems]);
  };

  const handleTogglePurchased = (id: string) => {
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, purchased: !item.purchased } : item
      )
    );
  };

  const handleDeleteItem = (id: string) => {
    setItems(prevItems => prevItems.filter(item => item.id !== id));
  };
  
  const handleUpdateFrequency = (id: string, frequency: GroceryItemFrequency) => {
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, frequency } : item
      )
    );
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <div className="container mx-auto max-w-2xl p-4 sm:p-8">
        <header className="text-center mb-10">
          <div className="flex items-center justify-center gap-3 mb-2">
            <List className="h-8 w-8 text-primary" />
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
              Grocery List
            </h1>
          </div>
          <p className="text-muted-foreground font-sans">
            Your personal assistant for grocery shopping.
          </p>
        </header>

        <main>
          <AddGroceryForm onAddItem={handleAddItem} />
          <GroceryList 
            items={items} 
            onTogglePurchased={handleTogglePurchased}
            onDeleteItem={handleDeleteItem}
            onUpdateFrequency={handleUpdateFrequency}
          />
        </main>
        
        <footer className="text-center mt-12 text-xs text-muted-foreground">
          <p>Happy shopping!</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
