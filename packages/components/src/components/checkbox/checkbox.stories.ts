import { action } from '@storybook/addon-actions';

export default {
  title: "Components/Checkbox",
  tags: ['autodocs'],
  args: {
    error: false,
    disabled: false,
    value: false,
    label: 'Text',
    size: 's',
    indeterminate: false,
  },

  argTypes: {
    size: {
      description: "Size options: s (21px) and m (25px) - default: m",
      options: ['s', 'm'],
      control: { type: 'radio' },
    },
    ifxChange: {
      action: 'ifxChange',
      description: 'Custom event emitted when accordion-item is closed',
      table: {
        type: {
          summary: 'Framework integration',
          detail: 'React: onIfxChange={handleChange}\nVue:@ifxChange="handleChange"\nAngular:(ifxChange)="handleChange()"\nVanillaJs:.addEventListener("ifxChange", (event) => {//handle change});',
        },
      },
    }
  },

};


const DefaultTemplate = ({
  error,
  disabled,
  value,
  indeterminate,
  size,
  label
}) => {
  const checkbox = document.createElement('ifx-checkbox');
  checkbox.setAttribute('error', error);
  checkbox.setAttribute('disabled', disabled);
  checkbox.setAttribute('value', value);
  checkbox.setAttribute('size', size);
  checkbox.setAttribute('indeterminate', indeterminate);

  checkbox.addEventListener('ifxChange', action('ifxChange'));

  checkbox.innerHTML = `
    ${label}
  `

  return checkbox;
};

export const Default = DefaultTemplate.bind({});


