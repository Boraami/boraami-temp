export interface FAQItem {
  question: string;
  answer: string;
  link?: string;
}

export interface FAQCategory {
  category: string;
  faqs: FAQItem[];
}

export const FAQs: FAQCategory[] = [
  {
    category: "About Boraami",
    faqs: [
      {
        question: `What is the purpose of Boraami?`,
        answer: `Boraami is a safe and inclusive space for ARMY to stay connected, support all seven BTS members, and build a positive community rooted in kindness and respect.`,
      },
      {
        question: `Is this an official app?`,
        answer: `No. Boraami is an unofficial fan-made app created by ARMY, for ARMY.`,
      },
      {
        question: `Will BTS be a part of Boraami?`,
        answer: `Since Boraami is an unofficial fan app, BTS members are not part of the platform. But if they ever decide to join, we'll gladly roll out the purple carpet. 💜`,
      },
      {
        question: `Who are the people behind Boraami?`,
        answer: `The Boraami team consists of ARMY from around the world who came together because of our shared love for BTS and ARMY.`,
      },
    ],
  },
  {
    category: "Joining Boraami",
    faqs: [
      {
        question: `Who can join Boraami?`,
        answer: `Boraami is exclusively for OT7 ARMY. We do not tolerate negativity toward any BTS member or fellow ARMY.`,
      },
      {
        question: 'How do I get an Authentication Code?',
        answer: `1) Open the Sign Up page.\n2) Scroll to the bottom.\n3) Click "Don't have an Authentication Code?"\n4) Complete the admission quiz within the available time period.\n5) Our system will review your application.\n6) If approved, your Authentication Code will be sent to the email address you provided.\nPlease make sure you enter a valid email address that can receive emails`,
      },
      {
        question: `Why do I need an Authentication Code?`,
        answer: `The Authentication Code helps us maintain Boraami as a community specifically for ARMY and reduces spam, trolls, and bad-faith accounts.`,
      },
      {
        question: `How long does it take to receive my code?`,
        answer: `Most applications are reviewed automatically. However, some applications may require manual review, which can take longer up to 2-5 days.`,
      },
      {
        question: `My application was rejected. Can I apply again?`,
        answer: `Yes. You may reapply if you believe additional information can help us review your application more accurately. To keep the admission process fair and manageable for everyone, Boraami allows up to three application attempts. If an application is not approved after three submissions, additional applications may no longer be accepted.`,
      },
    ],
  },
  {
    category: "Application & Quiz Questions",
    faqs: [
      {
        question: `What should I include for my social media and streaming accounts?`,
        answer: `Please provide your full profile URLs whenever possible (e.g. https://x.com/example) rather than just a handle or username. For streaming accounts, you may include profiles from services such as Spotify, YouTube Music, Apple Music, or other platforms you actively use. Providing complete profile links helps us review applications more accurately and efficiently.`,
      },
      {
        question: `What should I write for the streaming question?`,
        answer: `We're not looking for a "perfect" answer. Tell us how you personally stream BTS playlists and what practices you believe work best. You may include playlist structure, playlist length, streaming habits, or any recommendations you follow. The more detail you provide, the easier it is for us to review your application.`,
      },
      {
        question: `Why am I being asked about social media and streaming?`,
        answer: `These questions help us verify that applicants are genuine ARMY while keeping Boraami safe and focused on BTS.`,
      },
    ],
  },
  {
    category: "Features & Notifications",
    faqs: [
      {
        question: `What features does Boraami have?`,
        answer: `Boraami is a social platform designed to help ARMY connect, share updates, and support BTS activities such as streaming and voting. New features will continue to be added over time.`,
      },
      {
        question: `Can I update my profile picture/header?`,
        answer: `Profile picture/header editing is not available in the current version, but it is planned for a future update.`,
      },
      {
        question: `Does Boraami have notifications?`,
        answer: `Yes. Boraami currently supports real-time in-app notifications.`,
      },
      {
        question: `Does Boraami have push notifications?`,
        answer: `Push notifications are sent every 8 hours. We want Boraami to feel like a cozy space, not another app demanding your attention every five minutes. That said, we know some ARMY would like real-time push notifications, and it's already on our radar for a future update. Let us know if this is something you'd like to see. 💜`,
      },
      {
        question: `Will Boraami be available in multiple languages?`,
        answer: `At launch, Boraami supports English. Additional languages will be added gradually based on community demand and development capacity.`,
      },
    ],
  },
  {
    category: "Technical Support & Troubleshooting",
    faqs: [
      {
        question: `Boraami isn't working correctly. What should I do?`,
        answer: `Boraami is currently in its early launch phase, so you may occasionally encounter bugs or unexpected behavior while we continue improving the app. If something isn't working correctly: 1) Force quit the app 3 times. 2) Log in again. 3) If the issue continues, reinstall the app.`,
      },
      {
        question: `How do I report a bug or provide feedback?`,
        answer: `You can report bugs, suggest features, or share feedback through the Boraami app (Menu → "Bug or Feedback? Report Here"), our Bug Report/Feedback Form, or the Boraami Timeline on Twitter/X. Please use the following hashtags when posting publicly: #BoraamiBugReport for bugs, errors, or technical issues; #BoraamiFeatureRequest for feature suggestions or ideas; and #BoraamiFeedback for general feedback and user experience suggestions. When reporting a bug, please include your system and device (e.g. Android on Samsung Galaxy S26), app version (if known), what happened (e.g. cannot reply), what steps you took (e.g. 1. click reply under a post; 2. post the reply), and a screenshot or screen recording if available.`,
      },
      {
        question: `Should I enable automatic updates?`,
        answer: `Yes, we highly recommend enabling automatic updates for Boraami. As Boraami is currently in its early launch phase, our team is actively releasing updates that include bug fixes, performance improvements, and other enhancements. Keeping Boraami updated ensures you have access to the latest fixes and the best possible experience.`,
      },
      {
        question: `Why am I seeing errors after an update?`,
        answer: `Occasionally, updates may require the app to refresh local data. If you encounter unexpected behavior after an update, please try force quitting the app and logging in again.`,
      },
    ],
  },
  {
    category: "Community Safety",
    faqs: [
      {
        question: `How does Boraami stay safe?`,
        answer: `We use a combination of application screening, moderation tools, community reporting, and platform guidelines to maintain a positive environment.`,
      },
      {
        question: `What happens if someone breaks the rules?`,
        answer: `Boraami generally follows a three-strike system: Strike 1 results in a warning issued, Strike 2 results in a temporary restriction or suspension, and Strike 3 results in permanent account removal. Severe violations may result in immediate suspension without going through all three strikes.`,
      },
      {
        question: `Can I report users or posts?`,
        answer: `Yes. If you encounter content that violates Boraami guidelines, you can use the reporting tools within the app. Our moderation team will review the report.`,
      },
      {
        question: `What kind of behavior is not allowed?`,
        answer: `Examples include hate or harassment toward BTS members, solo/akgae/anti-member behavior, harassment toward other ARMY, spam, scams, or malicious activity, content that invades BTS members' privacy or personal boundaries, content that speculates on or portrays BTS members' relationships as romantic/sexual, sexualized or explicit content involving BTS members, AI-generated images, videos, or other media depicting BTS members, and attempts to disrupt the safety, inclusivity, or purpose of the Boraami community.`,
      },
    ],
  },
  {
    category: "Future & Support",
    faqs: [
      {
        question: `Is Boraami free?`,
        answer: `Yes. Boraami is completely free to use.`,
      },
      {
        question: `Will Boraami be available on the App Store and Play Store?`,
        answer: `Boraami is currently available on the Google Play Store for Android devices. Our iOS version has been submitted to Apple and is currently under review. At this stage, we're simply waiting for the review process to be completed. We'll share updates through our official channels as soon as we have news to share. 💜`,
      },
      {
        question: `Will Boraami be available worldwide?`,
        answer: `Yes. Boraami is intended to be available globally wherever the app can be downloaded.`,
      },
      {
        question: `How can I help Boraami?`,
        answer: `We periodically recruit moderators, translators, testers, and other volunteers. When opportunities become available, they will be announced through Boraami's official channels.`,
      },
    ],
  },
];