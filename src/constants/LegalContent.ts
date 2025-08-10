export interface LegalSection {
  title: string;
  content: string | string[];
  subsections?: LegalSection[];
}

export interface LegalPageData {
  title: string;
  effectiveDate: string;
  lastUpdated: string;
  sections: LegalSection[];
}

export const privacyPolicyData: LegalPageData = {
  title: "BORAAMI PRIVACY POLICY",
  effectiveDate: "August 10, 2025",
  lastUpdated: "August 10, 2025",
  sections: [
    {
      title: "1. WHO WE ARE",
      content: [
        "This Privacy Policy applies to all Boraami digital platforms including the Boraami App and website.",
        "Developer: Boraami",
        "Website: https://boraami.app",
        "Contact: support@boraami.app or boraami.app@gmail.com",
      ],
    },
    {
      title: "2. INFORMATION WE COLLECT",
      content: "We collect the following categories of information:",
      subsections: [
        {
          title: "A. Information You Provide Directly:",
          content: [
            "• Name and email address (via forms, signups, or contact tools)",
            "• User-generated content (posts, replies, likes)",
          ],
        },
        {
          title: "B. Automatically Collected Information:",
          content: [
            "• IP address",
            "• Browser type and version",
            "• Device type, OS version, device identifiers",
            "• Pages visited and time spent (website)",
            "• Screens visited and actions performed (App)",
            "• Referring URLs",
            "• Crash/error logs (App)",
            "• Approximate geolocation (via IP)",
          ],
        },
        {
          title: "C. Information We Do NOT Collect:",
          content: ["• Payment data", "• Media uploads", "• Precise geolocation"],
        },
      ],
    },
    {
      title: "3. HOW WE COLLECT DATA",
      content: "Data is collected through:",
      subsections: [
        {
          title: "Data Collection Methods:",
          content: [
            "• Direct input (signup forms, support, content interactions)",
            "• Cookies and browser storage",
            "• App storage via secure methods",
            "• Third-party SDKs and analytics tools",
          ],
        },
      ],
    },
    {
      title: "4. LEGAL BASES FOR PROCESSING (GDPR COMPLIANCE)",
      content: "We process your data under the following legal bases per GDPR Article 6:",
      subsections: [
        {
          title: "Legal Bases:",
          content: [
            "• Consent: For newsletters, cookies, and optional analytics",
            "• Contract: To provide core features and services",
            "• Legitimate Interest: To improve reliability, usability, and performance",
            "• Legal Obligation: To comply with applicable laws",
          ],
        },
      ],
    },
    {
      title: "5. HOW WE USE YOUR INFORMATION",
      content: [
        "We use your personal information to:",
        "• Authenticate users and manage sessions",
        "• Enable app features (posting, replies, likes)",
        "• Respond to support requests",
        "• Send newsletters and updates (with consent)",
        "• Monitor and improve site and app performance",
        "• Analyze usage trends and resolve errors",
      ],
    },
    {
      title: "6. COOKIES AND TRACKING",
      content: [
        "On the Website:",
        "We use cookies and similar technologies to:",
        "• Analyze traffic and behavior",
        "• Customize and improve user experience",
        "",
        "You can manage cookie preferences through your browser. Some features may be affected if cookies are disabled.",
        "",
        "On the App:",
        "We do not use cookies. Usage tracking is handled via analytics SDKs.",
      ],
    },
    {
      title: "7. THIRD-PARTY SERVICES",
      content: [
        "We use trusted third-party providers to operate, analyze, and improve our services:",
      ],
      subsections: [
        {
          title: "", // No title needed
          content: [
            "Service | Purpose",
            "--------|--------",
            "Amplitude Analytics | In-app usage tracking",
            "Sentry | Error/crash reporting",
            "Expo Secure Store | Secure token storage (App)",
          ],
        },
        {
          title: "", // No title needed
          content: [
            "These services may use cookies, local storage, or SDKs. We do not control their individual privacy practices and recommend reviewing their respective privacy policies.",
          ],
        },
      ],
    },
    {
      title: "8. DATA SHARING",
      content: [
        "We do not sell or rent your personal information.",
        "We may share information:",
        "• With service providers under confidentiality agreements",
        "• As required by law or legal process",
        "• To enforce our rights or protect safety",
      ],
    },
    {
      title: "9. DATA SECURITY",
      content: [
        "We implement technical and organizational measures to protect your information, including:",
        "• Encrypted storage of access tokens",
        "• Secure servers and API communications",
        "• Access controls and logging",
        "",
        "While we strive to use commercially acceptable means, no method is 100% secure.",
      ],
    },
    {
      title: "10. CHILDREN'S PRIVACY",
      content: [
        "Our app and website are not intended for children under 13. We do not knowingly collect personal data from anyone under this age. If we become aware of such data, we will delete it immediately.",
      ],
    },
    {
      title: "11. YOUR RIGHTS",
      content: [
        "Depending on your jurisdiction (e.g., GDPR or CCPA), you may have the right to:",
        "• Access the data we hold about you",
        "• Correct or delete your personal information",
        "• Withdraw consent at any time (for marketing or optional analytics)",
        "• Object to or restrict processing",
        "",
        "To exercise these rights, contact us at: support@boraami.app",
      ],
    },
    {
      title: "12. THIRD-PARTY LINKS",
      content: [
        "Our platforms may contain links to external websites. We are not responsible for their content or privacy practices. Please review their policies before sharing data.",
      ],
    },
    {
      title: "13. CHANGES TO THIS PRIVACY POLICY",
      content: [
        "We may update this Privacy Policy periodically. Changes will be posted on this page with an updated 'Last Updated' date. Continued use of our app or website indicates acceptance.",
      ],
    },
    {
      title: "14. CONTACT US",
      content: [
        "For questions or concerns about this Privacy Policy, contact us at:",
        "",
        "Email: support@boraami.app",
        "",
        "Thank you for trusting Boraami.",
      ],
    },
  ],
};

