import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { OutletContext, Route, Router } from '@angular/router';
import { NoteService } from '../service/note.service';

@Component({
  selector: 'app-addnote',
  templateUrl: './addnote.component.html',
  styleUrls: ['./addnote.component.scss']
})
export class AddnoteComponent implements OnInit {

  title: string = ''
  description:string = ''

  constructor(private noteService:NoteService,private router:Router){}

  @Input() toggleAddNoteView = false
  
  ngOnInit(): void {
   
  }
  addNewNote(){
    if(this.title === "" || this.description === ""){
      alert("Fields cannot be empty")
      return
    }
    this.noteService.createNewNote(this.title,this.description).subscribe(res => {
      this.router.navigateByUrl("/home")
    })
  }
  

}
