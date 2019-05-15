import { storiesOf } from '@storybook/vue';
import { text, boolean, select } from '@storybook/addon-knobs';
import Theme from '@/components/theme';
import Field from '.';

storiesOf('Components', module)
    .add('Field', () => ({
      components: { Field, Theme },
      props: {
        type: {
          default: select('Type', [
            'text',
            'password',
          ]),
        },
        label: {
          default: text('Label', 'First Name'),
        },
        name: {
          default: text('Name', 'firstName'),
        },
        value: {
          default: text('Value', 'John'),
        },
        placeholder: {
          default: text('Value', 'First Name'),
        },
        invalid: {
          default: boolean('Invalid', false),
        },
        autofocus: {
          default: boolean('Autofocus', false),
        },
      },
      template: `
      <Theme>
        <Field
          :type="type"
          :label="label"
          :name="name"
          :value="value"
          :placeholder="placeholder"
          :invalid="invalid"
          :autofocus="autofocus"
        />
      </Theme>
      `,
    }));
