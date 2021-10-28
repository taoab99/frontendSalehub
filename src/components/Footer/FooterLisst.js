import React, { Component } from 'react'

export default class FooterLisst extends Component {
    render() {
        const { list } = this.props;
        return (
            <div className="footer-list">
                <h3 className="mb-5">{list.title}</h3>
                <ul className="px-0">
                    {
                        list.list.map((items, index) => {
                            return (
                                <li key={index}>
                                    <a href="#" >{items}</a>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}
