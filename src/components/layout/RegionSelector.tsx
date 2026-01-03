import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useRegion } from '@/contexts/RegionContext';
import { Globe } from 'lucide-react';

export default function RegionSelector() {
  const { currentRegion, setRegion, regions } = useRegion();

  return (
    <Select value={currentRegion.code} onValueChange={setRegion}>
      <SelectTrigger className="w-auto gap-2 border-none bg-transparent hover:bg-muted/50 h-9 px-2">
        <Globe className="h-4 w-4 text-foreground/70" />
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {regions.map((region) => (
          <SelectItem key={region.code} value={region.code}>
            <span className="flex items-center gap-2">
              <span>{region.name}</span>
              <span className="text-muted-foreground">({region.currencySymbol})</span>
            </span>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}