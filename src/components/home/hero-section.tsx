
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import Link from 'next/link';
import { heroSocialNavItems } from '@/constants/navigation';
import { TypingAnimation } from '@/components/common/typing-animation'; // Added import

export function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center py-16 md:py-24 bg-background overflow-hidden">
      <div className="absolute inset-0">
        {/* Decorative background gradient - subtle */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-background opacity-30"></div>
        {/* Decorative angled lines - simplified */}
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 space-y-4 opacity-20">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="w-20 h-1 bg-primary/50 -rotate-45 -translate-x-1/2"></div>
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content: Text + CV Button */}
          <div className="space-y-6 text-center md:text-left">
            <TypingAnimation 
              textToType=".NET DEVELOPER" 
              className="text-sm font-medium tracking-wider text-primary uppercase" 
            />
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground">
              Mohammed Nabeel K
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-md mx-auto md:mx-0">
              Building innovative and scalable web applications with .NET. I focus on delivering high-quality, efficient solutions.
            </p>
            <div className="pt-4">
              <Button 
                asChild 
                className="group relative w-20 h-20 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
              >
                <Link href="#" aria-label="Download CV">
                  <Download className="h-8 w-8 transition-transform duration-300 group-hover:scale-110" />
                  <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">CV</span>
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Content: Image + Social Icons */}
          <div className="relative flex justify-center md:justify-center items-center"> {/* Changed md:justify-end to md:justify-center */}
            {/* Developer Image with Gradient Background Orb */}
            <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] lg:w-[400px] lg:h-[400px]">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/30 via-purple-500/40 to-pink-500/50 blur-2xl opacity-70 animate-pulse"></div>
              <Image
                src="/images/1744206003877.png" 
                alt="Mohammed Nabeel K, .NET Developer"
                data-ai-hint="developer portrait professional"
                width={400}
                height={400}
                className="rounded-full shadow-2xl object-cover relative z-10 border-4 border-background"
                priority
              />
              {/* Decorative Spheres - simplified */}
              <div className="absolute top-10 -left-5 w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 opacity-80 shadow-lg animate-bounce delay-100"></div>
              <div className="absolute bottom-10 -right-5 w-16 h-16 rounded-full bg-gradient-to-tl from-blue-400 to-cyan-500 opacity-70 shadow-lg animate-bounce delay-300"></div>
            </div>
            
            {/* Social Icons - Vertical Bar */}
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 md:-right-16 lg:-right-20 flex flex-col space-y-3 p-2 bg-card/50 backdrop-blur-sm rounded-md shadow-md">
              {heroSocialNavItems.map((item) => (
                <Link key={item.name} href={item.href} target="_blank" rel="noopener noreferrer" title={item.tooltip} className="text-muted-foreground hover:text-primary transition-colors">
                  <item.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative X shapes - simplified */}
      <div className="absolute top-1/4 left-1/4 text-primary opacity-10 text-6xl font-thin transform -rotate-12 select-none pointer-events-none">X</div>
      <div className="absolute bottom-1/4 right-1/4 text-accent opacity-10 text-8xl font-thin transform rotate-6 select-none pointer-events-none">X</div>

      {/* Shattered Technology Icons/Names Background */}
      <div className="absolute top-[10%] left-[5%] text-primary/20 text-2xl font-mono transform -rotate-[20deg] skew-x-[12deg] opacity-30 select-none pointer-events-none">
        C#
      </div>
      <div className="absolute top-[15%] right-[8%] text-blue-500/20 text-3xl font-mono transform rotate-[15deg] -skew-y-[8deg] opacity-30 select-none pointer-events-none">
        Azure
      </div>
      <div className="absolute bottom-[10%] left-[8%] text-sky-600/20 text-xl font-mono transform rotate-[25deg] skew-y-[10deg] opacity-30 select-none pointer-events-none">
        SQL
      </div>
      <div className="absolute bottom-[15%] right-[5%] text-cyan-400/20 text-2xl font-mono transform -rotate-[10deg] skew-x-[-15deg] opacity-30 select-none pointer-events-none">
        Docker
      </div>
      <div className="absolute top-[50%] left-[20%] text-orange-500/20 text-lg font-mono transform rotate-[5deg] -skew-x-[5deg] opacity-30 select-none pointer-events-none">
        Git
      </div>
      <div className="absolute top-[30%] right-[30%] text-green-500/20 text-xl font-mono transform -rotate-[8deg] skew-y-[6deg] opacity-30 select-none pointer-events-none">
        API
      </div>
       <div className="absolute top-[65%] right-[45%] text-purple-500/10 text-5xl font-mono transform rotate-[30deg] skew-x-[5deg] opacity-20 select-none pointer-events-none">
        .NET
      </div>
      <div className="absolute bottom-[30%] left-[35%] text-indigo-400/20 text-2xl font-mono transform -rotate-[5deg] -skew-y-[10deg] opacity-30 select-none pointer-events-none">
        MVC
      </div>
    </section>
  );
}
