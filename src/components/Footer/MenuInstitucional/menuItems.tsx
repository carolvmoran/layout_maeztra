import React from "react";
import { itemsInstitucional } from "./itemsInstitucional";
import "./menuInstitucional.scss";

interface deviceProps {
  device: string;
}

const MenuItems = (props: deviceProps) => {
  const { device } = props;
  return (
    <nav className={`${device && `menu-items__${device}`} menu-items`}>
      <ul className="menu-items__container">
        {itemsInstitucional &&
          itemsInstitucional.map((e) => {
            return (
              <div className="menu-items__context">
                <li className="menu-items__title">{e.name}</li>
                <ul className="menu-items__items">
                  {e.items &&
                    e.items.map((i) => {
                      return (
                        <a
                          className="menu-items__link"
                          href={i.url}
                          title={i.nameItem}
                        >
                          <li className="menu-items__item">{i.nameItem}</li>
                        </a>
                      );
                    })}
                </ul>
              </div>
            );
          })}
      </ul>
    </nav>
  );
};

export { MenuItems };
