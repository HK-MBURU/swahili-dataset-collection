import React, { useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./recording.css";
import MicIcon from "@mui/icons-material/Mic";
import MicOffIcon from "@mui/icons-material/MicOff";

function RecordingPage() {
  const [points, setPoints] = useState(40);
  const [word, setWord] = useState("Mdhamini");
  const [isRecording, setIsrecording] = useState(false);
  const [audioChunks, setAudioChunks] = useState([]);
  const [isSaveButtonActive, setIsSaveButtonActive] = useState(false);
  const [recordedAudios, setRecordedAudios] = useState([]);
  const audioRecorderRef = useRef(null);

  const startRecording = () => {
    // audio recording logic
    setIsrecording(true);
  };

  const stopRecording = () => {
    // stopping audio recording logic
    setIsrecording(false);
    const recordedAudio = "Sample Recorded Audio";
    setRecordedAudios([...recordedAudios, recordedAudio]);
    if (recordedAudios.length >2) {
      setIsSaveButtonActive(true);
    }
  };
  const saveAudio = () => {
    // Logic to save audio
  };

  return (
    <div className="container">
      <header className="navbar navbar-expand-lg navbar-light bg-light">
        <span className="navbar-brand">Swahili DataSet App</span>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a href="#" className="nav-link">
              Points{" "}
              <span
                className="badge badge-pill badge-primary"
                style={{ backgroundColor: "blue" }}
              >
                {points}
              </span>
            </a>
          </li>
        </ul>
      </header>
      <div className="text-center mt-5">
        <h1>{word}</h1>
      </div>
      <div className="text-center mt-5">
        <button
          onClick={startRecording}
          className="btn btn-primary "
          style={{ marginRight: "10px" }}
        >
          <MicIcon />
        </button>
        <button onClick={stopRecording} className="btn btn-danger">
          <MicOffIcon />
        </button>
      </div>
      <div className="text-center mt-5">
        <button
          onClick={saveAudio}
          className="btn btn-succes"
          disabled={!isSaveButtonActive}
        >
          Save Recorded Audio
        </button>
      </div>
      <div className="mt-5">
        {recordedAudios.map((audio, index) => (
          <audio controls>
            <source src={audio} type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
        ))}
      </div>
    </div>
  );
}

export default RecordingPage;
