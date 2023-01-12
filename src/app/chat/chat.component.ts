import { Component, OnInit } from '@angular/core';
import {Message,ChatbotService} from '../chatbot.service'

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  messages: Message[] = [];
  value: string;
  constructor(public chatbotService: ChatbotService) {
    this.value = '';
   }

  ngOnInit() {
    this.chatbotService.conversation.subscribe((val) => {
    this.messages = this.messages.concat(val);
  });
}


sendMessage() {
  this.chatbotService.getBotAnswer(this.value);
  this.value = '';
}
  ReadMore:boolean = true

  //hiding info box
  visible:boolean = false


  //onclick toggling both
  onclick()
  {
    this.ReadMore = !this.ReadMore; //not equal to condition
    this.visible = !this.visible
  }



  isShowDiv = true;
  isShow = false;

  toggleDisplayDiv() {
    this.isShowDiv = !this.isShowDiv;
  }
  toggleDisplay() {
    this.isShowDiv = !this.isShowDiv;
  }


}
