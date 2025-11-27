export interface Result {
  id: string;
  title: string;
  metric: string;
  description: string;
  account?: string;
  accountUrl?: string;
  learnMore?: string; // Custom content for the learn more popup
  showAccountLink?: boolean; // If false, account link will be inline in description
  images?: string[]; // Array of image paths for the popup
  video?: string; // Single video path for the popup (deprecated, use videos array)
  videos?: string[]; // Array of video paths for the popup
  videoUrl?: string; // External video URL (e.g., Instagram post)
  videoUrls?: string[]; // Array of external video URLs (e.g., Instagram posts)
  videoThumbnails?: string[]; // Array of thumbnail paths for external videos
}

export const results: Result[] = [
  {
    id: '2',
    title: '7 Day Viral Growth',
    metric: '+23,200 Followers',
    description: 'Gained 9.3 million views & 23,200 followers in just 7 days',
    account: '@iansidmann',
    accountUrl: 'https://www.tiktok.com/@gymjunkie69_',
    showAccountLink: false, // Don't show separate link, include in description
    learnMore: 'Honestly this experience taught me so much of what I know about virality.\n\nI saw other videos like this going viral and I was like hmmm, I guess I\'ll give it a go. Funny story, I had to use my dads phone to film the intro and after 2 takes he got pissed, and said you only have one more. This video almost didn\'t happen haha. Anyways.\n\nAfter it blew up a lot of what was grey become clear to me. I learned that theres different demographics and psychographics on Tiktok that have unique appetites. Through observing what\'s working, you can find these different groups and tap into their psyche, what energy is being looked for. You can game the market. \n\nDoing this allowed me to create 2 seperate series ideas in the span of one week that pulled consitently 100k-5m views on average. One viral post leads to a dozen others.\n\nKeep in mind this is only helpful for coming up with viral engines, but as an account wide strategy it would destroy a brand.',
    videos: ['/gymjunkie69_ on TikTok.mp4'],
    videoUrl: 'https://www.tiktok.com/@gymjunkie69_/video/6941544620442602757?_r=1&_t=ZP-91g71kbm698',
    images: ['/views2.png', '/One Viral Post Dozen Other (1).png'],
  },
  {
    id: '7',
    title: 'Charity Impact',
    metric: '$94K Raised',
    description: 'Raised $94,000 for charities through content creation',
    learnMore: `Giving back to the community that's given me so much as I've grown up is very important to me. I've been very blessed to get to be a "face" for multiple local charities and to be able to contribute to my community! I love everyone I work with, and I enjoy playing a role in helping people.

And when I've been given the chance, my suggested strategies have led to higher contributions everywhere I've been!

For example, with charity karoake I suggested doing giveaways with local businesses & building mutually beneficial relationships with them, this got us more sponsors & 100 extra local followers with minimal effort. I also suggested that instead of only allowing "sponsors" we also let everyday people contribute to the event which raised an additional $5,000. That on top of my basic content strategy helped pushed them to a record high of 54,000 dollars raised, and 200 followers gained from simple giveaway collabs.`,
    videos: [
      '/Better Edit.mp4',
      '/Charity Karaoke Sing For A Cause on Instagram 40000 Raised.mp4',
      '/NO KID SLEEPS ON THE FLOOR IN OUR TOWN on Instagram With our bed.mp4',
    ],
    videoUrl: 'https://www.instagram.com/reel/DF8OjWsJlIE/',
  },
  {
    id: '8',
    title: 'Business Impact',
    metric: '30+ Daily Reviews',
    description: 'Generated 30+ daily reviews with a clever strategy',
    account: '@fitness19gyms',
    accountUrl: 'https://www.instagram.com/fitness19gyms/',
    showAccountLink: false,
    learnMore: 'The owner approached me and asked me to leave a review & being friends with her I asked If I could help. I created a tappable NFC card that automatically brought people to the review page (reducing friction), and then told her to tell everyone they get a free snack if they do it. (reducing friction even more and adding incentive)\n\nThis led to her getting 30+ reviews in one day, now being 254 total reviews, and recieving recgonition from the executive team.',
    images: ['/f19 logo.png', '/Screenshot 2025-11-24 133137.png'],
  },
  {
    id: '3',
    title: 'Single Video Revenue',
    metric: '$5,000',
    description: 'One video generated 5.8M views, 282K shares, and 193 new customers',
    account: '@goofygarmentshop',
    accountUrl: 'https://www.instagram.com/goofygarmentshop/',
    showAccountLink: false, // Don't show separate link, include in description
    learnMore: 'This is what most people don\'t understand about content creation. I refilmed this video 8 different times to get this take, subtly improving my own and my camera movements each time. Energy is super important when going for a viral video. If your video doesn\'t embody the audio, and the things in the video don\'t keep your target audiences attention by being relevant and presented in the right way, the odds people swipe is a lot higher.\n\nThere is so much depth to virality the trained eye doesn\'t see, it\'s not needed to go viral, but understanding it & wielding that knowledge is extremely powerful.\n\nThat\'s part of why when I find a working format, I can rip it so consitently and continue to get views.',
    videos: ['/GOOFY GARMENTS on Instagram Guess I wont be getting bullied anym.mp4'],
    videoUrl: 'https://www.instagram.com/reel/CoIZkTfLkIP/',
  },
  {
    id: '9',
    title: 'Launch Day Conversions',
    metric: '9% Conversion Rate',
    description: 'Used psychology & marketing to optimize launch on atomwilliamson.com',
    account: '@atomwilliamson',
    accountUrl: 'https://www.instagram.com/atomwilliamson/',
    showAccountLink: false,
    learnMore: 'Human psychology is second nature to me, in the enviornment I grew up in I\'ve lived in depravitiy for a long time. And in that state of mind I learned what adds friction or reduces friction. Wielding this knowledge like a sword, and being the most creative beasts that I am, I can easily find little details that most people miss on reducing friction for purchasing decisions, whether it be psycholgoy in the content itself or the wording, design, and layout of the actual storefront.',
    images: ['/Screenshot 2025-11-26 152947.png', '/Atom Clothes.png'],
    videos: ['/IMG_3001.mp4'],
  },
  {
    id: '10',
    title: 'Cool Results I\'ve Gotten',
    metric: 'Graphs, Results, & Data',
    description: 'Some of my favorite months to date!',
    learnMore: 'Here are some of the results I\'ve achieved over the years:',
    images: [
      '/unamed2 (1).png',
      '/VIEWS.png',
      '/views2.png',
      '/Atom Results.png',
      '/IMG_3579.PNG',
      '/Screenshot 2025-11-24 133137.png',
      '/Leads To A Dozen Others.png',
      '/One Viral Post Dozen Other (1).png',
      '/Worked With/iansidmannn.png',
      '/goofygarms.png',
    ],
  },
];

