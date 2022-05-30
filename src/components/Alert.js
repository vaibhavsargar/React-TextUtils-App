import React from 'react'

function Alert(props) {
    const capitalize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
        
    }
  return (
    props.alert && <div className={`alert alert-${props.alert.type} d-flex align-items-center`} role="alert">
        {/* <svg className="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill"/></svg> */}
        <div>
            <b>{capitalize(props.alert.type)} : </b> {props.alert.msg}
        </div>
    </div>
  )
}

export default Alert