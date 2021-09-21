const SignUpPage = {
  render: () => {
    return `
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <div class="header-container">
        <div class="login-container">
          <div class="left-container">
            <h1>Signup</h1>
            <h3>We do not share your personal details with anyone</h3>
          </div>
          <div class="right-container">
          <div>
          <p>First Name</p>
            <input type="email" placeholder="Enter First Name">
          </div>
          <div>
          <p>Last Name</p>
            <input type="email" placeholder="Enter LastName">
          </div>
            <div>
            <p>Email</p>
              <input type="email" placeholder="Enter Email">
            </div>
            <div>
            <p>Password</p>
                <input type="password" placeholder="Password">
            </div>
            <div>
            <p>Confirm Password</p>
                <input type="password" placeholder="Password">
            </div>
            <button class="btn-login">LOGIN</button>
          </div>
          `;
  },
};

export default SignUpPage;
