import { Component, OnInit } from '@angular/core';
import { faCircleCheck, faEllipsis } from '@fortawesome/free-solid-svg-icons';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  faCircleCheck = faCircleCheck;
  faEllipsis = faEllipsis;
  private todosCollection: AngularFirestoreCollection;
  todos: Observable<any[]>;
  constructor(firestore: AngularFirestore) {
    this.todosCollection = firestore.collection('todos');
    this.todos = this.todosCollection.valueChanges();
  }

  ngOnInit(): void {
    console.log(this.todos);
  }
}
