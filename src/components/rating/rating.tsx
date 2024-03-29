import  { Component, Prop, h } from  '@stencil/core';

@Component({
  tag: 'nysoh-rating',
  styleUrl: 'rating.css',
  shadow: true
})
export  class  NysohRatingComponent  {
 @Prop() maxValue: number = 5;
 @Prop() value: number = 0;

 createStarList() {
   let starList = [];

   for (let i = 1; i <= this.maxValue; i++) {
     if (i <= this.value) {
       starList.push(<span class="rating">&#x2605;</span>);
     } else {
       starList.push(<span class="rating" >&#x2606;</span>);
     }
   }

   return starList;
 }

  render() {
   return  (
     <div>
       {this.createStarList()}
     </div>
   );
  }
}