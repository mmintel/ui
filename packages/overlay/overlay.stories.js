import { storiesOf } from '@storybook/vue';
import Theme from '@/components/theme';
import Overlay from '.';
import { boolean } from '@storybook/addon-knobs';

storiesOf('Components', module)
    .add('Overlay', () => ({
      components: { Overlay, Theme },
      props: {
        value: {
          default: boolean('Value', true),
        },
      },
      template: `
        <Overlay :value="value" />
      `,
    }));
