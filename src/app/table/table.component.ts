import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  dataSource = new MatTableDataSource();

  displayedColumns:string[] = ['id','name','city']

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.ShowUsers()
  }

  ShowUsers()
  {
    this.dataService.GetUsers().subscribe((data)=>
    {
      this.dataSource.data = data;
    })
  }

}
