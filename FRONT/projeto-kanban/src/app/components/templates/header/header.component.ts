import { AutenticacaoService } from './../../../autenticacao/autenticacao.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { faAngular } from '@fortawesome/free-brands-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  faAngular = faAngular;
  hasLogado!: boolean;
  token: string = ''

  constructor(
    private autenticacaoService: AutenticacaoService,
    private router: Router) { }

  ngOnInit(): void {

    this.autenticacaoService.Autorizado.subscribe((auth) => { this.hasLogado = Boolean(auth) })

    if (this.hasLogado) {
      this.token = this.autenticacaoService.getToken()
    }
  }

  Deslogar() {
    this.autenticacaoService.deleteToken()
    this.router.navigate([''])
    this.hasLogado = false
  }

  ngOnDestroy() {

  }
}
