import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { activeNote, startDelete } from '../../actions/notes';
import { useForm } from '../../hooks/useForm';
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {

    const dispatch = useDispatch();

    const {active} = useSelector(state => state.notes);

    const [formvalues, handleChange, reset ] = useForm(active);

    const {body, title, id} = formvalues;

    const activedID = useRef(active.id);

    useEffect(() => {

        if (active.id !== activedID.current) {
            reset(active);
            activedID.current = active.id
        }
    },[active, reset])

    useEffect(() => {
        dispatch(activeNote(formvalues.id, {...formvalues}))
    },[formvalues, dispatch]);

    const handleDelete = () => {
        dispatch(startDelete(id))
    }
    
  return (
    <div className='notes__main-content'>
        <NotesAppBar/>
        <div className='notes__content'>
            <input
                type='text'
                placeholder='Some awesome title'
                className='notes__title-input'
                value={title}
                onChange={handleChange}
                name='title'
            />
            <textarea
                placeholder='What happened today?'
                className='notes__textarea'
                value={body}
                onChange={handleChange}
                name='body'
            />

              {
                  active.url &&
                  <div className='notes__image'>
                      <img
                          // src='https://images.immediate.co.uk/production/volatile/sites/25/2020/08/ButterflyNebula-7e4a9ff.jpg?quality=90&resize=768,574'
                          src={active.url}
                          alt='Alguna imagen'
                      />
                  </div>
              }
        </div>

        <button
            className='btn btn-danger'
            onClick={handleDelete}
        >
            Delete
        </button>
    </div>
  )
}
