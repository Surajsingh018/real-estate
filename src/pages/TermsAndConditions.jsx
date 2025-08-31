// TermsAndConditions.jsx
import React from 'react';

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero */}
      <header className="bg-slate-50 border-b">
        <div className="max-w-5xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">
            Terms & Conditions
          </h1>
          <p className="mt-4 text-base text-gray-600">
            Last updated: 30 August 2025
          </p>
        </div>
      </header>

      {/* Body */}
      <main className="max-w-5xl mx-auto px-4 py-12 sm:px-6 lg:px-8 space-y-10 text-gray-700">
        {/* 1. Acceptance */}
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            1. Acceptance of Terms
          </h2>
          <p>
            By accessing or using the Propy Cons website, application, products or
            services (collectively, the “Services”), you agree to be bound by
            these Terms & Conditions. If you do not agree, please discontinue
            use immediately.
          </p>
        </section>

        {/* 2. Definitions */}
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            2. Definitions
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>“PROPY CONS”</strong> means PROPY CONS Technologies LLC and its
              affiliates, officers, directors, employees, agents and licensors.
            </li>
            <li>
              <strong>“Content”</strong> means all text, graphics, images,
              software and other material made available through the Services.
            </li>
            <li>
              <strong>“User”</strong> means any individual or entity that
              accesses or uses the Services.
            </li>
          </ul>
        </section>

        {/* 3. Eligibility */}
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            3. Eligibility & Registration
          </h2>
          <p>
            You must be at least 18 years old and have the legal capacity to
            enter into a binding agreement. You agree to provide accurate,
            current and complete information during registration and to keep
            your account updated.
          </p>
        </section>

        {/* 4. Prohibited Conduct */}
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            4. Prohibited Conduct
          </h2>
          <p className="mb-2">You agree not to:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Use the Services for any unlawful purpose;</li>
            <li>
              Impersonate any person or entity, or falsely state or otherwise
              misrepresent your affiliation with a person or entity;
            </li>
            <li>
              Interfere with or disrupt the integrity or performance of the
              Services;
            </li>
            <li>
              Attempt to gain unauthorized access to the Services or related
              systems or networks.
            </li>
          </ul>
        </section>

        {/* 5. Intellectual Property */}
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            5. Intellectual Property
          </h2>
          <p>
            All trademarks, logos, Content and other intellectual property
            displayed on the Services are owned by Propy Cons or its licensors and
            are protected by UAE and international laws. Nothing in these Terms
            grants you any right or license to use any intellectual property
            without our prior written consent.
          </p>
        </section>

        {/* 6. Disclaimers */}
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">6. Disclaimers</h2>
          <p>
            The Services are provided on an “as-is” and “as-available” basis.
            Propy Cons expressly disclaims all warranties of any kind, whether
            express or implied, including but not limited to warranties of
            merchantability, fitness for a particular purpose and
            non-infringement.
          </p>
        </section>

        {/* 7. Limitation of Liability */}
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            7. Limitation of Liability
          </h2>
          <p>
            To the fullest extent permitted by law, Propy Cons shall not be liable
            for any indirect, incidental, special, consequential or punitive
            damages, or any loss of profits or revenues, whether incurred
            directly or indirectly.
          </p>
        </section>

        {/* 8. Indemnification */}
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            8. Indemnification
          </h2>
          <p>
            You agree to defend, indemnify and hold harmless Propy COns and its
            affiliates from and against any claims, liabilities, damages,
            losses and expenses arising out of or in any way connected with
            your use of the Services or your violation of these Terms.
          </p>
        </section>

        {/* 9. Governing Law */}
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            9. Governing Law
          </h2>
          <p>
            These Terms are governed by and construed in accordance with the
            laws of the United Arab Emirates, and you irrevocably submit to the
            exclusive jurisdiction of the courts in Dubai.
          </p>
        </section>

        {/* 10. Amendments */}
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            10. Amendments
          </h2>
          <p>
            We may update or modify these Terms at any time without prior
            notice. Your continued use of the Services after any changes
            constitutes acceptance of the revised Terms.
          </p>
        </section>

        {/* 11. Contact */}
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">11. Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us at{' '}
            <a
              href="mailto:support@propycons.com"
              className="text-blue-600 hover:underline"
            >
              support@propycons.com
            </a>
            .
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-50 border-t">
        <div className="max-w-5xl mx-auto px-4 py-8 text-sm text-gray-500">
          © {new Date().getFullYear()} Propy Cons Technologies LLC. All rights
          reserved.
        </div>
      </footer>
    </div>
  );
}