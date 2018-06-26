import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor(private http: HttpClient) { }
  datablock={};

  dataarray = [{
               id : "1",
               name : "swap",
               city : "pune",
               },
               {
                id : "2",
                name : "om",
                city : "shirdi",
                },
                {
                  id : "3",
                  name : "watson",
                  city : "japan",
                }];
 
  ngOnInit() {

    this.http.get('http://jsonplaceholder.typicode.com/posts').subscribe(data => {
      this.datablock = data;
      console.log(JSON.stringify(this.datablock)); // using the HttpClient instance, http to call the API then subscribe to the data and display to console
    });

 }

}
