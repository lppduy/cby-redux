import { createAction } from '@reduxjs/toolkit';

// Action types
export const ADD_TASK = 'ADD_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';
export const TASK_COMPLETED = 'TASK_COMPLETED';

// Action

const lppd = createAction('LPPD');
console.log(lppd({ id: 222, msg: 'love u linh' }));
export function addTask(task) {
  return { type: ADD_TASK, payload: { task: task } };
}

export function removeTask(id) {
  return {
    type: REMOVE_TASK,
    payload: {
      id: id,
    },
  };
}
export function completedTask(id) {
  return {
    type: TASK_COMPLETED,
    payload: { id: id },
  };
}

// Reducer

let id = 0;

export default function reducer(state = [], action) {
  switch (action.type) {
    case ADD_TASK:
      return [
        ...state,
        {
          id: ++id,
          task: action.payload.task,
          completed: false,
        },
      ];
    case REMOVE_TASK:
      return state.filter(task => task.id !== action.payload.id);
    case TASK_COMPLETED:
      return state.map(task =>
        task.id === action.payload.id ? { ...task, completed: true } : task,
      );
    default:
      return state;
  }
}
