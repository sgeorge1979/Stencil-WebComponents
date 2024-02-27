import { Component, Host, h, Prop, State } from '@stencil/core';
import { far } from '@fortawesome/free-regular-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

@Component({
  tag: 'nysoh-fontawesome',
  styleUrls: ['fontawesome.css'],
  assetsDirs: ['assets'],
  shadow: false
})
export class Fontawesome {
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
   * The icon prefix.
   */
   @Prop() type?: 'fab'| 'far' | 'fas';

     /**
   * The name of the icon.
   */
  @Prop() name?: string;

  @State() iconname: any;
  @State() colorValue: string;

  componentWillLoad() {
    library.add(fas, far, fab);
    this.iconname = this.type +" "+ this.name ;
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
    <Host class={`fa-size-${this.size}`}>
           <i class={this.iconname}  style={{ color: this.colorValue }}></i>
           
        
      </Host>
   /**   <Host class={`size-${this.size}`}><div innerHTML={this.svg} style={{ color: this.colorValue }} /></Host> **/
    );
  }

}