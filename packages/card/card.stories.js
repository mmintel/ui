import { storiesOf } from '@storybook/vue';
import Theme from '@/components/theme';
import Card from '.';

storiesOf('Components', module)
    .add('Card', () => ({
      components: { Card, Theme },
      template: `
      <Theme>
        <Card>
          Default slot
        </Card>
      </Theme>
      `,
    }));
