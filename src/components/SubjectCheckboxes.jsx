function SubjectCheckboxes({ subjects, handleSubjectChange }) {
  return (
    <>
      <label>Your best Subject</label>
      <input
        type="checkbox"
        checked={subjects.english}
        onChange={() => handleSubjectChange("english")}
      />
      English
      <label>Your best Subject</label>
      <input
        type="checkbox"
        checked={subjects.math}
        onChange={() => handleSubjectChange("math")}
      />
      Math
      <input
        type="checkbox"
        checked={subjects.history}
        onChange={() => handleSubjectChange("history")}
      />
      History
    </>
  );
}

export default SubjectCheckboxes;
