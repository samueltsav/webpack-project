import React from 'react';

function TextBox(props) {
  return (
		<>
			<div className="text_box">
				<h3 className="text_box-heading">{props.heading}</h3>
				<p className="text_box-paragraph">{props.paragraph}</p>
			</div>
		</>
	);
}

export default TextBox