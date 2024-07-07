import { HeaderProps } from '@/src/layout/header/desktop/v1';

export const menuItemsProps: HeaderProps['menuItems'] = [
  // {
  //   title: 'Home',
  //   subMenuItems: [
  //     {
  //       label: 'Home One',
  //       href: '/',
  //     },
  //     {
  //       label: 'Home Two',
  //       href: '/home-2',
  //     },
  //   ],
  // },
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'About',
    href: '/about',
  },
  {
    title: 'Services',
    subMenuItems: [
      {
        label: 'Service List',
        href: '/services',
      },
      {
        label: 'New PC/Laptop Setup',
        href: '/services/new-pc-laptop-setup',
      },
      {
        label: 'PC/Laptop Repair',
        href: '/services/pc-laptop-repair',
      },
      {
        label: 'Web Design and Development',
        href: '/services/web-design-and-development',
      },
      {
        label: 'CCTV Setup',
        href: '/services/cctv-setup',
      },
      {
        label: 'Office IT Infrastructure Setup',
        href: '/services/office-it-infrastructure-setup',
      },
      {
        label: 'Helpdesk Support',
        href: '/services/helpdesk-support',
      },
      {
        label: 'Software Development',
        href: '/services/software-development',
      },
    ],
  },
  // {
  //   title: 'Project',
  //   subMenuItems: [
  //     {
  //       label: 'Project List',
  //       href: '/project',
  //     },
  //     {
  //       label: 'Project single',
  //       href: '/project/single',
  //     },
  //   ],
  // },
  // {
  //   title: 'Blog',
  //   subMenuItems: [
  //     {
  //       label: 'Blog List',
  //       href: '/blog',
  //     },
  //     {
  //       label: 'Blog single',
  //       href: '/blog/single',
  //     },
  //   ],
  // },
  // {
  //   title: 'Pages',
  //   subMenuItems: [
  //     {
  //       label: 'Testimonial',
  //       href: '/testimonial',
  //     },
  //     {
  //       label: 'Team',
  //       href: '/team',
  //     },
  //     // {
  //     //   label: 'Pricing',
  //     //   href: '/pricing',
  //     // },
  //     {
  //       label: 'FAQ',
  //       href: '/faq',
  //     },
  //   ],
  // },
  {
        label: 'Cloud Computing',
        href: '/services/cloud-computing',
      },
      {
        label: 'AI',
        href: '/services/ai',
      },
      {
        label: 'Cyber Security',
        href: '/services/it-cyber-security',
      },
  {
    label: 'Contact Us',
    href: '/contact',
  },
];
