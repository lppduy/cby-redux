import store from './store/configureStore';
import { completedTask, addTask } from './store/task';
import { addEmployee } from './store/employees';

store.dispatch(addEmployee({ name: 'lppd' }));
