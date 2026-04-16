import React, { useEffect } from "react";
import { Link } from "wouter";

export default function TermsOfService() {
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
        <h1 className="text-4xl font-serif font-bold text-foreground mb-2">Terms of Service</h1>
        <p className="text-sm text-muted-foreground mb-10">Effective Date: January 1, 2026 &nbsp;|&nbsp; Purple Pocket LLC</p>

        <div className="prose prose-gray max-w-none space-y-8 text-muted-foreground leading-relaxed">

          <section>
            <h2 className="text-xl font-serif font-bold text-foreground mb-3">1. Agreement to Terms</h2>
            <p>
              These Terms of Service ("Terms") constitute a legally binding agreement between you
              and Purple Pocket LLC ("Purple Pocket," "we," "our," or "us"), governing your use
              of the purplepkt.com website and any services or information we provide.
            </p>
            <p className="mt-3">
              By accessing or using this website, you confirm that you are at least 18 years of
              age and agree to be bound by these Terms. If you do not agree, please discontinue
              use of this website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif font-bold text-foreground mb-3">2. Description of Services</h2>
            <p>
              Purple Pocket LLC provides mail transportation, delivery, logistics support, route
              operations, pack-and-ship service support, and business service coordination to
              businesses and government contractors. Specific service terms, scope, pricing, and
              delivery conditions are established through separate agreements between Purple
              Pocket LLC and each client.
            </p>
            <p className="mt-3">
              Nothing on this website constitutes a binding offer of services. Service
              arrangements require a direct agreement with Purple Pocket LLC.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif font-bold text-foreground mb-3">3. Use of This Website</h2>
            <p>You agree to use this website only for lawful purposes. You may not:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>Use the site in any way that violates applicable laws or regulations</li>
              <li>Transmit unsolicited or unauthorized advertising or promotional material</li>
              <li>
                Attempt to gain unauthorized access to any part of the site or its related
                systems
              </li>
              <li>
                Interfere with or disrupt the integrity or performance of the website or its
                content
              </li>
              <li>
                Copy, reproduce, or distribute any content from this website without prior
                written permission from Purple Pocket LLC
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-serif font-bold text-foreground mb-3">4. Intellectual Property</h2>
            <p>
              All content on this website — including but not limited to text, logos, graphics,
              design elements, and service descriptions — is the property of Purple Pocket LLC or
              its licensors and is protected by applicable intellectual property laws.
            </p>
            <p className="mt-3">
              The "Purple Pocket" name and logo are brand identifiers of Purple Pocket LLC. You
              may not use them without prior written authorization.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif font-bold text-foreground mb-3">5. Contact Form and Communications</h2>
            <p>
              Submitting information through our contact form does not create a service agreement
              or business relationship. We will make reasonable efforts to respond to inquiries
              in a timely manner, but we do not guarantee response times or outcomes.
            </p>
            <p className="mt-3">
              All communications sent to Purple Pocket LLC via this website or email may be used
              to evaluate service requests and improve our offerings.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif font-bold text-foreground mb-3">6. Disclaimer of Warranties</h2>
            <p>
              This website and its content are provided on an "as is" and "as available" basis
              without warranties of any kind, express or implied, including but not limited to
              warranties of merchantability, fitness for a particular purpose, or
              non-infringement.
            </p>
            <p className="mt-3">
              Purple Pocket LLC does not warrant that the website will be uninterrupted,
              error-free, or free of viruses or other harmful components.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif font-bold text-foreground mb-3">7. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, Purple Pocket LLC shall not be liable for
              any indirect, incidental, special, consequential, or punitive damages arising from
              your use of or inability to use this website, even if we have been advised of the
              possibility of such damages.
            </p>
            <p className="mt-3">
              In no event shall our total liability to you for any claim arising from your use
              of this website exceed one hundred dollars ($100.00).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif font-bold text-foreground mb-3">8. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. These links are provided for
              your convenience only. Purple Pocket LLC does not endorse, control, or assume
              responsibility for the content or practices of any third-party websites.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif font-bold text-foreground mb-3">9. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the
              State of Texas, without regard to its conflict of law provisions. Any disputes
              arising under these Terms shall be subject to the exclusive jurisdiction of the
              courts located in Cass County, Texas.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif font-bold text-foreground mb-3">10. Changes to These Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. Changes will be effective
              upon posting to this website with an updated effective date. Your continued use of
              the website after changes are posted constitutes acceptance of the revised Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif font-bold text-foreground mb-3">11. Contact Us</h2>
            <p>
              For questions regarding these Terms of Service, please contact us:
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
