import "./AffirmationCard.scss";
import { useState } from "react";

const AffirmationCard = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <div class="AffirmationCard">
      <div className="quote-header">
        <h3>Your Affirmation</h3>

        <div class="icon-menu-wrap">
          <i
            className="fas fa-ellipsis-v"
            onClick={() =>
              menuVisible ? setMenuVisible(false) : setMenuVisible(true)
            }
          ></i>

          <div class="menu" style={{ display: menuVisible ? "flex" : "none" }}>
            <span>Copy</span>
            <span>New Affirmation</span>
            <span>Share to Twitter</span>
          </div>
        </div>
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
  );
};

export default AffirmationCard;
