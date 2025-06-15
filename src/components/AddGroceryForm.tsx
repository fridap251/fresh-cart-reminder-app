
import { useState } from 'react';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';

interface AddGroceryFormProps {
  onAddItem: (name: string) => void;
}

export const AddGroceryForm = ({ onAddItem }: AddGroceryFormProps) => {
  const [itemName, setItemName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (itemName.trim()) {
      onAddItem(itemName.trim());
      setItemName('');
    }
  };

  return (
    <Card className="mb-8 shadow-sm">
      <CardContent className="p-4">
        <form onSubmit={handleSubmit} className="flex gap-2">
          <Input
            type="text"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
            placeholder="e.g., Almond Milk"
            className="flex-grow"
          />
          <Button type="submit" size="icon" aria-label="Add item">
            <Plus className="h-4 w-4" />
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
