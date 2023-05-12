module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions', '@storybook/preset-create-react-app', '@chakra-ui/storybook-addon'],
  framework: {
    name: '@storybook/react-webpack5',
    options: {}
  },
  features: {
    emotionAlias: false
  },
  refs: {
    '@chakra-ui/react': {
      disable: true
    }
  }
};