import { Injectable } from '@angular/core';
import { QuizzModel } from 'src/app/model/quizz.model';
import Quizz from 'src/assets/data/quizz_questions.json';

@Injectable({
  providedIn: 'root'
})
export class QuizzService {
  getQuizz(): QuizzModel {
    return Quizz;
  }
}
