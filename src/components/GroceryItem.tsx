
import { Card, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { Trash2 } from 'lucide-react';
import { GroceryItemType, GroceryItemFrequency } from '@/types';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from '@/lib/utils';

interface GroceryItemProps {
  item: GroceryItemType;
  onTogglePurchased: (id: string) => void;
  onDeleteItem: (id: string) => void;
  onUpdateFrequency: (id: string, frequency: GroceryItemFrequency) => void;
}

const frequencyOptions: { value: GroceryItemFrequency; label: string }[] = [
  { value: 'once', label: 'Once' },
  { value: 'weekly', label: 'Weekly' },
  { value: 'bi-weekly', label: 'Bi-weekly' },
  { value: 'monthly', label: 'Monthly' },
];

export const GroceryItem = ({ item, onTogglePurchased, onDeleteItem, onUpdateFrequency }: GroceryItemProps) => {
  return (
    <Card className={cn("transition-all duration-300 animate-fade-in-up", item.purchased ? 'bg-muted/50' : 'bg-card')}>
      <CardContent className="p-3 flex items-center gap-4">
        <Checkbox
          id={`item-${item.id}`}
          checked={item.purchased}
          onCheckedChange={() => onTogglePurchased(item.id)}
          aria-label={`Mark ${item.name} as purchased`}
        />
        <label
          htmlFor={`item-${item.id}`}
          className={cn(
            "flex-grow text-sm font-medium transition-colors",
            item.purchased ? "text-muted-foreground line-through" : "text-foreground"
          )}
        >
          {item.name}
        </label>

        <Select
          value={item.frequency}
          onValueChange={(value: GroceryItemFrequency) => onUpdateFrequency(item.id, value)}
        >
          <SelectTrigger className="w-[120px] h-8 text-xs">
            <SelectValue placeholder="Frequency" />
          </SelectTrigger>
          <SelectContent>
            {frequencyOptions.map(opt => (
              <SelectItem key={opt.value} value={opt.value} className="text-xs">
                {opt.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 text-muted-foreground hover:text-destructive"
          onClick={() => onDeleteItem(item.id)}
          aria-label={`Delete ${item.name}`}
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  );
};
