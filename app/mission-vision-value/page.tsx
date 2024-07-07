
import { Footer } from '@/src/layout/footer/v1';
import { MainHeader } from '@/src/layout/header';
// import { CtaSection } from '@/src/sections/cta/v1';
import { HeroSection } from '@/src/sections/hero/v3';
import { PricingSection } from '@/src/sections/pricing/version-1';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GSquare Technologies | Mission - Vision - Value',
  description:
    'GSquare Technologies Pte Ltd - Empowering Your Business with Cutting-Edge IT Solutions. From cloud computing to cyber security, we offer comprehensive IT solutions designed to streamline your operations and secure your digital assets.',
};

export default function Page() {
  return (
    <>
      <MainHeader version="1" />
      <HeroSection
        title="Mission - Vision - Value"
        breadcrumbItems={[
          {
            label: 'Home',
            href: '/',
          },
          {
            label: 'Mission - Vision - Value',
          },
        ]}
      />
      <PricingSection />
      {/* <CtaSection className="section-padding-primary" /> */}
      <Footer />
    </>
  );
}
