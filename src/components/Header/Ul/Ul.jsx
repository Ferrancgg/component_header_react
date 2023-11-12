import { dataHeader } from "../dataHeader"
import "./Ul.css"


const Ul = () => {
  return (

        <ul className="ul">
          {dataHeader.map((e) => (
            <li className="li" key={e.id}>
              <a href={e.ref} className="a">
                {e.name}
              </a>
            </li>
          ))}
        </ul>
    
  )
}

export default Ul