import React, { Component } from 'react'

export default class Title extends Component {
    render() {
        return (
            <div className="title">
                {
                    this.props.render()
                }

            </div>
        )
    }
}
