import React, { useEffect } from "react";
import { Link } from "wouter";

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-md border-b border-border shadow-sm py-4">
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <img src="/images/logo.png" alt="Purple Pocket Logo" className="h-10 w-auto" />
            <span className="font-serif font-bold text-xl tracking-tight text-foreground">
              Purple Pocket
            </span>
          </Link>
          <Link
            href="/"
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 md:px-6 py-16 max-w-3xl">
        <h1 className="text-4xl font-serif font-bold text-foreground mb-2">Privacy Policy</h1>
        <p className="text-sm text-muted-foreground mb-10">Effective Date: January 1, 2026 &nbsp;|&nbsp; Purple Pocket LLC</p>

        <div className="prose prose-gray max-w-none space-y-8 text-muted-foreground leading-relaxed">

          <section>
            <h2 className="text-xl font-serif font-bold text-foreground mb-3">1. Overview</h2>
            <p>
              Purple Pocket LLC ("Purple Pocket," "we," "our," or "us") is committed to protecting
              the privacy of individuals who visit our website at purplepkt.com and interact with
              our services. This Privacy Policy explains what information we collect, how we use
              it, and your rights with respect to that information.
            </p>
            <p className="mt-3">
              By using this website or contacting us through any channel, you agree to the
              practices described in this policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif font-bold text-foreground mb-3">2. Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>
                <strong className="text-foreground">Contact Information:</strong> Name, email
                address, phone number, and any message content you submit through our contact
                form or by direct email.
              </li>
              <li>
                <strong className="text-foreground">Business Information:</strong> Company name,
                service requirements, and other details you voluntarily provide when inquiring
                about our logistics or transportation services.
              </li>
              <li>
                <strong className="text-foreground">Usage Data:</strong> Basic information about
                how you interact with our website, including pages visited, browser type, and
                referring URLs, collected through standard server logs or analytics tools.
              </li>
            </ul>
            <p className="mt-3">
              We do not collect payment card numbers, Social Security numbers, or other sensitive
              personal identifiers through this website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif font-bold text-foreground mb-3">3. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>Respond to inquiries and provide customer support</li>
              <li>Evaluate and fulfill service requests</li>
              <li>Communicate about service availability, updates, or changes</li>
              <li>Improve our website and service offerings</li>
              <li>Comply with applicable laws and regulations</li>
            </ul>
            <p className="mt-3">
              We do not sell, rent, or trade your personal information to third parties for
              marketing purposes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif font-bold text-foreground mb-3">4. Information Sharing</h2>
            <p>
              We may share your information only in the following limited circumstances:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>
                <strong className="text-foreground">Service Providers:</strong> Third-party
                vendors who assist us in operating our business (such as email or hosting
                providers), bound by confidentiality obligations.
              </li>
              <li>
                <strong className="text-foreground">Legal Requirements:</strong> When required by
                law, subpoena, court order, or government request, or to protect the rights,
                property, or safety of Purple Pocket LLC or others.
              </li>
              <li>
                <strong className="text-foreground">Business Transfers:</strong> In connection
                with a merger, acquisition, or sale of assets, your information may be
                transferred as part of that transaction.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-serif font-bold text-foreground mb-3">5. Data Retention</h2>
            <p>
              We retain your information only as long as necessary to fulfill the purposes
              described in this policy, comply with our legal obligations, and resolve any
              disputes. Contact form submissions are retained for a reasonable period to allow
              for follow-up and record-keeping.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif font-bold text-foreground mb-3">6. Security</h2>
            <p>
              We take reasonable technical and organizational measures to protect your
              information from unauthorized access, disclosure, alteration, or destruction.
              However, no method of transmission over the internet is completely secure, and we
              cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif font-bold text-foreground mb-3">7. Your Rights</h2>
            <p>
              Depending on your location, you may have the right to access, correct, or request
              deletion of personal information we hold about you. To exercise any of these
              rights, please contact us using the information below. We will respond within a
              reasonable timeframe.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif font-bold text-foreground mb-3">8. Third-Party Links</h2>
            <p>
              Our website may contain links to external websites. We are not responsible for the
              privacy practices or content of those sites. We encourage you to review the privacy
              policies of any third-party sites you visit.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif font-bold text-foreground mb-3">9. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. When we do, we will revise
              the effective date at the top of this page. Your continued use of our website
              following any changes constitutes your acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif font-bold text-foreground mb-3">10. Contact Us</h2>
            <p>
              If you have questions or concerns about this Privacy Policy or how we handle your
              information, please contact us:
            </p>
            <div className="mt-4 p-6 rounded-xl border border-border bg-muted/30 space-y-1 text-sm">
              <p className="font-semibold text-foreground">Purple Pocket LLC</p>
              <p>1509 US HWY 59 S, Linden, TX 75563</p>
              <p>
                <a
                  href="mailto:govtcontracting@purplepocket.com"
                  className="text-primary hover:underline"
                >
                  govtcontracting@purplepocket.com
                </a>
              </p>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-8 mt-8">
        <div className="container mx-auto px-4 md:px-6 text-center text-sm text-muted-foreground space-y-2">
          <p>© 2026 Purple Pocket LLC. All rights reserved.</p>
          <div className="flex justify-center gap-6">
            <Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
