function SayHello() {
  return (
    <h1 className="header__title">
      <strong>
        Hi
        <span className="wave" role="img" aria-labelledby="wave">
          👋🏻
        </span>
        ! <br />
        My name is <em>Egor</em>
      </strong>
    </h1>
  );
}

export default SayHello;
