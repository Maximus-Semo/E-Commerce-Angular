import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit{
 @Input() data :any= [] =[];
 @Output() add = new EventEmitter();
 amount:number = 0;
 hiddenDiv:boolean = false;
  constructor(){}

  ngOnInit(): void {  }
  addItme(){
    this.add.emit({item:this.data, quantity:this.amount});
  }

}
