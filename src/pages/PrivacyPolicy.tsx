import { motion } from "motion/react";
import { Shield, Lock, Eye, FileText, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
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
            <h1 className="font-headline text-5xl font-black tracking-tighter text-on-surface">Privacy Policy</h1>
            <p className="text-on-surface-variant font-label text-sm uppercase tracking-widest font-bold">Last Updated: March 27, 2026</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-surface-container-low rounded-lg border-l-4 border-primary">
              <Shield className="text-primary w-8 h-8 mb-4" />
              <h3 className="font-headline font-bold mb-2">Data Security</h3>
              <p className="text-sm text-on-surface-variant">Enterprise-grade encryption for all data at rest and in transit.</p>
            </div>
            <div className="p-6 bg-surface-container-low rounded-lg border-l-4 border-primary">
              <Lock className="text-primary w-8 h-8 mb-4" />
              <h3 className="font-headline font-bold mb-2">Access Control</h3>
              <p className="text-sm text-on-surface-variant">Strict internal protocols ensuring zero unauthorized access.</p>
            </div>
            <div className="p-6 bg-surface-container-low rounded-lg border-l-4 border-primary">
              <Eye className="text-primary w-8 h-8 mb-4" />
              <h3 className="font-headline font-bold mb-2">Transparency</h3>
              <p className="text-sm text-on-surface-variant">Clear documentation on how your data is processed and stored.</p>
            </div>
          </div>

          <div className="prose prose-invert max-w-none space-y-8 text-on-surface-variant leading-relaxed">
            <section className="space-y-4">
              <h2 className="text-2xl font-headline font-bold text-on-surface">1. Data Collection Protocols</h2>
              <p>
                OpsPilot.cc collects minimal data required to engineer your automation systems. This includes technical metadata from integrated tools (CRM, ERP, etc.) and contact information provided during the architecture audit.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-headline font-bold text-on-surface">2. Processing Logic</h2>
              <p>
                All data processing is performed via encrypted pipelines (n8n, Make, BoostSpace). We do not sell your data. We use it exclusively to optimize your business logic and ensure system stability.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-headline font-bold text-on-surface">3. Third-Party Integrations</h2>
              <p>
                Our systems interact with third-party APIs (HubSpot, Shopify, Stripe, etc.). Each integration follows the specific privacy standards of those platforms while maintaining our internal "Industrial-Grade" security layer.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-headline font-bold text-on-surface">4. Your Rights</h2>
              <p>
                You maintain full ownership of your data. You may request a complete technical dump or deletion of your configuration metadata at any time.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-headline font-bold text-on-surface">5. Contact Information</h2>
              <p>
                For any questions regarding this Privacy Policy, please contact our data protection team at <a href="mailto:sam.wang01@icloud.com" className="text-primary hover:underline">sam.wang01@icloud.com</a>.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
