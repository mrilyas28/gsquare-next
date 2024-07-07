import { Footer } from '@/src/layout/footer/v1';
import { MainHeader } from '@/src/layout/header';
import { HeroSection } from '@/src/sections/hero/v3';
import { PrivacyPolicySection } from '@/src/sections/privacy-policy';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GSquare Technologies | Privacy Policy',
  description:
    'GSquare Technologies Pte Ltd. Empowering Your Business with Cutting-Edge IT Solutions',
};

export default function Page() {
  return (
    <>
      <MainHeader version="1" />
      <HeroSection
        title="Privacy Policy"
        breadcrumbItems={[
          {
            label: 'Home',
            href: '/',
          },
          {
            label: 'Privacy Policy',
          },
        ]}
      />
      <PrivacyPolicySection />
      <Footer />
    </>
  );
}
