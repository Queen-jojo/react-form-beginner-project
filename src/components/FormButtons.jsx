function FormButtons({ handleReset, handleSubmit }) {
  return (
    <>
      <button type="reset" onClick={handleReset}>
        Reset
      </button>
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </>
  );
}

export default FormButtons;
