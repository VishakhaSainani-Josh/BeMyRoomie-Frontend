import React from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';


interface PreferenceComponentProps {
  tags: string[];
  onTagsChange: (selectedTags: string[]) => void;
  onCityChange: (city: string) => void;
  onSubmit: () => void;
  selectedTags: string[];
  selectedCity: string;
}

export const PreferenceComponent: React.FC<PreferenceComponentProps> = ({
  tags,
  onTagsChange,
  onCityChange,
  onSubmit,
  selectedTags,
  selectedCity
}) => {
  const handleTagToggle = (tag: string) => {
    const newTags = selectedTags.includes(tag)
      ? selectedTags.filter(t => t !== tag)
      : [...selectedTags, tag];
    onTagsChange(newTags);
  };

  return (
    <Card className="w-full max-w-md mx-auto mt-10">
      <CardHeader>
        <CardTitle>User Preferences</CardTitle>
        <CardDescription>
          Select your preferences to personalize your experience
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <Label className="mb-3 block">Your Preferences</Label>
            <div className="space-y-2">
              {tags.map((tag) => (
                <div key={tag} className="flex items-center space-x-2">
                  <Checkbox
                    id={tag}
                    checked={selectedTags.includes(tag)}
                    onCheckedChange={() => handleTagToggle(tag)}
                  />
                  <Label 
                    htmlFor={tag} 
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {tag}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          <div>
            <Label htmlFor="city" className="mb-2 block">City</Label>
            <Input 
              id="city"
              placeholder="Enter your city" 
              value={selectedCity}
              onChange={(e) => onCityChange(e.target.value)}
            />
          </div>

          <Button 
            onClick={onSubmit} 
            className="w-full"
            disabled={!selectedCity || selectedTags.length === 0}
          >
            Save Preferences
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};