import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NoteRoutingModule } from './note-routing.module';
import { HomeComponent } from './home/home.component';
import { AddnoteComponent } from './addnote/addnote.component';
import { NotelistComponent } from './notelist/notelist.component';
import { LottieModule } from 'ngx-lottie';
import { EmptyComponent } from './empty/empty.component';
export function playerFactory(): any {  
  return import('lottie-web');
}

@NgModule({
  declarations: [
    HomeComponent,
    AddnoteComponent,
    NotelistComponent,
    EmptyComponent,
    
  ],
  imports: [
    CommonModule,
    NoteRoutingModule,
    LottieModule.forRoot({ player: playerFactory }),
    FormsModule
  ]
})
export class NoteModule { }
