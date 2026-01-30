'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Terminal, Github, Linkedin } from 'lucide-react';

const team = [
  {
    name: "Maryam Arif",
    role: "Founder & Managing Lead",
    code: "AGENT_01",
    bio: "Leads AI development, system automation, and OpenAI Agents SDK integration.",
    image: "/maryam.webp",
    github: "https://github.com/maryamarif24",
    linkedin: "https://www.linkedin.com/in/maryam-arif-71b0992b5/"
  },
  {
    name: "Mehak Akram",
    role: "Co-Founder & Backend Lead",
    code: "AGENT_02",
    bio: "Manages backend architecture, APIs, databases, and system reliability.",
    image: "/mehak.webp",
    github: "https://github.com/Mehak-Akram/",
    linkedin: "https://www.linkedin.com/in/mehak-akram-3859a830b/"
  },
  {
    name: "Tahirah Roohi",
    role: "Co-Founder & Frontend Lead",
    code: "AGENT_03",
    bio: "Designs modern interfaces and improves user experience for the platform.",
    image: "/tahira.webp",
    github: "https://github.com/TahirahWebDev",
    linkedin: "https://linkedin.com/in/tahirah-roohi"
  }
];

export default function Team() {
  return (
    <section className="py-32 relative border-t border-white/5 bg-[#020202]">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-20 space-y-4">
          <div className="flex items-center gap-2 text-primary font-mono text-xs tracking-[0.3em] uppercase">
            <Terminal size={14} />
            Personnel_Directory.exe
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase">
            Meet Our <span className="text-primary italic">Core Team</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-primary/30 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 font-mono text-[10px] text-slate-700">
                {member.code}
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="relative mb-8">
                  <div className="absolute inset-0 bg-primary/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
                  
                  <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-primary/50 transition-colors duration-500">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover scale-100 group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>

                <div className="space-y-1 mb-6">
                  <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-primary transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-primary font-mono text-[10px] uppercase tracking-widest font-bold">
                    {member.role}
                  </p>
                </div>

                <p className="text-slate-500 text-sm leading-relaxed mb-8 max-w-[240px]">
                  {member.bio}
                </p>

                {/* --- SOCIAL LINKS --- */}
                <div className="flex gap-4">
                   <a 
                     href={member.github} 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="p-3 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-primary hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                     aria-label={`${member.name} GitHub`}
                   >
                     <Github size={18} />
                   </a>
                   <a 
                     href={member.linkedin} 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="p-3 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-primary hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                     aria-label={`${member.name} LinkedIn`}
                   >
                     <Linkedin size={18} />
                   </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}