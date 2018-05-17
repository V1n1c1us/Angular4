import { Component, OnInit } from '@angular/core';

// importando o Service
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [OfertasService]
})
export class HomeComponent implements OnInit {

  // array de ofertas - inferencia de tipo
  public ofertas: Oferta[];
  // tslint:disable-next-line:no-shadowed-variable
  // declaro ofertasService com o tipo com base no service
  // Variavel --- Classe
  constructor(private ofertasService: OfertasService) { }

  ngOnInit() {
    // this.ofertas = this.ofertasService.getOfertas();
    // console.log(this.ofertas);

    this.ofertasService.gerOfertas2()
    .then(( ofertas: Oferta[] ) => {
        console.log('a função resolve() foi resolvida depois de 3 segundos');
        this.ofertas = ofertas;
      })
      .catch((param: any ) => {
        console.log(param);
      });
  }
}
