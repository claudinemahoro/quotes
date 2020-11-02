import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[]= [
    new Quote('William Faulkner','Get it down. Take chances. It may be bad, but it is the only way you can do anything really good.','Mahoro',0,0,new Date(2020,10,31)),
    new Quote('Toni Morrison','If there is a book that you want to read, but it has not been written yet, then you must write it.','Claudine',0,0,new Date(2020,10,28)),
    new Quote('Mahoro','Never make your now then,because you leave now as you live it','Coco',0,0,new Date(2020,11,2)),
  ]; 
  preNum:number
  lastNum:number
  counter:number
  
  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  deleteQuote(isRead, index){
    if (isRead) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].content}?`)
      if (toDelete){
      this.quotes.splice(index,1)
    }
  }
}


HighestUpvote(){
  this.preNum = 0
  this.lastNum = 0

  for(this.counter=0 ; this.counter < this.quotes.length; this.counter++) {
    this.lastNum = this.quotes[this.counter].like;
    if(this.lastNum > this.preNum){this.preNum = this.lastNum}
  }
  return  this.preNum
}
  constructor() { }

  ngOnInit(): void {
  }

}

