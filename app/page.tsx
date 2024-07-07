// import { projectSectionData } from '@/data/project-section/v1/home-page';
import { serviceSectionData } from '@/data/service-section/v1/home-page';
import { Footer } from '@/src/layout/footer/v1';
import { MainHeader } from '@/src/layout/header';
import { AboutSection } from '@/src/sections/about/v1';
// import { BlogSection } from '@/src/sections/blog/v1';
// import { ContactSection } from '@/src/sections/contact/v1';
// import { CtaSection } from '@/src/sections/cta/v2';
import { Hero } from '@/src/sections/hero/v1';
// import { ProjectSection } from '@/src/sections/project/v1';
import { PricingSection } from '@/src/sections/pricing/version-1';
import { ServiceSection } from '@/src/sections/service/v1';
import { StatisticsSection } from '@/src/sections/statistics/v1';
// import { TeamSection } from '@/src/sections/team/v2';
// import { TestimonialSection } from '@/src/sections/testimonial/v1';
import { WorkprocessSection } from '@/src/sections/work-process/v1';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GSquare Technologies Pte Ltd | Home',
  description:
    'Empowering Your Business with Cutting-Edge IT Solutions at GSquare Technologies.',
};

export default function Page() {
  return (
    <>
      <MainHeader version="1" />
      <Hero />
      <ServiceSection className="!pb-0" {...serviceSectionData} />
      <AboutSection />
      <div className="mb-20">
        <StatisticsSection />
      </div>
      {/* <CtaSection /> */}
      {/* <ProjectSection {...projectSectionData} /> */}
      {/* <TestimonialSection /> */}
      <PricingSection />
      {/* <TeamSection /> */}
      {/* <ContactSection /> */}
      <WorkprocessSection />
      {/* <BlogSection /> */}
      <Footer />
    </>
  );
}
