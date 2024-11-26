// src/components/Navbar.tsx
import * as React from "react"
import { motion } from "framer-motion"
import { cn, scrollToSection } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const projects = [
  {
    title: "Agente Track",
    description: "Advanced RMM solution for IT asset management featuring reactive monitoring, automated inventory tracking, and remote device management capabilities. Built with modern technologies to ensure scalability and performance.",
  },
  {
    title: "IT Infrastructure Compliance",
    description: "Comprehensive infrastructure assessment tool that evaluates IT environments, providing detailed analytics on security posture, compliance status, and infrastructure maturity. Generates actionable insights and recommendations for improvement.",
  }
]

const skills = [
  {
    title: "Frontend",
    href: "#skills",
    description: "React, TypeScript, TailwindCSS",
  },
  {
    title: "Backend",
    href: "#skills", 
    description: "Node.js, Express, PostgreSQL",
  }
]

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, href, ...props }, ref) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (href && href.startsWith('#')) {
      scrollToSection(href.substring(1));
    }
  };

  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          onClick={handleClick}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          href={href}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
});

ListItem.displayName = "ListItem"

export default function Navbar() {
  return (
<header className="fixed top-0 w-full bg-background/80 backdrop-blur-sm z-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <nav className="h-16 flex items-center justify-between">
        {/* Logo/Name - Left aligned */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl sm:text-2xl font-bold"
        >
          Me
        </motion.div>

        <NavigationMenu className="hidden sm:block">
          <NavigationMenuList className="space-x-1">
          <NavigationMenuItem>
          <NavigationMenuLink 
            className={`${navigationMenuTriggerStyle()} text-black dark:text-white`}
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            Home
          </NavigationMenuLink>
        </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>About</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 w-[320px] sm:w-[400px]">
                  <ListItem href="#about" title="About Me">
                    Learn more about my background and experience
                  </ListItem>
                  <ListItem href="#experience" title="Experience">
                    My professional journey and achievements
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Skills</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 w-[320px] sm:w-[400px] md:grid-cols-2">
                  {skills.map((skill) => (
                    <ListItem
                      key={skill.title}
                      title={skill.title}
                      href={skill.href}
                    >
                      {skill.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Projects</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 w-[320px] sm:w-[400px] md:grid-cols-2">
                  {projects.map((project) => (
                    <ListItem
                      key={project.title}
                      title={project.title}
                      href="#projects"
                    >
                      {project.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
            <NavigationMenuLink 
              className={`${navigationMenuTriggerStyle()} text-black dark:text-white`}
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }}
            >
              Contact
            </NavigationMenuLink>
          </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Menu Button - You'll need to implement mobile menu logic */}
        <button className="sm:hidden p-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </nav>
      </div>
    </header>
  )
}