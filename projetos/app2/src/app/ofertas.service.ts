import { Oferta } from './shared/oferta.model';
import { resolve, reject } from 'q';

export class OfertasService {

  public ofertas: Array<Oferta> = [
    {
      id: 1,
      categoria: 'restaurante',
      titulo: 'Super Burger',
      descricao_oferta: 'Rodízio de Mini-hambúrger com opção de entrada.',
      anunciante: 'Original Burger',
      valor: 29.90,
      destaque: true,
      imagens: [
        {url: '/assets/ofertas/1/img1.jpg'},
        {url: '/assets/ofertas/1/img2.jpg'},
        {url: '/assets/ofertas/1/img3.jpg'},
        {url: '/assets/ofertas/1/img4.jpg'}
      ]
    },
    {
      id: 2,
      categoria: 'restaurante',
      titulo: 'Cozinha Mexicana',
      descricao_oferta: 'Almoço ou Jantar com Rodízio Mexicano delicioso.',
      anunciante: 'Mexicana',
      valor: 32.90,
      destaque: true,
      imagens: [
        {url: '/assets/ofertas/2/img1.jpg'},
        {url: '/assets/ofertas/2/img2.jpg'},
        {url: '/assets/ofertas/2/img3.jpg'},
        {url: '/assets/ofertas/2/img4.jpg'}
      ]

    },
    {
      id: 4,
      categoria: 'diversao',
      titulo: 'Estância das águas',
      descricao_oferta: 'Diversão garantida com piscinas, trilhas e muito mais.',
      anunciante: 'Estância das águas',
      valor: 31.90,
      destaque: true,
      imagens: [
        {url: '/assets/ofertas/3/img1.jpg'},
        {url: '/assets/ofertas/3/img2.jpg'},
        {url: '/assets/ofertas/3/img3.jpg'},
        {url: '/assets/ofertas/3/img4.jpg'},
        {url: '/assets/ofertas/3/img5.jpg'},
        {url: '/assets/ofertas/3/img6.jpg'}
      ]
    }
  ];

  public getOfertas(): Array<Oferta> {
    // tslint:disable-next-line:prefer-const
    return this.ofertas;
    // retorna um array com 3 strings
  }

  public gerOfertas2(): Promise<Oferta[]> {
    // tslint:disable-next-line:no-shadowed-variable
    return new Promise((resolve, reject) => {
        // algum tipo de processamente que ao finalizar chama a função resolve ou a função reject
        // console.log('PASSOU POR AQUI');
        // tslint:disable-next-line:prefer-const
        let deu_certo = true;

        if (deu_certo) {
          setTimeout(() => resolve(this.ofertas), 3000);
        } else {
            reject({ codigo_erro: 404, mensagem_erro: 'Servidor não encontrado XYZ'});
      }
    })
    .then(( ofertas: Oferta[]) => {
      // fazer alguma tratativa
      console.log('primeiro then');
      return ofertas;
    })
    .then(( ofertas: Oferta[]) => {
      console.log('segundo then');
      return new Promise((resolve2, reject2) => {
        // tslint:disable-next-line:semicolon
        setTimeout(() => {resolve2( ofertas )}, 3000);
      });
    })
    .then(( ofertas: Oferta[]) => {
      console.log('terceiro then executado após 3 segundos pq estava aguardando uma promise ser resolvida');
      return ofertas;
    });
  }
}
