import { Injectable } from '@angular/core';

@Injectable()
export class AuthService  {
    private userDataResponse: any = {};
    private userData: any = {};

    constructor() {}

    public getuserDataResponse(): any {
        return this.userDataResponse;
      }

      public setuserDataResponse(userResponse: any): any {
        this.userDataResponse = userResponse;
      }

      public getuserData(): any {
        return this.userData;
      }

      public setuserData(userData: any): any {
        this.userData = userData;
      }
}
