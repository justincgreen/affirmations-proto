const Card = () => {
  const handleClick = (e) => {
    //console.log(e.currentTarget);
    e.currentTarget.classList.toggle('is-active');
  }
  
  return (
    <div className="c-card" onClick={handleClick}>
      <div className="c-card__inner">
        <div className="c-card__front">
          <h1>Card Front</h1>
        </div>
        
        <div className="c-card__back">
          <h1>Card Back</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </div>      
    </div>
  )
}

export default Card