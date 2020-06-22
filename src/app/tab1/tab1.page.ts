import { Component, ViewChild, ElementRef } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})



export class Tab1Page {
  public enteredValue:string;
  public listCaption:string;
  public caption:string;
  //27:36
  public values:any = [];
  captionEntrySpotIsVisible:boolean = true;
  isShown:boolean = false;

  constructor(private storage: Storage, private router: Router) {
    this.storage.get('list').then((val)=>{
      this.values= val == null ? [] : val; });

      this.storage.get('caption').then((val)=>{
        this.caption = null ? "a caption needed" : val;
      });
    
  }

  pushToArray(){
    this.values.push(this.enteredValue);
    console.log("values: ", this.values);
    this.enteredValue = "";
    this.setStorage();
    //this.focusInput(input);
    //console.log('leftoverStorage:', this.grabLeftoverFromStorage());
    // this.storage.set('name', this.values);
  }

  setStorage(){
    //this.values.push(this.enteredValue);
    //console.log(this.values);
    //this.values.concat(this.storage.get('name'));
    this.storage.set('list', this.values);
    
    //temp.push(this.storage['name']);
    //temp.push(this.values);
    //this.storage.set('name', temp);
  }

  readStorage(){
    this.storage.get('list').then((val) =>{alert(this.listCaption + " : " + val)});
    //this.storage.get('name').then((val) =>{return 'name is : ' + val});
    console.log(this.storage.get('list'));
  }
  
  
  toTab3(){
      this.router.navigate(['./edit', {}]);
  }

  resetStorage(){
    this.storage.set('list', '');
    this.values = [];
    this.enteredValue = "";
    this.caption = "";
    this.listCaption = "";

  }

  setCaption(){
      this.caption = this.listCaption;
      this.hideCaptionEntrySpot();
      this.storage.set('caption', this.caption);
  }
  editCaption(){
    this.captionEntrySpotIsVisible = true;
    this.caption = this.listCaption;
  }


  hideCaptionEntrySpot(){
    this.captionEntrySpotIsVisible = false;
  }



  // grabLeftoverFromStorage(){
  //   let leftoverStorage:any;
  //   leftoverStorage = this.storage['list'];
  //   return leftoverStorage;

  // }



}
