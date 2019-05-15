import { storiesOf } from '@storybook/vue';
import { text, boolean, select, object } from '@storybook/addon-knobs';
import Theme from '@/components/theme';
import Select from '.';

storiesOf('Components', module)
    .add('Select', () => ({
      components: { Select, Theme },
      props: {
        type: {
          default: select('Type', [
            'text',
            'password',
          ]),
        },
        label: {
          default: text('Label', 'Country'),
        },
        name: {
          default: text('Name', 'country'),
        },
        value: {
          default: text('Value', 'germany'),
        },
        placeholder: {
          default: text('Value', 'Country'),
        },
        invalid: {
          default: boolean('Invalid', false),
        },
        autofocus: {
          default: boolean('Autofocus', false),
        },
        options: {
          default: object('Options', [
            {
              value: 'germany',
              label: 'Germany',
            },
            {
              value: 'spain',
              label: 'Spain',
            },
          ]),
        },
      },
      template: `
      <Theme>
        <Select
          :type="type"
          :options="options"
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
