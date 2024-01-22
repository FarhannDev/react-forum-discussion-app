import ContentHeading from '../components/common/ContentHeading';

export default {
  title: 'ContentHeading',
  component: ContentHeading,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const TopHeading = {
  arg: { title: 'Heading' },
};
