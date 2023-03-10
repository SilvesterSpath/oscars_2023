import { PropTypes } from "prop-types"
function Card({children, reverse}) {
/*   return (
    <div className={`card ${reverse && 'reverse'}`}>{children}</div>
  ) */

  return (
    <div className="card" style={{backgroundColor: reverse ? 'rgba(0,0,0, 0.4)': '#fff', color: reverse ? 'white': 'black', textAlign: 'center'}}>
      {children}
    </div>
  )
}

Card.propTypes = {
  children: PropTypes.node,
  reverse: PropTypes.bool
}

export default Card