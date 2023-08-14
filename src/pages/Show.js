import { useLoaderData, Form } from "react-router-dom";

function Show(props) {
  const beer = useLoaderData();
  console.log(beer);

  return (
    <div className="beers">
      <h2>{beer.title}</h2>
      <h2>{beer.description}</h2>
      <img src={beer.image} alt={beer.name} />

    <h2 className="beer-container">Update {beer.name}</h2>
    <Form action={`/update/${beer._id}`} method="post">
        <input type="text" name="name" placeholder="name" defaultValue={beer.name}/>
        <input type="text" name="type" placeholder="type" defaultValue={beer.type}/>
        <input type="text" name="image" placeholder="image" defaultValue={beer.image}/>
        <input type="submit" value={`update ${beer.name}`} />
    </Form>

      <Form action={`/delete/${beer._id}`} method="post">
        <input type="submit" value={`delete ${beer.name}`} />
      </Form>
    </div>
  );
}

export default Show;