import { configure, addDecorator, addParameters } from '@storybook/vue';
import { withKnobs } from '@storybook/addon-knobs';
import { withContexts } from '@storybook/addon-contexts/vue';
import { contexts } from './contexts'; // we will define the contextual setups later in API section
import '../plugins/vee-validate';
import '../plugins/vue-click-outside';
import center from './decorators/center';

addDecorator(center);
addDecorator(withKnobs);
addDecorator(withContexts(contexts));

// automatically import all files ending in *.stories.js
const req = require.context('../packages', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);