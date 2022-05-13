import React from "react";

function CategoryCard({ categoryName }) {
    return (
        <div className="catagory-items m-1 p-1 relative">
            <p className="center-div-method-2 w-100per text-align-center text-overlay py-1">
                {categoryName}
            </p>
            <img
                className="catagory-img"
                src="https://github.com/hiteshverma27/LightsOut-Store/blob/development/Assets/wallpaperflare.com_wallpaper%20(1).jpg?raw=true"
                alt="catagory-img" />
        </div>
    );
}
CategoryCard.defaultProps={
    categoryName:"Catagory"
}
export {CategoryCard}