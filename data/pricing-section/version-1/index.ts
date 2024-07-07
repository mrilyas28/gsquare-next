import { PricingSectionProps } from '@/src/sections/pricing/version-1';

export const pricingSectionData: PricingSectionProps = {
  sectionHeading: {
    subtitle: 'Mission | Vision | Value',
    title: 'Innovating for a better tomorrow',
  },
  cards: [
    {
      title: 'Our Mission',
      description:
        'To empower businesses by providing innovative and reliable IT solutions that drive efficiency, security, and growth. We are committed to delivering exceptional service and support, ensuring that our clients can navigate the digital world with confidence.',
      features: [
        'Strategies for Launching Your Startup Successfully',
        'Winning Metrics for Measuring Your Startup’s Success',
        'Best Practices for Ensuring Data Security',
        'Tips for Enhancing Operational Efficiency',
        'How to Achieve Sustainable Business Growth',
        'The Importance of Exceptional Customer Service',
        'Leveraging Technology for Business Transformation',
        'Building a Robust IT Infrastructure',
      ],
      // price: '$49',
      // duration: '/month',
      isMission: true,
      isVision: false,
      isValue: false,
      button: {
        href: '/',
        label: 'View Services',
      },
    },
    {
      title: 'Our Vision',
      description:
        'To be the leading provider of comprehensive IT services in the region, recognized for our expertise in transforming businesses through technology. We envision a future where our solutions enable every client to achieve their full potential in a rapidly evolving digital landscape.',
      features: [
        'Innovative Strategies for Your Startup’s Success',
        'The Importance of Typography in Brand Identity',
        'Key Metrics for Tracking Startup Performance',
        'The Role of Technology in Business Transformation',
        'Achieving Excellence through Continuous Improvement',
        'How to Build a Technology-Driven Culture',
        'The Impact of Digital Solutions on Business Growth',
        'Ensuring Long-Term Success with Strategic IT Planning',
        'Creating Value Through Innovative Solutions',
      ],
      // price: '$79',
      // duration: '/month',
      isMission: false,
      isVision: true,
      isValue: false,
      button: {
        href: '/services',
        label: 'View Services',
      },
    },
    {
      title: 'Our Value',
      description:
        'At GSquare Technologies, we hold a steadfast commitment to providing unparalleled IT solutions that embody our core values of innovation, reliability, and customer-centricity. We believe in delivering exceptional service that empowers businesses to excel in the digital age, ensuring that our clients can confidently navigate the ever-evolving technological landscape.',
      features: [
        'Integrity in Every Interaction',
        'Innovation at the Core of Our Solutions',
        'Reliability and Trustworthiness',
        'Customer-Centric Approach',
        'Excellence in Service Delivery',
        'Proactive Problem Solving',
        'Emphasis on Collaboration and Teamwork',
        'Focus on Long-Term Partnerships',
        'Sustainability and Social Responsibility',
      ],
      // price: '$99',
      // duration: '/month',
      isMission: false,
      isVision: false,
      isValue: true,
      button: {
        href: '/services',
        label: 'View Services',
      },
    },
  ],
};
