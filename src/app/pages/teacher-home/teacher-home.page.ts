import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-teacher-home',
  templateUrl: './teacher-home.page.html',
  styleUrls: ['./teacher-home.page.scss'],
})
export class TeacherHomePage implements OnInit {

  u: string = "";
  c: string = "";

  constructor(private router: Router, private activedRouter: ActivatedRoute) {

    this.activedRouter.queryParams.subscribe(params =>{
      if(this.router.getCurrentNavigation().extras.state){
        this.u = this.router.getCurrentNavigation().extras.state.usu;
        this.c = this.router.getCurrentNavigation().extras.state.contra;

      }
    })

  }

  ngOnInit() {
  }

}
