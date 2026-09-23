import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private myPersonalRouter: Router) { }

  ngOnInit(): void {
  }

  public goToDeposit():void {
    this.myPersonalRouter.navigateByUrl("deposit")
  }
  

}
