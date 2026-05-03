export interface ExperienceVideo {
  url: string; // Video URL (TikTok, Instagram, YouTube, etc.)
  title?: string; // Optional title/description for the video
  thumbnail?: string; // Optional thumbnail image
  video?: string; // Optional local video file path
}

export interface BrandDeal {
  brand: string; // Brand name
  url?: string; // Optional link to brand or deal post
  description?: string; // Optional description of the deal
  thumbnail?: string; // Optional thumbnail image
  logo?: string; // Optional brand logo
  video?: string; // Optional video file path
}

export interface PictureMemory {
  image?: string; // Image path
  video?: string; // Video file path
  caption?: string; // Optional caption/description for the memory
  url?: string; // Optional link (e.g., to a post)
}

export interface SummaryImage {
  src: string; // Image path
  label?: string; // Optional label/caption for the image
}

export interface Experience {
  id: string;
  title: string;
  subtext?: string; // Short caption shown on the tile under the account
  account: string;
  accountUrl?: string;
  summary?: string | string[]; // Summary text - can be a string or array of paragraphs for easier editing
  summaryImages?: SummaryImage[]; // Images to display alongside the summary
  videos?: ExperienceVideo[]; // Videos from the account to display
  brandDeals?: BrandDeal[]; // Brand deals for this account (only shown for certain accounts)
  pictureMemories?: PictureMemory[]; // Picture memories for this account (only shown for certain accounts)
  approach?: string; // Approach/strategy description
  approachAccount?: {
    handle: string; // Account handle (e.g., "@timelessmanliness")
    url: string; // Account URL
  };
  approachAccount2?: {
    handle: string; // Second account handle (e.g., "@confidentlywoman_")
    url: string; // Second account URL
  };
  approachVideo?: {
    video: string; // Video file path
    label?: string; // Optional label (e.g., "5.8M views @goofygarmentshop $5,000")
  };
  approachPdf?: {
    url: string; // PDF file path
    label: string; // Button label (e.g., "View Power Point")
  };
  achievements: string[];
  achievementImages?: string[]; // Images to display in the achievements section
  contentExamples?: string[];
  image?: string; // Optional profile/account image
  imagePosition?: string; // CSS object-position value for fine-tuning image display
  imageScale?: number; // CSS scale value for zooming into the image (e.g., 1.3)
  workType?: string; // Short label like "Personal Brand", "Clothing Brand", etc.
  followers?: number; // Follower count for sorting (in actual numbers, e.g., 1200000 for 1.2M)
  category?: 'mine' | 'consulting'; // Category for section separation
  commitment?: string; // Optional commitment description (e.g., "Ongoing consulting", "Volunteer content creation")
}

