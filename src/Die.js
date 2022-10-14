function Pip() {
  return (
    <span className="pip"></span>
  )
}

function Die(props) {
  const styles = {
    backgroundColor: props.isHeld ? "#59E391" : "#fff",
    boxShadow: props.isHeld ? "inset 0 5px #59E391, inset 0 -5px #47c278, inset 5px 0 #4ed182, inset -5px 0 #4ed182" : "inset 0 5px white, inset 0 -5px rgb(204, 204, 204), inset 5px 0 #e6e6e6, inset -5px 0 #e6e6e6"
  }
  
  let pip = Number.isInteger(props.value)
    ? Array(props.value).fill(0).map((_, i) => <Pip key={i} />)
    : null;

  return (
    <div 
      className="die" 
      style={styles}
      id={props.id} 
      onClick={props.holdDice}
      >
        {pip}
    </div>
  )
}

export default Die;