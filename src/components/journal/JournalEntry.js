import moment from 'moment';
import React from 'react';
import { useDispatch } from 'react-redux';
import { activeNote } from '../../actions/notes';


export const JournalEntry = (note) => {

    const dispatch = useDispatch();

    const {id, date, title, url} = note;

    const noteDate = moment(date);

    const handleEntryClick = () => {
        dispatch(activeNote(id, note))
    }

  return (
    <div className='journal__entry pointer' onClick={handleEntryClick}>
        {
            url &&
        <div className='journal__entry-picture'
        style={{
            backgroundSize: 'cover',
            // backgroundImage: 'url(https://moon.nasa.gov/system/resources/detail_files/224_detail_as15-91-12343_orig.jpg)'
            backgroundImage: `url(${url})`
        }}
        >

        </div>
        }

        <div className='journal__entry-body'>

            <p className='journal__entry-title'>{title}</p>
            {/* <p className='journal__entry-content'>{body}</p> */}

        </div>

        <div className='journal__entry-date-box'>
            <span> {noteDate.format('dddd')} </span>
            <h4> {noteDate.format('Do')} </h4>
        </div>

    </div>
  )
}
