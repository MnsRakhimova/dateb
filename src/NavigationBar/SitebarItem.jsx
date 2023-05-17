import { Navbar, Ulist, Alink, UlistInUlist, DropdownList } from "./style";
import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SitebarItem() {
  // const [isHovering, setIsHovering] = useState(false);
  const [order, setOrder] = useState(false);

  const handleMouseOver = (event) => {
    // setIsHovering(true);

    switch (event) {
      case 1:
        return null;
      case 2:
        return setOrder(2);
      case 3:
        return setOrder(3);
      case 4:
        return setOrder(4);
      case 5:
        return setOrder(5);
      case 6:
        return setOrder(6);
      case 7:
        return setOrder(7);
      case 8:
        return setOrder(8);
      case 9:
        return setOrder(9);
      case 10:
        return setOrder(10);
      case 11:
        return setOrder(11);
      case 12:
        return setOrder(12);
      case 13:
        return setOrder(13);
      default:
        return null;
    }
  };

  const handleMouseOut = (event) => {
    switch (event) {
      case 1:
        return null;
      case 2:
        return setOrder(false);
      case 3:
        return setOrder(false);
      case 4:
        return setOrder(false);
      case 5:
        return setOrder(false);
      case 6:
        return setOrder(false);
      case 7:
        return setOrder(false);
      case 8:
        return setOrder(false);
      case 9:
        return setOrder(false);
      case 10:
        return setOrder(false);
      case 11:
        return setOrder(false);
      case 12:
        return setOrder(false);
      case 13:
        return setOrder(false);
      default:
        return null;
    }
  };

  return (
    <BrowserRouter>
      <Navbar>
        <Ulist>
          <DropdownList>
            <Alink to={"/Trending"}>Trending</Alink>
          </DropdownList>

          {/* Housing */}
          <DropdownList
            onMouseOver={() => handleMouseOver(2)}
            onMouseOut={() => handleMouseOut(2)}
          >
            <Alink to={"/Housing"}>Housing</Alink>
            {order === 2 && (
              <UlistInUlist>
                <Alink to={"/Kitchen+goods"}>Kitchen goods</Alink>
                <Alink to={"/Storage"}> Storage </Alink>
                <Alink to={"/Bath+and+sauna+products"}>
                  Bath and sauna products
                </Alink>
                <Alink to={"/Textile"}> Textile </Alink>
                <Alink to={"/Household+goods"}> Household goods </Alink>
                <Alink to={"/Furniture"}> Furniture </Alink>
                <Alink to={"/Decor+and+interior"}> Decor and interior </Alink>
                <Alink to={"/Products+for+indoor+plants"}>
                  Products for indoor plants
                </Alink>
              </UlistInUlist>
            )}
          </DropdownList>

          <DropdownList
            onMouseOver={() => handleMouseOver(3)}
            onMouseOut={() => handleMouseOut(3)}
          >
            <Alink to={"/Electronics"}>Electronics</Alink>

            {order === 3 && (
              <UlistInUlist>
                <Alink to={"/Computers+Laptops+tables"}>
                  Computers / Laptops / Tablets
                </Alink>
                <Alink to={"/Phones+&+Accessories"}>
                  {" "}
                  Phones & Accessories{" "}
                </Alink>
                <Alink to={"/VRs+&+Consoles"}>VRs & Consoles</Alink>
                <Alink to={"/Cameras+&+Surveillance"}>
                  Cameras & Surveillance{" "}
                </Alink>
                <Alink to={"/TV+Video+&+Photo"}>TV / Video & Photo</Alink>
                <Alink to={"/Sounds+Appliances"}>Sound Appliances</Alink>
                <Alink to={"/Robotics+Radiotech"}>Robotics / Radiotech </Alink>
                <Alink to={"/Software+&+Materials"}>Software & Materials</Alink>
                <Alink to={"/Networking"}>Networking</Alink>
                <Alink to={"/Storage+&+Power"}>Storage & Power</Alink>
                <Alink to={"/Office+Appliances"}>Office Appliances</Alink>
                <Alink to={"/Industrial+Electronics"}>
                  Industrial Electronics
                </Alink>
                <Alink to={"/Miscellaneous"}>Miscellaneous</Alink>
              </UlistInUlist>
            )}
          </DropdownList>

          <DropdownList
            onMouseOver={() => handleMouseOver(4)}
            onMouseOut={() => handleMouseOut(4)}
          >
            <Alink to={"/Clothing"}>Clothing</Alink>
            {order === 4 && (
              <UlistInUlist>
                <Alink to={"/Men's+clothing"}>Men's clothing</Alink>
                <Alink to={"/Women's+clothing"}> Women's clothing </Alink>
                <Alink to={"/Baby+clothes"}>Baby clothes</Alink>
                <Alink to={"/Overalls"}> Overalls </Alink>
              </UlistInUlist>
            )}
          </DropdownList>

          <DropdownList
            onMouseOver={() => handleMouseOver(5)}
            onMouseOut={() => handleMouseOut(5)}
          >
            <Alink to={"/Vehicles"}>Vehicles</Alink>
            {order === 5 && (
              <UlistInUlist>
                <Alink to={"/Cars"}>Cars</Alink>
                <Alink to={"/Trucks"}>Trucks</Alink>
                <Alink to={"/Buses+&+RVs"}>Buses & RVs</Alink>
                <Alink to={"/Bikes"}>Bikes</Alink>
                <Alink to={"/Boats"}>Boats</Alink>
                <Alink to={"/Auto+Parts"}>Auto Parts</Alink>
                <Alink to={"/Scooters"}>Scooters</Alink>
                <Alink to={"/Farm+Machinery"}>Farm Machinery</Alink>
                <Alink to={"/Construction+Machinery"}>
                  Construction Machinery
                </Alink>
                <Alink to={"/Heavy+Duty"}>Heavy Duty</Alink>
                <Alink to={"/Miscellaneous"}>Miscellaneous </Alink>
              </UlistInUlist>
            )}
          </DropdownList>

          <DropdownList
            onMouseOver={() => handleMouseOver(6)}
            onMouseOut={() => handleMouseOut(6)}
          >
            <Alink to={"/Property"}>Property</Alink>
            {order === 6 && (
              <UlistInUlist>
                <Alink to={"/For+Sale"}>For Sale</Alink>
                <Alink to={"/For+Rent"}>For Rent</Alink>
                <Alink to={"/Commercial+Space"}>Commercial Space</Alink>
                <Alink to={"/Parking+Storage"}>Parking / Storage</Alink>
                <Alink to={"/Farm+Lands"}>Farm Lands</Alink>
                <Alink to={"/Short+Term+Rental"}>Short Term Rental</Alink>
                <Alink to={"/Foreign+Properties"}>Foreign Properties</Alink>
                <Alink to={"/Services"}>Services</Alink>
              </UlistInUlist>
            )}
          </DropdownList>

          <DropdownList
            onMouseOver={() => handleMouseOver(7)}
            onMouseOut={() => handleMouseOut(7)}
          >
            <Alink to={"/Health"}>Health</Alink>
            {order === 7 && (
              <UlistInUlist>
                <Alink
                  to={"/Vitamins,+dietary+supplements,+nutritional+supplements"}
                >
                  Vitamins, dietary supplements, nutritional supplements
                </Alink>
                <Alink to={"/Medical+devices+and+consumables"}>
                  Medical devices and consumables
                </Alink>
                <Alink to={"/Optics"}>Optics</Alink>
                <Alink to={"/Orthopedic+products"}>Orthopedic products</Alink>
                <Alink to={"/Massagers+and+massage+equipment"}>
                  Massagers and massage equipment
                </Alink>
                <Alink to={"/Condoms+and+lubricants"}>
                  Condoms and lubricants
                </Alink>
              </UlistInUlist>
            )}
          </DropdownList>

          <DropdownList
            onMouseOver={() => handleMouseOver(8)}
            onMouseOut={() => handleMouseOut(8)}
          >
            <Alink to={"/Sports"}>Sports</Alink>
            {order === 8 && (
              <UlistInUlist>
                <Alink to={"/Active+recreation"}>Active recreation</Alink>
                <Alink to={"/Winter+sport"}>Winter sport</Alink>
                <Alink to={"/Sports+protection+and+equipment"}>
                  Sports protection and equipment
                </Alink>
                <Alink to={"/Kinds+of+sports"}>Kinds of sports</Alink>
                <Alink to={"/Team+sports"}>Team sports</Alink>
                <Alink to={"/Sports+nutrition"}>Sports nutrition</Alink>
                <Alink to={"/Water+sports"}>Water sports</Alink>
                <Alink to={"/Fitness+and+exercise+equipment"}>
                  Fitness and exercise equipment
                </Alink>
              </UlistInUlist>
            )}
          </DropdownList>
          <DropdownList
            onMouseOver={() => handleMouseOver(9)}
            onMouseOut={() => handleMouseOut(9)}
          >
            <Alink to={"/Jobs"}>Jobs</Alink>
            {order === 9 && (
              <UlistInUlist>
                <Alink to={"/Accounting+and+Financial"}>
                  Accounting and Financial
                </Alink>
                <Alink to={"/Agriculture+and+Animal+Care"}>
                  Agriculture and Animal Care
                </Alink>
                <Alink to={"/Architecture+Construction+and+Design"}>
                  Architecture, Construction and Design
                </Alink>
                <Alink to={"/Business+Operation"}>Business Operation</Alink>
                <Alink to={"/Education+and+Information"}>
                  Education and Information
                </Alink>
                <Alink to={"/Engineering+and+Technology"}>
                  Engineering+and+Technology
                </Alink>
                <Alink to={"/General+Labor"}>General Labor</Alink>
                <Alink to={"/Healthcare"}>Healthcare</Alink>
                <Alink to={"/Information+Technology+and+Internet"}>
                  Information Technology and Internet{" "}
                </Alink>
                <Alink to={"/Management"}>Management </Alink>
                <Alink to={"/Partnership"}>Partnership </Alink>
                <Alink to={"/Resumes"}>Resumes </Alink>
                <Alink to={"/Retail+Sales+and+Food"}>
                  Retail, Sales and Food{" "}
                </Alink>
                <Alink to={"/Transportation+Logistics+and+Warehouse"}>
                  Transportation, Logistics and Warehouse{" "}
                </Alink>
              </UlistInUlist>
            )}
          </DropdownList>

          <DropdownList
            onMouseOver={() => handleMouseOver(10)}
            onMouseOut={() => handleMouseOut(10)}
          >
            <Alink to={"/Repair"}>Repair</Alink>
            {order === 10 && (
              <UlistInUlist>
                <Alink to={"/Hand+tools+and+equipment"}>
                  Hand tools and equipment
                </Alink>
                <Alink to={"/Construction+equipment"}>
                  Construction equipment
                </Alink>
                <Alink to={"/Ventilation"}>Ventilation</Alink>
                <Alink to={"/Power+tools"}>Power tools</Alink>
                <Alink to={"/Electrician"}>Electrician</Alink>
                <Alink to={"/Decoration+Materials"}>Decoration Materials</Alink>
                <Alink to={"/Plumbing"}>Plumbing</Alink>
                <Alink to={"/Lighting"}>Lighting</Alink>
                <Alink to={"/Water+supply+for+home+and+garden"}>
                  Water supply for home and garden
                </Alink>
              </UlistInUlist>
            )}
          </DropdownList>

          <DropdownList
            onMouseOver={() => handleMouseOver(11)}
            onMouseOut={() => handleMouseOut(11)}
          >
            <Alink to={"/Foodstuffs"}>Foodstuffs</Alink>
            {order === 11 && (
              <UlistInUlist>
                <Alink to={"/Grocery"}>Grocery</Alink>
                <Alink to={"/Chocolate+candies+sweets"}>
                  Chocolate, candies, sweets
                </Alink>
                <Alink to={"/Snacks"}>Snacks</Alink>
                <Alink to={"/Fast+food"}>Fast food</Alink>
                <Alink to={"/Tea+coffee+hot drinks"}>
                  Tea, coffee, hot drinks
                </Alink>
                <Alink to={"/Decoration+Materials"}>Decoration Materials</Alink>
                <Alink to={"/Nuts, dried fruits, seeds"}>
                  Nuts, dried fruits, seeds
                </Alink>
                <Alink to={"/Baby+food"}>Baby food</Alink>
                <Alink to={"/Water+juices+drinks"}>Water, juices, drinks</Alink>
                <Alink to={"/Honey+jam+sweet+preserves"}>
                  Honey, jam, sweet preserves
                </Alink>
                <Alink to={"/Healthy+eating"}>Healthy eating</Alink>
                <Alink to={"/Miscellaneous"}>Miscellaneous</Alink>
              </UlistInUlist>
            )}
          </DropdownList>

          <DropdownList
            onMouseOver={() => handleMouseOver(12)}
            onMouseOut={() => handleMouseOut(12)}
          >
            <Alink to={"/Stationery"}>Stationery</Alink>
            {order === 12 && (
              <UlistInUlist>
                <Alink to={"/Paper"}>Paper</Alink>
                <Alink to={"/Calculators"}>Calculators</Alink>
                <Alink to={"/Trade+equipment"}>Trade equipment</Alink>
                <Alink to={"/Seals+and+stamps"}>Seals and stamps</Alink>
                <Alink to={"/Drawing+accessories"}>Drawing accessories</Alink>
                <Alink to={"/Paper products"}>Paper products</Alink>
                <Alink to={"/Cartridges"}>Cartridges</Alink>
                <Alink to={"/Office+tools"}>Office tools</Alink>
                <Alink to={"/Writing+utensils"}>Writing utensils</Alink>
                <Alink to={"/Demo+boards"}>Demo boards </Alink>
                <Alink to={"/Folders+and+files"}>Folders and files</Alink>
                <Alink to={"/Goods+for+school+and+education"}>
                  Goods for school and education
                </Alink>
              </UlistInUlist>
            )}
          </DropdownList>

          <DropdownList
            onMouseOver={() => handleMouseOver(13)}
            onMouseOut={() => handleMouseOut(13)}
          >
            <Alink to={"/Books"}>Books</Alink>
            {order === 13 && (
              <UlistInUlist>
                <Alink to={"/Business+literature"}>Busines literature</Alink>
                <Alink to={"/Magazines+nawspapers"}>
                  Magazines, newspapers
                </Alink>
                <Alink to={"/Literature+in+foreign+linguages"}>
                  Literature in foreign languages
                </Alink>
                <Alink to={"/Educational+literature"}>
                  Educational literature
                </Alink>
                <Alink to={"/Non-fiction"}>Non-fiction</Alink>
                <Alink to={"/Fiction"}>Fiction</Alink>
                <Alink to={"/Comics"}>Comics</Alink>
              </UlistInUlist>
            )}
          </DropdownList>

          <DropdownList>
            <Alink to={"/Miscellaneous"}>Miscellaneous</Alink>
          </DropdownList>
          <DropdownList>
            <Alink to={"/Gifts"}>Gifts</Alink>
          </DropdownList>
          <DropdownList>
            <Alink to={"/Discount"}>Discount</Alink>
          </DropdownList>
        </Ulist>
      </Navbar>
    </BrowserRouter>
  );
}
