
import Hero from "./components/hero";
import Recipes from "./components/recipes";
import About from "./components/aboutSection"


export default async function Home () {
  return (
    <div>
    <Hero />
    <Recipes />
    <About />
    </div>
  )
}