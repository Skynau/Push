import { useContext, useState, React } from "react";
import Context from "../../Context";
import "./Dispositions.scss";

const Dispositions = () => {
    const [addClass1kk, setAddClass1kk] = useState(false);
    const [addClass1plus1, setAddClass1plus1] = useState(false);
    const [addClass2kk, setAddClass2kk] = useState(false);
    const [addClass2plus1, setAddClass2plus1] = useState(false);
    const [addClass3kk, setAddClass3kk] = useState(false);
    const [addClass3plus1, setAddClass3plus1] = useState(false);
    const [addClass4kk, setAddClass4kk] = useState(false);
    const [bigger, setBigger] = useState(false);

    const { dispatch } = useContext(Context);

    const toggle1kk = () => {
        dispatch({
            type: "1kk_TOGGLE",
        });
        setAddClass1kk((prevVal) => !prevVal);
    };

    const toggle1plus1 = () => {
        dispatch({
            type: "1plus1_TOGGLE",
        });
        setAddClass1plus1((prevVal) => !prevVal);
    };

    const toggle2kk = () => {
        dispatch({
            type: "2kk_TOGGLE",
        });
        setAddClass2kk((prevVal) => !prevVal);
    };

    const toggle2plus1 = () => {
        dispatch({
            type: "2plus1_TOGGLE",
        });
        setAddClass2plus1((prevVal) => !prevVal);
    };

    const toggle3kk = () => {
        dispatch({
            type: "3kk_TOGGLE",
        });
        setAddClass3kk((prevVal) => !prevVal);
    };

    const toggle3plus1 = () => {
        dispatch({
            type: "3plus1_TOGGLE",
        });
        setAddClass3plus1((prevVal) => !prevVal);
    };

    const toggle4kk = () => {
        dispatch({
            type: "4kk_TOGGLE",
        });
        setAddClass4kk((prevVal) => !prevVal);
    };

    const toggleBigger = () => {
        dispatch({
            type: "bigger_TOGGLE",
        });
        setBigger((prevVal) => !prevVal);
    };

    return (
        <div className="dispositons-btns">
            <button
                className={`btn ${addClass1kk ? " active" : ""}`}
                onClick={toggle1kk}
            >
                1kk
            </button>
            <button
                className={`btn ${addClass1plus1 ? " active" : ""}`}
                onClick={toggle1plus1}
            >
                1+1
            </button>
            <button
                className={`btn ${addClass2kk ? " active" : ""}`}
                onClick={toggle2kk}
            >
                2kk
            </button>
            <button
                className={`btn ${addClass2plus1 ? " active" : ""}`}
                onClick={toggle2plus1}
            >
                2+1
            </button>
            <button
                className={`btn ${addClass3kk ? " active" : ""}`}
                onClick={toggle3kk}
            >
                3kk
            </button>
            <button
                className={`btn ${addClass3plus1 ? " active" : ""}`}
                onClick={toggle3plus1}
            >
                3+1
            </button>
            <button
                className={`btn ${addClass4kk ? " active" : ""}`}
                onClick={toggle4kk}
            >
                4kk
            </button>
            <button
                className={`btn ${bigger ? " active" : ""}`}
                onClick={toggleBigger}
            >
                Bigger
            </button>
        </div>
    );
};

export default Dispositions;
