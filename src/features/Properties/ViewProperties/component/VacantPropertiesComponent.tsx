import React from 'react';
import { Image } from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';
import { VacantPropertiesProps } from '@/shared/types/types';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const VacantPropertiesComponent: React.FC<VacantPropertiesProps> = ({
  properties,
  isLister
}) => {
  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
      {properties?.map(property => (
        <Card
          key={property.property_id}
          className="overflow-hidden hover:shadow-xl transition duration-300 cursor-pointer"
          onClick={() => {
            navigate(`/properties/${property.property_id}`);
          }}
        >
          <div className="relative w-full h-44">
            {property.images.length > 0 ? (
              <Carousel className="w-full">
                <CarouselContent>
                  {property.images.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="h-44 w-full">
                        <img
                          src={image}
                          alt="image_here"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-2" />
                <CarouselNext className="right-2" />
              </Carousel>
            ) : (
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <Image className="w-12 h-12 text-gray-500" />
              </div>
            )}
          </div>
          <CardContent className="p-4">
            <h3 className="text-lg font-semibold text-gray-900">{property.title}</h3>
            <p className="text-sm text-gray-600">{property.city}</p>
          </CardContent>
          <CardFooter className="p-4 pt-0">
            <p className="text-green-600 font-bold">₹{property.rent}/month</p>
          </CardFooter>
          {isLister ? (
            <CardFooter className="p-3 pt-0 flex items-center gap-4">
              <Button
                variant="outline"
                className="text-gray-600 border-gray-700 hover:bg-gray-100"
                onClick={e => {
                  e.stopPropagation();
                  navigate(`/properties/${property.property_id}/edit`);
                }}
              >
                Update Details
              </Button>
              <Button
                variant="outline"
                className="text-gray-600 border-gray-700 hover:bg-gray-100"
                onClick={e => {
                  e.stopPropagation();
                  navigate(`interests/${property.property_id}`);
                }}
              >
                View Interested Users
              </Button>
              <span
              className={
                `px-3 py-1 text-sm font-medium rounded-full ` +
                (property.status === 'vacant'
                  ? 'bg-green-100 text-green-700'
                  : property.status === 'fulfilled'
                  ? 'bg-red-100 text-red-700'
                  : 'bg-yellow-100 text-yellow-700')
              }
            >
              {property.status}
            </span>
            </CardFooter>
          ) : (
            <></>
          )}
        </Card>
      ))}
    </div>
  );
};

export default VacantPropertiesComponent;
