import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-solve',
  templateUrl: './solve.component.html',
  styleUrls: ['./solve.component.css']
})
export class SolveComponent implements OnInit {
  a;b;d;z;x;x1;x2;s;
sol()
{

if(this.z==1)
{
this.x=Number(-1*this.b/(2*this.a));
this.s="x1=x2="+String(this.x);
}
if(this.z==2)
{
this.x1=Number((-1*this.b-Math.sqrt(this.d))/(2*this.a));
this.x2=Number((-1*this.b+Math.sqrt(this.d))/(2*this.a));
this.s="x1="+this.x1+" and x2="+String(this.x2);

}
if (this.z==0)
{
this.s="no answer where d<0 and d="+String(this.d);
}
}
  constructor(private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    this.a=Number(this.route.snapshot.paramMap.get('a'))
    this.b=Number(this.route.snapshot.paramMap.get('b'))
    this.d=Number(this.route.snapshot.paramMap.get('d'))
    this.z=Number(this.route.snapshot.paramMap.get('z'))
    
    
  }

}
