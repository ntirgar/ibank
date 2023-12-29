import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavComponent } from '../nav/nav.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'donut',
  standalone: true,
  template: `
  <svg height="100%" width="100%" viewBox="0 0 120 120">       
     <circle  *ngFor="let item of items;let i=index" cx="60" cy="60" r="50" fill="transparent" stroke-width="20"
     [attr.stroke-dasharray]="getPerimeter(50)" [attr.stroke-dashoffset]="getOffset(50,i)" [attr.stroke]="getColor(i)"/>             
  </svg>
  `,
  styles: [''],
  imports: [
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    NavComponent,
    RouterOutlet,
  ],
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
   
     getColor(index:number):string
     {
       return this.items[index].color;
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