import { Container } from '@/src/components/container';
import { SectionHeading } from '@/src/components/section-heading';
import { SectionHeadingWithoutStylingProps } from '@/src/components/section-heading/interface';
import { cn } from '@/src/utils/shadcn';
import { getStaggeredDelay } from '@/src/utils/set-staggered-delay';

export interface TermsAndConditionsProps {
  sectionHeading: SectionHeadingWithoutStylingProps;
  termsAndConditions: {
    lastUpdated: string;
    sections: {
      title: string;
      content: string | string[];
    }[];
  };
}

export const termsAndConditionsData: TermsAndConditionsProps = {
  sectionHeading: {
    title: 'Terms & Conditions',
    description:
      'Please read these terms and conditions carefully before using our services.',
  },
  termsAndConditions: {
    lastUpdated: 'July 2, 2024',
    sections: [
      {
        title: '1. Acceptance of Terms',
        content:
          'By accessing and using the services provided by GSquare Technologies Pte Ltd ("GSquare", "we", "us", or "our"), you agree to comply with and be bound by these Terms & Conditions. If you do not agree to these terms, please do not use our services.',
      },
      {
        title: '2. Services',
        content:
          'GSquare Technologies provides a range of IT solutions including but not limited to cloud computing, cyber security, PC/laptop setup and repair, web design and development, CCTV setup, office IT infrastructure setup, helpdesk support, and software development. The specific terms of each service will be outlined in individual service agreements.',
      },
      {
        title: '3. Client Responsibilities',
        content: [
          '3.1 You agree to provide accurate and complete information necessary for the provision of our services.',
          '3.2 You are responsible for maintaining the confidentiality of any login credentials provided to you.',
          '3.3 You agree to use our services in compliance with all applicable laws and regulations.',
        ],
      },
      {
        title: '4. Intellectual Property',
        content: [
          '4.1 All intellectual property rights in the services and solutions provided by GSquare Technologies remain the property of GSquare Technologies or its licensors.',
          '4.2 You may not reproduce, modify, or distribute our proprietary content without express written permission.',
        ],
      },
      {
        title: '5. Privacy and Data Protection',
        content: [
          '5.1 We are committed to protecting your privacy. Our use of your personal data is governed by our Privacy Policy, which is incorporated into these Terms & Conditions by reference.',
          '5.2 You agree that we may collect, store, and process your data in accordance with our Privacy Policy and applicable data protection laws.',
        ],
      },
      {
        title: '6. Limitation of Liability',
        content: [
          '6.1 GSquare Technologies strives to provide high-quality services but does not guarantee that services will be uninterrupted or error-free.',
          '6.2 We shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use our services.',
        ],
      },
      {
        title: '7. Termination',
        content:
          '7.1 We reserve the right to terminate or suspend your access to our services at our sole discretion, without notice, for conduct that we believe violates these Terms & Conditions or is harmful to other users, us, or third parties, or for any other reason.',
      },
      {
        title: '8. Changes to Terms & Conditions',
        content:
          'We may modify these Terms & Conditions at any time. We will notify you of any significant changes. Your continued use of our services after such modifications constitutes your acceptance of the updated terms.',
      },
      {
        title: '9. Governing Law',
        content:
          'These Terms & Conditions shall be governed by and construed in accordance with the laws of Singapore, without regard to its conflict of law provisions.',
      },
      {
        title: '10. Contact Information',
        content:
          'If you have any questions about these Terms & Conditions, please contact us at vasudevan.ramaya@gmail.com or +65 84284771.',
      },
    ],
  },
};

const sectionTitleClasses = cn(
  'text-lg font-bold mb-2 text-accent-900 dark:text-white'
);
const sectionContentClasses = cn('mb-4 text-accent-700 dark:text-accent-200');

export function TermsAndConditionsSection() {
  const { sectionHeading, termsAndConditions } = termsAndConditionsData;

  return (
    <section className="section-padding-primary">
      <Container>
        <div className="mb-8">
          <SectionHeading {...sectionHeading} />
        </div>
        <div className="mb-4">
          <p className="text-accent-600 text-sm dark:text-accent-300">
            Last updated: {termsAndConditions.lastUpdated}
          </p>
        </div>
        {termsAndConditions.sections.map((section, index) => (
          <div
            key={index}
            className="mb-6"
            data-aos="fade-up"
            data-aos-delay={getStaggeredDelay(
              [100, 200, 300, 400, 500, 600, 700, 800, 800, 1000],
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
//   return (
//     <section className="section-padding-primary">
//       <Container>
//         <div
//           className="aos-init aos-animate"
//           key={index}
//           data-aos="fade-up"
//           data-aos-delay={getStaggeredDelay([200, 400, 600], index)}
//         >
//           <div className="mb-8">
//             <SectionHeading {...sectionHeading} />
//           </div>
//           <div className="mb-4">
//             <p className="text-accent-600 text-sm dark:text-accent-300">
//               Last updated: {termsAndConditions.lastUpdated}
//             </p>
//           </div>
//           {termsAndConditions.sections.map((section, index) => (
//             <div key={index} className="mb-6">
//               <h2 className={sectionTitleClasses}>{section.title}</h2>
//               {Array.isArray(section.content) ? (
//                 <ul className={sectionContentClasses}>
//                   {section.content.map((item, itemIndex) => (
//                     <li key={itemIndex}>{item}</li>
//                   ))}
//                 </ul>
//               ) : (
//                 <p className={sectionContentClasses}>{section.content}</p>
//               )}
//             </div>
//           ))}
//         </div>
//       </Container>
//     </section>
//   );
// }
