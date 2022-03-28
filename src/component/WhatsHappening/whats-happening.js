import {useDispatch}
    from "react-redux";
import {useState} from "react";
const WhatsHappening = () => {
    let [whatsHappening, setWhatsHappening]
        = useState('');
    const dispatch = useDispatch();
    const tuitClickHandler = () => {
        dispatch({type: 'create-tuit',
            tuit: whatsHappening
        });
    }

    return (
        <>
      <textarea className="w-100" value={whatsHappening}
                onChange={(event) =>
                    setWhatsHappening(event.target.value)}>
      </textarea>
            <button className="btn-primary" onClick={tuitClickHandler}>
                Tuit
            </button>
        </>
    );
}
export default WhatsHappening;

