import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Location} from '@angular/common';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  products: any = [];
  selected: string = '';
  constructor(private httpClient: HttpClient, private location: Location) {

  }

  ngOnInit(){
    this.httpClient.get("assets/sampleData.json").subscribe(data =>{
      this.products = data;
      this.location.replaceState("/list");
    })
  }

  selectChangeHandler (event: any) {
    //update the ui
    this.selected = event.target.value;
    if(this.selected == "hightolow"){
        this.products.sort((a: { Price: number; },b: { Price: number; }) => (b.Price - a.Price));
        this.location.replaceState("/list?sortType="+this.selected);
    }else if(this.selected == "lowtohigh"){
        this.products.sort((a: { Price: number; },b: { Price: number; }) => (a.Price - b.Price));
        this.location.replaceState("/list?sortType="+this.selected);
    }
  }

}
