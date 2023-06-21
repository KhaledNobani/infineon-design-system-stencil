import { Component, h, Prop, Element, State, Event, EventEmitter, Watch } from '@stencil/core';

@Component({
  tag: 'ifx-checkbox',
  styleUrl: 'checkbox.scss',
  shadow: true
})

export class Checkbox {
  @Element() el;
  @Prop() disabled: boolean = false;
  @Prop() value: boolean = false;
  @Prop() error: boolean = false;
  @Prop() name: string = '';
  @State() internalValue: boolean;
  @Event({ bubbles: true, composed: true, eventName: 'ifxChange' }) ifxChange: EventEmitter;

  handleCheckbox() {
    if (!this.disabled) {
      this.internalValue = !this.internalValue;
      this.ifxChange.emit(this.internalValue);
    }
  }

  @Watch('value')
  valueChanged(newValue: boolean, oldValue: boolean) {
    if (newValue !== oldValue) {
      this.internalValue = newValue;
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

  render() {
    const slot = this.el.innerHTML;
    let hasSlot = false;

    if (slot) {
      hasSlot = true;
    }

    return (
      <div class="checkbox__container">
        <input type="checkbox" hidden
          name={this.name}
          checked={this.internalValue}
          value={`${this.internalValue}`} />
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
