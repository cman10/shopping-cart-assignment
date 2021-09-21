const SignInPage = {
  render: () => {
    return `
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
<div class="header-container">
  <div class="login-container">
    <div class="left-container">
      <h1> Login</h1>
      <h3>Get Access To Your Orders, WishList and Recommendations</h3>
    </div>
    <div class="right-container">
      <div>
      <p>Email</p>
        <input type="email" placeholder="Enter Email">
      </div>
      <div>
      <p>Password</p>
          <input type="password" placeholder="Password">
      </div>
      <button class="btn-login">LOGIN</button>
    </div>
    `;
  },
};

export default SignInPage;
