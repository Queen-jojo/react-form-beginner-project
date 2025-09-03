import { useLocation, useNavigate } from "react-router-dom";
import "./SubmittedPage.css";

function SubmittedPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state;
  const choiceLabels = {
    1: "HTML",
    2: "CSS",
    3: "Typescript",
    4: "React",
    5: "Node",
    6: "Python",
    7: "MongoDB",
  };

  if (!data) return <p>No submitted data.</p>;

  return (
    <div className="submitted-page">
      <div className="submitted-card">
        <h2>Form submitted succesfully</h2>
        <p>
          <strong>Name:</strong> {data.firstName} {data.lastName}
        </p>
        <p>
          <strong>Email:</strong> {data.email}
        </p>
        <p>
          <strong>Phone Number:</strong> {data.contact}
        </p>
        <p>
          <strong>Gender:</strong> {data.gender}
        </p>
        <p>
          <strong>Subjects:</strong>{" "}
          {Object.keys(data.subjects)
            .filter((s) => data.subjects[s])
            .join(", ")}
        </p>
        <p>
          <strong>Resume:</strong>{" "}
          {data.resume ? data.resume.name : "No file selected"}
        </p>
        <p>
          <strong>Choice:</strong>{" "}
          {choiceLabels[data.choice] || "No choice selected"}
        </p>
        <p>
          <strong>LinkedIn:</strong> {data.linkedInProfile}
        </p>
        <p>
          <strong>Bio:</strong> {data.bio}
        </p>
        <button onClick={() => navigate("/")} className="back-button">
          Back to Form
        </button>
      </div>
    </div>
  );
}

export default SubmittedPage;