export const experiences: Experience[] = [
  {
    id: 'pinata-farms',
    title: 'Piñata Farms',
    subtext: '0 → 11.5M views in 5 days, 60K downloads. Featured by NFL, NBA, NHL.',
    account: '@trypinatafarms',
    accountUrl: 'https://www.tiktok.com/@trypinatafarms',
    workType: 'AI Consumer App',
    followers: 50000,
    image: '/IMG_9927 (1).PNG',
    imagePosition: 'center 42%',
    imageScale: 1.17,
    category: 'mine',
    summary: [
      'Piñata Farms is a consumer meme-video app. As the solo organic operator, I identified & launched a new feature averaging 13,000 downloads/month, backed by 5 repeatable viral video formats that all convert at varying percentages.',
    ],
    achievements: [
      'Drove 68,000+ app downloads via organic distribution',
      '13,000 downloads/month on identified feature',
      'Built 5 repeatable viral formats that convert to installs',
      'Engineered a viral sound now at 150M+ views across TikTok & Instagram',
      'Picked up by 8 NFL teams, multiple NBA & NHL teams',
      '11.5M views in first 5 days from 0',
    ],
    videos: [
      {
        url: 'https://www.tiktok.com/@trypinatafarms/video/7589361240795925791',
        title: '1.8M views',
        thumbnail: '/pinata-thumb-30.jpg',
      },
      {
        url: 'https://www.tiktok.com/@trypinatafarms/video/7588601726475701535',
        title: '892K views',
        thumbnail: '/pinata-thumb-31.jpg',
      },
      {
        url: 'https://www.tiktok.com/@trypinatafarms/video/7603177692879490335',
        title: '873K views',
        thumbnail: '/pinata-thumb-32.jpg',
      },
    ],
  },
  {
    id: 'eppy-vlogs',
    title: 'Eppy Vlogs',
    subtext: 'Created an extremely high-engagement viral video format.',
    account: '@eppy.vlogs',
    accountUrl: 'https://www.tiktok.com/@eppy.vlogs',
    workType: 'Experimental Brand',
    followers: 40000,
    image: '/IMG_9928 (1).PNG',
    imagePosition: 'center 45%',
    imageScale: 1.12,
    category: 'mine',
    summary: [],
    achievements: [],
  },
  {
    id: 'personal-brand',
    title: 'My Personal Brand',
    subtext: 'Created 3 viral series that consistently got 100K–5M views.',
    account: '@iansidmann',
    accountUrl: 'https://www.tiktok.com/@gymjunkie69_',
    workType: 'Personal Brand',
    followers: 56000,
    image: '/Worked With 2/iansidmannn (1).png',
    category: 'mine',
    summary: [
      'Built a 60K-follower TikTok from scratch as a health, fitness, and diabetes creator. Cracked 3 repeatable viral formats that consistently pulled 100K-5M views per video.',
    ],
    approach: 'Spent 3-4 months testing content with minimal traction (~1K followers). Identified an underserved psychographic — diabetics on TikTok who resonated with my identity as a fit, confident person living with Type 1. Doubled down on that signal.\n\nResult: +23,200 followers and 9.3M views in 7 days. Built 3 viral series (repeatable formats) that consistently generated 100K-5M views. 30M total views across the account. This is where I learned how viral content systems work.',
    videos: [
      {
        url: 'https://www.tiktok.com/@ianscontentarchive/video/6941544620442602757',
        title: '5.3M views',
        thumbnail: '/Screenshot 2025-11-22 231240.png',
      },
      {
        url: 'https://www.tiktok.com/@ianscontentarchive/video/6939996247193292038',
        title: '4.1M views',
        thumbnail: '/Screenshot 2025-11-22 231933.png',
      },
      {
        url: 'https://www.tiktok.com/@ianscontentarchive/video/6952983889757375750',
        title: '1.7M views',
        thumbnail: '/Screenshot 2025-11-22 232245.png',
      },
      {
        url: 'https://www.tiktok.com/@ianscontentarchive/video/6950801539024080133',
        title: '1.6M views',
        thumbnail: '/Screenshot 2025-11-22 232441.png',
      },
      {
        url: 'https://www.tiktok.com/@ianscontentarchive/video/6924099954436738310',
        title: '556K views',
        thumbnail: '/Screenshot 2025-11-22 233033.png',
      },
    ],
    brandDeals: [
      {
        brand: 'Brick',
        url: 'https://getbrick.app/',
        description: 'Best performing ad 1st on website',
        logo: '/brick logo.png',
        video: '/brickad.mp4',
      },
      {
        brand: 'Scener',
        url: 'https://www.tiktok.com/@gymjunkie69_/video/6960848726550121734',
        description: '16.3k organic views',
        logo: '/scener-logo-700x389.jpg',
        video: '/scenerAd.mp4',
      },
    ],
    achievements: [
      'Created 3 separate series averaging 100k-5M views',
      '35 million total views',
      'Gained 9,300,000 views & 23,200 followers in 7 days',
      '60,000 followers',
    ],
    achievementImages: ['/views2.png', '/One Viral Post Dozen Other (1).png'],
  },
  {
    id: 'clothing-brand-1',
    title: 'My First Clothing Brand',
    subtext: 'Passion project in high school. One video hit 400K.',
    account: '@garmentgarageshop',
    accountUrl: 'https://www.instagram.com/garmentgarageshop/',
    workType: 'Clothing Brand',
    followers: 5000, // Estimated based on 2-10k views
    image: '/garm new.png',
    category: 'mine',
    summary: [
      'Self-taught the entire stack — design, production, Shopify, and content — to build a custom clothing brand from scratch. Identified unmet demand, shipped product, and ran organic distribution.',
    ],
    summaryImages: [
      {
        src: '/IMG_2127.JPEG',
        label: 'Nicks Overalls',
      },
    ],
    videos: [
      {
        url: 'https://www.instagram.com/reel/ChvFWs-MfJ2/',
        title: '55K views',
        thumbnail: '/Screenshot 2025-11-23 130047.png',
      },
      {
        url: 'https://www.instagram.com/reel/Cf9zMWtllFc/',
        title: '400K views',
        thumbnail: '/Screenshot 2025-11-23 130415.png',
      },
      {
        url: 'https://www.instagram.com/reel/CdvnbbJFMsa/',
        title: '60K views',
        thumbnail: '/Screenshot 2025-11-23 130510.png',
      },
    ],
    approach: 'Self-taught Premiere Pro, Photoshop, Shopify, web dev, and graphic design. Built organic content engine that averaged 2-10K views per post. Experimented with paid acquisition and cross-platform distribution via TikTok.',
    achievements: [
      'Built entire business stack from zero',
      '2-10K avg views on organic content',
      'End-to-end: product, store, content, distribution',
    ],
    pictureMemories: [
      {
        image: '/IMG_2099.JPEG',
        caption: 'some personal favs of mine',
      },
      {
        video: '/GARMENT GARAGE garmentgarageshop Instagram photos and videos.mp4',
        caption: 'look at my supa swaggy website',
      },
      {
        image: '/IMG_1668.JPEG',
        caption: 'this one took forever, but i loved it',
      },
      {
        image: '/IMG_0255.JPEG',
        caption: 'ooooh flashy >:D',
      },
    ],
  },
  {
    id: 'clothing-brand-2',
    title: 'My Second Clothing Brand',
    subtext: '2.5M views on Instagram in 2 weeks of launch.',
    account: '@goofygarmentshop',
    accountUrl: 'https://www.instagram.com/goofygarmentshop/',
    workType: 'Clothing Brand',
    followers: 10000, // Estimated
    image: '/goofnew.png',
    category: 'mine',
    summary: [
      'Gen Z humor apparel brand I built in college. Identified a gap in the market, launched on Shopify, and scaled to $4K/mo profit in 3 months through organic Instagram distribution.',
    ],
    videos: [
      {
        url: 'https://www.instagram.com/p/CoIZkTfLkIP/',
        title: '5.8M views',
        thumbnail: '/Screenshot 2025-11-22 230955.png',
      },
      {
        url: 'https://www.instagram.com/reel/CnA1_hyvlfh/',
        title: '2.9M views',
        thumbnail: '/Screenshot 2025-11-22 232023.png',
      },
      {
        url: 'https://www.instagram.com/reel/Cl1_Axopxyd/',
        title: '1.8M views',
        thumbnail: '/Screenshot 2025-11-22 232643.png',
      },
    ],
    approach: 'Spotted unmet demand in Gen Z humor apparel. Launched on Shopify and hit 2.5M views in the first 2 weeks. Doubled down on what worked — built repeatable content formats, scaled production by outsourcing manufacturing, and drove customer retention through audience engagement.\n\nOne video: 5.8M views, 282K shares, 193 new customers, $5K in revenue. Scaled to 4M monthly views and $15K profit in 5 months. Eventually handed operations to a partner to pursue higher-leverage opportunities.',
    approachVideo: {
      video: '/GOOFY GARMENTS on Instagram Guess I wont be getting bullied anym.mp4',
      label: '5.8M views @goofygarmentshop $5,000',
    },
    achievements: [
      '5,800,000 views, 282,000 shares, 193 customers from one video',
      '11M views and $15k profit in 5 months',
      '2.5M views in first 2 weeks',
      '4 million monthly views',
    ],
    achievementImages: ['/unamed2 (1).png', '/Leads To A Dozen Others.png', '/IMG_3579.PNG'],
    pictureMemories: [
      {
        image: '/ballerflexwithaurasauce.JPG',
        caption: 'happy ian after a big weekend',
      },
      {
        image: '/Screenshot 2025-11-25 124637.png',
        caption: 'homies helping me with marketing',
      },
      {
        image: '/Screenshot 2025-11-25 124620.png',
        caption: 'Bean, a celebrity in our dorm',
      },
    ],
  },
  {
    id: 'ai-content',
    title: 'AI Generated Content',
    subtext: 'Fully automated content production in 2023, before agents existed.',
    account: '@success_archives',
    accountUrl: 'https://www.instagram.com/success_archives/',
    workType: 'AI Content',
    followers: 1000, // Estimated
    image: '/Worked With 2/IMG_3072.PNG', // spot 13: image 3
    category: 'mine',
    summary: [
      'Reverse-engineered a trending content format and built an automated pipeline to produce it at scale. Built an AI agent before they were a thing.',
    ],
    videos: [
      {
        url: 'https://www.instagram.com/success_archives/reel/CyEFrEcrsbD/',
        thumbnail: '/Screenshot 2025-11-25 185523.png',
      },
      {
        url: 'https://www.instagram.com/success_archives/reel/CxMxB-OL4D6/',
        thumbnail: '/Screenshot 2025-11-25 185538.png',
      },
    ],
    approach: 'Built an end-to-end automated content pipeline using ChatGPT, Power Automate, Kaiber AI, Excel, and ElevenLabs. System produced 10 videos in 1-2 hours with minimal manual input — automated prompt generation, video generation, quote scraping, and asset organization.',
    approachAccount: {
      handle: '@timelessmanliness',
      url: 'https://www.instagram.com/timelessmanliness/',
    },
    approachAccount2: {
      handle: '@confidentlywoman_',
      url: 'https://www.instagram.com/confidentlywoman_/',
    },
    achievements: [
      'Fully automated content creation pipeline',
      '10 videos per 1-2 hours of work',
    ],
  },
  {
    id: 'charity-karaoke',
    title: 'Charity Karaoke',
    subtext: 'Grew donations 25% through shareable social media content.',
    account: '@charitykaraoke',
    accountUrl: 'https://www.instagram.com/charitykaraoke/',
    workType: 'Charity Event',
    summary: ['Charity Karaoke is a karaoke competition where 20 local charities in my area compete to raise money for their causes. I was mutuals with the owner, our mutual suggested to get my help with marketing and the rest is history.'],
    videos: [
      {
        url: 'https://www.instagram.com/reel/DAB-MMZyMYS/',
        title: '16k views',
        thumbnail: '/Screenshot 2025-11-25 184502.png',
      },
      {
        url: 'https://www.instagram.com/charitykaraoke/reel/DAeumzNybIY/',
        title: '5k views',
        thumbnail: '/Screenshot 2025-11-25 184516.png',
      },
      {
        url: 'https://www.instagram.com/charitykaraoke/reel/DBhP4k0v5qz/',
        thumbnail: '/Screenshot 2025-11-25 184527.png',
      },
      {
        url: 'https://www.instagram.com/charitykaraoke/reel/DBjVsSxvmcu/',
        thumbnail: '/Screenshot 2025-11-25 184541.png',
      },
      {
        url: 'https://www.instagram.com/charitykaraoke/reel/DAd4Ld_v2Hz/',
        thumbnail: '/Screenshot 2025-11-25 184609.png',
      },
      {
        url: 'https://www.instagram.com/reel/DL5cSiTSE4g/',
        thumbnail: '/Screenshot 2025-11-25 185217.png',
      },
    ],
    followers: 500, // 300 new followers mentioned
    image: '/Worked With 2/IMG_3076.PNG',
    category: 'consulting',
    commitment: 'Dedicated project (cancelled $2000 Europe trip)',
    approach: 'How do you market a karaoke event you have no in person footage of that has never properly been on social media before?\n\nThis is what I was tasked with and I had to get pretty clever in order to make it work.\n\nI had a bunch of my friends helping with filming and acting and we actually got a few videos to 10-30k views on youtube and instagram.\n\nYou can find em on the charitykaroake instagram or my personal youtube.\n\nAnother way we got clever was doing collabs with local business owners, influencers, and the news to share the event to a wide local audience, that strategy paid off and got us a lot of new attention and played a role to us having our biggest year yet of $54,000 raised.\n\nDuring event day I made sure to get real footage of the event and make real content of the event that I felt did a good job capturing the essence of what it was about in an engaging way\n\nMy amazing friend laura & the event creator was nervous at an event of 100+ people and asked me to freestyle public speak HAHA, I was super nervous but I\'ll put the full video below cuz its funny\n\n\n\nYah I love working here, I\'ve been able to make some meaningful contributions in terms of ideas and donations. I hope to do so in the future.',
    approachVideo: {
      video: '/Pub speaking.mp4',
    },
    achievements: [
      'Raised $94,000 for charities',
      '100,000 views & 300 new followers in 25 days',
      'Packed the venue',
      'Created ability for anyone to donate',
      'Fixed & optimized sales funnels, created funnel to convert in person fans to social media followers',
      'Built mutually benefical relationships with business owners in the area',
      'Collaborated with local news, business owners, and influencers',
    ],
  },
  {
    id: 'sleep-heavenly-peace',
    title: 'Sleep In Heavenly Peace',
    subtext: 'Created engaging content that outlines the problem.',
    account: '@shpbeds',
    accountUrl: 'https://www.instagram.com/shpbeds/',
    summary: ['Sleep in Heavenly Peace is an organization that builds beds for kids that sleep on the floor. I met the owner of the local chapter of SHP and they brought me on the team and I ended up creating content for the whole organization'],
    workType: 'Non-Profit',
    followers: 500, // Estimated
    image: '/Worked With 2/IMG_3077.PNG',
    category: 'consulting',
    commitment: 'Volunteer content creation',
    approach: `The owner lets me know when they have build events and I just show up and try to think of viral content ideas, the main account has 12k followers, but you can see all the content I've made here (the older content)

https://www.instagram.com/shpventuracoe/reels/`,
    videos: [
      {
        url: 'https://www.instagram.com/reel/DGEUmwvz5JQ/',
        thumbnail: '/Screenshot 2025-11-26 162010.png',
      },
      {
        url: 'https://www.instagram.com/reel/DGG5akozQZN/',
        thumbnail: '/Screenshot 2025-11-26 162159.png',
      },
      {
        url: 'https://www.instagram.com/reel/DF8OjWsJlIE/',
        thumbnail: '/Screenshot 2025-11-26 161619.png',
      },
      {
        url: 'https://www.instagram.com/reel/DF_LFu_TfAZ/',
        thumbnail: '/Screenshot 2025-11-26 161739.png',
      },
      {
        url: 'https://www.instagram.com/reel/DGBv2cezFX4/',
        thumbnail: '/Screenshot 2025-11-26 161911.png',
      },
      {
        url: 'https://www.instagram.com/reel/DGJeSdeTOMW/',
        thumbnail: '/Screenshot 2025-11-26 162240.png',
      },
      {
        url: 'https://www.instagram.com/reel/DHjfNOkywGt/',
        thumbnail: '/Screenshot 2025-11-26 162322.png',
      },
    ],
    achievements: [
      'Ongoing support for meaningful cause',
      'Content creation for awareness',
    ],
  },
  {
    id: 'sarah',
    title: 'Sarah (Personal Brand)',
    subtext: "Worked together to uncover a format that's gotten her 50M views.",
    account: '@sarahfishersousa',
    accountUrl: 'https://www.instagram.com/sarahfishersousa/',
    workType: 'Personal Brand',
    followers: 10000, // Estimated
    image: '/IMG_3082.PNG', // spot 9: new file
    category: 'consulting',
    commitment: 'Strategy and framework',
    summary: ['Sarah is a great friend of mine, we met at WealthCon and she\'s just one of those people you gravitate towards. I saw some of her mediocre content was pulling views, and she ended up hiring me to help take her to the next level.'],
    approach: `Optimized page to drive traffic to women in business event. Provided viral video framework that resulted in 10M and 13.4M view videos.

Among weekly calls & sharing my viral strategies with her, I created semi frequently gave advice in the form of power points`,
    approachPdf: {
      url: '/SarahMarch2024.pdf',
      label: 'View Power Point',
    },
    videos: [
      {
        url: 'https://www.instagram.com/reel/C-kptyVRdZp/',
        title: '10M views',
        thumbnail: '/Screenshot 2025-11-23 132811.png',
      },
      {
        url: 'https://www.instagram.com/reel/DKPUylRRl-J/',
        title: '13.4M views',
        thumbnail: '/Screenshot 2025-11-23 132933.png',
      },
    ],
    achievements: [
      'Page optimization',
      'Viral video framework',
      '10M and 13.4M view videos',
    ],
  },
  {
    id: 'snappy-feet',
    title: 'Snappy Feet',
    subtext: 'Next video hit 100K views after a strategy call, went from ~1K views a video → ~15K.',
    account: '@shopsnappyfeet',
    accountUrl: '#',
    workType: 'Ecommerce',
    followers: 1000, // Estimated
    image: '/Screenshot 2025-11-23 230855.png',
    category: 'consulting',
    commitment: 'Strategy consultation',
    summary: ['The owner called me and asked for my advice on their store because they were stuck at ~1-5k views. After our call, the next video posted got 103k views and they consistently got ~10k+ views.'],
    approach: 'Ecommerce brand. Optimized online store and corrected social media strategy. Next video hit 100K views after a strategy call, went from ~1K views a video → ~15K.',
    pictureMemories: [
      {
        image: '/Screenshot 2025-11-23 230855.png',
        caption: 'Account is now deleted',
      },
      {
        image: '/testimonial.png',
      },
    ],
    achievements: [
      'Store optimization',
      'Social media strategy correction',
      '100K+ view video (from 1k average)',
      '15 organic sales from one video',
    ],
  },
  {
    id: 'open-park',
    title: 'Open Park',
    subtext: '100xed views on their account after one strategy call.',
    account: '@openparkus',
    accountUrl: 'https://www.instagram.com/openparkus/',
    workType: 'Local Business',
    followers: 2000, // Growing
    image: '/Worked With 2/IMG_3071.PNG', // spot 12: image 6
    category: 'consulting',
    commitment: 'Strategy consultation',
    approach: 'In-person dog park experience. Met with owners to correct social media strategy. Led from 200 views to several 100K+ view videos.',
    videos: [
      {
        url: 'https://www.tiktok.com/t/ZP8Uj3sPM/',
        title: '640K views',
        thumbnail: '/Screenshot 2025-11-23 133348.png',
      },
    ],
    achievements: [
      'Social media strategy',
      '200 views to 100K+ views',
      'Multiple viral videos',
    ],
  },
  {
    id: 'tostreetfair',
    title: 'To Street Fair',
    subtext: 'Made content for the event day-of.',
    account: '@thousandoaksrotarystreetfair',
    accountUrl: 'https://www.instagram.com/thousandoaksrotarystreetfair/',
    workType: 'Non-Profit',
    followers: 0, // To be determined
    image: '/Worked With 2/IMG_3078.PNG',
    category: 'consulting',
    commitment: 'Non-profit organization',
    approach: 'Content creation and social media strategy for nonprofit organization.',
    videos: [
      {
        url: '#',
        video: '/Better Edit.mp4',
      },
    ],
    achievements: [
      'Social media presence development',
    ],
  },
  {
    id: 'red-as-color',
    title: 'RedAsTheColor',
    subtext: 'Helped film many videos.',
    account: '@redasthecolor',
    accountUrl: 'https://www.youtube.com/@redasthecolor',
    workType: 'Car Creator',
    followers: 5000, // Growing
    image: '/Worked With 2/IMG_3080.PNG', // spot 11: image 15
    category: 'consulting',
    commitment: 'Content and editing support',
    approach: 'Car social media content. Helped with video editing and content creation. Attended WealthCon in Vegas with media passes to film.',
    achievements: [
      'Video editing',
      'Content creation',
      'Event filming at WealthCon',
    ],
  },
  {
    id: 'tandem-diabetes',
    title: 'Tandem Diabetes Care',
    subtext: 'Created multiple videos with millions of views with their products.',
    account: '@tandemdiabetes',
    accountUrl: 'https://www.tandemdiabetes.com/',
    workType: 'Medical Devices',
    followers: 0,
    image: '/IMG_9930.PNG',
    imagePosition: 'center 42%',
    imageScale: 1.17,
    category: 'consulting',
    commitment: 'Organic & creator consulting',
    summary: [
      'Tandem makes insulin pumps and connected software for people living with diabetes. Consulted their team on organic social and narratives that reflect real life with T1D.',
    ],
    achievements: [
      'Organic social direction',
      'Creator-aligned messaging',
    ],
  },
  {
    id: 'dexcom-consult',
    title: 'Dexcom',
    subtext: 'Created multiple videos with millions of views — got sponsored.',
    account: '@dexcom',
    accountUrl: 'https://www.dexcom.com/',
    workType: 'Medical Devices',
    followers: 0,
    image: '/IMG_9929.PNG',
    imagePosition: 'center 42%',
    imageScale: 1.17,
    category: 'consulting',
    commitment: 'Organic & creator consulting',
    summary: [
      'Dexcom leads in continuous glucose monitoring. Consulted on short-form storytelling that lands with people who live with diabetes every day.',
    ],
    achievements: [
      'Short-form framing & angles',
      'Community-grounded narratives',
    ],
  },
  // Big Creator Consulting
  {
    id: 'atom-williamson',
    title: 'Atom Williamson',
    subtext: 'Run the business side + videos. 9% conversion rate on store launch day.',
    account: '@atomwilliamsonn',
    workType: 'Fitness Creator',
    followers: 600000,
    image: '/Worked With 2/IMG_3066.PNG', // spot 4: image 13
    category: 'consulting',
    commitment: 'Ongoing consulting',
    summary: ['Atom is a friend of long time friend of mine, I work together with him to run the business side of his account and a little bit of content here and there.'],
    approach: `The only unique thing I have got to do for atom was optimizing his store, cleaning up the checkout ui, replacing "Pay now" with "Place Order", adding made in usa and free shipping, just optimized the heck out of atomwilliamson.com`,
    videos: [
      {
        url: 'https://www.instagram.com/reel/C8H381lv3Mw/',
        title: '350K views',
        thumbnail: '/Screenshot 2025-11-23 132057.png',
      },
      {
        url: 'https://www.instagram.com/reels/DGi_cBGyFwI/',
        title: '145K views',
        thumbnail: '/Screenshot 2025-11-26 154144.png',
      },
    ],
    pictureMemories: [
      {
        video: '/IMG_3001_compressed.mp4',
        caption: 'Launch day went crazy.',
      },
      {
        image: '/Screenshot 2025-11-26 152947.png',
        caption: 'Simple clean store, optimized for 9% conversions on launch day',
      },
      {
        image: '/Atom Clothes.png',
        caption: 'Designed & made modeling clothes/mockups',
      },
    ],
    achievements: [
      'Built store with 9% conversion rate',
      'Setup infrastructure for merch fufillment',
      'Atom is a visionary, made what he had come to life',
      'Helped with launch strategy',
      'Content ideas, coordination, and acting',
    ],
  },
  {
    id: 'ryan-blourchi',
    title: 'Ryan Blourchi',
    subtext: 'Helped film and acted in many viral videos.',
    account: '@ryanblourchi',
    accountUrl: 'https://www.tiktok.com/@ryanblourchi',
    workType: 'Anime Creator',
    followers: 1200000,
    image: '/IMG_3081.PNG', // spot 2: new file
    imagePosition: 'center 1%', // Adjust to show followers text
    category: 'consulting',
    commitment: 'Content collaboration',
    approach: 'Acted for, filmed for, and helped coordinate some of his most viral videos.',
    videos: [
      {
        url: 'https://www.tiktok.com/@ryanblourchi/video/7258741182447078698',
        title: '3.2M views',
        thumbnail: '/Screenshot 2025-11-23 125052.png',
      },
    ],
    achievements: [
      'Acting in viral content',
      'Video filming and production',
      'Content coordination',
    ],
  },
  {
    id: 'dr-spice',
    title: 'Dr. Spice',
    subtext: 'Helped film and refine the strategy that took him past 100K.',
    account: '@drspice24',
    accountUrl: 'https://www.tiktok.com/@drspice24',
    workType: 'Self-Improvement Creator',
    followers: 105000,
    image: '/Worked With 2/IMG_3051.PNG', // spot 6: image 4
    imagePosition: 'center 1%',
    category: 'consulting',
    commitment: 'Strategy and filming support',
    approach: 'Provided content strategy feedback that helped grow from 80K to 100K followers, also assisted with filming.',
    achievements: [
      'Content strategy development',
      'Growth from 80K to 100K followers',
      'Video filming assistance',
    ],
  },
  {
    id: 'tommy-brown',
    title: 'Tommy Brown',
    subtext: 'Helped film many videos.',
    account: '@tommyybrown_',
    accountUrl: 'https://www.instagram.com/tommyybrown_/',
    workType: 'Fitness Creator',
    followers: 900000,
    image: '/Worked With 2/IMG_3064.PNG', // spot 3: image 10
    category: 'consulting',
    commitment: 'Filming support',
    approach: 'Helped film several pieces of shortform content.',
    achievements: [
      'Shortform content filming',
      'Production support',
    ],
  },
  // Other Consulting Work
  {
    id: 'get-brick',
    title: 'Get Brick',
    subtext: "Created a paid ad that's still #1 on their website after a year.",
    account: '@getbrick',
    accountUrl: 'https://getbrick.app/',
    summary: ['Brick is an industry leading productivty device that I use all the time. They liked my energy/content & contracted me for an ad'],
    workType: 'Productivity Device',
    followers: 120000,
    image: '/Worked With 2/IMG_3067.PNG', // spot 5: image 17
    category: 'consulting',
    videos: [
      {
        url: 'https://getbrick.app/',
        video: '/brickad.mp4',
      },
    ],
    approach: 'Nothing special, just my full energy authentic self talking about a product I really like while dabbling in little marketing bits.',
    achievements: [
      'If you goto brick my ad is the first one you see. My friends get it all the time, seems like a winner.',
    ],
  },
  {
    id: 'smyle',
    title: 'Smyle',
    subtext: 'Lead shortform content strategy for a new product (later killed).',
    account: '@smylelabs',
    accountUrl: 'https://www.instagram.com/smylelabs/',
    workType: 'Smoking Brand',
    followers: 10000000, // Millions
    image: '/Worked With 2/IMG_3065.PNG', // spot 1: image 8
    category: 'consulting',
    summary: [
      'Smyle is the industry leader for smoking accessories, I\'ve been working here in person for two years, and every now and then the owner contracts me to help market new products.',
    ],
    videos: [
      {
        url: 'https://www.instagram.com/reel/C1n_YgXupHg/',
        title: '40K views',
        video: '/smly.mp4',
      },
      {
        url: 'https://www.instagram.com/thesmylelabs_torch/reel/C1qt3wAuksf/',
        title: '5K views',
        video: '/SmyleLabs on Instagram NOOOOOO rip the wood (1).mp4',
      },
      {
        url: 'https://www.instagram.com/thesmylelabs_torch/reel/C2dX6_lSw_t/',
        video: '/SmyleLabs on Instagram NOOOOOO rip the wood.mp4',
      },
    ],
    approach: 'Since this product was on tiktok shop audios were limited which limited content, but I got creative. My job was just to find unique viral "angles" to make the product more interesting/viral. Came up with a few that got bites but nothing that went crazy.',
    achievements: [
      'This product struggled overall, but initially my account was doing the best & was studied by everyone else involved (50+ independent creators)',
    ],
  },
  {
    id: 'conejo-awards',
    title: 'Conejo Awards',
    subtext: 'Came up with a series that got them 150K views/month.',
    account: '@conejoawards',
    accountUrl: 'https://www.youtube.com/@ConejoAward',
    workType: 'Local Business',
    followers: 1000, // Growing
    image: '/Worked With 2/IMG_3073.PNG', // spot 15: image 5
    category: 'consulting',
    commitment: 'Complete social media setup',
    summary: ['Conejo Awards is a one stop shop for businesses to print custom products, awards, or anything they need. The owner of this local print shop contracted me to make engaging content for the business'],
    videos: [
      {
        url: 'https://www.youtube.com/shorts/QZTjkBif5zM',
        title: '42K views',
        thumbnail: '/Screenshot 2025-11-26 155459.png',
      },
      {
        url: 'https://www.youtube.com/shorts/tD9kQzDbGeg',
        title: '21K views',
        thumbnail: '/Screenshot 2025-11-26 154857.png',
      },
      {
        url: 'https://www.youtube.com/shorts/IWpCvmE0PWs',
        title: '20K views',
        thumbnail: '/Screenshot 2025-11-26 154904.png',
      },
      {
        url: 'https://www.youtube.com/shorts/byMrakXPogQ',
        title: '15K views',
        thumbnail: '/Screenshot 2025-11-26 154914.png',
      },
      {
        url: 'https://www.youtube.com/shorts/fu_QWl--MT4',
        title: '12K views',
        thumbnail: '/Screenshot 2025-11-26 154954.png',
      },
      {
        url: 'https://www.youtube.com/shorts/4l0iYgljfiY',
        title: '10K views',
        thumbnail: '/Screenshot 2025-11-26 154932.png',
      },
      {
        url: 'https://www.youtube.com/shorts/9nvU71NVa-c',
        title: '10K views',
        thumbnail: '/Screenshot 2025-11-26 154945.png',
      },
      {
        url: 'https://www.youtube.com/shorts/4TWFdmuzx-c',
        title: '8K views',
        thumbnail: '/Screenshot 2025-11-26 155001.png',
      },
    ],
    approach: `I took a print shop with 0 online presence to 150,000 views in 1 month.

With a strategy so simple, yo mama could use it

the problem is most people think virality for a business is:

How do I make it funny? 🚫
What's already working? 🚫
What's trending? 🚫 

HECCCCKKKK NAH, these questions almost always lead to empty views that don't actually mean anything for a business.

Here's what you NEED to do instead:

Start with the service delivery itself and then ask yourself how can I make this interesting to people on social media?

For the print shop to capture a lot of attention & curiosity I came up with the hook "Hey you guys can customize any product right?"

While this statement does communicate what the business does in a very engaging way, it's not fully true. They customize a lot of stuff sure, but not everything. Welcome to the game.

Then all you need to do is just find enjoyable ways to finish those videos after the hook & boom you'll print views.

This is what made two of our best performing videos this month, both following this exact format. (Each with around 30k views total)

And all 60k of those viewers are now:

Aware of our brand ✅
What our business does ✅
And have had an enjoyable experience with it ✅

So if you want to go viral on social media, I almost ALWAYS recommend centering it around brand, not the other way around.

Peace✌️`,
    achievements: [
      'Complete social media setup',
      '0 to 150K views in first month',
    ],
  },
  {
    id: 'ivan-casiano',
    title: 'Ivan Casiano',
    subtext: 'Cool client from my old editing agency.',
    account: '@mr.ivancasiano',
    accountUrl: 'https://www.instagram.com/mr.ivancasiano/',
    workType: 'Real Estate Creator',
    followers: 1000, // Personal
    image: '/Worked With 2/IMG_3075.PNG',
    category: 'consulting',
    commitment: 'Editing support',
    approach: 'Friend who needed editing assistance.',
    achievements: [
      'Video editing support',
    ],
  },
  {
    id: 'fitness19gyms',
    title: 'Fitness 19 Gyms',
    subtext: '30+ daily Google reviews through a clever strategy.',
    account: '@fitness19gyms',
    accountUrl: 'https://www.instagram.com/fitness19gyms/',
    workType: 'Gym/Fitness Brand',
    followers: 10000000, // High priority to show in first row
    image: '/Worked With 2/IMG_3083.PNG',
    category: 'consulting',
    summary: [
      'The owner approached me and asked me to leave a review & being friends with her I asked If I could help.',
    ],
    approach: 'I created a tappable NFC card that automatically brought people to the google review page (reducing friction), and then told her to tell everyone they get a free snack if they do it. (reducing friction even more and adding incentive, she\'s also attractive)\n\nThis led to her getting 30+ google reviews in one day, now being 254 total reviews, and recieving recgonition from the executive team.',
    achievements: [
      'Generated 30+ daily reviews with a clever strategy',
      '254 total reviews',
      'Received recognition from the executive team',
    ],
    achievementImages: ['/f19 logo.png', '/Screenshot 2025-11-24 133137.png'],
  },
];

