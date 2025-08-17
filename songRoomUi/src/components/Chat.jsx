export function Chat() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="chat">
      {/* <!-- Message form --> */}
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Type your message here..." />
        <button type="submit">📩</button>
      </form>
      {/* <!-- Chat --> */}
      <section className="chat-window">
        {/* <!-- Individual message go here --> */}
        <div className="message">
          <h3>Daniel</h3>
          <h2>Hello there!</h2>
        </div>
        {/* <!-- Chat end here --> */}
      </section>
    </div>
  );
}
