import { MenuItemType } from '@paljs/ui/types';

const items: MenuItemType[] = [
  {
    title: 'Home Page',
    icon: { name: 'home' },
    link: { href: '/' },
  },
  {
    title: 'FEATURES',
    group: true,
  },
  {
    title: 'Roles',
    icon: { name: 'lock-outline' },
    children: [
      {
        title: 'Add A New Role',
        link: { href: '/roles/create' },
      },
      {
        title: 'View all Roles',
        link: { href: '/roles' },
      },
    ],
  },
  {
    title: 'Users',
    icon: { name: 'person-outline' },
    children: [
      {
        title: 'Add A New User',
        link: { href: '/users/create' },
      },
      {
        title: 'View all Users',
        link: { href: '/users' },
      },
    ],
  },
  {
    title: 'Question Banks',
    icon: { name: 'book-outline' },
    children: [
      {
        title: 'Add A New Question Bank',
        link: { href: '/question-banks/create' },
      },
      {
        title: 'View all Question Banks',
        link: { href: '/question-banks' },
      },
    ],
  },
  {
    title: 'Questions',
    icon: { name: 'copy-outline' },
    children: [
      {
        title: 'Add A New Question',
        link: { href: '/questions/create' },
      },
      {
        title: 'View all Questions',
        link: { href: '/questions' },
      },
    ],
  },
  {
    title: 'Options',
    icon: { name: 'options-outline' },
    children: [
      {
        title: 'Add A New Option',
        link: { href: '/extra-components/accordion' },
      },
      {
        title: 'View all Options',
        link: { href: '/extra-components/actions' },
      },
    ],
  },
  {
    title: 'Schedule Quizzes',
    icon: { name: 'clock-outline' },
    children: [
      {
        title: 'Set A New Schedule Quiz',
        link: { href: '/extra-components/accordion' },
      },
      {
        title: 'View all Schedule Quizzes',
        link: { href: '/extra-components/actions' },
      },
    ],
  },
  {
    title: 'User Quiz Attempts',
    icon: { name: 'file-outline' },
    children: [
      {
        title: 'View all User Quiz Attempts',
        link: { href: '/extra-components/actions' },
      },
    ],
  },
  {
    title: 'Logout',
    icon: { name: 'lock-outline' },
    link: { href: '/extra-components/actions' },
  },
];

export default items;
