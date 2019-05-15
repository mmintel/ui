import { shallowMount } from '@vue/test-utils';
import Button from '.';

describe('Button Component', () => {
  describe('#rendering', () => {
    it('renders correctly', () => {
      const wrapper = shallowMount(Button);
      expect(wrapper.element).toMatchSnapshot();
    });
  });

  // describe('#props', () => {
  //   it('complains when wrong `type` is passed', () => {
  //     const wrapper = shallowMount(Button, {
  //       propsData: {
  //         type: 'something',
  //       },
  //     });
  //     expect(wrapper);
  //   });
  // });

  describe('#computed', () => {
    it('evaluates to the right classes', () => {
      const wrapper = shallowMount(Button, {
        slots: {
          badge: '<div />',
          icon: '<div />',
        },
        propsData: {
          type: 'default',
          size: 'medium',
          fake: true,
          text: true,
          icon: true,
          dense: true,
          disabled: true,
          block: true,
          attached: 'left',
        },
      });
      const baseClass = 'button';
      expect(wrapper.vm.classes).toContain(`${baseClass}`);
      expect(wrapper.vm.classes).toContain(`${baseClass}--default`);
      expect(wrapper.vm.classes).toContain(`${baseClass}--medium`);
      expect(wrapper.vm.classes).toContain(`${baseClass}--has-badge`);
      expect(wrapper.vm.classes).toContain(`${baseClass}--has-icon`);
      expect(wrapper.vm.classes).toContain(`${baseClass}--fake`);
      expect(wrapper.vm.classes).toContain(`${baseClass}--text`);
      expect(wrapper.vm.classes).toContain(`${baseClass}--icon`);
      expect(wrapper.vm.classes).toContain(`${baseClass}--dense`);
      expect(wrapper.vm.classes).toContain(`${baseClass}--disabled`);
      expect(wrapper.vm.classes).toContain(`${baseClass}--block`);
      expect(wrapper.vm.classes).toContain(`${baseClass}--attached-left`);
    });

    describe('evaluates to the right component', () => {
      it('returns a `nuxt-link` if `to` is passed and $nuxt is available', () => {
        const wrapper = shallowMount(Button, {
          mocks: {
            $nuxt: true,
            $router: true,
          },
          propsData: {
            to: 'test-route',
          },
          stubs: {
            NuxtLink: true,
          },
        });
        expect(wrapper.vm.component).toEqual('nuxt-link');
      });
      it('returns a `router-link` if `to` is passed and $nuxt is not available', () => {
        const wrapper = shallowMount(Button, {
          mocks: {
            $nuxt: false,
            $router: true,
          },
          propsData: {
            to: 'test-route',
          },
          stubs: {
            RouterLink: true,
          },
        });
        expect(wrapper.vm.component).toEqual('router-link');
      });
      it('returns an `a` if `href` was passed', () => {
        const wrapper = shallowMount(Button, {
          mocks: {
            $nuxt: true,
            $router: true,
          },
          propsData: {
            href: 'https://test.com',
          },
        });
        expect(wrapper.vm.component).toEqual('a');
      });
      it('returns a `span` if `fake` is true', () => {
        const wrapper = shallowMount(Button, {
          mocks: {
            $nuxt: true,
            $router: true,
          },
          propsData: {
            fake: true,
          },
        });
        expect(wrapper.vm.component).toEqual('span');
      });
      it('defaults to a `button`', () => {
        const wrapper = shallowMount(Button, {
          mocks: {
            $nuxt: true,
            $router: true,
          },
        });
        expect(wrapper.vm.component).toEqual('button');
      });
    });
  });
});
