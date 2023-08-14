import { baseURL } from './base_url';

export const beersLoader = async () => {
    // make a call to backend index route
    const response = await fetch(`${ baseURL }/beer`)
    // convert the response in a js object
    const beers = await response.json()
    // return the beers
    return beers
}

export const beerLoader = async ({params}) => {
  // get the id param from the params object
  const id = params.id
  // make a call to backend show route
  const response = await fetch(`${ baseURL }/beer/${id}`)
  // convert the response into a js object
  const beer = await response.json()
  // return the beer
  return beer
}