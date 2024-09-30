import React, { forwardRef, useState } from "react";
import hero from "../assets/portrait-boy-with-brown-hair-brown-eyes.png";
import { Card, CardContent } from "./ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Heart,
  Coffee,
  Music,
  Code,
  Film,
} from "lucide-react";
const interests = [
  {
    icon: <Heart className="w-6 h-6" />,
    label: "Passion for Design",
    description: "I love creating beautiful and functional user interfaces.",
  },
  {
    icon: <Coffee className="w-6 h-6" />,
    label: "Coffee Enthusiast",
    description: "Fueling my coding sessions with the perfect brew.",
  },
  {
    icon: <Music className="w-6 h-6" />,
    label: "Music Lover",
    description: "Always coding with a curated playlist in the background.",
  },
  {
    icon: <Code className="w-6 h-6" />,
    label: "Continuous Learner",
    description: "Always excited to learn new technologies and techniques.",
  },
  {
    icon: <Film className="w-6 h-6" />,
    label: "Editing",
    description:
      "creatively express ideas through visual storytelling.",
  },
];
const About = forwardRef((props, ref) => {
  const [activeInterest, setActiveInterest] = useState(null);
  return (
    <section
      ref={ref}
      className="animate p-8 relative overflow-hidden rounded-lg"
    >
      <div className="max-w-4xl mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-600 to-[#050a34] blur-3xl" />
        <Card className="bg-gray-100 backdrop-blur-sm overflow-hidden">
          <CardContent className="p-6">
            <div className="flex flex-col justify-center md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
              <Avatar className="w-32 h-32 border-4 border-[var(--shapebg)]">
                <AvatarImage
                  src={hero}
                  alt="saran"
                  className="object-contain mt-1"
                />
                <AvatarFallback>SM</AvatarFallback>
              </Avatar>
              <div className="text-center md:text-left">
                <h2 className="text-3xl font-bold mb-2">SARAN</h2>
                <p className="text-[var(--shapebg)] font-semibold text-lg mb-4">
                  MERN stack Developer & Youtuber
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Hello! I'm Saran, a passionate MERN stack Developer with a
                  keen eye for design and a love for creating seamless user
                  experiences. When I'm not crafting pixel-perfect interfaces,
                  you can find me exploring new coffee shops, attending tech
                  meetups, or capturing moments through my camera lens.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div>
          <h2 className="text-2xl font-semibold mb-4 text-teal-800 text-center">
            What Drives Me
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {interests.map((interest, index) => (
              <div key={interest.label}>
                <Card className="bg-white/90 backdrop-blur-lg">
                  <CardContent className="p-4 flex flex-col items-start">
                    <span className="text-teal-600">{interest.icon}</span>
                    <h3 className="font-semibold mb-2 self-center">
                      {interest.label}
                    </h3>
                    <p className="text-sm text-center text-gray-600">
                      {interest.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

export default About;
