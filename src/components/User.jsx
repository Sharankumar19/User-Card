import '../App.css'
import UserImgae from '../assets/whatapp.jpeg'
function User(props){
    const Button = "button-section"
    const StyleButton = "follow"
    const items=["html","css","javascript","react js","bootstrap","material ui","tailwind css","redux"]
    return(
            <div className="card">
                <div className="section-1">
                    <span className={props.online?"pro-online":"pro-offline"}>{props.online?"online":"offline"}</span>
                    <img className='image' src={UserImgae} alt="" />
                </div>
                <div className="section-2">
                    <h2>{props.name}</h2>
                    <p>{props.city}</p>
                    <p className='role'>{props.role}</p>
                </div>
                <div className="button-section">
                    <button className={Button}>message</button>
                    <button className={StyleButton}>follow</button>
                </div>
                <div className="section-3">
                    <h3>skills</h3>
                    <ul>
                        {items.map((items,index)=>(<li key={index}>{items}</li>))}
                    </ul>
                </div>
            </div>     
    );
}
export default User;