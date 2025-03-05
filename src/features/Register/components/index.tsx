import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RegisterFormProps, UserRole } from '@/shared/types/types';

const RegisterForm = ({ role, formik }: RegisterFormProps) => {
  return (
    <div className="flex flex-col gap-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Register</CardTitle>
          <CardDescription>Enter details to register</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={formik.handleSubmit}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  type="text"
                  required
                  onChange={formik.handleChange}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="text"
                  required
                  onChange={formik.handleChange}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  onChange={formik.handleChange}
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                </div>
                <Input
                  id="password"
                  type="password"
                  required
                  onChange={formik.handleChange}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="gender">Gender</Label>
                <Input
                  id="gender"
                  type="text"
                  required
                  onChange={formik.handleChange}
                />
              </div>
              {role === UserRole.finder ? (
                <div className="grid gap-2">
                  <Label htmlFor="required_vacancy">Required Vacancy</Label>
                  <Input id="required_vacancy" type="number" required />
                </div>
              ) : null}
              <Button type="submit" className="w-full" >
                Register
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              Already have an account?{' '}
              <a href="/login" className="underline underline-offset-4">
                Login
              </a>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default RegisterForm;
