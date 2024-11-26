/* eslint-disable @typescript-eslint/no-explicit-any */
// src/pages/Home.tsx
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Button } from '@/components/ui/button';
import Typewriter from 'typewriter-effect';
import { Code2, Github, Instagram, Layout, Linkedin, Server, Smartphone } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MessageSquare } from 'lucide-react';
import { scrollToSection } from '@/lib/utils';
import { useToast } from '@/components/ui/use-toast';
import emailjs from 'emailjs-com';
import { useState } from 'react';

const formSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  name: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export default function Home() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    try {
      const templateParams = {
        name: values.name,
        email: values.email,
        message: values.message,
      };

      const response = await emailjs.send(
        'service_2uk1mth', // Substitua pelo seu serviceID
        'template_vobcd8d', // Substitua pelo seu templateID
        templateParams,
        'ObtZ-eT3jhaurDdXa', // Substitua pelo seu userID
      );

      if (response.status !== 200) throw new Error('Failed to send message');

      toast({
        title: 'Message sent successfully!',
        description: "I'll get back to you as soon as possible.",
        className: 'bg-success border-zinc-100',
        duration: 5000,
      });

      form.reset();
    } catch (error: any) {
      toast({
        title: 'Error sending message',
        description: 'Please try again later or contact me directly via email. Error: ' + error,
        variant: 'destructive',
        duration: 5000,
      });
    } finally {
      setLoading(false);
    }
  }

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      name: '',
      message: '',
    },
  });

  const skills = [
    {
      name: 'Frontend',
      icon: <Layout size={32} />,
      description:
        'React, TypeScript, TailwindCSS, NextJS, Redux, Sass, Zod, EJS, MUI, Style-component, React-query, Recharts',
    },
    {
      name: 'Backend',
      icon: <Server size={32} />,
      description: 'Node.js, C#, Express, NestJS, Fastify, Jest, PostgreSQL, MySQL, MongoDB, Redis, Firebase',
    },
    {
      name: 'Mobile',
      icon: <Smartphone size={32} />,
      description: 'React Native',
    },
    {
      name: 'Other',
      icon: <Code2 size={32} />,
      description: 'Git, Docker, AWS/Azure, Nginx/Apache, Figma, Wordpress, Strapi, Vercel, Shell Script',
    },
  ];

  const projects = [
    {
      title: 'Agente Track',
      description:
        'Advanced RMM solution for IT asset management featuring reactive monitoring, automated inventory tracking, and remote device management capabilities. Built with modern technologies to ensure scalability and performance.',
      tech: [
        'C#',
        'TypeScript',
        'NestJS',
        'Fastify',
        'React',
        'Shadcn/ui',
        'TailwindCSS',
        'MongoDB',
        'Redis',
        'Docker',
        'Jotai',
      ],
      link: '',
      urlImage: '/inventory-agentetrack.png',
    },
    {
      title: 'IT Infrastructure Compliance',
      description:
        'Comprehensive infrastructure assessment tool that evaluates IT environments, providing detailed analytics on security posture, compliance status, and infrastructure maturity. Generates actionable insights and recommendations for improvement.',
      tech: ['Express.js', 'TypeScript', 'React', 'MongoDB', 'Keycloak', 'MUI', 'Styled-components', 'Zod'],
      link: '',
      urlImage: '/image-compliance.png',
    },
    {
      title: 'E-commerce Platform',
      description:
        'Full-featured e-commerce platform specialized in computer hardware sales, featuring real-time inventory management, secure payment processing, and comprehensive analytics dashboard for business insights.',
      tech: [
        'Express.js',
        'React',
        'TypeScript',
        'MUI',
        'Redux',
        'Stripe',
        'MongoDB',
        'React-Query',
        'Sass',
        'Recharts',
        'Firebase',
      ],
      link: '',
      urlImage: '/dashboard-ecommerce.jpeg',
    },
    {
      title: 'Personal Blog',
      description:
        'Modern, responsive blog platform built with NextJS and Strapi CMS. Features dynamic content loading, comment system integration, and optimized image delivery through Cloudinary.',
      tech: [
        'NextJS',
        'React',
        'TypeScript',
        'Styled-components',
        'Strapi',
        'Netlify',
        'MongoDB',
        'Disqus',
        'Cloudinary',
      ],
      link: '',
      urlImage: '/content1-blog.png',
    },
    {
      title: 'Stock Management System',
      description:
        'Inventory management solution designed for social projects, featuring real-time stock tracking, automated alerts for low inventory, and comprehensive reporting system.',
      tech: ['Express.js', 'EJS', 'Webpack', 'MongoDB', 'Csurf', 'MVC'],
      link: '',
      urlImage: '/home-stock.png',
    },
    {
      title: 'ASD Support Website',
      description:
        'Educational website dedicated to supporting children with Autism Spectrum Disorder, providing resources, interactive content, and support information for families and caregivers.',
      tech: ['Javascript', 'HTML', 'CSS'],
      link: '',
      urlImage: '/image2-tea.png',
    },
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Github className="h-10 w-10" />,
      href: 'https://github.com/trxsh1DEV?tab=repositories',
      color: 'hover:text-[#333]',
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="h-10 w-10" />,
      href: 'https://www.linkedin.com/in/yago-sousa-2170571b9',
      color: 'hover:text-[#0077b5]',
    },
    {
      name: 'Instagram',
      icon: <Instagram className="h-10 w-10" />,
      href: 'https://www.instagram.com/yaaago.s',
      color: 'hover:text-[#E4405F]',
    },
  ];

  return (
    <div className="max-w-[120rem] mx-auto">
      <section className="min-h-screen flex items-center justify-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
          <h1 className="text-6xl font-bold mb-4">Hi, I'm Yago</h1>
          <div className="text-2xl text-muted-foreground mb-8 h-[40px] flex items-center justify-center">
            <Typewriter
              options={{
                strings: ['Full Stack Developer', 'Mobile Developer', 'Frontend Developer', 'Backend Developer'],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
                delay: 70,
              }}
            />
          </div>
          <h3 className="text-2xl font-light mb-4 px-16">
            I am a Full-Stack Developer. I am Currently working at{' '}
            <NavLink target="_blank" to={'https://infonova.com.br'}>
              Infonova Tecnologia{' '}
            </NavLink>{' '}
            as a Full-Stack in several projects
          </h3>
          <Button asChild>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }}
            >
              Get in touch
            </a>
          </Button>
        </motion.div>
      </section>

      <section ref={ref} id="about" className="py-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
        >
          <div className="space-y-4">
            <h2 className="text-4xl font-bold">About Me</h2>
            <p className="text-muted-foreground text-xl">
              I’m a 21-year-old Brazilian full-stack developer passionate about building complete applications from
              start to finish. Currently, I’m working on a project for IT asset inventory and management software. I
              enjoy diving into every stage of the development process, with a special interest in UX design and system
              integrations. My goal is to create efficient, intuitive, and with high availability solutions.
            </p>
          </div>
          <div className="aspect-square bg-transparent rounded-lg">
            <img
              src="https://aakash-sharma.netlify.app/static/media/webdev.4d72dbba32efee3890cef9bcacce7aa7.svg"
              alt=""
            />
          </div>
        </motion.div>
      </section>

      <section id="skills" className="py-16">
        <h2 className="text-4xl font-bold text-center mb-12">Skills and Technologies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-card rounded-lg text-center space-y-4"
            >
              <div className="inline-flex p-4 bg-primary/10 rounded-full">{skill.icon}</div>
              <h3 className="font-semibold text-2xl">{skill.name}</h3>
              <p className="text-muted-foreground text-xl">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="services" className="py-16">
        <h2 className="text-4xl font-bold text-center mb-12">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            whileHover={{ y: -10 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="bg-card rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="flex flex-col items-center space-y-4">
              <img
                src="https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/64/000000/external-web-development-coding-kiranshastry-lineal-color-kiranshastry.png"
                alt="Web Development"
                className="w-16 h-16"
              />
              <h3 className="text-2xl font-semibold text-center">Web Application Development</h3>
              <p className="text-muted-foreground text-center text-lg">
                Web design encompasses many different skills and disciplines in the production and maintenance of
                websites. The different areas of web design include web graphic design user interface design authoring,
                including standardised code and proprietary software user experience design and search engine.
              </p>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -10 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="bg-card rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="flex flex-col items-center space-y-4">
              <img
                src="https://img.icons8.com/external-justicon-lineal-color-justicon/64/000000/external-app-development-responsive-web-design-justicon-lineal-color-justicon.png"
                alt="Mobile Development"
                className="w-16 h-16"
              />
              <h3 className="text-2xl font-semibold text-center">Mobile Application Development</h3>
              <p className="text-muted-foreground text-center text-lg">
                We provide a range of mobile application development services including custom mobile development on
                Android platforms, building cross-platform apps, designing user experience and integrating novel mobile
                interfaces such as chat and voice.
              </p>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -10 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="bg-card rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="flex flex-col items-center space-y-4">
              <img
                src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/000000/external-backend-no-code-flaticons-flat-flat-icons.png"
                alt="Backend Development"
                className="w-16 h-16"
              />
              <h3 className="text-2xl font-semibold text-center">Backend Development</h3>
              <p className="text-muted-foreground text-center text-lg">
                Graphic design is a craft where professionals create visual content to communicate messages. By applying
                visual hierarchy and page layout techniques, designers use typography and pictures to meet users'
                specific needs and focus on the logic of displaying elements in interactive designs, to optimize the
                user experience.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="projects" className="py-16">
        <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.title}
              whileHover={{ y: -5 }}
              className="bg-card rounded-lg overflow-hidden h-full flex flex-col"
            >
              <div className="relative w-full pt-[56.25%]">
                {/* 16:9 aspect ratio */}
                <img
                  src={`${project?.urlImage || ''}`}
                  alt={project.title}
                  className="absolute top-0 left-0 w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-semibold text-xl mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 flex-1">{project.description}</p>
                <div className="flex gap-2 flex-wrap mt-auto">
                  {project.tech.map((tech) => (
                    <span key={tech} className="text-xs bg-primary/10 px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="experience" className="py-16">
        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Professional Experience</h2>

          <div className="space-y-8">
            <div className="bg-card rounded-lg p-6">
              <div className="flex flex-col md:flex-row justify-between mb-4">
                <h3 className="text-2xl font-semibold">Infonova Tecnologia</h3>
                <span className="text-muted-foreground">2023/mar - Present</span>
              </div>
              <h4 className="text-xl font-medium mb-4">Full Stack Developer</h4>

              <div className="space-y-4 text-muted-foreground">
                <p>
                  Currently working on multiple innovative projects focusing on IT infrastructure management and
                  monitoring:
                </p>

                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Developed integrations between ticketing system and internal dashboard platform, enabling
                    comprehensive data analysis and reporting for tickets and device management.
                  </li>

                  <li>
                    Built an "IT Infrastructure Compliance" system that analyzes clients' IT infrastructure, generating
                    automated feedback, insights, and reports highlighting IT maturity levels, potential improvements,
                    security vulnerabilities and integration with SSO.
                  </li>

                  <li>
                    Currently leading development on an IT Asset Management and Remote Monitoring and Management (RMM)
                    platform, streamlining device management and IT operations.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section id="contact" className="py-16">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Get in Touch</h2>
          <p className="text-muted-foreground text-center mb-8">
            I'm always open to new opportunities and collaborations.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="mailto:yagosousa630@gmail.com"
              className="flex items-center justify-center gap-2 p-4 bg-card rounded-lg hover:bg-accent transition-colors"
            >
              <Mail className="h-5 w-5" />
              <span>Send me an email</span>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              href="https://wa.me/5511969642568"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 p-4 bg-card rounded-lg hover:bg-accent transition-colors"
            >
              <MessageSquare className="h-5 w-5" />
              <span>Chat on WhatsApp</span>
            </motion.a>
          </div>

          <div className="bg-card p-8 rounded-lg">
            <h3 className="text-xl font-semibold mb-6">Or send me a message here</h3>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 text-left">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="your@email.com" {...field} className="" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name (optional)</FormLabel>
                      <FormControl>
                        <Input placeholder="Your name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Your message..." className="min-h-[120px] resize-none" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </Form>
          </div>

          <div className="flex items-center justify-center gap-6 mb-12">
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                whileHover={{ scale: 1.2 }}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 bg-card rounded-full transition-colors ${social.color}`}
                aria-label={social.name}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
