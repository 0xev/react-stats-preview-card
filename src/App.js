import image from "./images/image-header-desktop.jpg";

function App() {
  return (
    <div>
      <section className="card">
        <section className="text">
          <h1>
            Get <span>insights</span> that help your business grow.
          </h1>
          <p className="main-paragraph">
            Discover the benefits of data analytics and make better decisions
            regarding revenue, customer experience, and overall efficiency.
          </p>
          <section className="main-flex-container">
            <section className="container">
              <h2>10k+</h2>
              <p>companies</p>
            </section>

            <section className="container">
              <h2>314</h2>
              <p>templates</p>
            </section>

            <section className="container">
              <h2>12m+</h2>
              <p>queries</p>
            </section>
          </section>
        </section>
        <section className="image-wrapper">
          <img
            src={image}
            alt="white collar workers"
          />
        </section>
      </section>
    </div>
  );
}

export default App;
