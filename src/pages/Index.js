import { Form, Link, useLoaderData } from "react-router-dom"

function Index(props) {
  const beers = useLoaderData()

  return (
    <div>
     <div className="createBeer"> 
      <h2 id="createBeerHeader">Create New beer</h2>
      <Form action="/create" method="post">
        <fieldset>
        <input type="input" name="name" placeholder="name" />
        <input type="input" name="type" placeholder="type" />
        <input type="input" name="image" placeholder="image" />
        <input type="submit" value="Done" />
        </fieldset>
      </Form>
      </div>
      <h2>Beers</h2>
      {beers.map(beer => {
        return (
        <div key={beer._id} className="beer">
          <Link to={`/${beer._id}`}>
            <h1>{beer.name}</h1>
          </Link>
          <h3>{beer.type}</h3>
          <h3>{beer.image}</h3>
        </div>
  )})}
    </div>
  )
}

export default Index