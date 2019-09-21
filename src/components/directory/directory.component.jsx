import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectDirectorySections } from '../../redux/directory/directory.selectors'

import "./directory.styles.scss";
import MenuItem from "../menu-item/menu-item.component";

const Directory = ({ sections}) => (
  <div className="directory-menu">
    {sections.map((
      { id, ...otherSectionProps } // Directly access by Destructuring
    ) => (
      <MenuItem key={id} {...otherSectionProps} /> //passing rest of the props by using spread operator
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);
