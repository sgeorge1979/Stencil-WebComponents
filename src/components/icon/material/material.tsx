import { Component, Host, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'icons-material',
  styleUrls: [
    'material.css', // this is just the compnents css
  ],
  shadow: false
})
export class Material {

     /**
   * The size of the icon.
   */
     @Prop() size: 'x-small' | 'small' | 'medium' | 'large' | 'x-large' | 'xx-large' = 'small';

  /**
    * The color of the icon.
    * This can be a css color name, hex value or custom property.
    * Examples: --primary-color | blue | #c412ef | primary-color
    */
  @Prop() color?: string;

    /**
  * The name of the icon.
  */
 @Prop() name?: string;

 @Prop() first: string;

  @State() iconname: any;
  @State() colorValue: string;

  componentWillLoad() {
  
    this.iconname = this.name ;
    this.setColor();
    console.log(this.iconname+"--");
  }

  setColor() {
    if (this.color?.startsWith('--')) {
      this.colorValue = `var(${this.color})`;
      return;
    }

    if (!this.color?.startsWith('#')) {
      const customPropertyValue = window.getComputedStyle(document.body).getPropertyValue(`--${this.color}`).trim();
      if (customPropertyValue && customPropertyValue.length > 0) {
        this.colorValue = `var(--${this.color})`;
        return;
      }
    }

    this.colorValue = this.color;
  }

  render() {
    return (
      <Host class={`material-icons ma-size-${this.size}`}>
        
          <i class={`material-icons ma-size-${this.size}`} style={{ color: this.colorValue }}>{this.name}</i>
          <i class="material-icons" style={{ color: this.colorValue }}>important_devices</i>
          <i class="material-icons" style={{ color: this.colorValue }}>backup</i>
          <i class="material-icons" style={{ color: this.colorValue }}>credit_card</i>
       
      </Host>
    );
  }

}