

export default {
  title: 'Components/Search Bar',
  args: {
    width: '100%',
    showCloseButton: true,
  },
  argTypes: {
    onIfxChange: { action: 'ifxChange' },
    width: {
      options: ['40%', '60%', '80%', '100%'],
      control: { type: 'radio' },
    },
    showCloseButton: {
      control: { type: 'boolean' },
    },
  },
};



const Template = (args) => {
  const wrapper = document.createElement('div');
  wrapper.innerHTML = `<ifx-search-bar  style="width: ${args.width}" show-close-button="${args.showCloseButton}"></ifx-search-bar>`;

  const inputElement = wrapper.querySelector('ifx-search-bar');
  inputElement.addEventListener('ifxChange', (event) => {
    // console.log('Storybook Search-Input:', event);
    args.onIfxChange(event);

  });

  return wrapper;
};

export const Default = Template.bind({});
Default.args = {
};