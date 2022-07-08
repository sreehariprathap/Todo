import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HotToastService } from '@ngneat/hot-toast';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss'],
})
export class AddTodoComponent implements OnInit {
  addTodoForm!: FormGroup;
  private todosCollection: AngularFirestoreCollection;
  todos: Observable<any[]>;

  constructor(
    private toast: HotToastService,
    firestore: AngularFirestore,
    private formbuilder: FormBuilder
  ) {
    this.todosCollection = firestore.collection('todos');
    this.todos = this.todosCollection.valueChanges();
    this.addTodoForm = this.formbuilder.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      createdDate: new Date(),
      status: 'todo',
    });
  }

  ngOnInit(): void {}
  addTodo() {
    this.todosCollection.add(this.addTodoForm.value);
    console.log(this.addTodoForm.value);
    this.toast.success('Todo Added Successfully');
    this.addTodoForm.reset();
  }
}
