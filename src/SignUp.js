import React from 'react'

function SignUp() {
    return (
        <div>
            <form>
  <div className="form-group row">
    <label for="inputEmail3" className="col-sm-2 col-form-label">Email</label>
    <div className="col-sm-10">
      <input type="email" className="form-control" id="inputEmail3" placeholder="Email"></input>
    </div>
  </div>
  <div className="form-group row">
    <label for="inputPassword3" className="col-sm-2 col-form-label">Password</label>
    <div className="col-sm-10">
      <input type="password" className="form-control" id="inputPassword3" placeholder="Password"></input>
    </div>
  </div>
  <fieldset className="form-group">
    <div className="row">
      <legend className="col-form-label col-sm-2 pt-0"><b>Course</b></legend>
      <div className="col-sm-10">
        <div className="form-check">
          <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked></input>
          <label className="form-check-label" for="gridRadios1">
            B.tech
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2"></input>
          <label className="form-check-label" for="gridRadios2">
            B.pharma
          </label>
        </div>
        <div className="form-check disabled">
          <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3" ></input>
          <label className="form-check-label" for="gridRadios3">
            M.C.A
          </label>
        </div>
        <div className="form-check disabled">
          <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios4" value="option4" ></input>
          <label className="form-check-label" for="gridRadios4">
            M.B.A
          </label>
        </div>
      </div>
    </div>
  </fieldset>
  <div className="form-group row">
<div className="col-sm-2"><b>Approve</b></div>
    <div className="col-sm-10">
      <div className="form-check">
        <input className="form-check-input" type="checkbox" id="gridCheck1"></input>
        <label className="form-check-label" for="gridCheck1">
          I am not Robot
        </label>
      </div>
    </div>
  </div>
  <div className="form-group row">
    <div className="col-sm-10">
      <button type="submit" className="btn btn-primary">Sign in</button>
    </div>
  </div>
</form>
        </div>
    )
}

export default SignUp
