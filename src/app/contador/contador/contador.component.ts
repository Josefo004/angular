import { Component } from '@angular/core';


@Component({
    selector: 'app-contador',
    template: `
        <h1>{{ titulo }}</h1>
        <h3>Base: {{base}}</h3>

        <button (click)="acumular(base)">+{{base}}</button>
        <span>{{numero}}</span>
        <button (click)="acumular(-base)">-{{base}}</button>
    `
})
export class ContadorComponent {
    public titulo: string = 'Contador app';
    public numero: number = 10;
    public base: number = 2.897;

    acumular(x:number){
        this.numero +=x;
    }
}