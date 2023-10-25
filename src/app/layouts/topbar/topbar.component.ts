import { Component, OnInit, EventEmitter, Output, Inject } from '@angular/core';
import { AuthenticationService } from 'src/app/core/services/auth.service';
import { TokenStorageService } from 'src/app/core/services/token-storage.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {
  @Output() mobileMenuButtonClicked = new EventEmitter();
  // Data Admin Login
  username!: string;


  constructor(private authService: AuthenticationService, private router: Router,
    private route: ActivatedRoute, private tokenStorageService: TokenStorageService ) { }


  ngOnInit(): void {
   this.username = this.tokenStorageService.getUserName();
  }

  /**
   * Toggle the menu bar when having mobile screen
   */
  toggleMobileMenu(event: any) {
    document.querySelector('.hamburger-icon')?.classList.toggle('open')
    event.preventDefault();
    this.mobileMenuButtonClicked.emit();
  }
  /**
   * Logout the user
   */
  logout() {
    this.authService.logout();
    this.router.navigate(['/auth/login']);
  }

  // windowScroll() {
  //   if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
  //     (document.getElementById("back-to-top") as HTMLElement).style.display = "block";
  //     document.getElementById('page-topbar')?.classList.add('topbar-shadow');
  //   } else {
  //     (document.getElementById("back-to-top") as HTMLElement).style.display = "none";
  //     document.getElementById('page-topbar')?.classList.remove('topbar-shadow');
  //   }
  // }

}
