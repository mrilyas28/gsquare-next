import { Footer } from '@/src/layout/footer/v1';
import { MainHeader } from '@/src/layout/header';
import { HeroSection } from '@/src/sections/hero/v3';
import { ServiceDetailsSection } from '@/src/sections/service-details/v1/new-pc-laptop-setup';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GSquare Technologies | Service details | New PC/Laptop Setup',
  description:
    'GSquare Technologies Pte Ltd - Empowering Your Business with Cutting-Edge IT Solutions. From cloud computing to cyber security, we offer comprehensive IT solutions designed to streamline your operations and secure your digital assets.',
};

export default function Page() {
  return (
    <>
      <MainHeader version="1" />
      <HeroSection
        title="New PC/Laptop Setup"
        breadcrumbItems={[
          {
            label: 'Home',
            href: '/',
          },
          {
            label: 'New PC/Laptop Setup',
          },
        ]}
      />
      <ServiceDetailsSection />
      <Footer />
    </>
  );
}