// Sort experiences by follower count (descending), with undefined/null followers at the end
export const sortedExperiences = [...experiences].sort((a, b) => {
  const aFollowers = a.followers ?? 0;
  const bFollowers = b.followers ?? 0;
  return bFollowers - aFollowers;
});

// Separate experiences by category
export const myExperiences = (() => {
  const all = experiences
    .filter(exp => exp.category === 'mine')
    .sort((a, b) => {
      const aFollowers = a.followers ?? 0;
      const bFollowers = b.followers ?? 0;
      return bFollowers - aFollowers;
    });
  
  // Find specific experiences for custom positioning
  const garmentGarage = all.find(exp => exp.id === 'clothing-brand-1');
  const goofyGarments = all.find(exp => exp.id === 'clothing-brand-2');
  
  // Remove them from the sorted list
  const withoutPriority = all.filter(exp => 
    exp.id !== 'clothing-brand-1' &&
    exp.id !== 'clothing-brand-2'
  );
  
  // Build result with custom positions:
  // garmentgarageshop comes before goofygarmentshop
  const result = [...withoutPriority];
  
  // Find insertion point: after experiences with more followers than garmentGarage
  // but before experiences with fewer followers than goofyGarments
  const garmentFollowers = garmentGarage?.followers ?? 0;
  const goofyFollowers = goofyGarments?.followers ?? 0;
  
  // Insert both together: garmentGarage first, then goofyGarments
  // Find where to insert (after items with more followers than goofyGarments)
  const insertIndex = result.findIndex(exp => (exp.followers ?? 0) < goofyFollowers);
  const finalInsertIndex = insertIndex >= 0 ? insertIndex : result.length;
  
  if (goofyGarments && garmentGarage) {
    result.splice(finalInsertIndex, 0, goofyGarments, garmentGarage);
  } else if (goofyGarments) {
    result.splice(finalInsertIndex, 0, goofyGarments);
  } else if (garmentGarage) {
    result.splice(finalInsertIndex, 0, garmentGarage);
  }
  
  return result;
})();

