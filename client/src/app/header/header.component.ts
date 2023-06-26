import { Component, OnInit, Inject, ViewChild, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  public baseHrefValue: any;
  public userProfileData: any;
  public userNameDisplay: any;
  public permissionList: any;
  public isAdmin: any;
  public showMasterData: any;
  public showRole: any;
  public isInternal: any;
  public static userId: String = '';

  public static reconnectCount: Number = 0;


  constructor() {

  }
  ngOnInit(): void {


  }


}
