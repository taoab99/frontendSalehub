import { getAuth, signOut } from '@firebase/auth';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Account extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
        this.state = {
            user: JSON.parse(localStorage.getItem("account"))
        }
    }
    logout() {
        const auth = getAuth();
        signOut(auth)
            .then(() => {
                console.log('sign out success full');
                this.setState({
                    user: JSON.parse(localStorage.getItem("account"))
                })
            })
            .catch(error => {
                console.log(error);
            });


    }
    render() {
        const account = JSON.parse(localStorage.getItem("account"));
        return (
            <div className="menu-account">
                {
                    account ? <div className="account-box text-left">{account}</div> :
                        <div className="account-box text-left">chưa có tài khoản</div>
                }

                <div className="account-box text-left">
                    <Link className="p-0" to="/singgin" > Loggin</Link>
                </div>

                <div onClick={this.logout} className="account-box text-left">
                    <Link className="p-0" to="/" > Register Account</Link>
                </div>
                <div className="account-box text-left">Check out</div>
                <div className="account-box text-left">My wishlist</div>

            </div >
        )
    }
}
