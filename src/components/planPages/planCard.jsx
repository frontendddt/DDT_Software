import React from 'react';
import planArray from '../ArrayFiles/planArray';
import { BiChevronsRight } from "react-icons/bi";
// import { Link } from 'react-router-dom';
const planCard = () =>
{
    return (
        <>
            {
                planArray.map((plan) =>
                {
                    return (
                        <div className='planCard' key={plan.id}>
                            <h2>{plan.planName}</h2>
                            <h4>{plan.price}</h4>
                            <ul>
                                {plan.details.map((detail) => (
                                    <li key={detail.id}>
                                        <p>
                                            <BiChevronsRight />
                                        </p>
                                        <p>{detail.subDetails}</p>
                                    </li>
                                ))}
                            </ul>
                            {/* <Link className='smoke_btn' to="/plan/details">Read More</Link> */}
                        </div>
                    );
                })

            }
        </>
    )
}

export default planCard