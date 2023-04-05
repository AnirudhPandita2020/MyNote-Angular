import { Component, Inject, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageToken } from 'src/app/localstorage.token';
import { NoteList } from '../model/notelist';
import { NoteService } from '../service/note.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  isAddViewClicked = true
  username = ''
  isEmptyViewVisible = false
  noteList:NoteList[]= []
  

  constructor(@Inject(LocalStorageToken) private storage:Storage,private router:Router,private noteService:NoteService) {
    
  }
  ngOnInit(): void {
    if(this.storage.getItem('access_token') === ''){
      this.router.navigateByUrl('/login')
    }
    this.noteService.getAllNotes().subscribe(res => {
       this.noteList = res
       this.username  = this.storage.getItem('username')!
    })
  }

  toggleAddNote(){
    this.isAddViewClicked = !this.isAddViewClicked
  }

  addNoteClickWhenEmpty(isSelected:boolean){
    this.isAddViewClicked = !this.isAddViewClicked
    this.isEmptyViewVisible = !this.isEmptyViewVisible
  }

  deleteNote(note:NoteList){
    this.noteService.deleteNoteById(note.Id).subscribe(res => {
      this.noteService.getAllNotes().subscribe(res => {
        this.noteList = res
      })
    })
  }
  markAsComplete(note:NoteList){

  }
 logout(){
  this.storage.setItem('access_token','')
  this.router.navigateByUrl('/login')
 }

}
