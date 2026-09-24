import heroImg from '../assets/images/photo-walk.jpg'
import gallery1 from '../assets/images/photo-dinner.jpg'
import gallery2 from '../assets/images/photo-portrait.jpg'
import gallery3 from '../assets/images/photo-cake.jpg'
import gallery4 from '../assets/images/photo-closeup.jpg'
import gallery5 from '../assets/images/photo-walk.jpg'
import gallery6 from '../assets/images/photo-ring.jpg'
import gallery7 from '../assets/images/photo-field.jpg'

/**
 * Single source of truth — edit names, date, venue, phone, map here.
 */
const wedding = {
  bride: {
    firstName: 'Suchithra',
    lastName: 'Thodukattil Ayyappan',
    fullName: 'Suchithra',
    family: 'Thodukattil Ayyappan',
    initial: 'S',
  },
  groom: {
    firstName: 'Aswajith',
    lastName: 'Mannamcherry',
    fullName: 'Aswajith',
    family: 'Mannamcherry',
    initial: 'A',
  },

  /** ISO string with Asia/Kolkata offset (+05:30) */
  weddingDateISO: '2026-11-08T08:00:00+05:30',
  weddingDate: new Date('2026-11-08T08:00:00+05:30'),

  date: {
    weekday: 'Sunday',
    weekdayUpper: 'SUNDAY',
    month: 'November',
    monthUpper: 'NOVEMBER',
    day: 8,
    dayOrdinal: '8TH',
    year: 2026,
    displayLong: '8 November 2026',
    displayFull: 'Sunday, 8 November 2026',
    displayUpper: '8TH NOVEMBER 2026',
    time: '8:00 AM',
    timeRange: '8:00 AM',
    muhurtham: 'Muhurtham at 8:00 AM',
    receptionTime: '11:30 AM',
  },

  venue: {
    name: 'Guruvayur Temple',
    city: 'Guruvayur, Thrissur, Kerala',
    full: 'Guruvayur Temple, Thrissur, Kerala',
  },

  locations: {
    ceremony: {
      eyebrow: 'Wedding',
      time: '8:00 AM',
      name: 'Guruvayur Temple',
      lines: ['Guruvayur, Thrissur', 'Kerala'],
      url: 'https://www.google.com/maps/search/?api=1&query=Guruvayur+Temple+Thrissur',
      embedUrl:
        'https://maps.google.com/maps?q=Guruvayur+Temple+Thrissur&z=15&output=embed',
    },
    reception: {
      eyebrow: 'Reception',
      time: '11:30 AM',
      name: 'PPR Courtyard',
      lines: ['Chavakkad - Kanjani Rd, Pavaratty, Kerala'],
      url: 'https://maps.app.goo.gl/uSaG12m6BwnLpvx47',
      embedUrl:
        'https://maps.google.com/maps?q=PPR+Courtyard+Chavakkad+Kanjani+Rd+Pavaratty+Kerala&z=16&output=embed',
    },
  },

  map: {
    lat: 10.5946,
    lng: 76.039,
    label: 'Guruvayur Temple',
    url: 'https://www.google.com/maps/search/?api=1&query=Guruvayur+Temple+Thrissur',
    embedUrl:
      'https://maps.google.com/maps?q=Guruvayur+Temple+Thrissur&z=15&output=embed',
  },

  contact: {
    phone: '+91 90745 36212',
    phoneHref: 'tel:+919074536212',
    whatsappHref: 'https://wa.me/919074536212',
  },

  images: {
    invitation: 'https://paars-ecomerce.s3.ap-south-1.amazonaws.com/9cb2ea8c-c540-4d51-9876-1d2a2495105b.jpeg',
    cover: '/card/invite-cover.jpg',
    hero: heroImg,
    gallery: [
      {
        id: 1,
        src: gallery1,
        alt: 'Suchithra and Aswajith — in the tall grass',
        featured: true,
      },
      {
        id: 2,
        src: gallery2,
        alt: 'Suchithra and Aswajith — portrait',
      },
      {
        id: 3,
        src: gallery3,
        alt: 'Suchithra and Aswajith cutting cake together',
      },
      {
        id: 4,
        src: gallery4,
        alt: 'Suchithra and Aswajith — a close moment',
      },
      {
        id: 5,
        src: gallery5,
        alt: 'Suchithra and Aswajith walking together',
      },
      {
        id: 6,
        src: gallery6,
        alt: 'Aswajith placing a ring on Suchithra',
      },
      {
        id: 7,
        src: gallery7,
        alt: 'Suchithra and Aswajith at dinner',
      },
    ],
  },

  /** Place a file at src/assets/music/wedding.mp3 to enable audio */
  music: {
    src: '/music/wedding.mp3',
    title: 'Wedding Instrumental',
  },

  copy: {
    loadingSubtitle: 'A celebration of love',
    openInvitation: 'Open Invitation',
    heroEyebrow: 'Together with our families',
    heroInvite: 'We invite you to celebrate our wedding',
    joinCelebration: 'Join Our Celebration',
    blessingHeading: 'We Request the Honor of Your Presence',
    blessingText:
      'Your love, blessings and presence will make our celebration truly memorable.',
    quote: 'Two souls,\none heart,\none beautiful journey.',
    receptionNote: 'Reception at 11:30 AM · PPR Courtyard, Pavaratty',
    ceremonyHeading: 'Wedding Ceremony',
    todayIsWedding: 'Today is our Wedding ❤️',
    footerLove: 'Made with ❤️',
    locationEyebrow: 'Location',
    locationHeading: 'Find Us',
    locationIntro:
      'Wedding ceremony at the sacred Guruvayur Temple. Reception to follow at PPR Courtyard, Pavaratty.',
    invitationCardLead: 'You are cordially invited to the wedding of',
    invitationBlessing:
      'With the blessings of Almighty, we joyfully invite you to grace the wedding of',
    invitationClosing:
      'Your presence will make our special day more memorable',
  },

  seo: {
    title: 'Suchithra & Aswajith — Wedding Invitation',
    description:
      'You are cordially invited to the wedding of Suchithra & Aswajith on Sunday, 8 November 2026 at Guruvayur Temple. Reception at PPR Courtyard, Pavaratty.',
  },
}

export default wedding
