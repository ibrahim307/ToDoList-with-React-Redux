import  {createStore} from 'redux'
import listReducer from  './Reducers/Reducer'

const store = createStore(listReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
export default store
