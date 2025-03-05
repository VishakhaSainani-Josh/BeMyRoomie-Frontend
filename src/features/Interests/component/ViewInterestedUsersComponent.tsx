import React from 'react';
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { PhoneIcon, MailIcon, MapPinIcon } from 'lucide-react';
import { ViewInterestedUsersComponentProps } from '@/shared/types/types';



export const ViewInterestedUsersComponent: React.FC<ViewInterestedUsersComponentProps> = ({
  users,
  propertyId
}) => {
  return (
    <Card className="w-full max-w-2xl mx-auto mt-10">
      <CardHeader>
        <CardTitle>Interested Users for Property #{propertyId}</CardTitle>
      </CardHeader>
      <CardContent>
        {users.length === 0 ? (
          <div className="text-center text-muted-foreground">
            No interested users found
          </div>
        ) : (
          <div className="space-y-4">
            {users.map((user, index) => (
              <div 
                key={user.userId || index} 
                className="border rounded-lg p-4 hover:bg-accent/20 transition-colors"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold">{user.name}</h3>
                    <p className="text-sm text-muted-foreground">{user.role}</p>
                  </div>
                  <div className="flex gap-2">
                    {user.tags.map(tag => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="mt-4 space-y-2">
                  <div className="flex items-center gap-2">
                    <PhoneIcon className="h-4 w-4 text-muted-foreground" />
                    <span>{user.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MailIcon className="h-4 w-4 text-muted-foreground" />
                    <span>{user.email}</span>
                  </div>
                  {user.city && (
                    <div className="flex items-center gap-2">
                      <MapPinIcon className="h-4 w-4 text-muted-foreground" />
                      <span>{user.city}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

