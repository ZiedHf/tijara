import React, { Component } from "react";
import { ItemComponent } from "./components/ItemComponent";
import { feedObject as feed } from "./assets/fakeApi";

class App extends Component {
  render() {
    return (
      <div>
        {
          feed.map((item, key) => (
            <ItemComponent
              key={key}
              title={item.title}
              userID={item.userID}
              itemType={item.itemType}
              category={item.category}
              tag={item.tag}
              country={item.country}
              region={item.region}
              price={item.price}
              img={item.img}
              short_desc={item.short_desc}
              active={item.active}
              ordred={item.ordred}
              inFavorite={item.inFavorite} />
          ))
        }
      </div>
    );
  }
}

export default App;
