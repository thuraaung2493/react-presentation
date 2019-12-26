const OrderList = () => (
  <ul>
    <li>Apple</li>
    <li>Orange</li>
    <li>Mango</li>
  </ul>
);

const Header = props => (
  <h1 style={{ color: "red" }} id="header">
    {props.heading}
  </h1>
);

const Paragraph = () => (
  <p>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium nisi
    fugiat nesciunt sit. Aut, reprehenderit porro obcaecati quisquam, ad placeat
    facilis quo vero dolor maiores incidunt quia facere doloremque suscipit?
  </p>
);

const App = props => (
  <section>
    <Header heading={props.heading} />
    <Paragraph />
    <OrderList />
  </section>
);

ReactDOM.render(
  <App heading="Hello From React" />,
  document.getElementById("app")
);
