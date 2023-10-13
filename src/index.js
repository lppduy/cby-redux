import store from './store/configureStore';
import { addTask, completedTask, removeTask } from './store/task';
// const unsubscribe = store.subscribe(() => {
// console.log('updated', store.getState());
// });

store.dispatch(addTask({ task: 'Coding' }));
store.dispatch(addTask({ task: 'Sleeping' }));
// console.log(store.getState());
// unsubscribe();

store.dispatch(completedTask({ id: 2 }));

// store.dispatch(removeTask({id:1}));
console.log(store.getState());
