import { motion } from "motion/react";
import { FileText, CheckCircle2, AlertTriangle, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-surface pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-8">
        <Link to="/" className="inline-flex items-center gap-2 text-primary font-label text-sm font-bold uppercase tracking-widest mb-12 hover:opacity-80 transition-opacity">
          <ArrowLeft className="w-4 h-4" />
          Back to Architecture
        </Link>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-12"
        >
          <div className="space-y-4">
            <h1 className="font-headline text-5xl font-black tracking-tighter text-on-surface">Terms of Service</h1>
            <p className="text-on-surface-variant font-label text-sm uppercase tracking-widest font-bold">Effective Date: March 27, 2026</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-surface-container-low rounded-lg border-l-4 border-primary">
              <CheckCircle2 className="text-primary w-8 h-8 mb-4" />
              <h3 className="font-headline font-bold mb-2">Service Standards</h3>
              <p className="text-sm text-on-surface-variant">We provide industrial-grade automation architecture and implementation services.</p>
            </div>
            <div className="p-6 bg-surface-container-low rounded-lg border-l-4 border-primary">
              <AlertTriangle className="text-primary w-8 h-8 mb-4" />
              <h3 className="font-headline font-bold mb-2">Liability Limits</h3>
              <p className="text-sm text-on-surface-variant">We are not responsible for third-party API outages or platform-wide changes.</p>
            </div>
          </div>

          <div className="prose prose-invert max-w-none space-y-8 text-on-surface-variant leading-relaxed">
            <section className="space-y-4">
              <h2 className="text-2xl font-headline font-bold text-on-surface">1. Acceptance of Architecture</h2>
              <p>
                By engaging with OpsPilot.cc services, you agree to our technical implementation standards. Our systems are built for stability and scale, and any manual tampering with the architecture may void our performance guarantees.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-headline font-bold text-on-surface">2. Intellectual Property</h2>
              <p>
                OpsPilot.cc retains ownership of the proprietary logic and architectural patterns developed during the implementation. You are granted a non-exclusive, perpetual license to use these systems for your business operations.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-headline font-bold text-on-surface">3. Subscription & Billing</h2>
              <p>
                Setup fees are non-refundable once the architecture audit has commenced. Monthly maintenance fees cover system monitoring, optimization, and minor logic updates.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-headline font-bold text-on-surface">4. System Integrity</h2>
              <p>
                You agree not to use our systems for any illegal or unauthorized purpose. We reserve the right to terminate service if we detect malicious use of our automation pipelines.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-headline font-bold text-on-surface">5. Contact</h2>
              <p>
                For any legal inquiries or questions regarding these terms, please contact <a href="mailto:sam.wang01@icloud.com" className="text-primary hover:underline">sam.wang01@icloud.com</a>.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsOfService;
