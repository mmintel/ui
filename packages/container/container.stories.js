import { storiesOf } from '@storybook/vue';
import Theme from '@/components/theme';
import Container from '.';

storiesOf('Components', module)
    .add('Container', () => ({
      components: { Container, Theme },
      template: `
      <Container>
        Default slot
      </Container>
      `,
    }));
