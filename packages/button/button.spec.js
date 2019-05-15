import { createLocalVue, mount } from '@vue/test-utils';
import Ripple from 'vue-ripple-directive';
import Button from '.';

const localVue = createLocalVue();
localVue.use(Ripple);

describe('Button Component', () => {
  describe('rendering', () => {
    it('renders correctly', () => {
      const wrapper = mount(Button);
      expect(wrapper.element).toMatchSnapshot();
    });
  });

  // // How do components behave when interacting with them? For example: What
  // // happens when we click a button or submit a form?
  // describe('behavior', () => {
  //   describe('inputs', () => {
  //     let wrapper;

  //     beforeEach(() => {
  //       wrapper = shallowMount(ContactForm, {
  //         propsData: {
  //           values: {
  //             firstName: 'Tobias',
  //             lastName: 'Casper',
  //             email: 'tc@i22.de',
  //           },
  //         },
  //       });
  //     });

  //     it('changes #fields.firstName when first name changed', () => {
  //       const input = wrapper.find('input[name="firstName"]');

  //       expect(() => input.vnode.data.on.input({ target: { value: 'Frank' } }))
  //           .to.alter(
  //               () => wrapper.vm.fields.firstName,
  //               { from: 'Tobias', to: 'Frank' },
  //           );
  //     });

  //     it('changes #fields.lastName when last name changed', () => {
  //       const input = wrapper.find('input[name="lastName"]');

  //       expect(() => input.vnode.data.on.input({ target: { value: 'Lancaster' } }))
  //           .to.alter(
  //               () => wrapper.vm.fields.lastName,
  //               { from: 'Casper', to: 'Lancaster' },
  //           );
  //     });

  //     it('changes #fields.email when email changed', () => {
  //       const input = wrapper.find('input[name="email"]');

  //       expect(() => input.vnode.data.on.input({ target: { value: 'fl@i22.de' } }))
  //           .to.alter(
  //               () => wrapper.vm.fields.email,
  //               { from: 'tc@i22.de', to: 'fl@i22.de' },
  //           );
  //     });
  //   });

  //   it('calls #submit() when submitting form', () => {
  //     const submitSpy = spy();
  //     const wrapper = shallowMount(ContactForm, {
  //       methods: { submit: submitSpy },
  //     });

  //     const form = wrapper.find('form');
  //     form.trigger('submit');

  //     expect(submitSpy.calledOnce).to.be.true;
  //   });
  // });

  // // Data represents the internal state of the component. State that can also
  // // be manipulated by the component itself. Tests here describe how data is
  // // set on initialization.
  // describe('data', () => {
  //   it('copies #values to #fields', () => {
  //     const values = {
  //       firstName: 'Tobias',
  //       lastName: 'Casper',
  //       email: 'tc@i22.de',
  //     };

  //     const wrapper = shallowMount(ContactForm, { propsData: { values } });

  //     expect(wrapper.vm.fields).to.not.eq(values);
  //     expect(wrapper.vm.fields).to.eql(values);
  //   });
  // });

  // // Watchers are commonly used to update the internal state (data) when a
  // // property (even computed property or other data) has changed.
  // describe('watchers', () => {
  //   describe('#values', () => {
  //     it('updates #fields', () => {
  //       const oldValues = {
  //         firstName: 'Tobias',
  //         lastName: 'Casper',
  //         email: 'tc@i22.de',
  //       };

  //       const newValues = {
  //         firstName: 'Frank',
  //         lastName: 'Lancaster',
  //         email: 'fl@i22.de',
  //       };

  //       const fakeVm = { fields: oldValues };
  //       ContactForm.watch.values.handler.call(fakeVm, newValues, oldValues);

  //       expect(fakeVm.fields).to.not.eq(newValues);
  //       expect(fakeVm.fields).to.eql(newValues);
  //     });
  //   });
  // });

  // // Virtual properties that are calculated when the component re-renders.
  // // They are based on other component props or data.
  // describe('computed properties', () => {
  //   describe('#isSubmittable', () => {
  //     let wrapper;

  //     beforeEach(() => {
  //       wrapper = shallowMount(ContactForm);
  //     });

  //     it('is true when #fields.firstName and #fields.lastName are present', () => {
  //       wrapper.setData({
  //         fields: {
  //           firstName: 'Tobias',
  //           lastName: 'Casper',
  //           email: null,
  //         },
  //       });

  //       expect(wrapper.vm.isSubmittable).to.be.true;
  //     });

  //     it('is false when only #fields.firstName is present', () => {
  //       wrapper.setData({
  //         fields: {
  //           firstName: 'Tobias',
  //           lastName: null,
  //           email: null,
  //         },
  //       });

  //       expect(wrapper.vm.isSubmittable).to.be.false;
  //     });

  //     it('is false when only #fields.lastName is present', () => {
  //       wrapper.setData({
  //         fields: {
  //           firstName: null,
  //           lastName: 'Casper',
  //           email: null,
  //         },
  //       });

  //       expect(wrapper.vm.isSubmittable).to.be.false;
  //     });

  //     it('is false when not all #fields are blank', () => {
  //       wrapper.setData({
  //         fields: {
  //           firstName: null,
  //           lastName: null,
  //           email: null,
  //         },
  //       });

  //       expect(wrapper.vm.isSubmittable).to.be.false;
  //     });
  //   });
  // });

  // // Methods mutate the state of the component or trigger some kind of
  // // interaction.
  // describe('methods', () => {
  //   describe('#submit()', () => {
  //     it('emits submit event with #fields as payload', () => {
  //       const fields = {
  //         firstName: 'Frank',
  //         lastName: 'Lancaster',
  //         email: 'fl@i22.de',
  //       };

  //       const wrapper = shallowMount(ContactForm);
  //       wrapper.setData({ fields });
  //       wrapper.vm.submit();

  //       const submitEvents = wrapper.emitted().submit;
  //       expect(submitEvents).to.have.length(1);
  //       expect(submitEvents[0]).to.eql([ fields ]);
  //     });
  //   });

  //   describe('#reset()', () => {
  //     it('resets #fields to original #values', () => {
  //       const oldFields = {
  //         firstName: 'Tobias',
  //         lastName: 'Casper',
  //         email: 'tc@i22.de',
  //       };

  //       const newFields = {
  //         firstName: 'Frank',
  //         lastName: 'Lancaster',
  //         email: 'fl@i22.de',
  //       };

  //       const wrapper = shallowMount(ContactForm, {
  //         propsData: { values: oldFields },
  //       });
  //       wrapper.setData({ fields: newFields });

  //       expect(wrapper.vm.fields).to.eql(newFields);
  //       wrapper.vm.reset();
  //       expect(wrapper.vm.fields).to.not.eq(oldFields);
  //       expect(wrapper.vm.fields).to.eql(oldFields);
  //     });
  //   });

  //   describe('#submitAndReset()', () => {
  //     it('calls #submit() and then #reset()', () => {
  //       const submitSpy = spy();
  //       const resetSpy = spy();

  //       const wrapper = shallowMount(ContactForm, {
  //         methods: {
  //           submit: submitSpy,
  //           reset: resetSpy,
  //         },
  //       });

  //       wrapper.vm.submitAndReset();

  //       expect(submitSpy.calledOnce).to.be.true;
  //       expect(resetSpy.calledOnce).to.be.true;
  //       expect(resetSpy.calledAfter(submitSpy)).to.be.true;
  //     });
  //   });
  // });
});
