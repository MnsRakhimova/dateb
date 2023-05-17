import { Navbar, Ulist, Alink, Ulist_in_ulist, Dropdown_list } from "./style";
import { BrowserRouter } from "react-router-dom";
import { useState } from "react";

export default function SitebarItem() {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <BrowserRouter>
      <Navbar>
        <Ulist>
          <li>
            <Alink to={"/Trending"}>Trending</Alink>
          </li>
          <Dropdown_list
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            <Alink to={"/Housing"}>Housing</Alink>
            {isHovering && (
              <Ulist_in_ulist>
                <li>
                  <Alink to={"/Kitchen goods"}>Kitchen goods</Alink>
                </li>
                <li>
                  <Alink to={"/Storage"}> Storage </Alink>
                </li>
                <li>
                  <Alink to={"/Bath_and_sauna_products"}>
                    {" "}
                    Bath and sauna products{" "}
                  </Alink>
                </li>
                <li>
                  <Alink to={"/Textile"}> Textile </Alink>
                </li>
                <li>
                  <Alink to={"/Household_goods"}> Household goods </Alink>
                </li>
                <li>
                  <Alink to={"/Furniture"}> Furniture </Alink>
                </li>
                <li>
                  <Alink to={"/Decor_and_interior"}> Decor and interior </Alink>
                </li>
                <li>
                  <Alink to={"/Products_for_indoor_plants"}>
                    {" "}
                    Products for indoor plants{" "}
                  </Alink>
                </li>
              </Ulist_in_ulist>
            )}
          </Dropdown_list>
        </Ulist>
      </Navbar>
    </BrowserRouter>
  );
}
