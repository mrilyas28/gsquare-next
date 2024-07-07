import { Container } from '@/src/components/container';
import { SectionHeading } from '@/src/components/section-heading';
import { SectionHeadingWithoutStylingProps } from '@/src/components/section-heading/interface';
import { cn } from '@/src/utils/shadcn';
import { getStaggeredDelay } from '@/src/utils/set-staggered-delay';

export interface PrivacyPolicyProps {
  sectionHeading: SectionHeadingWithoutStylingProps;
  privacyPolicy: {
    lastUpdated: string;
    sections: {
      title: string;
      content: string | string[];
    }[];
  };
}
export const privacyPolicyData: PrivacyPolicyProps = {
  sectionHeading: {
    title: 'Privacy Policy',
    description:
      'This Privacy Policy describes how GSquare Technologies Pte Ltd collects, uses, and protects your personal information. We are committed to ensuring that your privacy is protected.',
  },
  privacyPolicy: {
    lastUpdated: 'July 2, 2024',
    sections: [
      {
        title: '1. Information We Collect',
        content: [
          '1.1 Personal Information: We collect information you provide directly to us, such as your name, email address, phone number, and company details when you create an account, request a service, or contact us for support.',
          '1.2 Usage Data: We may also collect information automatically when you use our services, including your IP address, device information, browser type, operating system, and usage data.',
          '1.3 Third-Party Sources: We may receive information about you from other sources, including publicly available databases or third parties from whom we have purchased data, and combine this data with information we already have about you.',
        ],
      },
      {
        title: '2. How We Use Your Information',
        content: [
          '2.1 Provide Services: To provide, maintain, and improve our IT solutions and services.',
          '2.2 Communication: To communicate with you about our services, respond to inquiries, and provide customer support.',
          '2.3 Security: To protect the security and integrity of our services and prevent fraud or unauthorized access.',
          '2.4 Legal Compliance: To comply with legal obligations and resolve any disputes.',
          '2.5 Analytics: To analyze usage patterns and improve our website and services.',
          '2.6 Marketing: With your consent, to send you promotional materials and information about new services or features.',
        ],
      },
      {
        title: '3. Information Sharing and Disclosure',
        content: [
          '3.1 No Sale of Personal Information: We do not sell your personal information to third parties.',
          '3.2 Service Providers: We may share your information with third-party service providers who perform services on our behalf, such as hosting, data analysis, and customer service. These providers are bound by confidentiality agreements.',
          '3.3 Legal Requirements: We may disclose your information if required to do so by law or in response to valid requests by public authorities.',
          '3.4 Business Transfers: If we are involved in a merger, acquisition, or sale of all or a portion of our assets, your information may be transferred as part of that transaction.',
        ],
      },
      {
        title: '4. Data Security',
        content: [
          '4.1 Security Measures: We implement appropriate technical and organizational measures to protect your personal information against unauthorized or unlawful processing, accidental loss, destruction, or damage.',
          '4.2 Data Encryption: We use industry-standard encryption to protect your data in transit and at rest.',
          '4.3 Access Controls: We restrict access to personal information to employees, contractors, and agents who need to know that information in order to process it for us.',
          '4.4 Regular Audits: We conduct regular security audits and vulnerability assessments to ensure the ongoing confidentiality, integrity, and availability of your data.',
        ],
      },
      {
        title: '5. Your Rights',
        content: [
          '5.1 Access and Correction: You have the right to access, correct, or update your personal information at any time.',
          '5.2 Deletion: You can request the deletion of your personal information, subject to certain exceptions provided by law.',
          '5.3 Opt-Out: You may opt out of receiving promotional communications from us by following the instructions in those communications or contacting us directly.',
          '5.4 Data Portability: You have the right to receive a copy of your personal information in a structured, commonly used, and machine-readable format.',
          '5.5 Withdraw Consent: Where we rely on your consent to process your personal information, you have the right to withdraw your consent at any time.',
        ],
      },
      {
        title: '6. International Data Transfers',
        content:
          'Your information may be transferred to — and maintained on — computers located outside of your state, province, country, or other governmental jurisdiction where the data protection laws may differ from those of your jurisdiction. We ensure that adequate safeguards are in place to protect your information when it is transferred internationally.',
      },
      {
        title: "7. Children's Privacy",
        content:
          'Our services are not intended for use by children under the age of 13. We do not knowingly collect personal information from children under 13. If you become aware that a child has provided us with personal information, please contact us, and we will take steps to remove such information.',
      },
      {
        title: '8. Changes to This Privacy Policy',
        content:
          'We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.',
      },
      {
        title: '9. Contact Us',
        content: [
          'If you have any questions about this Privacy Policy or our data practices, please contact us at:',
          'GSquare Technologies Pte Ltd',
          'Email: vasudevan.ramaya@gmail.com',
          'Phone: +65 84284771',
          'Address: Block 17, #01-01, Bedok reservoir view singapore 478934',
        ],
      },
    ],
  },
};

const sectionTitleClasses = cn(
  'text-lg font-bold mb-2 text-accent-900 dark:text-white'
);
const sectionContentClasses = cn('mb-4 text-accent-700 dark:text-accent-200');

export function PrivacyPolicySection() {
  const { sectionHeading, privacyPolicy } = privacyPolicyData;

  return (
    <section className="section-padding-primary">
      <Container>
        <div className="mb-8">
          <SectionHeading {...sectionHeading} />
        </div>
        <div className="mb-4">
          <p className="text-accent-600 text-sm dark:text-accent-300">
            Last updated: {privacyPolicy.lastUpdated}
          </p>
        </div>
        {privacyPolicy.sections.map((section, index) => (
          <div
            key={index}
            className="mb-6"
            data-aos="fade-up"
            data-aos-delay={getStaggeredDelay(
              [100, 200, 300, 400, 500, 600, 700, 800, 900],
              index
            )}
          >
            <h2 className={sectionTitleClasses}>{section.title}</h2>
            {Array.isArray(section.content) ? (
              <ul className={sectionContentClasses}>
                {section.content.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            ) : (
              <p className={sectionContentClasses}>{section.content}</p>
            )}
          </div>
        ))}
      </Container>
    </section>
  );
}