export const termsData: LegalPageData = {
  title: "BORAAMI TERMS AND CONDITIONS",
  effectiveDate: "August 10, 2025",
  lastUpdated: "August 10, 2025",
  sections: [
    {
      title: "1. USER ELIGIBILITY",
      content: [
        "You must be at least 13 years old and have the legal capacity to enter into a binding agreement to use our Services. By using them, you represent and warrant that you meet these requirements.",
      ],
    },
    {
      title: "2. USER ACCOUNTS",
      content: [
        "Users may create accounts for the App. You are responsible for maintaining the confidentiality of your account information and for all activity under your account.",
      ],
    },
    {
      title: "3. USER CONTENT",
      content: [
        "You may post content (posts, replies, comments) through the App. By doing so, you agree not to submit content that is illegal, explicit, harassing, or violates these Terms. We may remove any User Content at our discretion.",
      ],
    },
    {
      title: "4. USER SUBMISSIONS VIA WEBSITE",
      content: [
        "Any feedback or information submitted via our Website (e.g., through contact forms) may be used by us without compensation. You confirm you have the right to share this information.",
      ],
    },
    {
      title: "5. PROHIBITED CONDUCT",
      content: [
        "You agree not to engage in any activity that:",
        "• Violates applicable laws",
        "• Harasses, abuses, or threatens others",
        "• Interferes with or disrupts our systems",
        "• Attempts unauthorized access to the Services",
      ],
    },
    {
      title: "6. INTELLECTUAL PROPERTY",
      content: [
        "All content on the App and Website (logos, designs, software, text, graphics) is the exclusive property of Boraami. You may not reproduce or distribute content without our written permission.",
        "You retain ownership of your User Content. However, you grant us a worldwide, non-exclusive, royalty-free license to use and display it for the purpose of operating and improving our Services.",
      ],
    },
    {
      title: "7. THIRD-PARTY SERVICES AND LINKS",
      content: [
        "Our Services may include third-party tools (e.g., Google Analytics, Meta Pixel, Firebase) and links to external websites. We are not responsible for their content or privacy practices. Use them at your own risk.",
      ],
    },
    {
      title: "8. TERMINATION",
      content: [
        "We reserve the right to suspend or terminate your access to the Services at any time for violation of these Terms. Upon termination, you must uninstall the App and cease all use of our Services.",
      ],
    },
    {
      title: "9. DISCLAIMERS",
      content: [
        "The Services are provided 'as is' and 'as available.' We do not guarantee continuous, error-free, or secure access. To the extent permitted by law, we disclaim all warranties and liability related to your use of the Services.",
      ],
    },
    {
      title: "10. LIMITATION OF LIABILITY",
      content: [
        "To the maximum extent allowed by law, Boraami is not liable for any direct, indirect, or consequential damages resulting from your use of the Services.",
      ],
    },
    {
      title: "11. CHANGES TO TERMS",
      content: [
        "We may update these Terms at any time. The updated Terms will be posted with a new 'Last Updated' date. Continued use of the Services constitutes acceptance of the new Terms.",
      ],
    },
    {
      title: "12. GOVERNING LAW",
      content: [
        "These Terms are governed by the laws of the jurisdiction in which Boraami is registered, without regard to conflict of law principles.",
      ],
    },
    {
      title: "13. CONTACT INFORMATION",
      content: [
        "For any questions or concerns regarding these Terms, please contact us at:",
        "Email: support@boraami.app",
        "Developer: Boraami",
      ],
    },
  ],
};
