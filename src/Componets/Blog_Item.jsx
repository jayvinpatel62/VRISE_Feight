import React from 'react'

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

const Blog_Item = ({  img, category, date, creator, title, desc }) => {
  return (

    <div className='blog-item'>
        <div className='imgBox relative w-full h-[200px] max-h-[200px]'>
            <div className='category absolute bottom-0 left-6 p-2 px-10 bg-primary text-white '>
                <a href=''>{category}</a>
            </div>
            <img className='bg-cover w-full h-full' src={img} />
        </div>
        <div className="content bg-[#fff] py-[20px] px-[30px]">
            <span className=' text-[15px] text-[#2B5BAC] '>{date} / by {creator}</span>
            <h3 className=' pt-[10px] font-bold text-[17px]'>{title}</h3>
            <p className=' pt-[15px] text-[#6A6E76] leading-6'>{desc}</p>
        </div>
    </div>

   
  );
};

Blog_Item.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  category: PropTypes.string,
  date: PropTypes.string,
  creatorL:PropTypes.string,
};


export default Blog_Item;
