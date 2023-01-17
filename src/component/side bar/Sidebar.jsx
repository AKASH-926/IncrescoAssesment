import React from 'react'
import Checkbox from './Checkbox'
import './Sidebar.css'
export default function () {
    return (
        <div className='side-wrap'>
            <div className='f-wrap'>

                <div className='s-wrap'>Filter by</div>
                <hr />
                <div>Company</div>
                <Checkbox values={{ c1: 'Amazon', c2: 'Google', c3: 'Netflix', c4: 'Incresco' }} />
                <div>Location</div>
                <Checkbox />
                <div>Date posted</div>
                <Checkbox />
                <div>Slaray Range</div>
                <Checkbox />
                <div>Skills</div>
                <Checkbox />
            </div>

        </div>
    )
}
