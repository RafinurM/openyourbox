import type { Preview } from '@storybook/react-vite'
import '../src/shared/ui/button-ui/ButtonUI'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
};

export default preview;