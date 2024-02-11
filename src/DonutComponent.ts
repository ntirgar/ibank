import { Component } from '@angular/core';


@Component({
  selector: 'donut',
  standalone: true,
  template: `
  <div style="width:400px;height:400px;">
  <svg height="100%" width="100%" viewBox="0 0 120 120">
    @for( item of items; track $index ){
    <circle
      cx="50"
      cy="50"
      r="50"
      fill="transparent"
      stroke-width="8"
      [attr.stroke-dasharray]="getPerimeter(50)"
      [attr.stroke-dashoffset]="getOffset(50, $index)"
      [attr.stroke]="item.color"
    />
    }
  </svg>
</div>`,
  styles: ['']

})
export class DonutComponent{

    items:Array<{name:string,count:number,color:string}>=[
       {name:'Orange',count:50,color:'orange'},
       {name:'Apple',count:25,color:'red'},
       {name:'Pear',count:15,color:'green'}
     ];
    private _total:number =0;
    constructor() {
      if(this.items.length>0)
      {
        this._total = this.items.map(a=>a.count).reduce((x,y)=>x+y);
      }
   
    }
   
     getPerimeter(radius:number):number
     {
       return Math.PI*2*radius;
     }
   
   
     getOffset(radius:number,index:number):number
     {   
       var percent=0;
       for(var i=0;i<index;i++)
       {
         percent+=((this.items[i].count)/this._total);
       }
       var perimeter = Math.PI*2*radius;
       return perimeter*percent;
     }
   }
