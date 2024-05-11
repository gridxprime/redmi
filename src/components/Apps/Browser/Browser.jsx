const Browser = (props) => {
    return (
      <div className='app__name'>
        
        <img src={props.image} alt="" />
        <span>{props.text}</span>
      </div>
    )
  }
  
  export default Browser;