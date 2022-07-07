import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../../environments/environment';
import { NavComponent } from '../core/components/nav/nav.component';
import { HotToastModule } from '@ngneat/hot-toast';
import { ReactiveFormsModule } from '@angular/forms';
import {DragDropModule} from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(environment.firebase),
    NavComponent,
    HotToastModule.forRoot(),
    ReactiveFormsModule,
    DragDropModule,
  ]
})
export class SharedModule { }
