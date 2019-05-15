import { storiesOf } from '@storybook/vue';
import Dropdown from '.';
import { select } from '@storybook/addon-knobs';

storiesOf('Components', module)
    .add('Dropdown', () => ({
      components: { Dropdown },
      props: {
        direction: select('Direction', [
          'left',
          'right',
        ]),
      },
      template: `
        <Dropdown :direction="direction">
          <template slot="activator">Activator Slot</template>
          <template>
            Default slot
          </template>
        </Dropdown>
      `,
    }));
