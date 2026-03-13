import { Component, input, inject, signal, effect, output, computed } from '@angular/core';
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

  correctAnswerText = computed(() => {
    const q = this.question();
    if (q && q.options && q.options[q.correctIndex]) {
      return q.options[q.correctIndex];
    }
    return '';
  });

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
    const q = this.question();
    this.answers.push({
      questionId : q.id,
      questionName: q.question,
      userAnswer: this.answerForm.controls.answer.value!,
      correctAnswer: q.options[q.correctIndex],
      isCorrect: this.answerForm.controls.answer.value === q.options[q.correctIndex]
    })
    localStorage.setItem('answers', JSON.stringify(this.answers))
  }
}
