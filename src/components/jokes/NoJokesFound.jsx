import Button from "../UI/Button/Button";
import Section from "../layout/Section/Section";

const NoJokesFound = () => {
  return (
    <Section className='grow-center section-padding'>
      <h1 className='heading'>No jokes found!</h1>
      <Button type='link' to='/add-joke' className='centered mt-20'>Add a Joke</Button>
    </Section>
  );
};

export default NoJokesFound;
