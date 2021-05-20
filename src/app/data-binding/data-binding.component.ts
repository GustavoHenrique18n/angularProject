import { Component, OnInit, Input, Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  esconder:boolean = true
  email:string= ""
  initialValue:number = 0
  aba:string = 'home'

  @Input() greet:boolean
  @Output() changeValue = new EventEmitter()

  constructor() {
    this.greet = true
  }
   decrementar () {
    this.initialValue--
    this.changeValue.emit({email:this.email, require:true})
   }
   incrementar () {
    this.initialValue++
    this.changeValue.emit({email:this.email, require:true})
   }

  ngOnInit(){
    console.log('iniciado')
  }

}


