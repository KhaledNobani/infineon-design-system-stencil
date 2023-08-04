import { Component, h, Prop, Element, State, Event, EventEmitter, Watch } from '@stencil/core';

@Component({
  tag: 'ifx-checkbox',
  styleUrl: 'checkbox.scss',
  shadow: true
})

export class Checkbox {
  private inputElement: HTMLInputElement;

  @Element() el;
  @Prop() disabled: boolean = false;
  @Prop() value: boolean = false;
  @Prop() error: boolean = false;
  @Prop() name: string = '';
  @State() internalValue: boolean;

  @Event({ bubbles: true, composed: true }) ifxChange: EventEmitter;

  handleCheckbox() {
    if (!this.disabled) {
      this.internalValue = !this.internalValue;
      this.ifxChange.emit(this.el); // Emit the Checkbox element
    }
  }


  @Watch('value')
  valueChanged(newValue: boolean, oldValue: boolean) {
    if (newValue !== oldValue) {
      this.internalValue = newValue;
      this.inputElement.checked = this.internalValue; // update the checkbox's checked property
    }
  }


  handleKeydown(event) {
    // Keycode 32 corresponds to the Space key, 13 corresponds to the Enter key
    if (event.keyCode === 32 || event.keyCode === 13) {
      this.handleCheckbox();
      event.preventDefault();  // prevent the default action when space or enter is pressed
    }
  }

  componentWillLoad() {
    this.internalValue = this.value;
  }


  // componentDidRender() {
  //   /* 
  //   This lifecycle method is the appropriate place to perform post-render actions such as updating DOM properties. 
  //   When a child component is being re-rendered inside a parent component, the value of the child component 
  //   is not technically changing, but it's being reset when the parent component re-renders. 
  //   So the @Watch decorator in the child component doesn't trigger because the property isn't changing 
  //   from its initial value. But componentDidRender() runs after every render regardless of whether or not any changes have occurred. 
  //  */
  //    this.inputElement.checked = this.internalValue;
  // }


  render() {
    const slot = this.el.innerHTML;
    let hasSlot = false;

    if (slot) {
      hasSlot = true;
    }

    return (
      <div class="checkbox__container">
        <input
          type="checkbox"
          hidden
          ref={(el) => (this.inputElement = el)}
          name={this.name}
          checked={this.internalValue}
          onChange={this.handleCheckbox.bind(this)} // Listen for changes here
          id='checkbox'
          value={`${this.internalValue}`}
        />

        <div
          tabindex="0"
          onClick={this.handleCheckbox.bind(this)}
          onKeyDown={this.handleKeydown.bind(this)}
          role="checkbox"  // role attribute
          aria-value={this.internalValue} // aria attribute
          aria-disabled={this.disabled} // aria attribute
          aria-labelledby="label"
          class={`checkbox__wrapper 
        ${this.internalValue ? 'checked' : ""} 
        ${this.disabled ? 'disabled' : ""}
        ${this.error ? 'error' : ""}`}>
          {this.internalValue && <ifx-icon icon="check-12"></ifx-icon>}
        </div>
        {hasSlot &&
          <div id="label" class={`label ${this.error ? 'error' : ""} ${this.disabled ? 'disabled' : ""} `} onClick={this.handleCheckbox.bind(this)}>
            <slot />
          </div>}
      </div>
    );
  }
}
