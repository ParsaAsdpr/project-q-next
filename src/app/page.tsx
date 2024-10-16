import QuestionCard from "@/components/Question/QuestionCard";
import IQuestion from "@/core/types/IQuestion";

export default async function Home() {
  const data: IQuestion[] = await fetch(`${process.env.API_URL}/api/questions`)
    .then((res) => res.json())
    .catch((err) => console.log(err));

  return (
    <div>
      {data.map((question) => (
        <QuestionCard key={question._id} question={question}></QuestionCard>
      ))}
    </div>
  );
}
