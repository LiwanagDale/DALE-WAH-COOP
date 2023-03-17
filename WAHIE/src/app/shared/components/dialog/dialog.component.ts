import { Component } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {

  row = [
    {
      id : '',
      name: '',
      email: ''
    },
    {
      id : '',
      name: '',
      email: ''
    },
    {
      id : '',
      name: '',
      email: ''
    }
  ];
  
  addTable() {
    const obj = {
      id: '',
      name: '',
      email: ''
    }
    this.row.push(obj)
  }
  
  deleteRow(x: number){
    var delBtn = confirm(" Do you want to delete ?");
    if ( delBtn == true ) {
      this.row.splice(x, 1 );
    }   
  } 
          
  // deleteRow (){
  //   //console.log(name);
  
  //   for(var i=0 ; i<this.row.length-1 ; i++){
  //     var delBtn = confirm(" Do you want to delete ?");     
  //            if( delBtn == true ) {
     
  //       this.row.splice(i,1);
  //     }
  //   }
  
  // }
  // }
  

}
