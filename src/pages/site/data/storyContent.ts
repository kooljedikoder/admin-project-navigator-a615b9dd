
interface StoryContentItem {
  title: string;
  content: string;
}

interface StoryContent {
  foundingStory: StoryContentItem[];
  heritage: StoryContentItem[];
  evolution: StoryContentItem[];
  milestones: StoryContentItem[];
  principles: StoryContentItem[];
}

export const storyContent: StoryContent = {
  foundingStory: [
    { title: 'Vision and Mission', content: 'Our journey began with a clear vision to revolutionize digital solutions for businesses.' },
    { title: 'Initial Team', content: 'Three passionate innovators came together with complementary skills and shared values.' },
    { title: 'Early Challenges', content: 'Navigating market uncertainties and building trust with our first clients.' },
    { title: 'First Success', content: 'Landing our first major client and delivering transformative results.' }
  ],
  heritage: [
    { title: 'Professional Background', content: 'Bringing together expertise from various industries and disciplines.' },
    { title: 'Industry Knowledge', content: 'Deep understanding of multiple sectors and their unique challenges.' },
    { title: 'Learning Culture', content: 'Fostering an environment of continuous growth and development.' },
    { title: 'Core Values', content: 'Maintaining our foundational principles while embracing innovation.' }
  ],
  evolution: [
    { title: 'Service Growth', content: 'Expanding our offerings to meet emerging market needs.' },
    { title: 'Technology Adoption', content: 'Staying ahead with cutting-edge technological solutions.' },
    { title: 'Global Reach', content: 'Extending our impact across international markets.' },
    { title: 'Team Development', content: 'Building diverse, skilled teams across specializations.' }
  ],
  milestones: [
    { title: '2010 Foundation', content: 'Establishment of the company and first client engagement.' },
    { title: '2015 Expansion', content: 'Opening of international offices and market presence.' },
    { title: '2018 Innovation', content: 'Launch of AI and digital transformation solutions.' },
    { title: '2022 Recognition', content: 'Receiving global innovation awards and industry recognition.' }
  ],
  principles: [
    { title: 'Customer Focus', content: 'Putting client success at the heart of everything we do.' },
    { title: 'Innovation Drive', content: 'Constantly pushing boundaries with new solutions.' },
    { title: 'Ethical Practice', content: 'Maintaining highest standards of business ethics.' },
    { title: 'Continuous Growth', content: 'Always learning and evolving with the market.' }
  ]
};

