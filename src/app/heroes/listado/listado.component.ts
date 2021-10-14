import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent  {

  heroes : string[] = ['Hulk', 'Cap América', 'Thor', 'IronMan','El Chapulin'];
  heroeB : string = '';

  borrarHeroe():void{
    /* 
    if (Array.isArray(this.heroes)) {
      const heroeBorrado = this.heroes[0];
      this.heroes.shift();
      console.log(heroeBorrado);
      this.heroeB = heroeBorrado;
    } 
    */
    this.heroeB = this.heroes.shift() || '';
    console.log(this.heroeB);
    
  }
}
