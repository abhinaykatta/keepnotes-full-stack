import React, { useEffect } from 'react'
import MainScreen from '../../components/MainScreen';
import CreateNote from '../../components/CreateNote';
import Notes from '../../components/Notes';
import { useDispatch, useSelector } from 'react-redux';
import { listNotes } from '../../Actions/noteActions';
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";
import { useNavigate } from 'react-router-dom';

function MyNotes() {

    const navigator = useNavigate();
    const dispatch = useDispatch();
    const notesList = useSelector(state => state.noteList);
    const { loading, notes, error } = notesList;

    const userLogin = useSelector(state => state.userLogin);
    const { userInfo } = userLogin;

    useEffect(() => {
        dispatch(listNotes());
        if (!userInfo) {
            navigator("/mynotes");
        }
    }, [])

    // console.log(notes);
    return (
        <MainScreen title={`Hey... ${userInfo.name}!`}>
            <CreateNote />
            <br></br>
            {error && <ErrorMessage variant='danger'>{error}</ErrorMessage>}
            {loading && <Loading size={40} />}
            <Notes notes={notes} />
        </MainScreen>
    )
}

export default MyNotes
