import { AutenticacaoService } from './autenticacao.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuardServiceService implements CanActivate {

  Autorizado: boolean = false

  constructor(private auth: AutenticacaoService, private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    this.auth.Autorizado.subscribe((data) => { this.Autorizado = Boolean(data) })

    if (!this.Autorizado) {
      this.router.navigate([''])
      return false
    }

    return true
  }


}
