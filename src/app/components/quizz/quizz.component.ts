import { Component } from '@angular/core';
import { QuizzModel } from 'src/app/model/quizz.model';
import { QuizzService } from 'src/app/services/quizz.service';

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.css']
})
export class QuizzComponent {
  quizz: QuizzModel;
  question: number;
  answers: string[];
  result: string;

  constructor(private quizzService: QuizzService) {
    this.quizz = quizzService.getQuizz();
    this.question = 0;
    this.answers = [];
    this.result = '';
  }

  answerQuestion(alias: string): void {
    if (this.answers.length < this.quizz.questions.length) {
      this.answers.push(alias);

      if (this.answers.length == this.quizz.questions.length)
        this.showResult();
      else
        this.question++;
    }
  }

  showResult() {
    const villain = this.answers.filter(alias => alias === 'A').length;
    const hero = this.answers.length - villain;

    if (villain > hero)
      this.result = this.quizz.results.A;
    else
      this.result = this.quizz.results.B;
  }
}
