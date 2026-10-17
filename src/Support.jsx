import { useNavigate } from "react-router-dom";

function Support() {
    const navigate = useNavigate();

    return (
        <div>
            <h1>Support Page</h1>
            <h2>Sermon Audios</h2>
            <p>The application of Sermon Audios is easily accessed by pressing the Continue Button when launching the application.
                Select the preffered language, and the texts will be displayed in the selected language. If a narration is available for the text,
                a play button with red color will be displayed. Pressing the play button will play the narration for the text. If a narration is not available, the play button will be gray and disabled.
                Tap on the text to view the full text. You can save the text by pushing the heart button. If more support is needed, please contact me at my email:
                edgartorresberumen101193@gmail.com
            </p>

            <button onClick={() => navigate(-1)}>
                Back
            </button>
        </div>
    );
}

export default Support;