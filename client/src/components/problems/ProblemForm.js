import { useState, useEffect } from 'react';
import { MainButton } from '../styles/shared';
import { AuthConsumer } from '../../providers/AuthProvider';

const ProviderForm = ({ setAdd, addProblem, user, id, target, author, datetime, text, img, solved, setEdit, updateproblem }) => {
  const [problem, setProblem] = useState({ target: '', author: `${user.fname} ${user.lname}`, datetime: '', text: '', solved: false, img: 'https://images.unsplash.com/photo-1585776245865-b92df54c6b25?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80' })
  
  useEffect( () => {
    if (id) {
      setProblem({ target, author, datetime, text
    , img, solved })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      updateProblem(id, problem)
      setEdit(false)
    } else {
      addProblem(problem)
      setAdd(false)
    }
    setProblem({ target: '', author: `${user.fname} ${user.lname}`, datetime: '', text
: '', solved: false, img: 'https://images.unsplash.com/photo-1585776245865-b92df54c6b25?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80' })
  }

  return (
    <>
      <h1>{id ? "Update" : "Add"} Problem</h1>
      <form onSubmit={handleSubmit}>
        <label>Name of Problem</label>
        <input 
          name='target'
          value={problem.target}
          onChange={(e) => setProblem({...problem, target: e.target.value })}
          required
        />
        <label>When did you notice damage?</label>
        <input 
          type='datetime-local'
          name='datetime'
          value={problem.datetime}
          onChange={(e) => setProblem({...problem, datetime: e.target.value })}
        />
       
        <label>Image</label>
        <input 
          name='img'
          value={problem.img}
          onChange={(e) => setProblem({...problem, img: e.target.value })}
        />
        {
          id ?
          <>
            <label>Solved?</label>
            <input 
              type="checkbox"
              name='solved'
              value={problem.solved}
              onChange={(e) => setProblem({...problem, solved: e.value.checked })}
            />
          </>
          : 
          null
        }
        <MainButton type='submit'>
          Submit
        </MainButton>
      </form>
    </>
  )
}

const ConnectedproblemForm = (props) => (
  <problemConsumer>
    { value => <problemForm {...props} {...value} />}
  </problemConsumer>
)

const ConnectedproblemFormAuth = (props) => (
  <AuthConsumer>
    { value => <ConnectedproblemForm {...props} {...value} />}
  </AuthConsumer>
)

export default ConnectedproblemFormAuth;