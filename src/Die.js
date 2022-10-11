export default function Die(props) {
  const styles = {
    backgroundColor: props.isHeld ? "#59E391" : "#fff"
  }
  
  return (
    <>
      <div className="die" style={styles}>{props.value}</div>
    </>
  )
}