import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { TravelService } from "./services/travel.service";

interface Post {
  title: string;
  content: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

/*  postsCol: AngularFirestoreCollection<Post>;
  posts: Observable<Post[]>;
  title: string;
  content: string;*/

  constructor(/*private afs: AngularFirestore,
  private travelService: TravelService*/) { }

  ngOnInit() {
/*    this.postsCol = this.afs.collection('posts');
    this.posts = this.postsCol.valueChanges();*/
  }
  
/*  addPost() {
    this.afs.collection('posts').add({ 'title': this.title, 'content': this.content });
  }*/
}
