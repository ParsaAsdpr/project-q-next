interface IQuestion {
  title: string;
  body: string;
  user: string;
  upvotes: number;
  downvotes: number;
  answers: string[];
  createdAt: Date;
  updatedAt: Date;
}

export default IQuestion;
