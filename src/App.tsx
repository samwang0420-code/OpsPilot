/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import { useEffect, useState, FormEvent } from "react";
import { 
  ShieldCheck, 
  CheckCircle2, 
  Quote, 
  Terminal, 
  Database, 
  Network, 
  Zap, 
  ClipboardCheck, 
  History,
  ArrowRight,
  X,
  Send,
  Building2,
  Mail,
  User,
  Settings2,
  MessageSquare,
  Twitter,
  MessageCircle,
  Share2
} from "lucide-react";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const BookAuditModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    stack: "",
    challenge: ""
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStep(2);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-surface/80 backdrop-blur-md"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-xl bg-surface-container-lowest rounded-2xl shadow-2xl overflow-hidden border border-outline-variant/10"
          >
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 p-2 hover:bg-surface-container rounded-full transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>

            {step === 1 ? (
              <div className="p-8 md:p-12">
                <div className="mb-8">
                  <h2 className="font-headline text-3xl font-black tracking-tighter mb-2">Architecture Audit</h2>
                  <p className="text-on-surface-variant text-sm">Submit your system details for a technical review by our lead architects.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="font-label text-[10px] uppercase font-bold tracking-widest opacity-60 flex items-center gap-2">
                        <User className="w-3 h-3" /> Full Name
                      </label>
                      <input 
                        required
                        type="text"
                        placeholder="John Doe"
                        className="w-full bg-surface-container-low border border-outline-variant/20 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="font-label text-[10px] uppercase font-bold tracking-widest opacity-60 flex items-center gap-2">
                        <Mail className="w-3 h-3" /> Business Email
                      </label>
                      <input 
                        required
                        type="email"
                        placeholder="john@company.cc"
                        className="w-full bg-surface-container-low border border-outline-variant/20 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="font-label text-[10px] uppercase font-bold tracking-widest opacity-60 flex items-center gap-2">
                      <Building2 className="w-3 h-3" /> Company Name
                    </label>
                    <input 
                      required
                      type="text"
                      placeholder="Industrial Logic Inc."
                      className="w-full bg-surface-container-low border border-outline-variant/20 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="font-label text-[10px] uppercase font-bold tracking-widest opacity-60 flex items-center gap-2">
                      <Settings2 className="w-3 h-3" /> Current Tech Stack
                    </label>
                    <input 
                      required
                      type="text"
                      placeholder="HubSpot, Shopify, Slack..."
                      className="w-full bg-surface-container-low border border-outline-variant/20 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
                      value={formData.stack}
                      onChange={(e) => setFormData({...formData, stack: e.target.value})}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="font-label text-[10px] uppercase font-bold tracking-widest opacity-60 flex items-center gap-2">
                      <MessageSquare className="w-3 h-3" /> Primary Automation Challenge
                    </label>
                    <textarea 
                      required
                      rows={3}
                      placeholder="Describe your main data sync or workflow bottleneck..."
                      className="w-full bg-surface-container-low border border-outline-variant/20 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors resize-none"
                      value={formData.challenge}
                      onChange={(e) => setFormData({...formData, challenge: e.target.value})}
                    />
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-primary text-white py-4 rounded-md font-headline font-bold uppercase tracking-widest text-sm hover:bg-primary-dim transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/20"
                  >
                    Initialize Audit Request <Send className="w-4 h-4" />
                  </button>
                </form>
              </div>
            ) : (
              <div className="p-12 text-center space-y-6">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10 text-primary" />
                </div>
                <div className="space-y-2">
                  <h2 className="font-headline text-3xl font-black tracking-tighter">Request Logged</h2>
                  <p className="text-on-surface-variant">Our engineering team has received your architecture details. We will contact you at <span className="text-on-surface font-bold">{formData.email}</span> within 24 business hours.</p>
                </div>
                <div className="pt-4">
                  <button 
                    onClick={onClose}
                    className="px-8 py-3 bg-surface-container-highest font-bold rounded-md hover:bg-surface-dim transition-colors"
                  >
                    Close Terminal
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const Navbar = ({ onBookAudit }: { onBookAudit: () => void }) => (
  <nav className="fixed top-0 w-full z-50 bg-surface/70 backdrop-blur-xl shadow-sm">
    <div className="flex justify-between items-center w-full px-8 py-6 max-w-7xl mx-auto">
      <Link to="/" className="text-2xl font-black text-on-surface tracking-tighter font-headline hover:opacity-80 transition-opacity">
        OpsPilot.cc
      </Link>
      <div className="hidden md:flex items-center gap-10 font-headline font-bold tracking-tight text-sm uppercase">
        <a className="text-on-surface-variant hover:text-on-surface transition-colors" href="/#methodology">Methodology</a>
        <a className="text-on-surface-variant hover:text-on-surface transition-colors" href="/#pricing">Pricing</a>
        <a className="text-on-surface-variant hover:text-on-surface transition-colors" href="/#implementation">Implementation</a>
      </div>
      <button 
        onClick={onBookAudit}
        className="bg-primary text-white px-6 py-2.5 rounded-md font-headline font-bold text-sm uppercase tracking-wider hover:opacity-90 transition-all active:scale-95 duration-150"
      >
        Book Audit
      </button>
    </div>
  </nav>
);

const Hero = ({ onBookAudit }: { onBookAudit: () => void }) => (
  <section className="relative pt-32 pb-20 md:pt-48 md:pb-40 overflow-hidden">
    <div className="absolute inset-0 technical-grid pointer-events-none"></div>
    <div className="max-w-7xl mx-auto px-8 relative z-10 grid grid-cols-12 gap-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="col-span-12 md:col-span-8 space-y-8"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary-container rounded-md">
          <span className="font-label text-xs font-bold uppercase tracking-widest text-on-secondary-container">Industrial Grade Logic</span>
        </div>
        <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tighter leading-[1.1] text-on-surface">
          Stop Managing Tools.<br/>
          <span className="text-primary">Start Engineering</span> Your Growth.
        </h1>
        <p className="text-xl md:text-2xl text-on-surface-variant font-light max-w-2xl leading-relaxed">
          Based on 15+ years of top-tier enterprise CRM management, we build an <span className="font-semibold text-on-surface">"industrial-grade"</span> automation foundation for small business owners. Using BoostSpace + n8n/Make, we transform your scattered 15+ tools into a relentless business brain.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <button 
            onClick={onBookAudit}
            className="bg-primary text-white px-10 py-5 rounded-md font-headline font-bold text-lg hover:bg-primary-dim transition-all shadow-xl shadow-primary/20"
          >
            Book Your Free Architecture Audit
          </button>
          <div className="flex items-center gap-3 px-6 py-4">
            <ShieldCheck className="text-primary w-6 h-6" />
            <span className="font-label text-sm uppercase font-bold tracking-tight">Full Delegation Model</span>
          </div>
        </div>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="hidden md:block col-span-4 relative"
      >
        <div className="absolute inset-0 bg-surface-container-high rounded-xl overflow-hidden shadow-2xl">
          <img 
            className="w-full h-full object-cover grayscale mix-blend-multiply opacity-40" 
            alt="Technical close-up of high-end industrial control panel" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXgyu7ZDfuK3-Jes0HI-AyEnxoM15ysDKbGUnAlcRCWf13rdoD-nQQYEASiONxmdHC2M3MsWuKCj9nalzvZpmaNW22YK_XWRgssTC-S_Kkp0OT8pXRFeRgBJxvNXAlkTAGLVSmbTh57HF3nC7mSq_XGQp3wu3NxYUcZR94eS7OJbgdCeIZ_K_gAhbJzNNFPLFjOH1jWal8yvoSYAYlJqjELGzDAalw1W4JqHPvj3jdSU1kNCrdRf-b2FWTps4Sp1ib7p-TlAUUkqM"
            referrerPolicy="no-referrer"
          />
          <div className="absolute bottom-6 left-6 right-6 p-6 bg-surface-container-lowest/90 backdrop-blur-md rounded-lg space-y-2 border-l-4 border-primary">
            <p className="font-label text-xs uppercase tracking-widest font-bold opacity-60">System Throughput</p>
            <p className="text-3xl font-headline font-black text-primary">99.98%</p>
            <p className="text-xs text-on-surface-variant">Data integrity verified across 15+ nodes.</p>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

const TheBlueprint = () => {
  const steps = [
    {
      id: "01",
      title: "System Audit",
      description: "Find data black holes costing thousands annually through deep technical inventory.",
      outcome: "Visibility"
    },
    {
      id: "02",
      title: "Foundation Build",
      description: "Establish a Single Source of Truth (SSOT). Resolve sync nightmares forever.",
      outcome: "Accuracy"
    },
    {
      id: "03",
      title: "Logic Orchestration",
      description: "Writing core automations that free up 90% of repeat admin tasks and manual entries.",
      outcome: "Efficiency"
    },
    {
      id: "04",
      title: "Performance Verification",
      description: "Banking-level stability with stress testing and automatic failure alerts.",
      outcome: "Peace of Mind"
    }
  ];

  return (
    <section className="py-24 bg-surface-container-low" id="methodology">
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-16">
          <h2 className="font-headline text-4xl font-extrabold tracking-tight mb-4">The Blueprint</h2>
          <p className="font-label uppercase tracking-widest text-primary font-bold">4-Step Implementation Protocol</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-outline-variant opacity-20 -translate-y-1/2 z-0"></div>
          {steps.map((step, index) => (
            <motion.div 
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-surface-container-lowest p-8 rounded-lg relative z-10 flex flex-col items-start gap-6 group hover:translate-y-[-4px] transition-transform shadow-sm"
            >
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-label font-bold">
                {step.id}
              </div>
              <div className="space-y-3">
                <h3 className="font-headline text-xl font-bold">{step.title}</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">{step.description}</p>
                <div className="pt-4 mt-auto">
                  <span className="text-xs font-label uppercase font-bold text-primary">Outcome: {step.outcome}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Pricing = ({ onBookAudit }: { onBookAudit: () => void }) => (
  <section className="py-24" id="pricing">
    <div className="max-w-7xl mx-auto px-8">
      <div className="text-center mb-16 space-y-4">
        <h2 className="font-headline text-4xl font-extrabold tracking-tight">Pricing Architecture</h2>
        <p className="text-on-surface-variant max-w-xl mx-auto">Expert rates for industrial-grade systems. Choose the level of integration required for your scale.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
        {/* Core */}
        <div className="bg-surface-container p-8 rounded-lg space-y-8 flex flex-col border-b-4 border-outline-variant/20">
          <div className="space-y-2">
            <h3 className="font-headline text-2xl font-bold">Core</h3>
            <p className="text-sm text-on-surface-variant">Entry-level logic stabilization.</p>
          </div>
          <div className="space-y-1">
            <p className="text-4xl font-headline font-black">$149 <span className="text-sm font-label font-medium opacity-60">Setup</span></p>
            <p className="text-xl font-headline font-bold text-primary">$29 <span className="text-sm font-label font-medium">/mo</span></p>
          </div>
          <ul className="space-y-4 flex-grow border-t border-outline-variant/10 pt-8">
            {[ "3 core tools integration", "Basic deduplication", "Weekly performance reports" ].map((feature) => (
              <li key={feature} className="flex items-center gap-3 text-sm">
                <CheckCircle2 className="text-primary w-5 h-5" />
                {feature}
              </li>
            ))}
          </ul>
          <button 
            onClick={onBookAudit}
            className="w-full py-4 bg-surface-container-highest font-bold text-on-surface rounded-md hover:bg-surface-dim transition-colors"
          >
            Select Core
          </button>
        </div>

        {/* Growth */}
        <div className="bg-surface-container-lowest p-10 rounded-lg space-y-8 flex flex-col shadow-2xl relative scale-105 z-10 border-t-4 border-primary">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-[10px] font-label font-bold uppercase tracking-widest">Most Requested</div>
          <div className="space-y-2">
            <h3 className="font-headline text-3xl font-black">Growth</h3>
            <p className="text-sm text-on-surface-variant">Full architecture for scaling agencies.</p>
          </div>
          <div className="space-y-1">
            <p className="text-5xl font-headline font-black">$299 <span className="text-sm font-label font-medium opacity-60">Setup</span></p>
            <p className="text-2xl font-headline font-bold text-primary">$79 <span className="text-sm font-label font-medium">/mo</span></p>
          </div>
          <ul className="space-y-4 flex-grow border-t border-outline-variant/10 pt-8">
            {[ "15+ tool multi-sync", "BoostSpace Foundation", "Advanced AI Scoring logic", "2 Optimization Iterations" ].map((feature, i) => (
              <li key={feature} className={`flex items-center gap-3 text-sm ${i < 2 ? 'font-semibold' : ''}`}>
                <CheckCircle2 className="text-primary w-5 h-5 fill-primary/10" />
                {feature}
              </li>
            ))}
          </ul>
          <button 
            onClick={onBookAudit}
            className="w-full py-4 bg-primary text-white font-bold rounded-md hover:bg-primary-dim transition-colors shadow-lg shadow-primary/30"
          >
            Build My Foundation
          </button>
        </div>

        {/* Enterprise */}
        <div className="bg-surface-container p-8 rounded-lg space-y-8 flex flex-col border-b-4 border-outline-variant/20">
          <div className="space-y-2">
            <h3 className="font-headline text-2xl font-bold">Enterprise</h3>
            <p className="text-sm text-on-surface-variant">Custom multi-node ecosystems.</p>
          </div>
          <div className="space-y-1">
            <p className="text-4xl font-headline font-black">$999+ <span className="text-sm font-label font-medium opacity-60">Setup</span></p>
            <p className="text-xl font-headline font-bold text-primary">$199+ <span className="text-sm font-label font-medium">/mo</span></p>
          </div>
          <ul className="space-y-4 flex-grow border-t border-outline-variant/10 pt-8">
            {[ "Dedicated CRM Architect", "Custom Webhook engineering", "Quarterly business reviews" ].map((feature) => (
              <li key={feature} className="flex items-center gap-3 text-sm">
                <CheckCircle2 className="text-primary w-5 h-5" />
                {feature}
              </li>
            ))}
          </ul>
          <button 
            onClick={onBookAudit}
            className="w-full py-4 bg-surface-container-highest font-bold text-on-surface rounded-md hover:bg-surface-dim transition-colors"
          >
            Contact Expert
          </button>
        </div>
      </div>
    </div>
  </section>
);

const Implementation = () => (
  <section className="py-24 bg-surface-container-high relative overflow-hidden" id="implementation">
    <div className="max-w-7xl mx-auto px-8 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <h2 className="font-headline text-4xl font-extrabold leading-tight">Precision Technical<br/>Implementation</h2>
          <p className="text-lg text-on-surface-variant">We don't just connect apps; we engineer resilient data pipelines that survive platform updates and high-traffic bursts.</p>
          <div className="grid grid-cols-1 gap-6">
            <div className="flex gap-4 p-6 bg-surface-container-lowest rounded-lg shadow-sm">
              <Zap className="text-primary w-8 h-8 shrink-0" />
              <div>
                <h4 className="font-headline font-bold mb-1">API Rate Limit Optimization</h4>
                <p className="text-sm text-on-surface-variant">Intelligent queuing systems avoid platform bans during high-frequency data syncs.</p>
              </div>
            </div>
            <div className="flex gap-4 p-6 bg-surface-container-lowest rounded-lg shadow-sm">
              <ClipboardCheck className="text-primary w-8 h-8 shrink-0" />
              <div>
                <h4 className="font-headline font-bold mb-1">Data Normalization</h4>
                <p className="text-sm text-on-surface-variant">Auto-standardize phone numbers, names, and date formats regardless of where they enter your system.</p>
              </div>
            </div>
            <div className="flex gap-4 p-6 bg-surface-container-lowest rounded-lg shadow-sm">
              <History className="text-primary w-8 h-8 shrink-0" />
              <div>
                <h4 className="font-headline font-bold mb-1">Multi-Fault Tolerance</h4>
                <p className="text-sm text-on-surface-variant">Our auto-retry logic ensures zero data loss even during temporary third-party API outages.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-inverse-surface p-12 rounded-xl text-white space-y-8 shadow-2xl">
          <h3 className="font-label text-xs uppercase tracking-widest font-bold opacity-60">Architectural Standards</h3>
          <ul className="space-y-6">
            {[
              { id: "01", title: "Cross-Platform Field Mapping", desc: "Precise matching of 50+ business fields across your entire tech stack." },
              { id: "02", title: "Zero-Manual Entry Promise", desc: "Your team never moves data by hand again. No copy-pasting, ever." },
              { id: "03", title: "Encryption-at-Rest", desc: "All data transit complies with enterprise-grade security protocols." }
            ].map((std) => (
              <li key={std.id} className="flex items-start gap-4">
                <span className="text-primary/40 font-headline font-bold text-2xl">{std.id}</span>
                <div>
                  <h5 className="font-bold text-lg mb-1">{std.title}</h5>
                  <p className="text-sm opacity-60">{std.desc}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="pt-8 border-t border-white/10">
            <div className="flex items-center justify-between text-xs font-label opacity-40 uppercase tracking-tighter">
              <span>Logic Load: Nominal</span>
              <span>Status: Verified</span>
              <span>Node: AMZ-W3</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Testimonial = () => (
  <section className="py-24 bg-surface">
    <div className="max-w-7xl mx-auto px-8">
      <div className="bg-surface-container-lowest p-12 md:p-20 rounded-2xl flex flex-col md:flex-row gap-16 items-center border border-outline-variant/10 shadow-sm">
        <div className="w-64 h-64 md:w-80 md:h-80 shrink-0 relative">
          <div className="absolute inset-0 bg-primary translate-x-4 translate-y-4 rounded-xl -z-10"></div>
          <img 
            className="w-full h-full object-cover rounded-xl filter grayscale" 
            alt="Alex Richardson, Lead Systems Architect" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSIlppf_jrEy2xEZum-fQN6NVSzAFpsCPDfVrwMJGKPc3QHK6wb5LYbcSDfnBhLNaP2d4WkbpKUj0tdMSg19gLVKGn-4DN2SZO_wYobK94taRTJTm-RW4pI87t5wOTtF_FZLkWX5iB7Pg3Gno4xGcsQNJ6bCaqOR0PTY2WzIbVSxjkDbGyb0L6RnQBTNWNTlMeIvzstwRAMWIvHvWJyI382SQeuzsnnhKUTGlpOXw3HohArJh7lBFo-BuhrZXAVm83WhChOsoGnfA"
            referrerPolicy="no-referrer"
          />
          <div className="absolute -bottom-4 -right-4 bg-primary text-white px-6 py-4 rounded-md shadow-xl">
            <p className="font-headline font-black text-xl">15+ Years</p>
            <p className="font-label text-[10px] uppercase font-bold tracking-widest opacity-80">CRM Project Manager</p>
          </div>
        </div>
        <div className="space-y-8">
          <Quote className="w-16 h-16 text-primary/10" />
          <blockquote className="font-headline text-2xl md:text-3xl font-bold italic text-on-surface leading-relaxed">
            "I've seen countless companies fail due to cheap automation. This architecture is the distilled 'foundation' from hundreds of cases. It's not just software; it's your digital asset."
          </blockquote>
          <div className="space-y-2">
            <p className="font-headline font-black text-xl">Alex Richardson</p>
            <p className="text-on-surface-variant">Lead Systems Architect, OpsPilot.cc</p>
          </div>
          <div className="pt-8 border-t border-outline-variant/10">
            <p className="font-label text-xs uppercase tracking-widest font-bold text-on-surface-variant mb-6">Official Integration Stack</p>
            <div className="flex flex-wrap gap-8 opacity-40 grayscale font-headline font-bold text-xl">
              <span>BoostSpace</span>
              <span>n8n</span>
              <span>Make</span>
              <span>HubSpot</span>
              <span>Shopify</span>
              <span>Stripe</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-surface-container-high dark:bg-inverse-surface w-full pt-20 pb-10">
    <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-start gap-12">
      <div className="space-y-6 max-w-sm">
        <Link to="/" className="text-xl font-bold text-on-surface hover:opacity-80 transition-opacity">
          OpsPilot.cc
        </Link>
        <p className="font-body text-xs text-on-surface-variant leading-relaxed">
          Building resilient automation infrastructure for the next generation of industrial-grade businesses. Precision engineering for data flow.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-12 font-body text-xs">
        <div className="space-y-4">
          <p className="font-bold text-on-surface uppercase tracking-widest text-[10px]">Product</p>
          <div className="flex flex-col gap-2">
            <a className="text-on-surface-variant hover:underline decoration-primary underline-offset-4" href="/#methodology">Methodology</a>
            <a className="text-primary font-semibold" href="/#pricing">Pricing</a>
            <a className="text-on-surface-variant hover:underline decoration-primary underline-offset-4" href="/#implementation">Implementation</a>
          </div>
        </div>
        <div className="space-y-4">
          <p className="font-bold text-on-surface uppercase tracking-widest text-[10px]">Legal</p>
          <div className="flex flex-col gap-2">
            <Link className="text-on-surface-variant hover:underline decoration-primary underline-offset-4" to="/privacy">Privacy Policy</Link>
            <Link className="text-on-surface-variant hover:underline decoration-primary underline-offset-4" to="/terms">Terms of Service</Link>
          </div>
        </div>
        <div className="space-y-4 col-span-2 md:col-span-1">
          <p className="font-bold text-on-surface uppercase tracking-widest text-[10px]">Connect</p>
          <div className="flex flex-col gap-3">
            <a href="mailto:sam.wang01@icloud.com" className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors">
              <Mail className="w-4 h-4" /> sam.wang01@icloud.com
            </a>
            <a href="https://wa.me/8618102660087" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors">
              <MessageCircle className="w-4 h-4" /> WhatsApp
            </a>
            <div className="flex gap-4 pt-2">
              <a href="https://x.com/OpsPilotcc" target="_blank" rel="noopener noreferrer" className="text-on-surface-variant hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://reddit.com/u/Comfortable_Fee29" target="_blank" rel="noopener noreferrer" className="text-on-surface-variant hover:text-primary transition-colors">
                <Share2 className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-8 mt-20 pt-8 border-t border-outline-variant/10">
      <p className="font-body text-xs text-on-surface-variant">
        © 2024-2026 OpsPilot.cc Industrial Automation. All rights reserved.
      </p>
    </div>
  </footer>
);

const LandingPage = ({ onBookAudit }: { onBookAudit: () => void }) => (
  <main>
    <Hero onBookAudit={onBookAudit} />
    <TheBlueprint />
    <Pricing onBookAudit={onBookAudit} />
    <Implementation />
    <Testimonial />
    
    <div className="py-24 bg-surface text-center space-y-8">
      <h2 className="font-headline text-5xl font-black tracking-tight">Ready to Engineer Your Growth?</h2>
      <button 
        onClick={onBookAudit}
        className="bg-primary text-white px-12 py-6 rounded-md font-headline font-bold text-xl hover:bg-primary-dim transition-all shadow-2xl shadow-primary/40 active:scale-95 duration-150"
      >
        Secure Your Growth Engine Today
      </button>
    </div>
  </main>
);

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen">
        <Navbar onBookAudit={() => setIsModalOpen(true)} />
        <Routes>
          <Route path="/" element={<LandingPage onBookAudit={() => setIsModalOpen(true)} />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
        </Routes>
        <Footer />
        <BookAuditModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>
    </Router>
  );
}
