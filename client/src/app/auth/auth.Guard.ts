import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class CanActivateGuard implements CanActivate, CanActivateChild {
    expectedRole: any;
    constructor(
        private router: Router,
        private authService: AuthService
    ) {}
    canActivate(): any {
         return true;
    }

    canActivateChild() : any{
      
        return true;
    }

}
