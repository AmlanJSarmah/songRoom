export function Chat() {
  return (
    <div class="chat">
      {/* <!-- Message form --> */}
      <form>
        <input type="text" placeholder="Type your message here..." />
        <button type="submit">📩</button>
      </form>
      {/* <!-- Chat --> */}
      <section class="chat-window">
        {/* <!-- Individual message go here --> */}
        <div class="message">
          <h3>Daniel</h3>
          <h2>Hello there!</h2>
        </div>
        <div class="message">
          <h3>red</h3>
          <h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            quis vel ullam sunt animi facilis asperiores delectus cumque,
            aliquam fugit saepe sit commodi aspernatur beatae doloribus expedita
            odio eaque eius quos enim praesentium excepturi harum! Corporis
            distinctio illo perspiciatis possimus, a eaque, beatae rem
            repudiandae minima debitis, rerum vero temporibus?
          </h2>
        </div>
        <div class="message">
          <h3>red</h3>
          <h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            quis vel ullam sunt animi facilis asperiores delectus cumque,
            aliquam fugit saepe sit commodi aspernatur beatae doloribus expedita
            odio eaque eius quos enim praesentium excepturi harum! Corporis
            distinctio illo perspiciatis possimus, a eaque, beatae rem
            repudiandae minima debitis, rerum vero temporibus?
          </h2>
        </div>
        <div class="message">
          <h3>red</h3>
          <h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            quis vel ullam sunt animi facilis asperiores delectus cumque,
            aliquam fugit saepe sit commodi aspernatur beatae doloribus expedita
            odio eaque eius quos enim praesentium excepturi harum! Corporis
            distinctio illo perspiciatis possimus, a eaque, beatae rem
            repudiandae minima debitis, rerum vero temporibus?
          </h2>
        </div>
        {/* <!-- Chat end here --> */}
      </section>
    </div>
  );
}
