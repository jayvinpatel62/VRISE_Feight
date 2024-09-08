import React from 'react'
import EastIcon from '@mui/icons-material/East';


import PropTypes from 'prop-types';
import classNames from 'classnames';

const ServiceCard = ({  img,num='01', title, desc,bg='white', align ='center' }) => {
  return (

    <div className={classNames('servicesCard p-5 min-h-[500px] flex flex-col justify-center items-center relative', `bg-${bg}`, `text-${align}`)}>
              <div className='img'>
                <img src={img} alt="" />
              </div>
              <br />
              <div className="title font-bold text-2xl text-dark">
                <span className='backNum text-primary font-bold opacity-30'>{num}</span>
                {title}
              </div>
              <div className="content p-4">
                <p className='text-dark-light'>{desc}</p>
              </div>
              <br />
              <button className='flex gap-2 items-center uppercase py-[14px] px-[20px]  leading-[24px]  rounded-br-2xl border-2 hover:bg-primary-light bg-transparent border-primary transition-all text-dark'>Read More  <EastIcon /></button>
    </div>
  );
};

ServiceCard.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  align: PropTypes.string,
  bg: PropTypes.string,
};


export default ServiceCard;


