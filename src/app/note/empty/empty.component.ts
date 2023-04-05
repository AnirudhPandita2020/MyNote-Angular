import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';
import { AnimationItem } from 'ngx-lottie/lib/symbols';

@Component({
  selector: 'app-empty',
  templateUrl: './empty.component.html',
  styleUrls: ['./empty.component.scss']
})
export class EmptyComponent {

  @Input() hideContent = false
  @Output() onEmptyAddNoteClicked = new EventEmitter<boolean>()
  options: AnimationOptions = {    
    path: '/assets/lottie/93134-not-found.json'  ,
    autoplay:true,
    loop:false,
  };  
  onAnimate(animationItem: AnimationItem): void {    
    console.log(animationItem);  
  }
  onAddClicked(clicked:boolean){
    this.onEmptyAddNoteClicked.emit(clicked)
  }
}
