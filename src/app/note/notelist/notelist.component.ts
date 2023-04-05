import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NoteList } from '../model/notelist';

@Component({
  selector: 'app-notelist',
  templateUrl: './notelist.component.html',
  styleUrls: ['./notelist.component.scss']
})
export class NotelistComponent implements OnInit{
  constructor(){}
  ngOnInit(): void {
    
  }

  @Input() noteList :NoteList[] = []
  @Output() noteDelete = new EventEmitter<NoteList>()
  @Output() noteMarkAsComplete = new EventEmitter<NoteList>() 

  onMarkAsCompleteClick(note:NoteList){
    this.noteMarkAsComplete.emit(note)
  }
  onDeleteClick(note:NoteList){
    this.noteDelete.emit(note)
  }

}
