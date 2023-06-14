import React from "react";

export default class AboutUs extends React.Component {
  constructor() {
    super();

    this.state = {
      test: "",
    };

    console.log("constructor AboutUs");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps AboutUs");
    return null;
  }

  componentDidMount() {
    console.log("componentDidMount AboutUs");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount AboutUs");
  }

  render() {
    console.log("render AboutUs");

    return (
      <div>
        <h3>About Us</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis
          perferendis eaque id amet quisquam? Quos rem impedit in deserunt
          maxime. Sunt dolorem magni, tempora architecto delectus repudiandae
          adipisci rem eveniet! Ex at minima minus voluptates ipsam ea
          laboriosam. Esse, maiores alias velit delectus quam repudiandae,
          officiis perspiciatis eveniet quod odio labore deleniti minus numquam
          est ipsum rerum culpa assumenda impedit? Suscipit aut voluptatem quod,
          quasi sunt hic impedit ea quam odio. Vero dolores, omnis corporis
          eius, sint quos a cupiditate consequatur blanditiis ipsam nemo et
          fugiat vitae alias aliquam dolorem. Ullam impedit totam maiores eaque
          fugit magni! Delectus unde dolorem quis quod, amet explicabo!
          Doloribus, aliquam! Odio fuga quod fugiat esse animi, modi temporibus,
          asperiores minima totam omnis quas officiis? Minima asperiores est
          nulla aliquid eveniet quae deserunt sed animi fuga ea distinctio
          reprehenderit, rerum consequatur. Eius ea neque, dignissimos velit
          quisquam voluptate consectetur voluptates doloremque sed iste
          architecto beatae! Velit inventore, numquam facere porro modi iste
          dolore earum libero molestias nulla excepturi eius hic, ad atque
          officiis saepe? Consequuntur saepe amet placeat nobis quas quo
          corporis ratione quisquam explicabo! Ut assumenda necessitatibus nemo
          consequatur earum quae autem labore totam dolor modi tempora
          exercitationem, facere, veritatis delectus aliquam obcaecati. Ut nihil
          id, eligendi eveniet vero laborum ipsam perspiciatis voluptatem sunt?
          Quidem, quas? Repellat expedita blanditiis vel provident sapiente
          ipsum? Earum voluptas vel sed assumenda aut beatae asperiores odit?
          Tempore nihil accusamus, blanditiis aspernatur asperiores
          reprehenderit unde corrupti sed quae rem. Cupiditate at temporibus
          enim nostrum animi doloremque rem tempore distinctio possimus ea vero
          libero, vitae beatae aspernatur dolores dicta voluptas recusandae
          officia alias, fugit corrupti aperiam harum vel! Dignissimos, harum.
          Eius quae ut odio reiciendis odit eos qui fugit cum aliquam voluptatum
          ipsam ipsa ad laudantium, officia temporibus. Officiis quidem eum
          tenetur soluta voluptatum fugit at adipisci explicabo veniam
          laudantium? Quos id exercitationem vitae autem natus. Nam in ipsum
          atque dicta fugit dignissimos doloribus natus modi necessitatibus ad
          animi, aperiam quibusdam at, fugiat nemo commodi recusandae
          repudiandae voluptate voluptates facilis. Porro quia qui quisquam,
          quam recusandae ea enim quo. Dolorem hic mollitia, nisi eaque ea
          voluptates doloribus nobis nostrum consectetur a sed veniam corporis
          odio modi neque unde aut nesciunt. Praesentium magni debitis neque
          deleniti ratione ut, voluptates tempora in voluptatem repellendus ipsa
          esse quae quisquam laboriosam, sunt recusandae officia fugiat
          doloribus laudantium itaque. Reiciendis minima deserunt eos totam
          dicta. Non deserunt obcaecati voluptates temporibus neque. Non minus
          fugiat, voluptatibus pariatur officiis omnis totam vero molestias
          ipsum atque rem facere ipsam! Reprehenderit modi non tenetur quod est
          dolorum sint exercitationem! Voluptate molestias id enim explicabo
          commodi ullam repellendus, excepturi placeat quos sequi distinctio,
          aut sunt consequatur. Ipsa cupiditate atque ea qui quas labore!
          Corrupti quae deserunt recusandae, veniam perspiciatis similique. Amet
          maxime modi iusto officia. Tempore officiis quos voluptates quod
          voluptate ipsum? Repellat tempora neque enim totam debitis maiores,
          minima ea in voluptas adipisci et! Quasi neque nam repellendus
          adipisci! Esse libero, delectus soluta quas obcaecati corrupti quaerat
          nesciunt saepe distinctio quos expedita similique a voluptatibus
          repellat reprehenderit et est accusantium dignissimos. Deleniti saepe
          sapiente voluptatum a dolorem ullam maxime? Quae optio repellat culpa
          minus distinctio quos tempora cumque aliquam, hic eos sapiente non
          est, consequatur accusantium quam laborum dolorem provident expedita
          illo! Quo dignissimos esse veniam quisquam. Laboriosam, aperiam.
          Impedit recusandae excepturi modi, facere voluptatem repellendus
          pariatur nesciunt consectetur vero earum eaque mollitia. Error debitis
          molestiae, vel eligendi animi, totam dignissimos repellendus aliquam
          inventore voluptas cumque quaerat, in adipisci? Iure labore sequi
          blanditiis atque veritatis molestias, aperiam ipsa explicabo quis
          laudantium quod numquam ullam pariatur voluptatum ratione sunt quos
          deserunt nam eos totam. Repellendus illo dolorum nesciunt obcaecati
          autem.
        </p>
      </div>
    );
  }
}
