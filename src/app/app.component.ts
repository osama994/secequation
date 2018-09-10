import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
a;
b;
c;
  constructor(private router:Router) {
  }

  sum1()
  {
    this.router.navigate(['/delta',this.a,this.b,this.c]);
  }
  title = 'secequation';
}
