import { storiesOf } from '@storybook/vue';
import { text, boolean, select } from '@storybook/addon-knobs';
import Theme from '@/components/theme';
import Button from '../button';

storiesOf('Components', module)
    .add('Button', () => ({
      components: { Button, Theme },
      props: {
        type: {
          default: select('Type', {
            Default: 'default',
            Primary: 'primary',
            Error: 'error',
            Success: 'success',
            Text: 'text',
            Link: 'link',
            Fake: 'fake',
          }),
        },
        text: {
          default: text('Text', 'Submit'),
        },
        disabled: {
          default: boolean('Disabled', false),
        },
        dense: {
          default: boolean('Dense', false),
        },
      },
      template: `
      <Theme>
        <Button
          :type="type"
          :disabled="disabled"
          :dense="dense"
        >
          {{ text }}
        </Button>
      </Theme>
      `,
    }));
