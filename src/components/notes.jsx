const Notes = ({note, handleDelete}) => {
  return(
    <div className="form-control mt-2 p-2">
      <p>{note.id}.</p>
      <p>Title: {note.title}</p>
      <p>Note: {note.note}</p>
      <button 
        onClick={()=>handleDelete(note.id)}
        className="btn btn-danger p-1">Delete</button>
    </div>
  );
}

export default Notes;