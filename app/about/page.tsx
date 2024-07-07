import { Footer } from '@/src/layout/footer/v1';
import { MainHeader } from '@/src/layout/header';
import { AboutSection } from '@/src/sections/about/v1';
// import { AboutSection as AboutSectionTwo } from '@/src/sections/about/v2';
// import { CtaSection } from '@/src/sections/cta/v2';
// import { HeroSection } from '@/src/sections/hero/v2';
import { StatisticsSection } from '@/src/sections/statistics/v1';
// import { TestimonialSection } from '@/src/sections/testimonial/v2';
import { WorkprocessSection } from '@/src/sections/work-process/v1';
import FAQSection from '@/src/sections/faq';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GSquare Technologies | About',
  description:
    'GSquare Technologies Pte Ltd - Empowering Your Business with Cutting-Edge IT Solutions. From cloud computing to cyber security, we offer comprehensive IT solutions designed to streamline your operations and secure your digital assets.',
};
export default function Page() {
  return (
    <>
      <div className="lg:mb-20">
        <MainHeader version="1" />
      </div>
      {/* <HeroSection
        title="About Us"
        breadcrumbItems={[
          {
            label: 'Home',
            href: '/',
          },
          {
            label: 'About',
          },
        ]}
      /> */}
      <AboutSection />
      {/* <CtaSection /> */}
      <StatisticsSection />
      <FAQSection />
      {/* <AboutSectionTwo /> */}
      <WorkprocessSection />
      <Footer />
    </>
  );
}
