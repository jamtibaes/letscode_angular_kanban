import { AutenticacaoService } from './../../../autenticacao/autenticacao.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: string = '';
  senha: string = '';
  semCadastro: boolean = false;

  constructor(private authService: AutenticacaoService, private router: Router
  ) { }

  ngOnInit(): void {
  }

  login() {
    this.authService.autenticar(this.usuario, this.senha).subscribe((data) => {
      const isCorrect: boolean = Boolean(data)
      if (isCorrect) {
        this.authService.saveToken(data)
        this.authService.Autorizado.next(true)
        this.router.navigate(['kanban']);
      }
      this.semCadastro = true;
      return
    })
  }

}
