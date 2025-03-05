import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import logoImage from '../../../assets/logofinal.png';
import friendsImage from '../../../assets/friends.png';
import roomImage from '../../../assets/hotel.png';
import { Star, Heart, MessageCircle, Search, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router';

const BeMyRoomie = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col min-h-screen">
      <nav className="border-b border-border py-4 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <img src={logoImage} alt="BeMyRoomie Logo" className="h-16 w-auto" />
          </div>

          <div className="flex space-x-4">
            <Button
              variant="outline"
              className="border-primary hover:bg-secondary"
              onClick={() => navigate('/login')}
            >
              Login
            </Button>
          </div>
        </div>
      </nav>

      <main className="flex-1">
        <div className="flex flex-col items-center max-w-4xl mx-auto p-6 pt-16 space-y-12">
          <div className="text-center space-y-6 w-full mb-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold text-foreground">
                Find your Perfect Match
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Post your requirement and find a roommate or a room effortlessly. Let
                the matching begin!
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            <a href="/signup/finder">
              <Card className="overflow-hidden border-0 shadow-md hover:shadow-xl transition-shadow bg-[#FFF8E1]">
                <CardContent className="p-0 flex flex-col h-full">
                  <div className="p-6">
                    <h3 className="text-xl font-bold">Need Room/Flat</h3>
                    <p className="text-slate-700 flex items-center mt-1">
                      with roommate <span className="ml-1">›</span>
                    </p>
                  </div>
                  <div className="mt-auto flex justify-center p-6">
                    <div className="w-48 h-48">
                      <a href="/signup/finder">
                        <img
                          src={roomImage}
                          alt="Room illustration"
                          className="w-full h-full object-contain"
                        />
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </a>

            <a href="/signup/lister">
              <Card className="overflow-hidden border-0 shadow-md hover:shadow-xl transition-shadow bg-[#E0F7FA]">
                <CardContent className="p-0 flex flex-col h-full">
                  <div className="p-6">
                    <h3 className="text-xl font-bold">Need Roommate</h3>
                    <p className="text-slate-700 flex items-center mt-1">
                      for your room <span className="ml-1">›</span>
                    </p>
                  </div>
                  <div className="mt-auto flex justify-center p-6">
                    <div className="w-48 h-48">
                      <img
                        src={friendsImage}
                        alt="Roommates illustration"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </a>
          </div>

          <div className="w-full py-10">
            <h2 className="text-2xl font-bold text-center mb-10">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center">
                <div className="bg-[#E8F5E9] p-4 rounded-full mb-4">
                  <Search className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-bold mb-2">1. Post Your Requirement</h3>
                <p className="text-muted-foreground">
                  Create your profile and specify what you're looking for in a
                  roommate or accommodation.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="bg-[#E3F2FD] p-4 rounded-full mb-4">
                  <Heart className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-bold mb-2">2. Find Matches</h3>
                <p className="text-muted-foreground">
                  Find compatible roommates or rooms based on your preferences.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="bg-[#FFF3E0] p-4 rounded-full mb-4">
                  <MessageCircle className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="font-bold mb-2">3. Connect & Finalize</h3>
                <p className="text-muted-foreground">
                  Connect with potential matches and finalize your roommate or
                  accommodation arrangement.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full bg-[#F5F5F5] p-10 rounded-lg">
            <h2 className="text-2xl font-bold text-center mb-10">
              Why Choose BeMyRoomie
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-1">Preference Matching</h3>
                  <p className="text-muted-foreground">
                    Find people who match your lifestyle, budget, and living
                    preferences.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-1">No Hidden Fees</h3>
                  <p className="text-muted-foreground">
                    We're transparent about our service charges with no surprises
                    along the way.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full py-10">
            <h2 className="text-2xl font-bold text-center mb-10">
              What Our Users Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="flex gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    "I found my ideal roommate within a week! The preference matching
                    really works and we get along great."
                  </p>
                  <div className="font-semibold">Sarah T. - New York</div>
                </CardContent>
              </Card>
              <Card className="border shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="flex gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    "As a property owner, I was able to find reliable tenants
                    quickly. The verification process gave me peace of mind."
                  </p>
                  <div className="font-semibold">Michael R. - San Francisco</div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="w-full bg-[#BBDEFB] p-10 rounded-lg text-center">
            <h2 className="text-2xl font-bold mb-4">
              Ready to Find Your Perfect Match?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join thousands of users who have successfully found their ideal living
              situation through BeMyRoomie.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                className="bg-[#1976D2] text-white hover:bg-[#1565C0]"
                onClick={() => navigate('/signup/finder')}
              >
                Find a Room
              </Button>
              <Button
                className="bg-[#26A69A] text-white hover:bg-[#00897B]"
                onClick={() => navigate('/signup/lister')}
              >
                Find a Roommate
              </Button>
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t border-border py-8 px-6 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4">BeMyRoomie</h3>
              <p className="text-muted-foreground text-sm">
                Making roommate matching simple, secure, and stress-free since 2023.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary">
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary">
                    Find a Room
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary">
                    Find a Roommate
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary">
                    Safety Tips
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Company</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>© 2025 BeMyRoomie. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BeMyRoomie;
