import React from 'react'
import {Field, Form, Formik} from 'formik'
import { setDappletsThunk } from '../../redux/actions/action';
import {useDispatch, useSelector} from 'react-redux'
import {Input, Select, Button} from '@material-ui/core'
import search from './../../images/search.svg'


const usersSearchFormValidate = () => {
    const errors = {}
    return errors
}

function SearchForm() {
  
    
    const dispatch = useDispatch();
  
 

    const submit = (values, {setSubmitting}) => {
       
     console.log(values);
       dispatch(setDappletsThunk( values.title, values.type))
        setSubmitting(false)
    }
   

    return <div>
        <Formik
            
            initialValues={{title: '', realise: '', type: '' }}
            validate={usersSearchFormValidate}
            onSubmit={submit}
        >
            {({ isSubmitting }) => (
                <Form>
                    
                    <Field className='dapletts__input' type="text" name="title"  />

                    <Field className='dapletts__select' name="type" as="select" >
                        <option value="null">All</option>
                        <option value="ASC">ASK</option>
                        <option value="DESK">DESK</option>
                    </Field>
                    <Field className='dapletts__select' name="realise" as="select" >
                        <option value="null">All</option>
                        <option value="new">Newest</option>
                        <option value="late">Latest</option>
                    </Field>
                  
                   <button className='dapletts__btn'  type="submit" disabled={isSubmitting}>
                        Find
                    </button>
                 
                </Form>
            )}
        </Formik>
       
    </div>
}

export default SearchForm
