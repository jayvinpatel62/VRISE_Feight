import React from "react";

const StepsCard = ({title, desc,day,month}) => {
  return (
    <>
        <div className="steps_timeline_item relative">
            <div className="timeline_date_part">
                <div className="timeline_date"> {day}<span>/ {month}</span></div>
            </div>
            <div className="steps_timeline_info_part">
                <div className="steps_timeline_info_part_wrapper">
                    <h1 className=" text-[19px]  mb-[13px] leading-[26px] font-bold text-[#414a53]">
                        {title}
                    </h1>
                    <p>
                        {desc}
                    </p>
                </div>
            </div>
            
        </div>
    
 
        
    </>
    
  );
}

export default StepsCard;
