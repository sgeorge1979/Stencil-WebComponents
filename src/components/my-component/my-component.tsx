import {Component, Prop, Element, h} from '@stencil/core';

@Component({
  tag: 'nysoh-logo',
  //styleUrl: 'my-component.css',
  shadow: true
})
export class MyComponent {

  @Element() el: HTMLElement;

  @Prop() imgSrc: string;
  private observer: IntersectionObserver;
  componentDidLoad() {
    const img: HTMLImageElement =
               this.el.shadowRoot.querySelector('img');

    if (img) {
      this.observer = new IntersectionObserver(this.onIntersection);
      this.observer.observe(img);
    }
  }

  private onIntersection = async (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
         if (this.observer) {
             this.observer.disconnect();
         }
    
         if (entry.target.getAttribute('data-src')) {
             entry.target.setAttribute('src',
                        entry.target.getAttribute('data-src'));
             entry.target.removeAttribute('data-src');
         }
      }
    }
  };

  render() {
    return <img data-src="https://images.contentstack.io/v3/assets/bltd8dd235189eeddf6/blt439d824c52221e91/6307cd6044cff61b783af942/nysoh-logo-main.png" alt="NYSOH Logo" aria-label="New York State of Health Logo"/>;
  }
}