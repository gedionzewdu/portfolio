import { useRef, useState, FormEvent, useEffect } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { motion } from "motion/react";
import { 
  Github, 
  Linkedin, 
  Youtube, 
  Instagram, 
  Twitter, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink, 
  Code2, 
  Smartphone, 
  Database, 
  Globe, 
  ChevronRight,
  Download,
  Send,
  Briefcase
} from "lucide-react";
import { PROJECTS, EXPERIENCES, SOCIALS } from "./constants";

// Initialize EmailJS
emailjs.init('7MuJJ8-sp_NphQIbI');

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/5">
    <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
      <a href="https://gedion.is-a.dev" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
        <img 
          src="https://raw.githubusercontent.com/gedionzewdu/portfolio/main/branding/Gedion%20Dev%20Official%20Logo.png" 
          alt="Gedion Dev Logo" 
          className="w-10 h-10 object-contain rounded-full"
          referrerPolicy="no-referrer"
        />
        <span className="font-mono font-bold text-xl tracking-tighter">Gedion Dev</span>
      </a>
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/60">
        <a href="#home" className="hover:text-emerald-400 transition-colors">Home</a>
        <a href="#about" className="hover:text-emerald-400 transition-colors">About</a>
        <a href="#experience" className="hover:text-emerald-400 transition-colors">Experience</a>
        <a href="#projects" className="hover:text-emerald-400 transition-colors">Projects</a>
        <a href="#contact" className="px-5 py-2 bg-emerald-500 text-[#0a0a0a] rounded-full hover:bg-emerald-400 transition-colors">Hire Me</a>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section id="home" className="pt-40 pb-20 px-6 relative overflow-hidden scroll-mt-20">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-emerald-500/10 blur-[120px] rounded-full -z-10" />
    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          AVAILABLE FOR NEW PROJECTS
        </div>
        <h1 className="text-5xl sm:text-6xl md:text-8xl font-display font-bold leading-[0.9] mb-8">
          Building <span className="italic text-emerald-400">Digital</span> Experiences.
        </h1>
        <p className="text-xl text-white/60 max-w-xl mb-10 leading-relaxed">
          I'm Gedion Zewdu, a Full Stack Developer based in Addis Ababa. I specialize in building high-performance web and mobile applications using the MERN stack and native technologies.
        </p>
        <div className="flex flex-wrap gap-4">
          <a 
            href="https://raw.githubusercontent.com/gedionzewdu/portfolio/main/docs/Gedion%20Zewdu%20Full-Stack%20Developer%20Resume.pdf" 
            target="_blank"
            className="flex items-center gap-2 px-8 py-4 bg-white text-[#0a0a0a] rounded-2xl font-semibold hover:bg-emerald-400 transition-all group"
          >
            Download CV <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
          </a>
          <div className="flex items-center gap-3 px-4">
            {SOCIALS.slice(0, 4).map((social) => (
              <a 
                key={social.name}
                href={social.url} 
                target="_blank"
                className="w-12 h-12 flex items-center justify-center rounded-xl border border-white/10 hover:border-emerald-500/50 hover:bg-emerald-500/5 transition-all"
              >
                {social.name === 'Github' && <Github className="w-5 h-5" />}
                {social.name === 'Linkedin' && <Linkedin className="w-5 h-5" />}
                {social.name === 'Upwork' && <Briefcase className="w-5 h-5" />}
                {social.name === 'Youtube' && <Youtube className="w-5 h-5" />}
                {social.name === 'Instagram' && <Instagram className="w-5 h-5" />}
              </a>
            ))}
          </div>
        </div>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative w-full max-w-md mx-auto lg:max-w-none"
      >
        <div className="aspect-[1080/1350] rounded-[2rem] overflow-hidden border border-white/10 relative group bg-white/5">
          <img 
            src="https://raw.githubusercontent.com/gedionzewdu/portfolio/main/assets/Gedi%20Office%20Shot.png" 
            alt="Gedion Zewdu" 
            className="w-full h-full object-cover object-top transition-all duration-700"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60" />
        </div>
        <div className="absolute -bottom-6 -left-6 glass-card p-6 flex items-center gap-4 animate-bounce-slow">
          <div className="w-12 h-12 rounded-full bg-emerald-500 flex items-center justify-center">
            <Code2 className="text-[#0a0a0a]" />
          </div>
          <div>
            <div className="text-2xl font-bold">5+ Years</div>
            <div className="text-xs text-white/60 uppercase tracking-widest">Experience</div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="py-20 px-6 scroll-mt-20">
    <div className="max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-3 gap-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2"
        >
          <h2 className="text-4xl font-display font-bold mb-8">About Me</h2>
          <p className="text-xl text-white/60 leading-relaxed mb-8">
            Senior Full Stack Developer with deep expertise in React, Node.js, Express, and MongoDB, leading the architecture of secure, scalable web platforms for global users. Proven experience in API design and development, CI/CD strategy, and Agile leadership, with a strong focus on performance and reliability.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Frontend", icon: <Globe className="w-5 h-5 text-emerald-400" /> },
              { label: "Backend", icon: <Database className="w-5 h-5 text-cyan-400" /> },
              { label: "Mobile", icon: <Smartphone className="w-5 h-5 text-purple-400" /> },
              { label: "DevOps", icon: <ChevronRight className="w-5 h-5 text-orange-400" /> }
            ].map((skill, index) => (
              <motion.div 
                key={skill.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="glass-card p-4 flex flex-col items-center gap-3 text-center"
              >
                {skill.icon}
                <span className="text-sm font-medium">{skill.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card p-8"
        >
          <h3 className="text-xl font-bold mb-6">Education</h3>
          <div className="space-y-6">
            <div>
              <div className="text-emerald-400 font-mono text-sm mb-1">2016 - 2020</div>
              <div className="font-bold">Bachelor of Software Engineering</div>
              <div className="text-white/60 text-sm">Addis Ababa University</div>
            </div>
            <div className="pt-6 border-t border-white/5">
              <h3 className="text-xl font-bold mb-4">Languages</h3>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Amharic</span>
                  <span className="text-white/40 italic">Native</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>English</span>
                  <span className="text-white/40 italic">Advanced</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const Experience = () => (
  <section id="experience" className="py-20 px-6 bg-white/[0.02] scroll-mt-20">
    <div className="max-w-7xl mx-auto">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl font-display font-bold mb-12 text-center"
      >
        Professional Experience
      </motion.h2>
      <div className="space-y-8">
        {EXPERIENCES.map((exp, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass-card p-8 md:p-12 relative group overflow-hidden"
          >
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <div>
                  <h3 className="text-2xl font-bold text-emerald-400">{exp.role}</h3>
                  <div className="text-lg font-medium text-white/80">{exp.company}</div>
                </div>
                <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-mono">
                  {exp.period}
                </div>
              </div>
              <ul className="space-y-4">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex gap-4 items-start text-white/60 leading-relaxed">
                    <span className="text-emerald-400 mt-[0.6em] w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Projects = () => (
  <section id="projects" className="py-20 px-6 scroll-mt-20">
    <div className="max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16"
      >
        <div>
          <h2 className="text-4xl font-display font-bold mb-4">Featured Projects</h2>
          <p className="text-white/60 max-w-lg">
            A selection of my recent works across web and mobile platforms, focusing on user experience and technical excellence.
          </p>
        </div>
        <a href="https://github.com/gedionzewdu" target="_blank" className="flex items-center gap-2 text-emerald-400 font-medium hover:gap-3 transition-all">
          View all on Github <ChevronRight className="w-4 h-4" />
        </a>
      </motion.div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group"
          >
            <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/10 mb-6 bg-white/5">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="text-xs font-mono text-emerald-400 uppercase tracking-widest mb-2">{project.category}</div>
            <h3 className="text-xl font-bold mb-3 group-hover:text-emerald-400 transition-colors">{project.title}</h3>
            <p className="text-sm text-white/60 leading-relaxed">{project.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setIsSending(true);
    
    // Show loading state
    Swal.fire({
      title: 'Sending Message...',
      text: 'Please wait a moment.',
      allowOutsideClick: false,
      background: '#1a1a1a',
      color: '#fff',
      didOpen: () => {
        Swal.showLoading();
      }
    });

    try {
      const result = await emailjs.sendForm(
        'service_jxnddms',
        'template_qo2d5xu',
        form.current,
        '7MuJJ8-sp_NphQIbI'
      );

      console.log('EmailJS Success:', result.text);

      Swal.fire({
        title: 'Message Sent!',
        text: 'Thanks for reaching out. I usually reply within 24 hours.',
        icon: 'success',
        background: '#1a1a1a',
        color: '#fff',
        confirmButtonColor: '#10b981'
      });
      
      form.current.reset();
    } catch (error: any) {
      console.error('EmailJS Error:', error);
      Swal.fire({
        title: 'Error!',
        text: error?.text || 'Failed to send message. Please try again later.',
        icon: 'error',
        background: '#1a1a1a',
        color: '#fff',
        confirmButtonColor: '#ef4444'
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-6 relative scroll-mt-20">
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="glass-card p-12 md:p-20 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="grid lg:grid-cols-2 gap-16 relative z-10">
            <div>
              <h2 className="text-5xl font-display font-bold mb-8">Let's work <br /><span className="italic text-emerald-400">together.</span></h2>
              <p className="text-white/60 text-lg mb-12 max-w-md">
                Have a project in mind? Looking for a dedicated developer to join your team? I'm always open to discussing new opportunities.
              </p>
              <div className="space-y-6">
                <a href="mailto:contact@gedion.is-a.dev" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-emerald-500/50 transition-all">
                    <Mail className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <div className="text-xs text-white/40 uppercase tracking-widest">Email</div>
                    <div className="font-medium">contact@gedion.is-a.dev</div>
                  </div>
                </a>
                <a href="tel:+251976959946" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-emerald-500/50 transition-all">
                    <Phone className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <div className="text-xs text-white/40 uppercase tracking-widest">Phone</div>
                    <div className="font-medium">+251 976 959 946</div>
                  </div>
                </a>
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <div className="text-xs text-white/40 uppercase tracking-widest">Location</div>
                    <div className="font-medium">Addis Ababa, Ethiopia</div>
                  </div>
                </div>
              </div>
            </div>
            <form ref={form} className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-mono text-white/40 uppercase tracking-widest">Name</label>
                  <input name="from_name" type="text" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500/50 transition-all" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-mono text-white/40 uppercase tracking-widest">Email</label>
                  <input name="from_email" type="email" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500/50 transition-all" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-mono text-white/40 uppercase tracking-widest">Subject</label>
                <input name="subject" type="text" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500/50 transition-all" placeholder="Project Inquiry" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-mono text-white/40 uppercase tracking-widest">Message</label>
                <textarea name="message" rows={4} required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500/50 transition-all resize-none" placeholder="Tell me about your project..."></textarea>
              </div>
              <button 
                disabled={isSending}
                className="w-full py-4 bg-emerald-500 text-[#0a0a0a] rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-emerald-400 transition-all group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSending ? 'Sending...' : 'Send Message'} 
                <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="py-12 px-6 border-t border-white/5">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
      <a href="https://gedion.is-a.dev" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
        <img 
          src="https://raw.githubusercontent.com/gedionzewdu/portfolio/main/branding/Gedion%20Dev%20Official%20Logo.png" 
          alt="Gedion Dev Logo" 
          className="w-8 h-8 object-contain rounded-full"
          referrerPolicy="no-referrer"
        />
        <span className="font-mono font-bold tracking-tighter">Gedion Dev</span>
      </a>
      <div className="text-white/40 text-sm">
        © {new Date().getFullYear()} Gedion Zewdu. All rights reserved.
      </div>
      <div className="flex items-center gap-6">
        {SOCIALS.map((social) => (
          <a 
            key={social.name}
            href={social.url} 
            target="_blank"
            className="text-white/40 hover:text-emerald-400 transition-colors"
          >
            {social.name === 'Github' && <Github className="w-4 h-4" />}
            {social.name === 'Linkedin' && <Linkedin className="w-4 h-4" />}
            {social.name === 'Twitter' && <Twitter className="w-4 h-4" />}
            {social.name === 'Instagram' && <Instagram className="w-4 h-4" />}
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-emerald-500/30 selection:text-emerald-400">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
