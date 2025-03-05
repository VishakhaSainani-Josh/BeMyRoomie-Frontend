import { Separator } from '@/components/ui/separator';
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import DefaultAvatar from '@/assets/avatar.png';
import { Link } from 'react-router';
import { NavbarProps, UserRole } from '@/shared/types/types';
import { finderNavItems, listerNavItems } from '@/features/Navbar/nav-items';

const NavItems = ({ user }: NavbarProps) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="ml-auto">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetTitle />
      <SheetContent side="right" className="p-0 w-full [&>button]:hidden">
        <div className="flex flex-col w-full h-full">
          <div className="flex items-center gap-3 p-4 border-b w-full">
            <Link to="/profile" className="flex items-center gap-3 w-full">
              <Avatar className="h-10 w-10">
                <AvatarImage src={DefaultAvatar} alt="User" />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
              <div className="text-left">
                <div className="font-medium">{user.name}</div>
                <div className="text-xs text-gray-500">{user.email}</div>
              </div>
            </Link>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="ml-auto">
                <Menu />
              </Button>
            </SheetTrigger>
          </div>

          <div className="flex flex-col w-full">
            <Link
              to={'/preferences'}
              className="py-4 px-4 text-center w-full hover:bg-gray-100"
            >
              Preferences
            </Link>
            <Separator />
          </div>

          <div className="flex flex-col w-full">
            {user.role === UserRole.finder ? (
              <>
                {finderNavItems.map(item => (
                  <Link
                    key={item.link}
                    to={item.link}
                    className="py-4 px-4 text-center w-full hover:bg-gray-100"
                  >
                    {item.title}
                  </Link>
                ))}
              </>
            ) : (
              <>
                {listerNavItems.map(item => (
                  <Link
                    key={item.link}
                    to={{
                      pathname: '/properties',
                      search: '?owner=true'
                    }}
                    className="py-4 px-4 text-center w-full hover:bg-gray-100"
                  >
                    {item.title}
                  </Link>
                ))}
              </>
            )}
            <Separator />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default NavItems;
