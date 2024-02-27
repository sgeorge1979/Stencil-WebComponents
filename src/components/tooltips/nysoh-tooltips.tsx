import { Component, Prop,  h } from '@stencil/core';



@Component({
  tag: 'nysoh-tooltip',
  shadow: true,
  //assetsDirs: [ '../../css' ],
  styleUrl: 'nysoh-tooltips.css',
})
export class Tooltips {
  @Prop() placement: 'top' | 'bottom' | 'left' | 'right' |'mobile';
  @Prop() first: string;

  getTypeClass() {
    let result = ""
    console.log(this.placement);
    switch (this.placement) {
        case 'top':
            result = "tooltip-top";
            break;
        case 'bottom':
            result = "tooltip-bottom";
            break;
        case 'left':
            result = "tooltip-left";
            break;
        case 'right':
            result = "tooltip-right";
            break;
        case 'mobile':
            result = "tooltip-right tooltip-mobile";
            break;    
            
        default:
            result = "tooltip-right";
    }
    return result;
}

 

  render() {
    return (
     <div class={this.getTypeClass()} data-tooltip={this.first}>
       <span aria-hidden="true">Hover for a tooltip! </span>
     </div>
    );
  }

  

}