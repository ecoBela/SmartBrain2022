import React from "react";

const Register = ({ onRouteChange }) => {
  return (
    <article className="br3 ba dark-gray b--white-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
      <main className="pa4 black-80">
        <div className="measure">
          <fieldset id="sign_up" className="ba b--black ph0 mh0">
            <legend className="f1 fw6 ph0 mh0 yellow">Register</legend>
            <div className="mt3">
              <label className="db yellow fw6 lh-copy f6" htmlFor="name">
                Name
              </label>
              <input
                className="pa2 input-reset ba bg-black hover-bg-black hover-white w-100"
                type="text"
                name="name"
                id="name"
              />
              <label
                className="db yellow fw6 lh-copy f6"
                htmlFor="email-address"
              >
                Email
              </label>
              <input
                className="pa2 input-reset ba bg-black hover-bg-black hover-white w-100"
                type="email"
                name="email-address"
                id="email-address"
              />
            </div>
            <div className="mv3">
              <label className=" yellow db fw6 lh-copy f6" htmlFor="password">
                Password
              </label>
              <input
                className="b pa2 input-reset ba bg-black hover-bg-black hover-white w-100"
                type="password"
                name="password"
                id="password"
              />
            </div>
          </fieldset>
          <div className="">
            <input
              onClick={() => {
                onRouteChange("home");
              }}
              className=" yellow b ph3 pv2 input-reset ba b--yellow bg-transparent grow pointer f6 dib"
              type="submit"
              value="Register"
            />
          </div>
        </div>
      </main>
    </article>
  );
};

export default Register;
