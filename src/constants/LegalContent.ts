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
  title: "PRIVACY POLICY",
  effectiveDate: "October 1, 2025",
  lastUpdated: "October 1, 2025",
  sections: [
    {
      title: "1. WHO WE ARE",
      content: [
        "This Privacy Policy applies to all Boraami digital platforms including the Boraami App and website.",
        "Website: https://boraami.app",
        "Contact: contact@boraami.app",
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
          content: [
            "• Payment data",
            "• Media uploads",
            "• Precise geolocation",
            "• Date of birth (unless required for legal compliance)",
          ],
        },
      ],
    },
    {
      title: "3. HOW WE COLLECT DATA",
      content: "",
      subsections: [
        {
          title: "Data is collected through:",
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
        "On the App: We do not use cookies. Usage tracking is handled via analytics SDKs.",
      ],
    },
    {
      title: "7. DATA RETENTION AND DELETION",
      content: [
        "We will retain your personal information only for as long as is necessary for the purposes set out in this Policy, or as needed to comply with our legal obligations, resolve disputes, and enforce our agreements.",
        "",
        "• Account Data: We retain the personal data associated with your account for the entire period your account is active. Upon account deletion, we will initiate the deletion process from our active databases within 30 days. Please note that due to our backup and disaster recovery systems, residual copies may take additional time to be permanently removed.",
        "• Other Data: Non-personal, aggregated data may be retained indefinitely to help us improve our services.",
      ],
    },
    {
      title: "8. INTERNATIONAL DATA TRANSFER AND STORAGE",
      content: [
        "Your personal information may be processed and stored on servers located outside of the country in which you reside, including in the United States. These countries may have data protection laws that are different from the laws of your country.",
        "",
        "However, we take appropriate safeguards to ensure that your data receives an adequate level of protection. We rely on recognized legal mechanisms for these transfers, such as the European Commission's Standard Contractual Clauses, to ensure your rights and protections travel with your data.",
        "",
        "By accessing or using our Services, you acknowledge and agree that your personal information may be transferred to, processed, and stored in the United States and other jurisdictions where data protection laws may differ from those in your country of residence. Where required, we rely on lawful transfer mechanisms such as the European Commission's Standard Contractual Clauses. By continuing to use the Services, you expressly consent to such transfers.",
      ],
    },
    {
      title: "9. YOUR DATA RIGHTS AND PROCESS",
      content: [
        "Depending on your jurisdiction (e.g., GDPR or CCPA), you may have the right to:",
        "• Access the data we hold about you",
        "• Correct or delete your personal information",
        "• Withdraw consent at any time (for marketing or optional analytics)",
        "• Object to or restrict processing",
        "• Data portability",
        "",
        "Process to Exercise Your Rights:",
        "To exercise any of these rights, please contact us at contact@boraami.app. We will respond to all legitimate requests within 30 days. We may need to verify your identity before processing your request. If we require more time, we will inform you of the reason and extension period.",
      ],
    },
    {
      title: "10. CHILDREN'S PRIVACY",
      content: [
        "Our app and website are not intended for children under 13. We do not knowingly collect personal data from anyone under this age. If we become aware of such data, we will delete it immediately.",
      ],
    },
    {
      title: "11. DATA SECURITY",
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
      title: "12. DATA SHARING",
      content: [
        "We do not sell or rent your personal information.",
        "We may share information:",
        "• With service providers under confidentiality agreements",
        "• As required by law or legal process",
        "• To enforce our rights or protect safety",
      ],
    },

    {
      title: "13. THIRD-PARTY SERVICES",
      content: [
        "We use trusted third-party providers to operate, analyze, and improve our services:",
      ],
      subsections: [
        {
          title: "", // No title needed
          content: [
            "Service | Purpose",
            "--------|--------",
            "[Amplitude Analytics](https://amplitude.com/privacy) | In-app usage tracking",
            "[Sentry](https://sentry.io/privacy/) | Error/crash reporting",
            "[Expo Secure Store](https://docs.expo.dev/versions/latest/sdk/securestore/) | Secure token storage (App)",
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
      title: "14. THIRD-PARTY LINKS",
      content: [
        "Our platforms may contain links to external websites. We are not responsible for their content or privacy practices. Please review their policies before sharing data.",
      ],
    },
    {
      title: "15. CHANGES TO THIS PRIVACY POLICY",
      content: [
        "We may update this Privacy Policy periodically. Changes will be posted on this page with an updated 'Last Updated' date. Continued use of our app or website indicates acceptance.",
      ],
    },
    {
      title: "16. GOVERNING LAW",
      content: [
        "This Privacy Policy shall be governed by and construed in accordance with the laws of the United States. For users located in the European Economic Area (EEA), the General Data Protection Regulation (GDPR) shall apply with respect to the processing of your personal data. By using our Services, you acknowledge and agree that your personal information may be subject to such applicable laws.",
      ],
    },
    {
      title: "17. CONTACT US",
      content: [
        "For questions or concerns about this Privacy Policy, contact us at:",
        "",
        "Email: contact@boraami.app",
        "",
        "Thank you for trusting Boraami.",
      ],
    },
  ],
};

export const termsData: LegalPageData = {
  title: "TERMS AND CONDITIONS",
  effectiveDate: "October 1, 2025",
  lastUpdated: "October 1, 2025",
  sections: [
    {
      title: "1. USER ELIGIBILITY AND AGE REQUIREMENT",
      content: [
        "You must be at least 13 years old to use our Services. By creating an account or using our Services, you represent and warrant that you are at least 13 years of age and have the legal capacity to enter into a binding agreement. Accounts for users under the age of 13 are prohibited and will be terminated upon discovery.",
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
      title: "4. CONTENT MODERATION AND REPORTING",
      content: [
        "A. Moderation Policy: We are committed to maintaining a safe and respectful environment. We reserve the right, but not the obligation, to monitor, screen, and remove any User Content at any time and for any reason, including content that we believe violates these Terms.",
        "",
        "B. Reporting Abuse: Users can report posts or other content that they believe violate these Terms. We provide an in-app reporting feature for this purpose.",
        "",
        "C. Action on Reports: We are committed to reviewing and taking appropriate action on all reported content within 24 hours of the report being submitted. Actions may include, but are not limited to, removing the content, issuing a warning to the user, temporarily suspending the user's account, or permanently terminating the account.",
      ],
    },
    {
      title: "5. SUSPENSION AND TERMINATION POLICY",
      content: [
        "We reserve the right to suspend or terminate your access to the Services at any time, with or without notice, for conduct that we believe:",
        "• Violates these Terms, our Community Guidelines, or applicable laws",
        "• Is fraudulent, harmful, or offensive",
        "• Poses a risk to the security or enjoyment of the Services by other users",
        "",
        "Upon termination, your right to use the Services will cease immediately. You must uninstall the App and cease all use of our Services.",
      ],
    },
    {
      title: "6. USER SUBMISSIONS VIA WEBSITE",
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
        "• Impersonates any person or entity",
        "• Involves spam or unauthorized advertising",
      ],
    },
    {
      title: "8. INTELLECTUAL PROPERTY",
      content: [
        "All content on the App and Website (logos, designs, software, text, graphics) is the exclusive property of Boraami. You may not reproduce or distribute content without our written permission.",
        "",
        "You retain ownership of your User Content. However, you grant us a worldwide, non-exclusive, royalty-free license to use, display, and distribute it for the purpose of operating and improving our Services.",
      ],
    },
    {
      title: "9. GOVERNING LAW AND INTERNATIONAL USERS",
      content: [
        "These Terms and your use of the Services are governed by the laws of the United States, without regard to its conflict of law principles. If you are accessing the Services from outside the United States, you are responsible for compliance with all local laws. We make no representation that the Services are appropriate or available for use in other locations.",
      ],
    },
    {
      title: "10. THIRD-PARTY SERVICES AND LINKS",
      content: [
        "Our Services may include third-party tools (e.g., Amplitude Analytics, Sentry etc) and links to external websites. We are not responsible for their content, privacy practices, or terms of use. Use them at your own risk.",
      ],
    },
    {
      title: "11. DATA & PRIVACY",
      content: "",
      subsections: [
        {
          title: "1. Privacy Policy Reference:",
          content: [
            "Your use of the Services is also governed by our Privacy Policy, which explains how we collect, use, store, and protect your information. By agreeing to these Terms, you also agree to the terms of our Privacy Policy.",
          ],
        },
        {
          title: "2. Data Retention:",
          content: [
            "We retain your personal data in accordance with our Privacy Policy. Upon account deletion, we initiate deletion of active records within 30 days, subject to residual backup systems.",
          ],
        },
        {
          title: "3. User Data Rights:",
          content: [
            "Depending on your jurisdiction, you may have legal rights over your data (such as access, deletion, correction, or portability). These rights may be exercised by contacting us at contact@boraami.app. We will respond to all legitimate requests within 30 days, subject to identity verification.",
          ],
        },
        {
          title: "4. International Data Transfers:",
          content: [
            "If you access the Services from outside the United States, you acknowledge and consent to your data being transferred to and processed in the United States and other jurisdictions where our service providers are located.",
          ],
        },
      ],
    },
    {
      title: "12. DISCLAIMERS",
      content: [
        "The Services are provided 'as is' and 'as available.' We do not guarantee continuous, error-free, or secure access. To the extent permitted by law, we disclaim all warranties, express or implied, including implied warranties of merchantability and fitness for a particular purpose.",
      ],
    },
    {
      title: "13. LIMITATION OF LIABILITY",
      content: [
        "To the maximum extent allowed by applicable law, Boraami and its affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from your use of the Services.",
      ],
    },
    {
      title: "14. UPDATES TO TERMS",
      content: [
        "We may update these Terms at any time. The updated Terms will be posted with a new 'Last Updated' date. We will notify you of material changes via the App or by email. Your continued use of the Services after such changes constitutes your acceptance of the new Terms.",
      ],
    },
    {
      title: "15. COMMUNITY GUIDELINES & CODE OF CONDUCT",
      content:
        "By using Boraami, you agree to maintain respectful behavior and follow these community guidelines:",
    },
    {
      title: "15.1 Respect BTS and Each Other",
      content:
        "Respect and support all 7 members equally, refraining from arguments that don't align with an OT7 mindset. Treat fellow ARMY members with kindness, fostering a positive atmosphere and avoiding negativity, even if you disagree with them.",
    },
    {
      title: "15.2 Privacy Protection",
      content:
        "Protect BTS' and fellow ARMY's privacy, avoid sharing unauthorized content or supporting invasive behavior. Don't share personal information that could put you or others in danger (i.e. doxxing).",
    },
    {
      title: "15.3 Appropriate Content",
      content:
        "Be mindful of others' feelings and avoid derogatory language or behavior. Avoid posting or sharing content that is sexually explicit, obscene, or otherwise inappropriate for the platform's intended audience.",
    },
    {
      title: "15.4 Anti-Bullying Policy",
      content:
        "Refrain from cyberbullying or stalking BTS and others. Any form of harassment, intimidation, or threatening behavior will not be tolerated.",
    },
    {
      title: "15.5 Legal and Ethical Standards",
      content:
        "Adhere to legal and ethical standards when engaging in fandom activities, and avoid behavior that could violate the law or ethical principles.",
    },
    {
      title: "15.6 Platform Responsibility",
      content:
        "Avoid spamming, phishing and impersonations. Use Boraami's features as intended and respect the platform's resources.",
    },
    {
      title: "15.7 Accountability",
      content:
        "Take responsibility for your words and actions; be willing to apologize for mistakes, and report inappropriate content. Help us maintain a safe and fun environment for all ARMY.",
    },
    {
      title: "15.8 Enforcement",
      content:
        "Violation of these community guidelines may result in content removal, warnings, temporary suspension, or permanent account termination, depending on the severity and frequency of violations.",
    },
    {
      title: "16. CONTACT INFORMATION",
      content: [
        "For any questions or concerns regarding these Terms, please contact us at:",
        "Email: contact@boraami.app",
      ],
    },
  ],
};
export const childSafetyPolicyData: LegalPageData = {
  title: "CHILD SAFETY POLICY",
  effectiveDate: "August 12, 2025",
  lastUpdated: "August 12, 2025",
  sections: [
    {
      title: "1. OUR COMMITMENT TO CHILD SAFETY",
      content: [
        "Boraami is committed to creating a safe environment for all users in our BTS fan community. We maintain a zero-tolerance policy against Child Sexual Abuse and Exploitation (CSAE), including Child Sexual Abuse Material (CSAM).",
        "This policy applies to all users and content on our platform, regardless of age targeting, and outlines our standards, reporting mechanisms, and enforcement procedures.",
      ],
    },
    {
      title: "2. ZERO-TOLERANCE POLICY AGAINST CSAE",
      content:
        "Boraami strictly prohibits any content or behavior that facilitates, depicts, or promotes Child Sexual Abuse and Exploitation. We take immediate action against all violations.",
      subsections: [
        {
          title: "Prohibited Content and Behavior:",
          content: [
            "• Child Sexual Abuse Material (CSAM): Any visual, written, or audio content that sexually exploits minors",
            "• Grooming: Attempts to build inappropriate relationships with minors for sexual purposes",
            "• Solicitation: Requesting or sharing intimate content involving minors",
            "• Exploitation: Any content that sexualizes, endangers, or harms individuals under 18",
            "• Predatory Behavior: Using our platform to target, manipulate, or harm minors",
          ],
        },
      ],
    },
    {
      title: "3. CONTENT MODERATION AND DETECTION",
      content: [
        "We employ multiple layers of protection to detect and prevent harmful content:",
        "• Manual review of all reported content by our trained safety team",
        "• Regular monitoring of user-generated content and interactions",
        "• Community-driven reporting system with multiple reporting channels",
        "• Proactive scanning for suspicious patterns and behaviors",
        "• Collaboration with law enforcement and child safety organizations when required",
        "• We review reported content within 24 hours",
        "• In-app reporting available for all content",
        "• Users can block other users and report violations",
      ],
    },
    {
      title: "4. REPORTING MECHANISMS",
      content: ["We provide multiple ways for users to report concerning content or behavior:"],
      subsections: [
        {
          title: "In-App Reporting:",
          content: [
            "• Report buttons available on all posts, replies, and user profiles",
            "• Dedicated reporting form accessible through app settings",
            "• Anonymous reporting option to protect reporter privacy",
            "• Ability to upload screenshots as evidence of violations",
          ],
        },
        {
          title: "External Reporting Channels:",
          content: [
            "• Email: support@boraami.app (monitored daily)",
            "• Online reporting form with dropdown menu for violation categories",
            "• Emergency situations: Users encouraged to contact local law enforcement immediately",
          ],
        },
        {
          title: "What to Include in Reports:",
          content: [
            "• Detailed description of the violation",
            "• Username or profile information of the violating account",
            "• Screenshots or evidence of the inappropriate content/behavior",
            "• Date and time of the incident",
            "• Any additional context that may help our investigation",
          ],
        },
      ],
    },
    {
      title: "5. REPORT REVIEW AND RESPONSE PROCESS",
      content: [
        "Our dedicated safety team follows a structured process for all reports:",
        "• All child safety reports receive immediate priority review",
        "• Initial assessment within 24 hours of report submission",
        "• Thorough investigation by trained safety specialists",
        "• Final determination and action within 72 hours",
        "• Follow-up communication with reporters when appropriate",
      ],
    },
    {
      title: "6. ENFORCEMENT ACTIONS",
      content: ["We take swift and decisive action against policy violations:"],
      subsections: [
        {
          title: "Immediate Actions for CSAE/CSAM Violations:",
          content: [
            "• Immediate account suspension pending full investigation",
            "• Removal of all violating content within hours of confirmation",
            "• Permanent account termination for confirmed violations",
            "• Device and IP blocking to prevent account recreation",
            "• Reporting to National Center for Missing & Exploited Children (NCMEC) and relevant authorities",
            "• Warning for first violation",
            "• Temporary suspension (7-30 days) for repeat violations",
            "• Permanent termination for severe violations",
            "• Manual admin suspension available for immediate threats",
          ],
        },
        {
          title: "Progressive Enforcement for Other Safety Violations:",
          content: [
            "• First offense: Warning and content removal with mandatory policy review",
            "• Second offense: Temporary account suspension (7-30 days)",
            "• Third offense: Extended suspension or permanent termination",
            "• Serious violations: Immediate permanent account termination regardless of history",
          ],
        },
      ],
    },
    {
      title: "7. COOPERATION WITH LAW ENFORCEMENT",
      content: [
        "Boraami maintains full cooperation with law enforcement and child protection agencies:",
        "• Mandatory reporting of CSAM to NCMEC and international equivalents within 24 hours",
        "• Preservation of evidence for law enforcement investigations",
        "• Compliance with legal requests, subpoenas, and court orders",
        "• Proactive communication with authorities regarding serious threats to child safety",
        "• Regular coordination with industry partners to combat online child exploitation",
      ],
    },
    {
      title: "8. PRIVACY AND DATA PROTECTION",
      content: [
        "We protect user privacy while maintaining safety standards:",
        "• Secure handling and storage of reported content and evidence",
        "• Limited access to sensitive reports (safety team and authorized personnel only)",
        "• Reporter anonymity protection when requested",
        "• Compliance with privacy laws while fulfilling legal obligations to report CSAE",
        "• Regular deletion of resolved case materials according to data retention policies",
      ],
    },
    {
      title: "9. COMMUNITY EDUCATION AND PREVENTION",
      content: [
        "We actively work to educate our community about online safety:",
        "• Regular safety reminders and educational content within the app",
        "• Clear community guidelines emphasizing respectful behavior",
        "• Resources for recognizing and reporting suspicious behavior",
        "• Promotion of positive community interactions focused on BTS and music appreciation",
        "• Collaboration with child safety organizations for educational initiatives",
      ],
    },
    {
      title: "10. TRANSPARENCY AND ACCOUNTABILITY",
      content: [
        "We maintain transparency in our child safety efforts:",
        "• Regular review and updates of our child safety policies",
        "• Cooperation with third-party safety audits when requested",
        "• Participation in industry initiatives to combat online child exploitation",
        "• Clear communication about policy changes and enforcement statistics",
        "• Commitment to continuous improvement of our safety measures",
      ],
    },
    {
      title: "11. LEGAL COMPLIANCE",
      content: [
        "Our child safety measures comply with applicable laws and regulations:",
        "• United States: NCMEC reporting requirements and federal anti-CSAM laws",
        "• European Union: Digital Services Act and national child protection legislation",
        "• International: Cooperation with global law enforcement and child safety organizations",
        "• Industry Standards: Adherence to best practices for online child safety",
        "• Regular legal review to ensure continued compliance with evolving regulations",
      ],
    },
    {
      title: "12. CONTACT INFORMATION FOR CHILD SAFETY",
      content: [
        "For all child safety related concerns, contact us immediately:",
        "",
        "Primary Contact: support@boraami.app",
        "Subject Line: URGENT - Child Safety Report",
        "Response Time: Priority review within 24 hours",
        "",
        "Online Reporting Form: Available in app settings menu",
        "Emergency Situations: Contact local law enforcement (911 in US, 999 in UK, etc.)",
        "",
        "For Law Enforcement Requests:",
        "Email: support@boraami.app",
        "Subject: Law Enforcement Request",
        "",
        "We are committed to responding promptly to all child safety concerns and working with authorities to protect children from online harm.",
      ],
    },
    {
      title: "13. POLICY UPDATES",
      content: [
        "This Child Safety Policy may be updated to reflect changes in our practices, technology, or legal requirements. Users will be notified of significant changes through:",
        "• In-app notifications for major policy updates",
        "• Email notifications to registered users",
        "• Clear indication of changes and effective dates on our website",
        "• Regular policy review schedule to ensure continued effectiveness",
        "",
        "Last Review Date: October 1, 2025",
        "Next Scheduled Review: March 1, 2026",
      ],
    },
  ],
};
