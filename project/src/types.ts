export interface Video {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  videoUrl: string;
  category: string;
}

export interface Quiz {
  id: string;
  videoId: string;
  questions: Question[];
}

export interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswer: number;
}

export interface User {
  id: string;
  name: string;
  tokens: number;
  completedQuizzes: string[];
  level: number;
}