import { storiesOf } from '@storybook/vue';
import { object } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Theme from '@/components/theme';
import Fieldset from '.';

storiesOf('Components', module)
    .add('Fieldset', () => ({
      components: { Fieldset, Theme },
      props: {
        schema: {
          default: object('Schema', [
            {
              name: 'firstName',
              label: 'First Name',
              placeholder: 'John',
              validate: 'required',
            },
            {
              name: 'lastName',
              label: 'Last Name',
              placeholder: 'Doe',
              validate: 'required',
            },
            {
              name: 'email',
              label: 'E-Mail',
              placeholder: 'john@doe.com',
              validate: 'required|email',
            },
            {
              name: 'password',
              label: 'Password',
              placeholder: 'Password',
              validate: 'required',
            },
            {
              name: 'role',
              label: 'Role',
              type: 'select',
              options: [
                {
                  value: 'user',
                  label: 'User',
                },
                {
                  value: 'admin',
                  label: 'Admin',
                },
              ],
              default: 'user',
            },
          ]),
        },
      },
      methods: {
        handleSubmit(data) {
          console.log(data);
          action('submit', data);
        },
      },
      template: `
      <Theme>
        <Fieldset
          :schema="schema"
          :data="data"
          @submit="handleSubmit"
        />
      </Theme>
      `,
    }));
