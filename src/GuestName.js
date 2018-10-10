import React from 'react';
import Proptypes from 'prop-types';

const GuestName = props => {
	if(props.isEditing){
		return(
			<input 
				type="text" 
				value={props.children} 
				onChange={props.handleNameEdits}/>
		);
	}
	return (
		<span>
			{props.children}
		</span>
	);
};
	
	
GuestName.propTypes ={
	isEditing: Proptypes.bool.isRequired,
	handleNameEdits: Proptypes.func.isRequired
}

export default GuestName;