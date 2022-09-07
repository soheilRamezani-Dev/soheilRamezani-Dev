import CardLeft from './cardLeft';
import CardRight from './cardRight';
import './style.css'

const Card = (props)=>{
return <>
    <div className= {'card '+props.backColor}>
        <CardLeft info = {props.userInfo} />
        <CardRight name = {props.userInfo.name} description = {props.userInfo.decription} />
        
    </div>
</>
}

export default Card;