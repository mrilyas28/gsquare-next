import { Container } from '@/src/components/container';
import { SectionHeading } from '@/src/components/section-heading';
import { SectionHeadingWithoutStylingProps } from '@/src/components/section-heading/interface';
import { Form } from './form';
import { cn } from '@/src/utils/shadcn';
import { FaEnvelope, FaPhone } from 'react-icons/fa6';
import { FaMapMarkerAlt } from 'react-icons/fa';

export interface ContactSectionProps {
  sectionHeading: SectionHeadingWithoutStylingProps;
  contactInfo: {
    sectionHeading: SectionHeadingWithoutStylingProps;
    location: string;
    mail: string;
    phone: string;
  };
}

export const contactSectionData: ContactSectionProps = {
  sectionHeading: {
    title: 'Feel free to messege',
  },
  contactInfo: {
    sectionHeading: {
      title: 'Get in touch ',
      description:
        'Ready to elevate your business with our IT solutions? Contact us today to discuss how we can assist you in achieving technological excellence.',
    },
    location: `Block 17, #01-01, Bedok reservoir view singapore 478934`,
    mail: 'vasudevan.ramaya@gmail.com',
    phone: '+65 84284771',
  },
};

const addressIconParentClasses = cn(
  'w-[50px] h-[50px] relative top-1 text-md/[1] rounded-full inline-grid place-items-center text-white bg-primary flex-none'
);
const addressItemClasses = cn('flex gap-30px');
const addressTitleClasses = cn(
  'text-md font-bold leading-[1.5] mb-1.5 text-accent-900 dark:text-white'
);

export function ContactSection() {
  const { sectionHeading, contactInfo } = contactSectionData;
  return (
    <section className="section-padding-primary">
      <Container>
        <div className="flex flex-col gap-[50px] md:flex-row">
          <div className="md:w-1/2 lg:w-2/3">
            <div className="mb-30px">
              <SectionHeading {...sectionHeading} />
            </div>
            <Form />
          </div>
          <div className="md:w-1/2 lg:w-2/6">
            <div className="mb-30px">
              <SectionHeading {...contactInfo.sectionHeading} />
            </div>
            <ul aria-label="addresses" className="grid gap-5">
              <li className={addressItemClasses}>
                <span className={addressIconParentClasses}>
                  <FaMapMarkerAlt />
                </span>
                <div>
                  <h3 className={addressTitleClasses}>Address</h3>
                  <address className="not-italic">
                    {contactInfo.location}
                  </address>
                </div>
              </li>
              <li className={addressItemClasses}>
                <span className={addressIconParentClasses}>
                  <FaEnvelope />
                </span>
                <div>
                  <h3 className={addressTitleClasses}>Email Address</h3>
                  <a href={`mailto:${contactInfo.mail}`}>{contactInfo.mail}</a> <br />
                  </div>
              </li>
              <li className={addressItemClasses}>
                <span className={addressIconParentClasses}>
                  <FaPhone />
                </span>
                <div>
                  <h3 className={addressTitleClasses}>Phone number</h3>
                  <a href={`tel:${contactInfo.phone.split(' ').join('')}`}>
                    {contactInfo.phone}
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
