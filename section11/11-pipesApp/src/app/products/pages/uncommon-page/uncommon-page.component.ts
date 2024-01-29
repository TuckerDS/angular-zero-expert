import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

  // i18n
  public name: string = 'Fernando';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  }
  changeClient() {
    this.name = 'Melissa';
    this.gender = 'female';
  }

  // plurals
  public clients: string[] = [
    'Maria',
    'Pedro',
    'Fernando',
    'Melissa'
  ];

  public clientsMap = {
    '=0': 'no tenemos clientes esperando',
    '=1': ' tenemos un cliente esperando',
    'other': 'tenemos # clientes esperando'
  }
  deleteClient() {
    this.clients.shift();
  }

  // KeyValue Pipe

  public person = {
    name: 'Fernando',
    age: 36,
    address: 'Ottawa, Canada'
  }

  // Async pipe

  public myObservableTimer = interval(2000).pipe(
    tap(value => console.log(value))
  )

  public promiseValue = new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      this.person.name = 'Otro nombre'
      resolve('Tenemos data')
    }, 3500)
  })


}
