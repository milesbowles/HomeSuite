import React, {Component} from "react";
/** For routing requests */
import axios from "axios";
/** Will handle encryption of passwords */
import bcrypt from "bcrypt-nodejs";

export class Login extends Component {
    /** Initialize component and allow props */
    constructor(props) {
        /** Bring in all Component properties */
        super(props)
        this.state = {email: '', password: '', newEmail: '', newUsername: '', newPassword: ''}
        this.handleChange = this.handleChange.bind(this)
    };

    /** Takes in an event and a field to target */
    handleChange(event, field) {
        event.preventDefault()
        /** In the state set the field's name equal to the target value */
        /** Will be called by onChange events in user info retreival */
        this.setState({[field]: event.target.value}, () => {
            console.log(this.state[field])
        })
    };

    /** Triggered by event, takes in user info */
    registerPersistence(event, email, password) {
        event.preventDefault()
        /** getItem("persist") returns a boolean as that's how it's defined below */
        /** If persist is true */
        if (localStorage.getItem('persist') === 'true') {
            /** Define number or rounds to process data for */
            let salt = bcrypt.genSaltSync(5)
            /** Takes in data to be encrypted, and the number of rounds to process data for */
            /** The salt will be used for encryption */
            let hash = bcrypt.hashSync(password, salt)
            /** Save the hash as token in localStorage to be accessed on demand */
            localStorage.setItem('token', hash)
            /** Send post request along with user email and persistent tocken defined above */
            axios.post('/api/persist', {email: email, persistToken: hash})
        }
    };

    /** This will be triggered by optional checkboxed by users */
    /** Triggered by an event */
    updateLoginPersist(event) {
        /** If persist is false in localStorage, or if persist is non-existent */
        if (localStorage.getItem('persist') !== 'false' || !localStorage.getItem('persist')) {
            /** Create persist item with default false */
            localStorage.setItem("persist", false)
        }
        /** If Persist is already present in localStorage, */ 
        else {
            /** Set it to true */
            localStorage.setItem("persist", true)
        }
    };

    render () {
        return (
            <div>
                <nav className="main-nav">
                    <ul>
                        <li>
                            <a className="signin" href="#0">Sign in</a>
                        </li>
                        <li>
                            <a className="signup" href="#0">Sign up</a>
                        </li>
                    </ul>
                </nav>

                <div className="user-modal">
                    <div className="user-modal-container">
                        <ul className="switcher">
                            <li>
                                <a href="#0">Sign in</a>
                            </li>
                            <li>
                                <a href="#0">New account</a>
                            </li>
                        </ul>

                        <div id="login">
                            <form onSubmit={ (event) => {this.props.checkAuth(event, this.state.email, this.state.password); this.registerPersistence(event, this.state.email, this.state.password)}}>
                                <p className="fieldset">
                                    <label className="image-replace email" htmlFor="signin-email">E-mail</label>
                                    <input className="full-width has-padding has-border" id="signin-email" type="email" name="email" placeholder="E-mail" value={this.state.email} onChange={(event) => {this.handleChange(event, 'email')}}></input>
                                    <span className="error-message">An account with this email address does not exist!</span>
                                </p>

                                <p className="fieldset">
                                    <label className="image-replace password" htmlFor="signin-password">Password</label>
                                    <input className="full-width has-padding has-border" id="signin-password" type="password" name="password" placeholder="Password" value={this.state.password} onChange={(event) => {this.handleChange(event, 'password')}}></input>
                                    <a href="#0" className="hide-password">Show</a>
                                    <span className="error-message">Wrong password! Try again.</span>
                                </p>

                                <p className='fieldset'>
                                    <label className="image-replace password" htmlFor="rememberCheckBox">Remember Me</label>
                                    <input className="full-width has-padding has-border" id="rememberCheckBox" type="checkbox" name="remember" onClick={(event) => {this.updateLoginPersist(event)}}></input>
                                </p>

                                <p className="fieldset">
                                    <input className="full-width" type="submit" value="Login"></input>
                                </p>
                            </form>

                            <p className="form-bottom-message">
                                <a href="#0">Forgot your password?</a>
                            </p>
                            <a href="#0" className="close-form">Close</a>
                        </div>

                        <div id="signup">
                            <form className="form" onSubmit={ (event) => {this.props.newUser(event, this.state.newEmail, this.state.newUsername, this.state.newPassword)}}>
                                <p className="fieldset">
                                    <label className="image-replace username" htmlFor="signup-username">Username</label>
                                    <input className="full-width has-padding has-border" id="signup-username" type="text" name='username' placeholder="Username" value={this.state.newUsername} onChange={(event) => {this.handleChange(event, 'newUsername')}}></input>
                                    <span className="error-message">Your username can only contain numeric and alphabetic symbols!</span>
                                </p>

                                <p className="fieldset">
                                    <label className="image-replace email" htmlFor="signup-email">E-mail</label>
                                    <input className="full-width has-padding has-border" id="signup-email" type="email" name="email" placeholder="E-mail" value={this.state.newEmail} onChange={(event) => {this.handleChange(event, 'newEmail')}}></input>
                                    <span className="error-message">Enter a valid email address!</span>
                                </p>

                                <p className="fieldset">
                                    <label className="image-replace password" htmlFor="signup-password">Password</label>
                                    <input className="full-width has-padding has-border" id="signup-password" type="password" name="password" placeholder="Password" value={this.state.newPassword} onChange={(event) => {this.handleChange(event, 'newPassword')}}></input>
                                    <a href="#0" className="hide-password">Show</a>
                                    <span className="error-message">Your password has to be at least 6 characters long!</span>
                                </p>

                                <p className="fieldset">
                                    <input className="full-width has-padding" type="submit" value="Create account"></input>
                                </p>
                            </form>

                            <a href="#0" className="cd-close-form">Close</a>
                        </div>

                        <div id="reset-password">
                            <p className="form-message">Lost your password? Please enter your email address. \n You will receive a link to create a new password.</p>

                            <form className="form">
                                <p className="fieldset">
                                    <label className="image-replace email" htmlFor="reset-email">E-mail</label>
                                    <input className="full-width has-padding has-border" id="reset-email" type="email" placeholder="E-mail"></input>
                                    <span className="error-message">An account with this email does not exist!</span>
                                </p>

                                <p className="fieldset">
                                    <input className="full-width has-padding" type="submit" value="Reset password"></input>
                                </p>
                            </form>

                            <p className="form-bottom-message">
                                <a href="#0">Back to log-in</a>
                            </p>
                        </div>
                        <a href="#0" className="close-form">Close</a>
                    </div>
                </div>
            </div>
        )
    }

}