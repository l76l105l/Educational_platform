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

  readonly baseUrl = 'http://localhost:3000/questions';
  questionList:QuestionInterface[] = [];

  nextQuestionVisible = signal(false);

  index:number=0;
  
  async getQuestionList(): Promise<QuestionInterface[]>{
    const data = await fetch(this.baseUrl);
    return (await data.json()) ?? [];
  }

  constructor(){
    this.getQuestionList().then((questionList) => {
      this.questionList = questionList;
    })
  }

  nextQuestion(){
    this.nextQuestionVisible.set(false)
    if(this.index < this.questionList.length-1){
      this.index+=1;
    }
    else{
      
    }
  }
  
}
