import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../../services/user-data.service';
// ng g component components/user-list
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  providers: [UserDataService]
})
export class UserListComponent implements OnInit {

  userList = [];
  constructor(private uService: UserDataService) { }

  ngOnInit() {
    const uService$ = this.uService.getUsers().subscribe(
      (data) => {
        if (data) {
          console.log('success', data);
          this.userList = Object.keys(data).map(
            (user) => {
              return { ...data[user], key: user };
            }
          );
        }
        uService$.unsubscribe();
      },
      (err) => console.log('error', err)
    );
  }

}
