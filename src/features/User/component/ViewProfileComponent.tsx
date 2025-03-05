import React from 'react';
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ViewProfileComponentProps } from '@/shared/types/types';



export const ViewProfileComponent: React.FC<ViewProfileComponentProps> = ({
  profile,
  onUpdateClick
}) => {
  return (
    <div className="max-w-md mx-auto mt-10">
      <Card>
        <CardHeader>
          <CardTitle>Profile Details</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-muted-foreground">Name</p>
              <p className="font-medium">{profile.name}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Email</p>
              <p className="font-medium">{profile.email}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Phone</p>
              <p className="font-medium">{profile.phone}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Gender</p>
              <p className="font-medium">{profile.gender}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">City</p>
              <p className="font-medium">{profile.city}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Role</p>
              <p className="font-medium">{profile.role}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Tags</p>
              <p className="font-medium">
                {profile.tags?.length > 0 
                  ? profile.tags.join(', ') 
                  : 'No tags'}
              </p>
            </div>
          </div>
          
          <Button 
            className="w-full mt-6"
            onClick={onUpdateClick}
          >
            Update Details
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};