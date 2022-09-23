import React from "react";
import "../../../styles/style.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as StarSolid } from "@fortawesome/free-solid-svg-icons";

interface Modal{
    showModal: boolean
}

function modal(props: Modal){
    const [show, setShow] = React.useState(props.showModal);
    const [rating, setRating] = React.useState(0);
    const [hover, setHover] = React.useState(0);
    const [title, setTitle] = React.useState("");
    const [user, setUser] = React.useState("");
    const [text, setText] = React.useState("");
    
    const submitForm = async (event: React.FormEvent<HTMLFormElement>) => {
        // Preventing the page from reloading
        event.preventDefault();    
    };

    if (show) {
        return(
            <section className="section is-large">
            <div className="modal is-active">
            <div className="modal-background"></div>
            <div className="modal-card">
                <header className="modal-card-head">
                <p className="modal-card-title">Bewertung</p>
                <button
                    className="delete"
                    aria-label="close"
                    onClick={()=> setShow(false)}
                ></button>
                </header>
                <form onSubmit={submitForm}>
                <section className="modal-card-body">
                    <div className="field is-grouped">
                    <p className="control is-expanded">
                        <input
                        className="input"
                        name="choreDesc"
                        type="text"
                        placeholder="Titel"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        />
                    </p>
                    <p className="control is-expanded">
                        <input
                        className="input"
                        type="text"
                        placeholder="Nutzer"
                        value={user}
                        onChange={(e) => setUser(e.target.value)}
                        />
                    </p>
                    </div>
    
                    <div className="is-flex rating">
                    {[...Array(5)].map((star, index) => {
                        index += 1;
                        return (
                        <button
                            type="button"
                            key={index}
                            className={index <= (hover || rating) ? "on" : "off"}
                            onClick={() => setRating(index)}
                            onMouseEnter={() => setHover(index)}
                            onMouseLeave={() => setHover(rating)}
                        >
                            <FontAwesomeIcon icon={StarSolid} className="star" />
                        </button>
                        );
                    })}
                    </div>
                    <textarea
                    className="textarea"
                    placeholder="e.g. Hello world"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    ></textarea>
                </section>
                <footer className="modal-card-foot">
                    <button className="button is-danger" onClick={()=> setShow(false)}>
                    Cancel
                    </button>
                    <button className="button is-success" type="submit">
                    Save changes
                    </button>
                </footer>
                </form>
            </div>
            </div>
        </section>
            );
     
    }
    return(
        null
    );
}
export default modal;