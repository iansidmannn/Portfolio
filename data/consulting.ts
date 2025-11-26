export interface ConsultingClient {
  id: string;
  name: string;
  followers: string;
  accountUrl: string;
  description: string;
  work: string[];
}

export const bigCreatorConsulting: ConsultingClient[] = [
  {
    id: 'atom-williamson',
    name: 'Atom Williamson',
    followers: '600K',
    accountUrl: 'https://www.instagram.com/atomwilliamsonn',
    description: 'Actively helping launch clothing brand and assisting with filming & video ideas/coordination',
    work: [
      'Clothing brand launch strategy',
      'Video filming and coordination',
      'Content ideas and planning',
    ],
  },
  {
    id: 'ryan-blourchi',
    name: 'Ryan Blourchi',
    followers: '1.2M',
    accountUrl: 'https://www.tiktok.com/@ryanblourchi',
    description: 'Acted for, filmed for, and helped coordinate some of his most viral videos',
    work: [
      'Acting in viral content',
      'Video filming and production',
      'Content coordination',
    ],
  },
  {
    id: 'dr-spice',
    name: 'Dr. Spice',
    followers: '105K',
    accountUrl: 'https://www.tiktok.com/@drspice24',
    description: 'Provided content strategy feedback that helped grow from 80K to 100K followers, also assisted with filming',
    work: [
      'Content strategy development',
      'Growth from 80K to 100K followers',
      'Video filming assistance',
    ],
  },
  {
    id: 'tommy-brown',
    name: 'Tommy Brown',
    followers: '900K',
    accountUrl: 'https://www.instagram.com/tommyybrown_/',
    description: 'Helped film several pieces of shortform content',
    work: [
      'Shortform content filming',
      'Production support',
    ],
  },
];

export const otherConsulting: ConsultingClient[] = [
  {
    id: 'get-brick',
    name: 'Get Brick',
    followers: '120K+',
    accountUrl: 'https://getbrick.app',
    description: 'Industry leading productivity device. Created ad that is now the first ad on their landing page (split tested to be the best)',
    work: [
      'Landing page ad creation',
      'Split testing and optimization',
    ],
  },
  {
    id: 'sarah',
    name: 'Sarah (Personal Brand)',
    followers: 'Personal',
    accountUrl: 'https://www.instagram.com/sarahfishersousa/',
    description: 'Optimized page to drive traffic to women in business event. Provided viral video framework that resulted in 10M and 1.2M view videos',
    work: [
      'Page optimization',
      'Viral video framework',
      '10M and 1.2M view videos',
    ],
  },
  {
    id: 'smyle',
    name: 'Smyle',
    followers: 'Millions',
    accountUrl: 'https://www.instagram.com/smylelabs/',
    description: 'Helped launch new product. Best video got 34k views. Account became role model for others learning to market the same product. Also did graphic design.',
    work: [
      'Product launch content',
      '34k view video',
      'Graphic design',
      'Became industry role model account',
    ],
  },
  {
    id: 'snappy-feet',
    name: 'Snappy Feet',
    followers: 'N/A',
    accountUrl: '',
    description: 'Ecommerce brand. One call optimized online store and corrected social media strategy. Next video got 100K+ views (from 1k avg)',
    work: [
      'Store optimization',
      'Social media strategy correction',
      '100K+ view video (from 1k average)',
      '15 organic sales from one video',
    ],
  },
  {
    id: 'red-as-color',
    name: 'RedAsTheColor',
    followers: 'Growing',
    accountUrl: 'https://www.youtube.com/@redasthecolor',
    description: 'Car social media content. Helped with video editing and content creation. Attended WealthCon in Vegas with media passes to film',
    work: [
      'Video editing',
      'Content creation',
      'Event filming at WealthCon',
    ],
  },
  {
    id: 'open-park',
    name: 'Open Park',
    followers: 'Growing',
    accountUrl: 'https://www.instagram.com/openparkus/',
    description: 'In-person dog park experience. Met with owners to correct social media strategy. Led from 200 views to several 100K+ view videos',
    work: [
      'Social media strategy',
      '200 views to 100K+ views',
      'Multiple viral videos',
    ],
  },
  {
    id: 'conejo-awards',
    name: 'Conejo Awards',
    followers: 'Growing',
    accountUrl: 'https://www.youtube.com/@ConejoAward',
    description: 'One-stop shop for custom printed products and awards. Took from 0 to 150,000 views in first month',
    work: [
      'Complete social media setup',
      '0 to 150K views in first month',
    ],
  },
  {
    id: 'ivan-casiano',
    name: 'Ivan Casiano',
    followers: 'Personal',
    accountUrl: 'https://www.instagram.com/mr.ivancasiano/',
    description: 'Friend who needed editing assistance',
    work: [
      'Video editing support',
    ],
  },
];

