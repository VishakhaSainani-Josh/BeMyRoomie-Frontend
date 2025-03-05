import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription
} from '@/components/ui/card';
import { useNavigate } from 'react-router';

const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <Card className="max-w-sm">
        <CardHeader>
          <CardTitle className="text-3xl">404</CardTitle>
          <CardDescription>
            Oops! The page you are looking for does not exist.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center">
            <Button onClick={handleGoHome} className="w-full">
              Go to Homepage
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NotFoundPage;
