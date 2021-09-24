function EyesOnMe() {

  function onFocusHandler() {
    console.log('Good!');
  }

  function onBlurHandler() {
    console.log('Hey! Eyes on me!');
  }

  return (
    <div>
      <button onFocus={onFocusHandler} onBlur={onBlurHandler}>Eyes on me</button>
    </div>
  );
}

export default EyesOnMe;