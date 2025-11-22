import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Trash2, Plus } from 'lucide-react';

export interface FilterItem {
  id: string;
  field: string;
  operator: '>' | '=' | '<' | '>=' | '<=';
  value: string;
}

export function Filter() {
  const [filters, setFilters] = useState<FilterItem[]>([
    { id: '1', field: 'id', operator: '=', value: '' }
  ]);

  const operators: Array<'>' | '=' | '<' | '>=' | '<='> = ['>', '=', '<', '>=', '<='];

  const addFilter = () => {
    const newId = Math.random().toString(36).substr(2, 9);
    setFilters([...filters, { id: newId, field: '', operator: '=', value: '' }]);
  };

  const removeFilter = (id: string) => {
    if (filters.length > 1) {
      setFilters(filters.filter(f => f.id !== id));
    }
  };

  const updateFilter = (id: string, key: keyof FilterItem, val: string) => {
    setFilters(filters.map(f => 
      f.id === id ? { ...f, [key]: val } : f
    ));
  };

  const handleApplyFilters = () => {
    const activeFilters = filters.filter(f => f.field && f.value);
    console.log('Applying filters:', activeFilters);
    // TODO: Send filters to backend
  };

  const handleClearFilters = () => {
    setFilters([{ id: '1', field: 'id', operator: '=', value: '' }]);
  };

  return (
    <div className="flex flex-col justify-center items-center py-20 px-4 lg:px-40">
      <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance mb-4">
        Advanced Filters
      </h1>
      
      <p className="text-muted-foreground text-lg text-center mb-8">
        Create custom filters to query the dataset
      </p>

      <Card className="w-full max-w-2xl p-6">
        <div className="space-y-4">
          {filters.map((filter) => (
            <div key={filter.id} className="flex gap-3 items-end">
              <div className="flex-1">
                <label className="text-sm font-medium">Field</label>
                <Input
                  placeholder="e.g., id, age, trial_type"
                  value={filter.field}
                  onChange={(e) => updateFilter(filter.id, 'field', e.target.value)}
                  className="mt-1"
                />
              </div>

              <div className="w-24">
                <label className="text-sm font-medium">Operator</label>
                <Select value={filter.operator} onValueChange={(val) => updateFilter(filter.id, 'operator', val)}>
                  <SelectTrigger className="mt-1">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {operators.map(op => (
                      <SelectItem key={op} value={op}>
                        {op}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="flex-1">
                <label className="text-sm font-medium">Value</label>
                <Input
                  placeholder="Enter value"
                  value={filter.value}
                  onChange={(e) => updateFilter(filter.id, 'value', e.target.value)}
                  className="mt-1"
                />
              </div>

              <button
                onClick={() => removeFilter(filter.id)}
                disabled={filters.length === 1}
                className="p-2 hover:bg-red-50 rounded-md disabled:opacity-50 disabled:cursor-not-allowed text-red-600 hover:text-red-700"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        <div className="flex gap-3 mt-6 pt-6 border-t">
          <Button
            onClick={addFilter}
            variant="outline"
            className="flex items-center gap-2"
          >
            <Plus className="w-4 h-4" />
            Add FilterItem
          </Button>
          
          <Button onClick={handleApplyFilters} className="flex-1">
            Apply Filters
          </Button>

          <Button
            onClick={handleClearFilters}
            variant="ghost"
          >
            Clear All
          </Button>
        </div>
      </Card>

      <div className="mt-8 text-sm text-muted-foreground max-w-2xl">
        <p className="font-semibold mb-2">Tips:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Enter field names to filter by (e.g., id, age, temperature)</li>
          <li>Choose an operator: equals (=), greater than (&gt;), less than (&lt;), greater or equal (&gt;=), or less or equal (&lt;=)</li>
          <li>Add multiple filters to refine your search</li>
          <li>Click Apply Filters to execute the query</li>
        </ul>
      </div>
    </div>
  );
}
