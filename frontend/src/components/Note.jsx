import React from "react";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteNoteAction } from "../Actions/noteActions";

function Note(props) {
    console.log(props);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const noteDelete = useSelector((state) => state.noteDelete);
    const { loading: loadingDelete, error: errorDelete } = noteDelete;

    const fun = async (e) => {
        e.preventDefault();
        if (window.confirm("Are you sure, You want to delete it?")) {
            await dispatch(deleteNoteAction(props.id));
            navigate("/")
        }
    }
    return (
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button onClick={fun}><abbr title="Delete Note"><DeleteForeverIcon /></abbr></button>
        </div>
    )
}


export default Note;