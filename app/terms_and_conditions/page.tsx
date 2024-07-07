import { Footer } from '@/src/layout/footer/v1';
import { MainHeader } from '@/src/layout/header';
// import { ContactSection } from '@/src/sections/contact/v2';
import { HeroSection } from '@/src/sections/hero/v3';
import { TermsAndConditionsSection } from '@/src/sections/terms_and_conditions';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GSquare Technologies | Terms & Conditions',
  description:
    'GSquare Technologies Pte Ltd. Empowering Your Business with Cutting-Edge IT Solutions',
};

export default function Page() {
  return (
    <>
      <MainHeader version="1" />
      <HeroSection
        title="Terms & Conditions"
        breadcrumbItems={[
          {
            label: 'Home',
            href: '/',
          },
          {
            label: 'Terms & Conditions',
          },
        ]}
      />
      {/* <ContactSection /> */}
      <TermsAndConditionsSection />
      <Footer />
    </>
  );
}
