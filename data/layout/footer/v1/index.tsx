import { FooterSectionProps } from '@/src/layout/footer/v1';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa6';

export const footerSectionData: FooterSectionProps = {
  about: {
    description:
      'At GSquare Technology, we deliver cutting-edge IT solutions to drive your business forward, ensuring security and efficiency at every step.',
    socialLinks: [
      {
        icon: <FaFacebookF />,
        href: 'https://www.facebook.com/',
      },
      {
        icon: <FaTwitter />,
        href: 'https://twitter.com/',
      },
      {
        icon: <FaInstagram />,
        href: 'https://www.instagram.com/',
      },
    ],
  },
  columnOne: {
    title: 'Pages',
    links: [
      {
        label: 'Home',
        href: '/',
        openNewTab: false,
      },
      {
        label: 'About Us',
        href: '/about',
        openNewTab: false,
      },
      {
        label: 'Services',
        href: '/services',
        openNewTab: false,
      },
      {
        label: 'Cloud Computing',
        href: '/services/cloud-computing',
        openNewTab: false,
      },
      {
        label: 'Cyber Security',
        href: '/services/it-cyber-security',
        openNewTab: false,
      },
      // {
      //   label: 'Testimonial',
      //   href: '/testimonial',
      //   openNewTab: false,
      // },
      // {
      //   label: 'Our Team',
      //   href: '/team',
      //   openNewTab: false,
      // },
      {
        label: 'FAQ',
        href: '/faq',
        openNewTab: false,
      },
      {
        label: 'Contact US',
        href: '/contact',
        openNewTab: false,
      },
    ],
  },
  columnTwo: {
    title: 'Address',
    location: 'Block 17, #01-01, Bedok reservoir view singapore 478934',
    mails: ['vasudevan.ramaya@gmail.com'],
    phoneNumbers: ['(+65) 84284771'],
  },
  columnThree: {
    title: 'Our Services',
    links: [
      {
        label: 'New PC/Laptop Setup',
        href: '/services/new-pc-laptop-setup',
        openNewTab: false,
      },
      {
        label: 'PC/Laptop Repair',
        href: '/services/pc-laptop-repair',
        openNewTab: false,
      },
      {
        label: 'Web Design and Development',
        href: '/services/web-design-and-development',
        openNewTab: false,
      },
      {
        label: 'CCTV Setup',
        href: '/services/cctv-setup',
        openNewTab: false,
      },
      {
        label: 'Office IT Infrastructure Setup',
        href: '/services/office-it-infrastructure-setup',
        openNewTab: false,
      },
      {
        label: 'Helpdesk Support',
        href: '/services/helpdesk-support',
        openNewTab: false,
      },
      {
        label: 'Software Development',
        href: '/services/software-development',
        openNewTab: false,
      },
    ],
  },
  // columnThree: {
  //   title: 'Recent Blog',
  //   blogs: [
  //     {
  //       image: {
  //         src: '/assets/images/blog/blog-sm-1.jpg',
  //         alt: 'We provide a range of IT solutions',
  //       },
  //       title: 'We provide a range of IT solutions',
  //       date: 'january 11, 2024',
  //       slug: './blog-details',
  //     },
  //     {
  //       image: {
  //         src: '/assets/images/blog/blog-sm-2.jpg',
  //         alt: 'IT solutions enhance efficiency',
  //       },
  //       title: 'IT solutions enhance efficiency',
  //       date: 'january 11, 2024',
  //       slug: './blog-details',
  //     },
  //   ],
  // },
  footerBottom: {
    copyrightText: '© GSquare Technology PTE.LTD  2024 | All Rights Reserved',
    links: [
      {
        label: 'Terms & Conditions',
        href: '/terms_and_conditions',
        openNewTab: false,
      },
      {
        label: 'Privacy Policy',
        href: '/privacy-policy',
        openNewTab: false,
      },
      {
        label: 'Contact Us',
        href: '/contact',
        openNewTab: false,
      },
    ],
  },
};
