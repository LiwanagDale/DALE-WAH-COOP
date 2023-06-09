import { Component } from '@angular/core';

@Component({
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.css']
})
export class JournalComponent {
  row = [
    {
      id : '',
      account: '',
      debits: '',
      credits: '',
      description: '',
      name: ''
    },
    {
      id : '',
      account: '',
      debits: '',
      credits: '',
      description: '',
      name: ''
    },
    {
      id : '',
      account: '',
      debits: '',
      credits: '',
      description: '',
      name: ''
    }
  ];
  
  addTable() {
    const obj = {
      id : '',
      account: '',
      debits: '',
      credits: '',
      description: '',
      name: ''
    }
    this.row.push(obj)
  }
  
  deleteRow(x: number){
    var delBtn = confirm(" Do you want to delete ?");
    if ( delBtn == true ) {
      this.row.splice(x, 1 );
    }   
  } 

}
