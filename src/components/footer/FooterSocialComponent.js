function FooterSocialComponent(props) {
  return (
    <li className="social__item">
      <a href={props.path}>
        <img src={props.img} alt="Link" />
      </a>
    </li>
  );
}

export default FooterSocialComponent;
