import React, { Component } from 'react';
import '../../style/singgin.css';
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "firebase/auth";
import { Redirect } from 'react-router';
import analyticss from '../../firebase';
import Toast from '../Toast/Toast';


export default class Singgin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            isEmail: false,
            isPassword: false,
            userAuthid: null,
            userAuthEmail: null,
            listToast: [],
            isRedirect: false
        }
        this.onChange = this.onChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handeDeleteToast = this.handeDeleteToast.bind(this);
        this.singUp = this.singUp.bind(this);
        this.singIn = this.singIn.bind(this);
        this.createToast = this.createToast.bind(this);
        this.validateForm = this.validateForm.bind(this);
    }
    onChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        if (name === "email") {
            this.setState({
                ...this.state,
                isEmail: false,
                [name]: value
            });
        } else {
            this.setState({
                ...this.state,
                isPassword: false,
                [name]: value
            });
        }


    }
    validateForm(cb) {
        if (this.state.email === "" || this.state.password === "") {
            if (this.state.email === "" && this.state.password === "") {
                this.setState({
                    ...this.state,
                    isEmail: true,
                    isPassword: true
                });
            }
            else if (this.state.email === "") {
                this.setState({
                    ...this.state,
                    isEmail: true
                });
            } else {
                this.setState({
                    ...this.state,
                    isPassword: true
                });
            }

        }
        else {
            cb();
            this.setState({
                ...this.state,
                email: "",
                password: "",
                isEmail: false,
                isPassword: false
            })
        }

    }

    createToast(info, title) {
        const showToast = { info, title };
        const toast = this.state.listToast;
        toast.push(showToast);
        console.log(toast);
        this.setState({
            ...this.state,
            listToast: toast
        })
    }

    handleSubmit(event, callback) {
        event.preventDefault();
        this.validateForm(callback);


    }

    singUp() {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, this.state.email, this.state.password)
            .then(async (userCredential) => {
                await this.createToast("thông báo", "tạo tài khoản thành công");
            })
            .catch(async (erro) => {
                await this.createToast("thông báo", "không thể tạo");
            });
    }
    singIn() {
        const auth = getAuth();

        signInWithEmailAndPassword(auth, this.state.email, this.state.password)
            .then(async (userCredential) => {
                const user = userCredential.user;
                localStorage.setItem("account", JSON.stringify(user.email));
                await this.createToast("tb đăng nhập", "đăng nhập thành công");

            })
            .catch(async (erro) => {
                await this.createToast("tb đăng nhập", "không đăng nhập được");
                console.log(erro);
            });
    }
    handeDeleteToast(id) {
        const a = this.state.listToast;
        console.log(a.splice(id, 1));
        this.setState({
            ...this.state,
            listToast: a
        })
    }
    render() {
        const { isEmail, isPassword, listToast, isRedirect } = this.state;
        let emailclass = "";
        let passwordclass = "";
        if (isEmail) {
            emailclass = "is-invalid"
        }
        if (isPassword) {
            passwordclass = "is-invalid";
        }
        if (isRedirect) {
            return <Redirect push to="/" />
        }
        return (
            <div className="singgin">
                <div className="singgin-title mb-4 pb-2 border-bottom">
                    SINGGIN
                    {this.state.userAuthid ? <p>{this.state.userAuthid}</p> : " "}
                </div>

                <div>
                    <p className="text-muted">
                        Insert your account information:
                    </p>
                </div>
                <div className="form-group">
                    <input type="text"
                        className={"form-control p-4" + " " + emailclass}
                        name="email"
                        value={this.state.email}
                        aria-describedby="helpId"
                        placeholder="email"
                        onChange={(event) => this.onChange(event)}
                    />
                    {
                        isEmail && <small className="form-text text-danger">vui lòng điền chính xác</small>
                    }
                </div>
                <div className="form-group">
                    <input type="password"
                        className={"form-control p-4" + " " + passwordclass}
                        name="password"
                        value={this.state.password}
                        aria-describedby="helpId"
                        placeholder="Password"
                        onChange={(event) => this.onChange(event)}
                    />

                    {
                        isPassword && <small className="form-text text-danger">vui lòng điền chính xác</small>
                    }
                </div>
                <div className="forgot-password mb-3">
                    <a href="#">
                        Forgot your
                        <strong>Password</strong>
                    </a>
                </div>
                <div className="forgot-password mb-4">
                    <a href="#">
                        Forgot yourIf you have an account, please
                        <strong>Register Here</strong>
                    </a>
                </div>
                <button onClick={(event) => this.handleSubmit(event, this.singIn)} className="btn bg-dark py-2 px-4 text-white text-center mb-5" >SIGN IN</button>
                <button
                    onClick={(event) => this.handleSubmit(event, this.singUp)}
                    className="btn bg-info py-2 px-4 text-white text-center mb-5 ml-3" >SIGN UP</button>
                {
                    listToast.length > 0 && <Toast listToast={listToast} handeDeleteToast={this.handeDeleteToast} />
                }
            </div>
        )
    }
}
