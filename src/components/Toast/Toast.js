import React, { Component } from 'react'

export default class Toast extends Component {

    render() {

        const { listToast, handeDeleteToast } = this.props;
        console.log(listToast);
        return (
            <div className="box-toast">
                {
                    listToast.map((toast, index) => {
                        return (
                            <div key={index} className="toast" role="alert" aria-live="assertive" aria-atomic="true">
                                <div className="toast-header">

                                    <strong className="mr-auto">{toast.info}</strong>
                                    <small className="text-muted">just now</small>
                                    <button type="button" className="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                                        <span aria-hidden="true" onClick={() => handeDeleteToast(listToast, index)}>&times; </span>
                                    </button>
                                </div>
                                <div className="toast-body">
                                    {toast.title}
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        )
    }
}
