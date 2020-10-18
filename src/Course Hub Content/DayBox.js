import React from "react"

const DayBox = (props) => {
    const day = props.day
    const classes = props.classes

    return(

        <div class="gridItem">
            <div style={{backgroundColor: "white", display: "inline-block"}}>
                <h2>{day}</h2>
                {classes.map(item => {
                    return(
                        <button
                            className="dayButton"
                            onClick={(e) => {
                                e.preventDefault();
                                window.location.href= item.link;
                            }}>
                            {item.class.split('-')[0]}
                        </button>)
                })}
            </div>
        </div>


    )
}
export default DayBox