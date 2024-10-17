import Categories from "@/components/Categories";
import QuestionCard from "@/components/Question/QuestionCard/QuestionCard";
import IQuestion from "@/core/types/IQuestion";
import { Grid, GridItem } from "@chakra-ui/react";

export default async function Home() {
  const data: IQuestion[] = await fetch(`${process.env.API_URL}/api/questions`)
    .then((res) => res.json())
    .catch((err) => console.log(err));

  return (
    <Grid templateAreas={`"cats card card ads"`} mt={6} gridGap={4}>
      <GridItem area="cats">
        <Categories />
      </GridItem>
      {data.map((question) => (
        <GridItem key={question._id} area="card">
          <QuestionCard question={question}></QuestionCard>
        </GridItem>
      ))}
      <GridItem area="ads"></GridItem>
    </Grid>
  );
}
