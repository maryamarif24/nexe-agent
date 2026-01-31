'use client';

import { useState } from "react";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from "@/hooks/use-toast";
import {
  ArrowRight,
  Mail,
  Send,
  ShieldCheck,
  Scan,
  BarChart3,
  Target,
  TrendingUp,
  Activity,
  CheckCircle
} from 'lucide-react';
import Layout from '@/components/Layout';
import { motion } from 'framer-motion';

export default function AuditPage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    website: "",
    businessType: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Prepare the data for Web3Forms
      const submissionData = new FormData();
      submissionData.append("access_key", "96b000b2-60cb-4607-8699-72a7e547c7da");
      submissionData.append("name", formData.name);
      submissionData.append("email", formData.email);
      submissionData.append("company", formData.company);
      submissionData.append("website", formData.website);
      submissionData.append("businessType", formData.businessType);
      submissionData.append("message", formData.message);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: submissionData,
      });

      const data = await response.json();

      if (data.success) {
        toast({
          title: "Audit Request Submitted",
          description: "Your audit request has been received. Our team will analyze your business and contact you within 24 hours.",
        });
        setFormData({ 
          name: "", 
          email: "", 
          company: "", 
          website: "", 
          businessType: "", 
          message: "" 
        });
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      toast({
        title: "Request Failed",
        description: "There was an issue submitting your audit request. Please try again or email us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const auditSteps = [
    {
      icon: Scan,
      title: "Comprehensive Analysis",
      description: "Our AI scans your current systems, processes, and digital infrastructure."
    },
    {
      icon: BarChart3,
      title: "Performance Metrics",
      description: "We analyze traffic, conversion rates, user behavior, and operational efficiency."
    },
    {
      icon: Target,
      title: "Opportunity Identification",
      description: "Identify bottlenecks, redundancies, and areas for automation and improvement."
    },
    {
      icon: TrendingUp,
      title: "Actionable Recommendations",
      description: "Receive a detailed report with prioritized recommendations for growth."
    }
  ];

  return (
    <Layout>
      <div className="h-full min-h-screen bg-transparent text-slate-300 pb-20">

        {/* --- HERO: AUDIT INTRODUCTION --- */}
        <section className="relative pt-40 pb-20 overflow-hidden border-b border-white/5">
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-3 text-primary font-mono text-xs tracking-widest uppercase mb-6"
              >
                <Activity size={14} />
                AI_AUDIT_PROTOCOL_INITIATED
              </motion.div>

              <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none mb-8 uppercase">
                Free <span className="text-primary italic">AI Audit</span>
              </h1>

              <p className="text-xl text-slate-400 leading-relaxed font-light border-l-2 border-primary/20 pl-8">
                Discover hidden opportunities for growth, efficiency, and automation in your business. 
                Our AI-powered audit identifies bottlenecks and provides actionable recommendations.
              </p>
            </div>
          </div>
        </section>

        {/* --- AUDIT BENEFITS SECTION --- */}
        <section className="py-20 relative z-10">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {auditSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-primary/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-slate-500 text-sm">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* --- MAIN AUDIT FORM --- */}
        <section className="py-16 relative z-10">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
                  Request Your <span className="text-primary">Free AI Audit</span>
                </h2>
                <p className="text-slate-500 max-w-2xl mx-auto">
                  Fill out this form to receive a comprehensive analysis of your business operations, 
                  digital infrastructure, and AI integration opportunities.
                </p>
              </div>

              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-b from-primary/20 to-transparent rounded-2xl blur opacity-50 group-hover:opacity-100 transition duration-1000" />

                <div className="relative p-8 md:p-12 rounded-2xl bg-[#020202]/60 backdrop-blur-md border border-white/10 shadow-2xl">
                  <div className="flex justify-between items-center mb-10 border-b border-white/5 pb-6">
                    <div>
                      <h2 className="text-2xl font-bold text-white tracking-tight">Audit Information</h2>
                      <p className="text-slate-500 text-xs font-mono uppercase mt-1">Status: Ready_For_Analysis</p>
                    </div>
                    <ShieldCheck className="text-primary/40 w-8 h-8" />
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500">Full_Name</label>
                        <div className="relative">
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="John Doe"
                            className="h-14 pl-12 bg-white/[0.02] border-white/10 focus:border-primary/50 text-white placeholder:text-slate-700 rounded-xl"
                            required
                          />
                          <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-primary/40" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                          </svg>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500">Email_Address</label>
                        <div className="relative">
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="john@company.com"
                            className="h-14 pl-12 bg-white/[0.02] border-white/10 focus:border-primary/50 text-white placeholder:text-slate-700 rounded-xl"
                            required
                          />
                          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-primary/40" />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500">Company_Name</label>
                        <div className="relative">
                          <Input
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            placeholder="Your Company Name"
                            className="h-14 pl-12 bg-white/[0.02] border-white/10 focus:border-primary/50 text-white placeholder:text-slate-700 rounded-xl"
                            required
                          />
                          <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-primary/40" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                          </svg>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500">Website_URL</label>
                        <div className="relative">
                          <Input
                            id="website"
                            name="website"
                            value={formData.website}
                            onChange={handleChange}
                            placeholder="https://yourwebsite.com"
                            className="h-14 pl-12 bg-white/[0.02] border-white/10 focus:border-primary/50 text-white placeholder:text-slate-700 rounded-xl"
                            required
                          />
                          <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-primary/40" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
                          </svg>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500">Business_Type</label>
                      <div className="relative">
                        <select
                          id="businessType"
                          name="businessType"
                          value={formData.businessType}
                          onChange={(e) => setFormData({...formData, businessType: e.target.value})}
                          className="w-full h-14 pl-12 bg-white/[0.02] border border-white/10 focus:border-primary/50 text-white rounded-xl appearance-none cursor-pointer"
                          required
                        >
                          <option value="" className="bg-[#020202]">Select your business type</option>
                          <option value="e-commerce" className="bg-[#020202]">E-commerce</option>
                          <option value="saas" className="bg-[#020202]">SaaS</option>
                          <option value="agency" className="bg-[#020202]">Agency</option>
                          <option value="consulting" className="bg-[#020202]">Consulting</option>
                          <option value="healthcare" className="bg-[#020202]">Healthcare</option>
                          <option value="finance" className="bg-[#020202]">Finance</option>
                          <option value="education" className="bg-[#020202]">Education</option>
                          <option value="other" className="bg-[#020202]">Other</option>
                        </select>
                        <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-primary/40 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4"></path>
                        </svg>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500">Specific_Areas_for_Audit</label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Which areas of your business would you like us to focus on during the audit? (e.g., website performance, customer journey, automation opportunities, etc.)"
                        rows={5}
                        className="bg-white/[0.02] border-white/10 focus:border-primary/50 text-white placeholder:text-slate-700 rounded-xl resize-none p-6"
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      variant="glow"
                      size="xl"
                      className="w-full h-16 gap-3 text-black font-black uppercase tracking-widest rounded-xl transition-all active:scale-[0.98]"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Processing Request..." : "Request Free Audit"}
                      <Send className="w-5 h-5" />
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- AUDIT OUTCOME SECTION --- */}
        <section className="py-24 relative z-10">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-12">
                What You'll Receive in Your <span className="text-primary">Free AI Audit</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    icon: CheckCircle,
                    title: "Performance Report",
                    description: "Detailed analysis of your current systems and processes"
                  },
                  {
                    icon: TrendingUp,
                    title: "Growth Opportunities",
                    description: "Identification of untapped potential in your business"
                  },
                  {
                    icon: Target,
                    title: "Action Plan",
                    description: "Step-by-step roadmap to implement improvements"
                  }
                ].map((item, index) => (
                  <div key={index} className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-slate-500 text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}