import React from 'react';
import counterArray from '../ArrayFiles/counterArray';
import "../../assest/css/counter.css";
const Counter = () =>
{
  return (
    <section className='counter_wrapper'>
      <div className='container pt-3'>
        <div className='row'>
          {
            counterArray.map((index, id) =>
            {
              return (
                <>
                  <div className='col-lg-3 col-md-6' key={id}>
                    <div className='counter_card'>
                      <span className='head_img'>
                        <img src={index.icon} alt={index.icon} />
                      </span>
                      <div className='counter_text'>
                        <h3 className='main_heading_title'>
                          {index.title}
                        </h3>
                        <p className='detailsub_heading_title_text'>
                          {index.subtitle}
                        </p>
                      </div>

                    </div>
                  </div>
                </>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default Counter