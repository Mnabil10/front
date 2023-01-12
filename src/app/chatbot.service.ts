import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

export class Message {
  constructor(public author: string, public content: string) {}
}
@Injectable({
  providedIn: 'root'
})
export class ChatbotService {


  constructor() {}

  conversation = new Subject<Message[]>();

  messageMap: {[key: string]: any} = {
    "Hi": "Hello",
    "Who are you": "My name is Tangier Bot",
    "What is Angular": "Angular is the best framework ever",
    "default": "I can't understand. Can you please repeat or you can visit this link for more details : https://rb.gy/mxyhe6",
    "suspicious": "container-ID : [mrku2853201 - 201113925 - oocu8736093 - 201114475 - 201113826 - 201114728 - tllu7921913 - 201114475 - 201113925 - segu9423281 - cgmu9386520  ] - for more details: shorturl.at/sDGW0",
    "mrku2853201": "Suspect - for more details: https://rb.gy/mxyhe6",
    "201113925": "Suspect - for more details: https://rb.gy/mxyhe6",
    "oocu8736093": "Suspect - for more details: https://rb.gy/mxyhe6",
    "201114475": "Suspect - for more details: https://rb.gy/mxyhe6",
    "201113826": "Suspect - for more details: https://rb.gy/mxyhe6",
    "201114728": "Suspect - for more details: https://rb.gy/mxyhe6",
    "tllu7921913": "Suspect - for more details: https://rb.gy/mxyhe6",
    "segu9423281": "Suspect - for more details: https://rb.gy/mxyhe6",
    "cgmu9386520": "Suspect - for more details: https://rb.gy/mxyhe6",
  };

  getBotAnswer(msg: string) {
    const userMessage = new Message('user', msg);
    this.conversation.next([userMessage]);
    const botMessage = new Message('bot', this.getBotMessage(msg));

    setTimeout(()=>{
      this.conversation.next([botMessage]);
    }, 1500);
  }

  getBotMessage(question: string){
    let answer = this.messageMap[question];
    return answer || this.messageMap['default'];
  }






}
