export const PRODUCT_CATEGORIES = [
  {
    label: 'UI Kits',
    value: 'ui_kits' as const,
    featured: [
      {
        name: 'Editor picks',
        href: `/products?category=ui_kits`,
        imageSrc: '/nav/ui-kits/mixed.jpg',
      },
      {
        name: 'New Arrivals',
        href: '/products?category=ui_kits&sort=desc',
        imageSrc: '/nav/ui-kits/blue.jpg',
      },
      {
        name: 'Bestsellers',
        href: '/products?category=ui_kits',
        imageSrc: '/nav/ui-kits/purple.jpg',
      },
    ],
  },
  {
    label: 'Icons',
    value: 'icons' as const,
    featured: [
      {
        name: 'Favorite Icon Picks',
        href: `/products?category=icons`,
        imageSrc: '/nav/icons/picks.jpg',
      },
      {
        name: 'New Arrivals',
        href: '/products?category=icons&sort=desc',
        imageSrc: '/nav/icons/new.jpg',
      },
      {
        name: 'Bestselling Icons',
        href: '/products?category=icons',
        imageSrc: '/nav/icons/bestsellers.jpg',
      },
    ],
  },
]
// NAVIGATION
export const NAV_LINKS = [
  { href: '/', key: 'home', label: 'Home' },
  { href: '/why_qr', key: 'why_qreactive', label: 'Why Qreactive?' },
  { href: '/qr_scanner', key: 'qr_scanner', label: 'Qr Scanner' },
  { href: '/faq', key: 'faq ', label: 'FAQ ' },
  { href: '/qr_list', key: 'contact_us', label: 'Contact Us' },
];

// CAMP SECTION
export const PEOPLE_URL = [
  '/person-1.png',
  '/person-2.png',
  '/person-3.png',
  '/person-4.png',
];

// FEATURES SECTION
export const FEATURES = [
  {
    title: 'Real maps can be offline',
    icon: '/map.svg',
    variant: 'green',
    description:
      'We provide a solution for you to be able to use our application when climbing, yes offline maps you can use at any time there is no signal at the location',
  },
  {
    title: 'Set an adventure schedule',
    icon: '/calendar.svg',
    variant: 'green',
    description:
      "Schedule an adventure with friends. On holidays, there are many interesting offers from Hilink. That way, there's no more discussion",
  },
  {
    title: 'Technology using augment reality',
    icon: '/tech.svg',
    variant: 'green',
    description:
      'Technology uses augmented reality as a guide to your hiking trail in the forest to the top of the mountain. Already supported by the latest technology without an internet connection',
  },
  {
    title: 'Many new locations every month',
    icon: '/location.svg',
    variant: 'orange',
    description:
      'Lots of new locations every month, because we have a worldwide community of climbers who share their best experiences with climbing',
  },
];

// FOOTER SECTION
export const FOOTER_LINKS = [
  {
    title: 'Learn More',
    links: [
      'About Qreactive',
      'Privacy Policy',
      'Contact Us',
    ],
  },
  {
    title: 'Support',
    links: ['FAQ', 'Help Center'],
  },
];

export const FOOTER_CONTACT_INFO = {
  title: 'Contact Us',
  links: [
    { label: 'Admin Officer', value: '' },
    { label: 'Email Officer', value: '' },
  ],
};

export const SOCIALS = {
  title: 'Social',
  links: [
    '/facebook.svg',
    '/instagram.svg',
    '/twitter.svg',
    '/youtube.svg',
    '/wordpress.svg',
  ],
};

export const QUESTIONS = [
  {
    id: 1,
    title: "What are QR codes?",
    info: "A QR code (Quick Response code) is a two-dimensional barcode that contains information and can be quickly scanned and read using a QR code reader.",
  },
  {
    id: 2,
    title: "How are QR codes different from traditional barcodes?",
    info: "QR codes are two-dimensional and can store more information compared to traditional one-dimensional barcodes. They can store various data types, including text, URLs, and more.",
  },
  {
    id: 3,
    title: "How are QR codes used in React applications?",
    info: "In React applications, QR codes can be integrated to provide functionalities such as easy sharing of information, authentication, or linking to specific content within the application.",
  },
  {
    id: 4,
    title: "What is the role of state and props in managing QR code data?",
    info: "In React, state can be used to manage dynamic data related to QR codes, such as changing content or user interactions. Props can be used to pass QR code data between components.",
  },
  {
    id: 5,
    title: "Explain the concept of Virtual DOM in the context of QR code rendering.",
    info: "The Virtual DOM in React is a concept where an ideal representation of the UI is kept in memory. When dealing with QR codes, the Virtual DOM can efficiently update and re-render QR code components based on changes in the application state.",
  },
  {
    id: 6,
    title: "How can React handle QR code forms and input?",
    info: "React can handle forms related to QR codes using controlled components. Form data can be managed through React state, ensuring synchronization between the React state and the QR code input fields.",
  },
  {
    id: 7,
    title: "Using React Router for QR code navigation",
    info: "React Router, a standard library for routing in React applications, can be employed to enable seamless navigation between different QR code-related components, providing a dynamic user experience.",
  },
  {
    id: 8,
    title: "Significance of keys in managing QR code lists",
    info: "Keys in React lists play a crucial role in uniquely identifying and differentiating QR code elements. They ensure efficient updates and re-renders of lists containing QR codes by providing a stable identity for each item.",
  },
];