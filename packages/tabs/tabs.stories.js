import { storiesOf } from '@storybook/vue';
import Theme from '@/components/theme';
import Tabs from '.';
import { object } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

storiesOf('Components', module)
    .add('Tabs', () => ({
      components: { Tabs, Theme },
      data() {
        return {
          activeTab: 'auth-login',
        };
      },
      props: {
        tabs: {
          default: object('Tabs', [
            'auth-login',
            'auth-signup',
          ]),
        },
      },
      methods: {
        handleChange(tab) {
          this.activeTab = tab;
          action('change', tab);
        },
      },
      template: `
        <Tabs
          :tabs="tabs"
          :active="activeTab"
          @change="handleChange"
        >
          <template slot="head:auth-login">
            Login
          </template>
          <template slot="panel:auth-login">Login Panel</template>
          <template slot="head:auth-signup">
          Signup
          </template>
          <template slot="panel:auth-signup">Signup Panel</template>
        </Tabs>
      `,
    }));