export const consultingExperiences = (() => {
  const all = experiences
    .filter(exp => exp.category === 'consulting')
    .sort((a, b) => {
      const aFollowers = a.followers ?? 0;
      const bFollowers = b.followers ?? 0;
      return bFollowers - aFollowers;
    });
  
  // Find specific experiences for custom positioning
  const getBrick = all.find(exp => exp.id === 'get-brick');
  const charityKaraoke = all.find(exp => exp.id === 'charity-karaoke');
  const atomWilliamson = all.find(exp => exp.id === 'atom-williamson');
  const conejoAwards = all.find(exp => exp.id === 'conejo-awards');
  const sleepHeavenlyPeace = all.find(exp => exp.id === 'sleep-heavenly-peace');
  const sarah = all.find(exp => exp.id === 'sarah');
  const snappyFeet = all.find(exp => exp.id === 'snappy-feet');
  const openPark = all.find(exp => exp.id === 'open-park');
  const toStreetFair = all.find(exp => exp.id === 'tostreetfair');
  const redAsColor = all.find(exp => exp.id === 'red-as-color');
  const tandemDiabetes = all.find(exp => exp.id === 'tandem-diabetes');
  const dexcomConsult = all.find(exp => exp.id === 'dexcom-consult');
  
  // Remove them from the sorted list
  const withoutPriority = all.filter(exp => 
    exp.id !== 'get-brick' &&
    exp.id !== 'tandem-diabetes' &&
    exp.id !== 'dexcom-consult' &&
    exp.id !== 'charity-karaoke' &&
    exp.id !== 'atom-williamson' &&
    exp.id !== 'conejo-awards' &&
    exp.id !== 'sleep-heavenly-peace' &&
    exp.id !== 'sarah' &&
    exp.id !== 'snappy-feet' &&
    exp.id !== 'open-park' &&
    exp.id !== 'tostreetfair' &&
    exp.id !== 'red-as-color'
  );
  
  // Build result with custom positions:
  // Position 0-1: Top followers (Smyle, Ryan Blourchi, etc.)
  // Position 2: Get Brick
  // Position 3-4: Tandem, Dexcom
  // Position 5: Charity Karaoke
  // Position 6: Atom Williamson
  // Position 7: Conejo Awards
  // Position 8: Sleep In Heavenly Peace
  // Position 9: Sarah
  // Position 10: Snappy Feet
  // Position 11: Open Park
  // Position 12: To Street Fair
  // Position 13: RedAsTheColor
  // Rest: Other experiences sorted by followers
  const result = [...withoutPriority];
  
  if (getBrick) {
    result.splice(2, 0, getBrick);
  }
  if (tandemDiabetes && dexcomConsult) {
    result.splice(3, 0, tandemDiabetes, dexcomConsult);
  } else if (tandemDiabetes) {
    result.splice(3, 0, tandemDiabetes);
  } else if (dexcomConsult) {
    result.splice(3, 0, dexcomConsult);
  }
  if (charityKaraoke) {
    result.splice(5, 0, charityKaraoke);
  }
  if (atomWilliamson) {
    result.splice(6, 0, atomWilliamson);
  }
  if (conejoAwards) {
    result.splice(7, 0, conejoAwards);
  }
  if (sleepHeavenlyPeace) {
    result.splice(8, 0, sleepHeavenlyPeace);
  }
  if (sarah) {
    result.splice(9, 0, sarah);
  }
  if (snappyFeet) {
    result.splice(10, 0, snappyFeet);
  }
  if (openPark) {
    result.splice(11, 0, openPark);
  }
  if (toStreetFair) {
    result.splice(12, 0, toStreetFair);
  }
  if (redAsColor) {
    result.splice(13, 0, redAsColor);
  }
  
  return result;
})();

