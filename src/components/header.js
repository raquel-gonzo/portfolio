import React from "react";

const Header = () => {
  return (
    <div>
      <div id="header">
        {/* <Image publicId="violin-photo.jpg">
          <Transformation width="300" crop="scale" />
        </Image> */}
        <img
          className="rounded-lg"
          id="violin-photo"
          src="https://res.cloudinary.com/raquel-gonzo/image/upload/v1602080811/violin-photo.jpg"
          alt="Rachel Gonzalez her violin."
        />
        <div id="header-text">
          <h1>Hi, I'm Rachel!</h1>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
