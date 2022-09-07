
const CardLeft = (props)=>{
    const info = props.info;
    return <div className='card-left'>
    <div className='user-icon'>
        <div className='level'><span>level {info.level}</span></div>
        <img width='100px' src={info.image} className='icon' />
        <div className='points'><span>{info.points} points</span></div>
    </div>
    <div className='user-info'>
        <h2>{info.name}</h2>
        <div className='personal-info'>
            <p>{info.groupName}</p>
            <p>{info.joinedDate}</p>
            <p>{info.Position}</p>
            <p>{info.City}</p>
        </div>
        <div className='award-info'>
            <div className='award-item'>
                <span className='award-title'>awards</span>
                <span className='award-icon cup-icon fa-solid fa-xl'></span>
                <span className='award-number'>{info.awards}</span>
            </div>
            <div className='award-item'>
                <span className='award-title'>matchs</span>
                <span className='award-icon game-icon fa-solid fa-xl'></span>
                <span className='award-number'>{info.matchs}</span>
            </div>
            <div className='award-item'>
                <span className='award-title'>pals</span>
                <span className='award-icon people-icon fa-solid fa-xl'></span>
                <span className='award-number'>{info.pals}</span>
            </div>
            <div className='award-item'>
                <span className='award-title'>coffee</span>
                <span className='award-icon coffee-icon fa-solid fa-xl'></span>
                <span className='award-number'>{info.coffee}</span>
            </div>
        </div>
    </div>
</div>
}

export default CardLeft;