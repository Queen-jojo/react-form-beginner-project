import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
import InputField from "./components/InputField";
import GenderSelector from "./components/GenderSelector";
import SubjectCheckboxes from "./components/SubjectCheckboxes";
import FormButtons from "./components/FormButtons";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [gender, setGender] = useState("male");
  const [subjects, setSubjects] = useState({
    english: true,
    maths: false,
    history: false,
  });
  const [resume, setResume] = useState("");
  const [linkedInProfile, setLinkedInProfile] = useState();
  const [choice, setChoice] = useState("");
  const [bio, setBio] = useState("");
  // const [submittedData, setSubmittedData] = useState(null);
  const navigate = useNavigate();

  const handleSubjectChange = (subject) => {
    setSubjects((prev) => ({
      ...prev,
      [subject]: !prev[subject],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/submitted", {
      state: {
        firstName,
        lastName,
        email,
        contact,
        gender,
        subjects,
        resume,
        linkedInProfile,
        choice,
        bio,
      },
    });
  };

  const handleReset = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setContact("");
    setGender("");
    setSubjects({
      english: true,
      maths: false,
      history: false,
    });
    setResume("");
    setLinkedInProfile("");
    setChoice("");
    setBio("");
  };

  return (
    <div className="form-page">
      <div className="App">
        <h1>Form in React</h1>
        <fieldset>
          <form action="#" method="get">
            <InputField
              label="First Name*"
              type="text"
              name="firstname"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Enter First Name"
              required
            />

            <InputField
              label="Email*"
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
              required
            />

            <InputField
              label="Phone Number*"
              type="tel"
              name="contact"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              placeholder="Enter phone number"
              required
            />

            <GenderSelector gender={gender} setGender={setGender} />
            <SubjectCheckboxes
              subjects={subjects}
              handleSubjectChange={handleSubjectChange}
            />

            <label htmlFor="file">Upload Resume*</label>
            <input
              type="file"
              name="file"
              id="file"
              onChange={(e) => setResume(e.target.files[0])}
              required
            />

            <InputField
              label="LinkedIn Profile"
              type="url"
              name="url"
              value={linkedInProfile}
              onChange={(e) => setLinkedInProfile(e.target.value)}
            />

            <label> Select your choice</label>
            <select
              name="select"
              id="select"
              value={choice}
              onChange={(e) => setChoice(e.target.value)}
            >
              <option value="" disabled>
                Select your Ans
              </option>
              <optgroup label="Beginners">
                <option value="1">HTML</option>
                <option value="2">CSS</option>
                <option value="3">Typescript</option>
              </optgroup>
              <optgroup label="Advanced">
                <option value="4">React</option>
                <option value="5">Node</option>
                <option value="6">Python</option>
                <option value="t">MongoDB</option>
              </optgroup>
            </select>

            <label htmlFor="about">About</label>
            <textarea
              id="about"
              cols="30"
              rows="5"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              placeholder="Who are you?"
              required
            ></textarea>

            <FormButtons
              handleReset={handleReset}
              handleSubmit={handleSubmit}
            />
          </form>
        </fieldset>
      </div>
    </div>
  );
}

export default App;
