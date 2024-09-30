import { forwardRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const Contacts = forwardRef((props, ref) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <div
      ref={ref}
      className="bg-gradient-to-r my-12 from-gray-600 to-[#050a34] p-4 rounded-lg"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <Card className="bg-white/20 backdrop-blur-lg border-none text-white">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">
                Contact Information
              </h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="mr-2" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <Mail className="mr-2" />
                  <span>hello@example.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="mr-2" />
                  <span>123 Web Dev Lane, Internet City, 12345</span>
                </div>
              </div>
              <div className="mt-6 flex space-x-4">
                <Button
                  variant="outline"
                  size="icon"
                  className="bg-white/20 hover:bg-white/30"
                >
                  <Github className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="bg-white/20 hover:bg-white/30"
                >
                  <Linkedin className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="mt-8 bg-white/10 backdrop-blur-lg border-none overflow-hidden">
            <CardContent className="p-0">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3914.562713320003!2d78.58528351461952!3d9.542228992506448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00e55a04000001%3A0x707f81665f4bbf0b!2sParamakudi%2C%20Tamil%20Nadu%20623307%2C%20India!5e0!3m2!1sen!2sus!4v1695142895734!5m2!1sen!2sus"
                width="100%"
                height="200"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card className="bg-white/10 backdrop-blur-lg border-none">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4 text-white">
                Send a Message
              </h2>
              {isSubmitted ? (
                <div className="text-green-400 text-center py-8">
                  <h3 className="text-xl font-semibold mb-2">
                    Thank you for your message!
                  </h3>
                  <p>We'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    placeholder="Your Name"
                    className="bg-white/90 border-none text-gray-900 placeholder-white/60"
                  />
                  <Input
                    placeholder="Your Email"
                    type="email"
                    className="bg-white/90 border-none text-gray-900 placeholder-white/60"
                  />
                  <Textarea
                    placeholder="Your Message"
                    className="bg-white/60 border-none text-gray-900 placeholder-white/70"
                    rows={4}
                  />
                  <Button
                    type="submit"
                    className="w-full bg-pink-600 text-purple-200 hover:bg-white/90"
                  >
                    Send Message
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
});

export default Contacts;
