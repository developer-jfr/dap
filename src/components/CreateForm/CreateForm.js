import React from 'react'
import arrowRight from './../../images/arrowRight.svg'
import './CreateForm.css'
import todo from './../../images/todo.svg';
import x from './../../images/x.svg';
import {useSelector} from 'react-redux'


function CreateForm() {
  const tags = useSelector(state => state.dapplets.tags);
  return (
    <div className="form__wrapp">
      <div className="form__container">
        <div className="form__arrowRight">
          <img src={arrowRight} />
        </div>
        <div className="form__title">
          <h4>Dapplets Settings</h4>
        </div>
        <div className="form__input">
          <label>Fil Name</label>
       <div className='dapllets__btnIn'>
       <input />
        <button>Create</button>
       </div>
       
        </div>
        <div className="form__input">
        <label>Fil Name</label>
       <div  className='dapllets__btnIn'>
       <input />
        <button>Create</button>
       </div>
        </div>
        <div className='form__tags'>
            <h4>My Tags</h4>
            <ul>
            {tags.map((tag) => (
              <div className='navbar__tag' key={tag.id}>{tag.name}<img src={x} /></div>
            ))}
            </ul>
        </div>
        <div className='form__tags'>
            <h4>Comminity Tags</h4>
            <ul>
            {tags.map((tag) => (
              <div className='navbar__tag' key={tag.id}>{tag.name}<img src={x} /></div>
            ))}
            </ul>
        </div>
        <div className='form__tags'>
            <h4>Working on</h4>
            <ul>
            {tags.map((tag) => (
              <div className='navbar__tag' key={tag.id}>{tag.name}<img src={x} /></div>
            ))}
            </ul>
        </div>
      </div>
    </div>
  );
}

export default CreateForm;
