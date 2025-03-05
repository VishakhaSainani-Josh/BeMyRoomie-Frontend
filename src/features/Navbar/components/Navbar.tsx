import { Card } from '@/components/ui/card';
import Logo from '@/assets/logo-full.svg';
import { NavbarProps } from '@/shared/types/types';
import NavItems from './NavItems';
import { useNavigate } from 'react-router';
import { Button } from '@/components/ui/button';

const Navbar = ({ user }: NavbarProps) => {
  const navigate = useNavigate();
  const userRole = user ? user.role : null;

  return (
    <div className="fixed w-full bg-background z-50">
      <Card className="rounded-none shadow-sm border-t-0 border-x-0">
        <div className="mx-4 px-4 h-16 flex items-center justify-between">
          <div className="flex items-center">
            <div className="flex w-full items-center gap-2 rounded-md p-2 transition-[width,height,padding] disabled:opacity-50 h-12 group-data-[collapsible=icon]:!p-0 hover:bg-sidebar-accent cursor-pointer">
              <div className="flex aspect-square items-center justify-center rounded-lg bg-sidebar-primary">
                <img src={Logo} className="w-36 h-24 " alt="Logo" onClick={()=>navigate('/properties')} />
              </div>
              <div className="flex-1"></div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {userRole === 'lister' && (
              <Button
                variant="outline"
                onClick={() => navigate('/property')}
                className="text-gray-600 border-gray-700 hover:bg-gray-100"
              >
                Post Listing?
              </Button>
            )}

            <NavItems user={user} />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Navbar;
