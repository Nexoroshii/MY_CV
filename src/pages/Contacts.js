import { Container } from "react-bootstrap";

function Contacts() {
  return (
    <main className="section">
      <Container>
        <h1 className="title-1">Contacts</h1>

        <ul className="content-list">
          <li className="content-list__item">
            <h2 className="title-2">Location</h2>
            <p>Minsk, Belarus</p>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">Telegram / WhatsApp</h2>
            <p>
              <a href="tel:+375447807872">+375 (44) 780-78-72</a>
              <br />
              <a href="https://t.me/soMebody_who">Telegram Link</a>
            </p>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">Email</h2>
            <p>
              <a href="mailto:e.moisei1@gmail.com">e.moisei1@gmail.com</a>
            </p>
          </li>
        </ul>
      </Container>
    </main>
  );
}

export default Contacts;
