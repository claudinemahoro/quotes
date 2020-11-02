export class Quote {
  showDescription: boolean;
  
  constructor(public uploadedBy: string,public content: string,public author: String, public like: number,public unlike: number,public uploadDate: Date
    ){
      this.showDescription=false;
    }
    
}
