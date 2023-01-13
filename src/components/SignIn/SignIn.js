import React from "react";

const SignIn = () => {
  return (
    <article className="br3 ba dark-gray b--white-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
      <main className="pa4 black-80">
        <form className="measure">
          <fieldset id="sign_up" className="ba b--black ph0 mh0">
            <legend className="f1 fw6 ph0 mh0 yellow">Sign In</legend>
            <div className="mt3">
              <label className="db yellow fw6 lh-copy f6" for="email-address">
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
              <label className=" yellow db fw6 lh-copy f6" for="password">
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
              className=" yellow b ph3 pv2 input-reset ba b--yellow bg-transparent grow pointer f6 dib"
              type="submit"
              value="Sign in"
            />
          </div>
          <div className="lh-copy mt3">
            <a href="#0" className="f6 link dim yellow db">
              Register
            </a>
          </div>
        </form>
      </main>
    </article>
  );
};

export default SignIn;
