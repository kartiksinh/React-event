import React from 'react';
import Proptypes from 'prop-types';
import GuestName from './GuestName';

const Guest = props =>
	<li>
	    <GuestName 
	    	isEditing={props.isEditing} 
	    	handleNameEdits={e => props.setName(e.target.value)}>
	    	{props.name}
	    </GuestName>
	    <label>
	      <input 
	      	type="checkbox" 
	      	checked={props.isConfirmed}
	      	onChange={props.handleConfirmation} /> Confirmed
	    </label>
	    <button onClick={props.handleToggleEditing}>
	    	{props.isEditing ? "save" : "edit"}
	    </button>
	    <button>remove</button>
    </li>;
	
Guest.propTypes ={
	name : Proptypes.string.isRequired,
	isConfirmed: Proptypes.bool.isRequired,
	isEditing: Proptypes.bool.isRequired,
	handleConfirmation: Proptypes.func.isRequired,
	handleToggleEditing: Proptypes.func.isRequired,
	setName: Proptypes.func.isRequired
}

export default Guest;