import React,{useEffect,useRef} from 'react';
import './MessagesSection.css';
function MessagesSection({messages,name}) {
    const lastItem = useRef(null);
    useEffect(() => {
		lastItem.current.scrollIntoView({ behavior: 'smooth' });

	}, [messages]);

    return (
        <div className="messages-section-container">

            {
                messages.map((item,index)=>{

                    return(

                        (item.user.trim().toLowerCase() != name.trim().toLowerCase())?
                        <div className="message-box-wrapper left" key={index}>
                            <div className="message-box">
                                <span className="user">
                                    {item.user}
                                </span>
                                <span className="message">
                                    {item.text}
                                </span>
                            </div>
                        </div>
    
                        :
                        <div className="message-box-wrapper right" key={index}>
                        <div className="message-box">
                                <span className="message">
                                    {item.text}
                                </span>
                            </div>
                        </div>
                    )


                })
            }


            <div ref={lastItem}></div>

            {/* <div className="message-box-wrapper left">
                <div className="message-box">
                    <span className="user">
                        vishnu
                    </span>
                    <span className="message">
                        hello
                    </span>
                </div>
            </div>
            <div className="message-box-wrapper right">
            <div className="message-box">
                    <span className="message">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora ratione delectus corporis excepturi. Optio, ipsam! Eligendi nam nemo odio error sint exercitationem cumque voluptatem enim, neque voluptate voluptates veniam modi!
                    </span>
                </div>
            </div> */}
        </div>
    )
}

export default MessagesSection;
