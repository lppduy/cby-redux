import store from './store/configureStore';
import { addTask, completedTask, removeTask } from './store/task';

// const unsubscribe = store.subscribe(() => {
// console.log('updated', store.getState());
// });

store.dispatch(addTask('Coding'));
store.dispatch(addTask('Sleeping'));
// console.log(store.getState());
// unsubscribe();

store.dispatch(completedTask(2));

// store.dispatch(removeTask(1));
console.log(store.getState());
