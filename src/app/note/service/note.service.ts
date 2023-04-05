import { Inject, Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { LocalStorageToken } from 'src/app/localstorage.token';
import { NoteList } from '../model/notelist';
import { NoteCreate } from '../model/notecreate';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private client:HttpClient,@Inject(LocalStorageToken) private storage:Storage) 
  {
  }

  getAllNotes(){
    let header = new HttpHeaders().append("Authorization",`Bearer ${this.storage.getItem('access_token')}`)
     return this.client.get<NoteList[]>("/api/note",{
      headers:header
     })
  }

  createNewNote(title:string,description:string){
    var body:NoteCreate = {
      Title:title,
      Description:description
    }
    let header = new HttpHeaders().append("Authorization",`Bearer ${this.storage.getItem('access_token')}`)
    return this.client.post<NoteList>("/api/note",body,{
      headers:header
    })
  }

  deleteNoteById(id:number){
    let header = new HttpHeaders().append("Authorization",`Bearer ${this.storage.getItem('access_token')}`)
    return this.client.delete(`/api/note/${id}`,{
      headers:header
    });
  }
}
