import { createContext } from 'react';

const initialData = {
    todos: [],
    setTodos: (todos) => {}
};

const AppContext = createContext(initialData)

export default AppContext;