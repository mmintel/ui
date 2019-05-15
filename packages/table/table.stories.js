import { storiesOf } from '@storybook/vue';
import faker from 'faker';
import _ from 'lodash';
import { object } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Theme from '@/components/theme';
import Table from '.';

storiesOf('Components', module)
    .add('Table', () => ({
      components: { Table, Theme },
      props: {
        data: {
          default: object('Data', _.times(5, () => ({
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            email: faker.internet.email(),
            role: faker.random.arrayElement([
              'user',
              'admin',
            ]),
          }))),
        },
        columns: {
          default: object('Columns', [
            {
              value: 'firstName',
              label: 'First name',
            },
            {
              value: 'lastName',
              label: 'Last name',
            },
            {
              value: 'email',
              label: 'E-Mail',
            },
            {
              value: 'role',
              label: 'Role',
            },
          ]),
        },
      },
      methods: {
        handleClick(data) {
          console.log(data);
          action('click', data);
        },
      },
      template: `
      <Theme>
        <Table
          :columns="columns"
          :data="data"
          @click="handleClick"
        >
          <template
            slot-scope="{ row }"
          >
            <td>{{ row.firstName }}</td>
            <td>{{ row.lastName }}</td>
            <td>{{ row.email }}</td>
            <td>{{ row.role }}</td>
          </template>
        </Table>
      </Theme>
      `,
    }));
