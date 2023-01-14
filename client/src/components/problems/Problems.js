
import { useEffect, useState } from "react";
import ProblemList from './ProblemList';
import ProblemForm from './ProblemForm';
import { MainButton, MainContainer } from "../styles/shared";

const Problems = ({ getAllProblems, problems }) => {
  const [adding, setAdd] = useState(false);

  useEffect( () => {
    getAllProblems()
  }, [])

  return (
    <MainContainer>
      {
        adding ?
        <>
          <ProblemForm setAdd={setAdd} />
          <MainButton onClick={() => setAdd(false)}>
            Cancel
          </MainButton>
        </>
        :
        <MainButton onClick={() => setAdd(true)}>
          +
        </MainButton>
      }
      <h1>All Problems</h1>
      <ProblemList problems={problems} />
    </MainContainer>
  )
}

const ConnectedProblems = (props) => (
  <ProblemConsumer>
    { value => <Problems {...props} {...value} />}
  </ProblemConsumer>
)

export default ConnectedProblems;