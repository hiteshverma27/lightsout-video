import React from "react";
import { Link } from "react-router-dom";
import { categories } from "../../backend/db/categories";
import { CategoryCard, Footer, NavBar } from "../../components";

function Home() {
  return (
    <>
      <NavBar />
      <header className="relative w-100vw">
      <input type="search" className="input w-100per m-auto flex-center-center" placeholder="Search LightsOut" id="search-mobile" />
      <img className="w-100per img-cover h-80vh " src="https://user-images.githubusercontent.com/87027579/168142026-c598c61e-1fb8-42ab-ba0b-31ff9327c7f9.jpg" alt="header-img" />
      <div className="center-div-method-2 header-text">
        <h1 className="w-100vw text-align-center">Get everything on F1 at one place</h1><br />
        <div className="m-auto flex-center-center shop-now-btn" href="/Pages/product.html">
          <Link to={"/explore"} className="bg-accent p-2 mt-2 flex-center-center " id="explore-link">Explore <span
            className="material-icons icon-s3">arrow_forward_ios</span></Link>
        </div>
      </div>
    </header>
      <main className="w-100vw flex-center-center flex-col">
      
      <div className="catagory w-100per flex-center-center flex-wrap p-2">
      {categories.map(({ categoryName, _id }) => (
          <CategoryCard categoryName={categoryName} key={_id} />
        ))}
      </div>
    </main>
      <Footer />
    </>
  );
}

export { Home };
