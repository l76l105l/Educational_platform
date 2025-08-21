import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AnswerInterface } from '../answer-interface';

@Component({
  selector: 'app-profile',
  imports: [RouterLink],
  templateUrl: './profile.html',
  styleUrl: './profile.css'
})
export class Profile {
  answers:AnswerInterface[] = JSON.parse(localStorage.getItem('answers') ?? '[]')
  correctAnswers:AnswerInterface[] = this.answers.filter(answer => answer.isCorrect);
  constructor(){
    console.log(this.answers)
  }
}
