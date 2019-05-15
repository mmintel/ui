import { storiesOf } from '@storybook/vue';
import Theme from '@/components/theme';
import Center from '.';

storiesOf('Components', module)
    .add('Center', () => ({
      components: { Center, Theme },
      template: `
      <Center>
        Default slot
      </Center>
      `,
    }));
