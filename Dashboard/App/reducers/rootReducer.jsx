import { combineReducers } from 'redux'
import categories from '../containers/category/categoryReducer.jsx'
import newCategoryReducer from '../containers/newCategory/newCategoryReducers.jsx'
export default combineReducers({
    categories,
    newCategoryReducer
})