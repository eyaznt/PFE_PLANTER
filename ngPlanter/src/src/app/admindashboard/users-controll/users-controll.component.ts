import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthGuard } from 'src/app/auth/auth.guard';
import { AuthService } from 'src/app/auth/auth.service';
import { UserService } from 'src/app/user.service';
import { UserModalComponent } from './user-modal/user-modal.component';

@Component({
  selector: 'app-users-controll',
  templateUrl: './users-controll.component.html',
  styleUrls: ['./users-controll.component.css']
})
export class UsersControllComponent implements OnInit {
  currentUser: any;
  users: any;
  showUserInfo = false;

  constructor(private userService: UserService, private dialog: MatDialog ,private authGuard: AuthGuard,
    private authService: AuthService,) { }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(data => {
      this.users = data;
    });
  }
  viewUser(userId: string) {
    this.userService.getUserById(userId).subscribe(data => {
      this.currentUser = data;
      const dialogRef = this.dialog.open(UserModalComponent, { data: this.currentUser });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      });
    });
  }

  closeModal() {
    this.showUserInfo = false;
  }


}
