import { Footer } from '@/src/layout/footer/v1';
import { MainHeader } from '@/src/layout/header';
import { HeroSection } from '@/src/sections/hero/v3';
import { ServiceDetailsSection } from '@/src/sections/service-details/v1/ai';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GSquare Technologies | Service details | AI',
  description:
    'GSquare Technologies Pte Ltd - Empowering Your Business with Cutting-Edge IT Solutions. From cloud computing to cyber security, we offer comprehensive IT solutions designed to streamline your operations and secure your digital assets.',
};

export default function Page() {
  return (
    <>
      <MainHeader version="1" />
      <HeroSection
        title="AI"
        breadcrumbItems={[
          {
            label: 'Home',
            href: '/',
          },
          {
            label: 'AI',
          },
        ]}
      />
      <ServiceDetailsSection />
      <Footer />
    </>
  );
}
