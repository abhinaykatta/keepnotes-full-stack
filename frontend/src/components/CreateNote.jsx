import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ErrorMessage from "./ErrorMessage";
import Loading from "./Loading";
import { createNoteAction } from '../Actions/noteActions';


function CreateNote() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [isopen, open] = useState(false);

    const dispatch = useDispatch();
    const navigator = useNavigate();

    const noteCreate = useSelector((state) => state.noteCreate);
    const { loading, error, note } = noteCreate;

    const resetHandler = () => {
        setTitle("");
        setContent("");
    };

    const fun = (e) => {
        e.preventDefault();
        if (!title || !content) return;
        dispatch(createNoteAction(title, content));

        resetHandler();
        navigator("/");
    };

    const expand = () => {
        open(true);
    }
    return (
        <>
            {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
            {loading && <Loading size={20} />}
            <form className="create-note">
                <input type="text" placeholder={isopen ? "Title" : "Create Note"} name="title" onClick={expand} onChange={evt => setTitle(evt.target.value)} value={title}></input>
                {isopen && <textarea placeholder="Content" name="content" onChange={(evt) => setContent(evt.target.value)} value={content} row='3' ></textarea>}
                <Zoom in={isopen}>
                    <Fab onClick={fun}><AddIcon /></Fab>
                </Zoom>
            </form>
        </>
    )
}

export default CreateNote;