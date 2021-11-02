import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { loadBugs, getUnresolvedBugs, getBugsByUser } from '../store/bugs';

function BugsList() {

    
    // const bugs = useSelector(getUnresolvedBugs)
    const bugs = useSelector(getUnresolvedBugs)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadBugs())
    });
    

    return (
        <ul>
            {bugs.map(bug => <li key={bug.id}>{bug.description}</li>)}
        </ul>
    )
}

export default BugsList
