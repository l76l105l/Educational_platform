import { Component, input, inject, signal,effect, output } from '@angular/core';
import { QuestionInterface } from '../question-interface';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { AnswerInterface } from '../answer-interface';

@Component({
  selector: 'app-question-card',
  imports: [ReactiveFormsModule],
  templateUrl: './question-card.html',
  styleUrl: './question-card.css'
})
export class QuestionCard {
  private formBuilder = inject(FormBuilder);
  output = output();
  question = input.required<QuestionInterface>();
  answers:AnswerInterface[] = [];

  answerForm = this.formBuilder.group({
    answer: ['',Validators.required],
  })
  showAnswer = signal(false);

  constructor(){
    effect(() => {
      const q = this.question();
      if (q) {
        this.showAnswer.set(false)
        this.answerForm.controls.answer.enable();
        this.answerForm.reset(); 
      }
    });
  }

  onSubmit(){
    this.output.emit()
    this.answerForm.controls.answer.disable();
    this.showAnswer.set(true);
    this.answers.push({
      questionId : this.question().id,
      questionName: this.question().question,
      userAnswer: this.answerForm.controls.answer.value!,
      correctAnswer: this.question().options[this.question().correctIndex],
      isCorrect: this.answerForm.controls.answer.value === this.question().options[this.question().correctIndex]
    })
    localStorage.setItem('answers', JSON.stringify(this.answers))
  }
  

}
