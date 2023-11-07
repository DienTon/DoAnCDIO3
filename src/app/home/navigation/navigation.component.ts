import { Component, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  isadmin = false;
  isMenuVisible = false;
  users: any;


  constructor(
    private renderer: Renderer2,
    private route: Router,
    private active: ActivatedRoute,
  ) {
    let role = sessionStorage.getItem('role');
    if (role == 'admin') {
      this.isadmin = true;
    }
  }

  ngOnInit(): void {
    const script = this.renderer.createElement('script');
    script.src = 'assets/js/index2.js';
    this.renderer.appendChild(document.body, script);

    this.active.paramMap.subscribe(data => {
      this.users = data.get('id')
    })
  }

  ngDoCheck(): void {
    let currentroute = this.route.url;
    let role = sessionStorage.getItem('role');
    if (currentroute == '/login' || currentroute == '/register') {
      this.isMenuVisible = false
    } else {
      this.isMenuVisible = true
    }

    if (role == 'admin') {
      this.isadmin = true;
    } else {
      this.isadmin = false;
    }
  }

}
