import { Component, OnInit } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { faCircleCheck, faEllipsis } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  private todosCollection: AngularFirestoreCollection;
  todos: Observable<any[]>;
  faCircleCheck = faCircleCheck;

  constructor(firestore: AngularFirestore) {
    this.todosCollection = firestore.collection('todos');
    this.todos = this.todosCollection.valueChanges();
  }

  ngOnInit(): void {}
}
