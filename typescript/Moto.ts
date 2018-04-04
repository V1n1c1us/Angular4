import Veiculo from './Veiculo';

class Moto extends Veiculo{
    public acelerar(): void{
        this.velocidade = this.velocidade +40
    }
}
export default Moto