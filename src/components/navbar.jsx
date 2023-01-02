const Navbar = ({handleFilter}) => {
  return(
    <div className="navbar bg-dark fixed-top">
      <h3 className="navbar-brand">
          <span className="n">N</span>
          <span className="o">o</span>
          <span className="t">t</span>
          <span className="e">e</span>
          <span className="n">P</span>
          <span className="o">a</span>
          <span className="t">d</span>
        </h3>
      <div className="form-inline">
        <input 
          type="text"
          placeholder="Search Notes by Title or Index..."
          onChange={(e)=>handleFilter(e.target.value)}
          className="form-control"/>
      </div>
      
    </div>
  );
}

export default Navbar;