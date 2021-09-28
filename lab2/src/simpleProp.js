import React, { Component } from 'react'
class SimpleProp extends Component {
render() {
return (
<div>
<span>
{this.props.name}<span>&nbsp;</span>
{this.props.description}<span>&nbsp;</span>
£{this.props.price}
</span>
</div>
)
}
}
export default SimpleProp