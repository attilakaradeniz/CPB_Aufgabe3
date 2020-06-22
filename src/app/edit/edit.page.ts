import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

  public editCaption: string;
  public caption: string;
  public itemToEdit: string;

  constructor(private storage: Storage, private router: Router) {
    this.storage.get('list').then((val) => {
      this.editCaption = val == null ? [] : val;
    });

    this.storage.get('caption').then((val) => {
      this.caption = val;
    });
  }

  ngOnInit() {
  }

  extractItemToEdit() {
    // @TODO  here extract the item you you want to edit

  }

  toTab1() {
    this.router.navigate(['./tab1', {}]);
    this.resetSorage();
  }

  resetSorage() {
  }

}
