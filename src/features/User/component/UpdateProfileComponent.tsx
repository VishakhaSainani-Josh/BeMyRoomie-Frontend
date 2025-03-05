import React, { useState } from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { UpdateProfileComponentProps } from '@/shared/types/types';




export const UpdateProfileComponent: React.FC<UpdateProfileComponentProps> = ({
  initialProfile,
  availableTags,
  onSubmit
}) => {
  const [profile, setProfile] = useState(initialProfile);

  const handleInputChange = (field: keyof typeof profile, value: string) => {
    setProfile(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleTagToggle = (tag: string) => {
    setProfile(prev => ({
      ...prev,
      tags: prev.tags.includes(tag)
        ? prev.tags.filter(t => t !== tag)
        : [...prev.tags, tag]
    }));
  };

  const handleSubmit = () => {
    onSubmit(profile);
  };

  return (
    <Card className="w-full max-w-md mx-auto mt-10">
      <CardHeader>
        <CardTitle>Update Profile</CardTitle>
        <CardDescription>
          Edit your personal information and preferences
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input 
              id="name"
              value={profile.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              placeholder="Enter your name"
            />
          </div>

          <div>
            <Label htmlFor="email">Email</Label>
            <Input 
              id="email"
              type="email"
              value={profile.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              placeholder="Enter your email"
            />
          </div>

          <div>
            <Label htmlFor="phone">Phone</Label>
            <Input 
              id="phone"
              type="tel"
              value={profile.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              placeholder="Enter your phone number"
            />
          </div>

          <div>
            <Label htmlFor="gender">Gender</Label>
            <Select 
              value={profile.gender}
              onValueChange={(value) => handleInputChange('gender', value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select gender" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Male">Male</SelectItem>
                <SelectItem value="Female">Female</SelectItem>
                <SelectItem value="Other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="city">City</Label>
            <Input 
              id="city"
              value={profile.city}
              onChange={(e) => handleInputChange('city', e.target.value)}
              placeholder="Enter your city"
            />
          </div>

          <div>
            <Label className="mb-3 block">Preferences</Label>
            <div className="space-y-2">
              {availableTags.map((tag) => (
                <div key={tag} className="flex items-center space-x-2">
                  <Checkbox
                    id={tag}
                    checked={profile.tags.includes(tag)}
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

          <Button 
            onClick={handleSubmit} 
            className="w-full"
          >
            Update Profile
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
