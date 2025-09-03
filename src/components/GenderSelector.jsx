function GenderSelector({ gender, setGender }) {
  return (
    <>
      <label>Gender*</label>
      <input
        type="radio"
        name="gender"
        value="male"
        checked={gender === "male"}
        onChange={(e) => setGender(e.target.value)}
      />{" "}
      Male
      <input
        type="radio"
        name="gender"
        value="female"
        checked={gender === "female"}
        onChange={(e) => setGender(e.target.value)}
      />{" "}
      Female
      <input
        type="radio"
        name="gender"
        value="other"
        checked={gender === "other"}
        onChange={(e) => setGender(e.target.value)}
      />{" "}
      Other
    </>
  );
}

export default GenderSelector;
