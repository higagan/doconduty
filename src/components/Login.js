function Login(props) {
    const { loginOpen, setLoginOpen } = props;
  
    if (!loginOpen) {
      return null;
    }
  
    return (
      <div className="login-box">
        <h2>Login</h2>
        <form>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" />
          <br />
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
export default Login  