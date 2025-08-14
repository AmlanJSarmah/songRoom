export function Form() {
  return (
    <div className="container">
      <form class="form-container">
        <input type="text" placeholder="UserName" id="username" />
        <input type="text" placeholder="Password" id="password" />
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </div>
  );
}
