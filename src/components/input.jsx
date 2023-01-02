const Input = ({input, handleInput, title, handleTitle, handleSubmit}) => {
  return(
    <div>
      <input
        type="text"
        className="form-control w-70"
        value={title} 
        placeholder="Title"
        onChange={(e)=>handleTitle(e.target.value)}/> <br/>
      <textarea
        type="text" 
        className="form-control w-70"
        rows="4"
        value={input}
        placeholder="Notes Go in here..."
        onChange={(e) => handleInput(e.target.value)}
      />
      <button 
        className="btn btn-primary mt-2"
        onClick={handleSubmit}
      > Add Notes </button>
    </div>
  );
}

export default Input;