import {SET_DAPPLETS, SET_CURRENT_PAGE, SET_IS_FETCHING,  SET_TAGS} from '../redux-type/types'

const initialState = {
  dapplets: [],
  currentPage: 1,
  isFetching: true,
  
  tags: []
};



export const dappletsReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_DAPPLETS: {
            return {
                ...state,
                dapplets: action.payload.dapplets
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
              currentPage: [...state.currentPage, action.payload.currentPage + 1]
            }
        }
        case SET_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.payload.isFetching
            }
        }
      
        case SET_TAGS: {
            return {
                ...state,
                tags: action.payload.tag
            }
        }
        
        default: return state
    }
}


