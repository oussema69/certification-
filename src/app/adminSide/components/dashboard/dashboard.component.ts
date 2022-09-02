import { Component, OnInit } from '@angular/core';
import {CategorieService} from "../../../Services/categorie.service";
import {QuestionsService} from "../../../Services/questions.service";
import {UserService} from "../../../Services/user.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
nbrCat!:number
  nbrQ!:number
  nbrU!:number
  nbrUwho!:number
  constructor(private  catS:CategorieService,private QS:QuestionsService,private userS:UserService) { }

  ngOnInit(): void {
    this.countC()
    this.countQ()
    this.countU()
    this.countwh()
  }
countC(){
this.catS.count().subscribe(res=>{
  this.nbrCat=res
})
}
  countQ(){
    this.QS.count().subscribe(res=>{
      this.nbrQ=res
    })
  }
  countU(){
    this.userS.count().subscribe(res=>{
      this.nbrU=res
    })
  }
  countwh(){
    this.userS.countwh().subscribe(res=>{
      this.nbrUwho=res
    })
  }
}
