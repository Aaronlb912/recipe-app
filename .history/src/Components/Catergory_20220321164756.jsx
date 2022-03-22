import {FaPizzaSlice, FaHamburger} from 'react-icons/fa'
import {GiNoodles, GiChopSticks} from 'react-icons/gi'
import styled from 'styled-components'
import {NavLink} from 'react-router-dom'


function Catergory() {
  return (
    <div>
        <div>
            <FaPizzaSlice/>
            <h4>Italian</h4>
        </div>
        <div>
            <FaHamburger/>
            <h4>American</h4>
        </div>
        <div>
            <G/>
            <h4>Italian</h4>
        </div>
        <div>
            <FaPizzaSlice/>
            <h4>Italian</h4>
        </div>
    </div>
  )
}

export default Catergory