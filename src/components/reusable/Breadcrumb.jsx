import React from 'react'
import { Link } from 'react-router-dom'

const Breadcrumb = (props) =>
{
    return (
        <nav aria-label="breadcrumb" className='breadcrumb_wrapper'>
            <div className='container'>
                <h2 className='main_heading_title'>{props.pageHeader}</h2>
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li className="breadcrumb-item active" aria-current="page"> {props.pageHeader}</li>
                </ol>
            </div>
        </nav>
    )
}

export default Breadcrumb