import React, {useState} from 'react';

const Dropdown = ({ props, title }) => {

    const [isDown, setIsDown] = useState(false)
    
    const handleClick = () => {
        isDown ? setIsDown(false) : setIsDown(true)
    }
    const displayProps = () => {
        if(typeof props === "object"){
            return (
                <ul>
                    {props.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            )
        }else{
            return <p>{props}</p>
        }
    }

    return (
        <div className='dropdown'>
            <div className="dropdown-head">
                <h3>{title}</h3>
                <button 
                    type='button'
                    onClick={() => handleClick()}
                    ><i class="fa-solid fa-chevron-down"></i>
                </button>
            </div>
            {isDown && 
                <div className='dropdown-content'>
                    {displayProps()}
                </div>
            }
        </div>
    );
}

export default Dropdown;
