import axios from "axios";
import { createContext, useReducer } from "react";



const initState = {
  posts: [],
  error: '',
  dataType: ''
}


const reducer = (state, action) => {
  if (action.type === 'SUCCESS') {
    return {
      posts: action.payload,
      error: '',
      dataType: action.dataType
    }
  } else if (action.type === 'ERROR') {
    return {
      posts: [],
      error: 'something went wrong',
      dataType: ''
    }
  } else {
    return state;
  }


}


export const DataContext = createContext({
  state: initState,
  getPosts() { },
  getComments() { },
  getUsers() { },
});

const DataContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initState);

  const getPosts = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
        params: { _limit: 15 }
      });
      dispatch({ type: 'SUCCESS', dataType: 'Posts', payload: response.data });
    } catch (err) {
      dispatch({ type: 'ERROR' });
    }

  }


  const getComments = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/comments', {
        params: { _limit: 15 }
      });
      dispatch({ type: 'SUCCESS', dataType: 'Comments', payload: response.data });
    } catch (err) {
      dispatch({ type: 'ERROR' });
    }

  }



  const getUsers = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      dispatch({ type: 'SUCCESS', dataType: 'Users', payload: response.data });
    } catch (err) {
      dispatch({ type: 'ERROR' });
    }

  }


  return <DataContext.Provider value={{ state, getComments, getPosts, getUsers }}>
    {props.children}
  </DataContext.Provider>


}


export default DataContextProvider;

