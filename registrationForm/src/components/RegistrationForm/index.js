import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    isSubmitted: false,
    firstNameInput: '',
    lastNameInput: '',
    error1: '',
    error2: '',
  }

  showFirstNameError = event => {
    if (event.target.value === '') {
      this.setState({error1: 'Required'})
    } else {
      this.setState({error1: ''})
    }
  }

  showLastNameError = event => {
    if (event.target.value === '') {
      this.setState({error2: 'Required'})
    } else {
      this.setState({error2: ''})
    }
  }

  onFirstNameChange = event => {
    this.setState({firstNameInput: event.target.value})
  }

  onLastNameChange = event => {
    this.setState({lastNameInput: event.target.value})
  }

  onResetForm = () => {
    this.setState({
      isSubmitted: false,
      firstNameInput: '',
      lastNameInput: '',
      error1: '',
      error2: '',
    })
  }

  submittedForm = () => (
    <div className="success-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
        className="submitted-image"
      />
      <p>Submitted Successfully</p>
      <button
        type="button"
        className="submit-btn-success"
        onClick={this.onResetForm}
      >
        Submit Another Response
      </button>
    </div>
  )

  onSubmission = event => {
    event.preventDefault()

    const {firstNameInput, lastNameInput} = this.state
    if (firstNameInput === '' || lastNameInput === '') {
      if (firstNameInput === '') {
        this.setState({error1: 'Required'})
      }
      if (lastNameInput === '') {
        this.setState({error2: 'Required'})
      }
    } else {
      this.setState({isSubmitted: true})
    }
  }

  getForm = () => {
    const {firstNameInput, lastNameInput, error2, error1} = this.state

    return (
      <>
        <label htmlFor="firstName" className="label">
          FIRST NAME
        </label>
        <input
          type="text"
          id="firstName"
          className="first-name-input"
          value={firstNameInput}
          onChange={this.onFirstNameChange}
          onBlur={this.showFirstNameError}
        />
        <p className="error-text  gap">{error1}</p>
        <label htmlFor="lastName" className="label">
          LAST NAME
        </label>
        <input
          type="text"
          id="lastName"
          className="first-name-input"
          value={lastNameInput}
          onChange={this.onLastNameChange}
          onBlur={this.showLastNameError}
        />
        <p className="error-text">{error2}</p>
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </>
    )
  }

  render() {
    const {isSubmitted} = this.state
    return (
      <div className="bg-container">
        <form className="form-container" onSubmit={this.onSubmission}>
          <h1 className="main-heading">Registration</h1>
          {isSubmitted ? this.submittedForm() : this.getForm()}
        </form>
      </div>
    )
  }
}

export default RegistrationForm
