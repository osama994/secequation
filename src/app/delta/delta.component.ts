import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delta',
  templateUrl: './delta.component.html',
  styleUrls: ['./delta.component.css']
})
export class DeltaComponent implements OnInit {
  a;b;c;d;z;


  







  constructor(private route:ActivatedRoute,private router:Router) { }

  Res()
{
  this.router.navigate(['/solve',this.a,this.b,this.d,this.z]);

}
  ngOnInit() {
    this.a=Number(this.route.snapshot.paramMap.get('a'))
    this.b=Number(this.route.snapshot.paramMap.get('b'))
    this.c=Number(this.route.snapshot.paramMap.get('c'))
    this.d=Number(this.b*this.b-4*this.a*this.c);
    if(this.d==0){
      this.z=1;
    }
    
    if(this.d>0){
      this.z=2;
    }
    if(this.d<0){
      this.z=0;
    }
    
    
  }
  

}
