import React from 'react';
import Proptypes from 'prop-types';
import Guest from './Guest';

const GuestList = props =>
	<ul>
	  { props.guests
	  	.filter(guest=> !props.isFiltered || guest.isConfirmed)
	  	.map((guest, index)=>
	  	<Guest 
	  		key={index} 
	  		name={guest.name} 
	  		isConfirmed={guest.isConfirmed}
	  		isEditing={guest.isEditing}
	  		handleConfirmation={() => props.toggleConfirmationAt(index)}
	  		handleToggleEditing={()=> props.handleToggleEditing(index)}
	  		setName={text => props.setNameAt(text, index)} />
	  )}
    </ul>;
GuestList.propTypes ={
	guests: Proptypes.array.isRequired,
	toggleConfirmationAt: Proptypes.func.isRequired,
	handleToggleEditing: Proptypes.func.isRequired,
	setNameAt: Proptypes.func.isRequired,
	isFiltered: Proptypes.bool.isRequired
}

export default GuestList;