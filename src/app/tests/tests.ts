import { Component, signal } from '@angular/core';
import { QuestionCard } from '../question-card/question-card';
import { RouterLink } from '@angular/router';
import { QuestionInterface } from '../question-interface';

@Component({
  selector: 'app-tests',
  imports: [QuestionCard, RouterLink],
  templateUrl: './tests.html',
  styleUrl: './tests.css'
})
export class Tests {

  readonly baseUrl = 'https://api.jsonbin.io/v3/b/68a7516ed0ea881f405f7a57/latest';
  questionList:QuestionInterface[] = [];

  nextQuestionVisible = signal(false);

  index:number=0;
  
  async getQuestionList(): Promise<QuestionInterface[]>{
    const response = await fetch(this.baseUrl, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const json = await response.json();
    console.log(json.record)
    return json.record.questions ?? []; 
  }

  constructor(){
    this.getQuestionList().then((questionList) => {
      console.log("questionList",questionList)
      this.questionList = questionList;
      console.log(this.questionList)
    })
  }

  nextQuestion(){
    this.nextQuestionVisible.set(false)
    if(this.index < this.questionList.length-1){
      this.index+=1;
    }
    else{
      this.index=0;
    }
  }
  
}
