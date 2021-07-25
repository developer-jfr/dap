import { dappletsAPI } from '../../api/api';
import {SET_DAPPLETS, SET_CURRENT_PAGE, SET_IS_FETCHING, SET_FILES, SET_TAGS} from './../redux-type/types'


export const setDappletsAC = (dapplets) => ({type:SET_DAPPLETS, payload: {dapplets} });
export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, payload: {currentPage}})
export const setIsFetcing = (isFetching) => ({type: SET_IS_FETCHING, payload: isFetching})
export const setFilesAC = (filename) => ({type: SET_FILES, payload: {filename} })
export const setTagsAC = (tag) => ({type: SET_TAGS, payload: {tag}})

export const setDappletsThunk = (currentPage,title, type) => {

    return async (dispatch) => {
        try {
        dispatch(setIsFetcing(true))
        let response = await dappletsAPI.getDapplets(currentPage ,JSON.stringify(title), JSON.stringify(type))
        dispatch(setDappletsAC(response.data))
        dispatch(setCurrentPageAC(currentPage))
        
        } catch(error) {
            console.log(error)
            
        }
        finally {
            dispatch(setIsFetcing(false))
        }

        
    }
}



export const getTags = () => {
  return async (dispatch) => {
      let response = await dappletsAPI.getTags();
      
      dispatch(setTagsAC(response.data));
      console.log(response.data)
  }
}

