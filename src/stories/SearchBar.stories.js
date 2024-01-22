import SearchBar from '../components/common/SearchBar';

const story = {
  title: 'SearchBar',
  component: SearchBar,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default story;

export const Primary = {
  args: {
    keyword: '',
    placeholder: 'Search',
    keywordChange: () => {},
  },
};
