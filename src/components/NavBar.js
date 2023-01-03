function Welcome(props) {
  return <h1>{props.name}</h1>;
}
<nav className="Container">
  <a href="/">
    <li>
      <Welcome name="Home" />
    </li>
  </a>

  <a href="/">
    <li>
      <Welcome name="Service" />
    </li>
  </a>
  <a href="/">
    <li>
      <Welcome name="About" />
    </li>
  </a>
  <a href="/">
    <li>
      <Welcome name="Contact" />
    </li>
  </a>
</nav>;
export default Welcome;
