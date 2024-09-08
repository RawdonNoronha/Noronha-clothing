import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import "./directory.styles.scss";
import { connect } from "react-redux";
import { selectDirectorySections } from "../../redux/directory/directory.selector";
import { createStructuredSelector } from "reselect";

export const Directory = ({ sections }) => {
    return (
      <div className="directory-menu">
        {
            sections.map(({id, ...OtherSectionProps}) =>(
                <MenuItem key={id} {...OtherSectionProps} />
            ))
        }
      </div>
    )
}

const mapStatesToProps = createStructuredSelector({
    sections: selectDirectorySections
})

export default connect(mapStatesToProps)(Directory);
