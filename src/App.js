import React, { Component } from 'react';
import ItemComponent from './components/ItemComponent';

const feed = [
  {
    title: 'Computer Dell N5510',
    userID: 1,
    itemType: 'product',
    category: ['Tech', 'Computer'],
    tag: ['New', 'Upcoming', 'Featured'],
    country: ['tunisia'],
    region: ['Ben Arous'],
    price: {
      min: 100,
      max: 200
    },
    img: 'https://www.assessmentday.co.uk/images/psychometric-test-practice.gif',
    short_desc: 'This is a short description about the product best friends',
    active: true,
    ordred: true,
    inFavorite: true
  },
  {
    title: 'Web Development',
    userID: 1,
    itemType: 'service',
    category: ['Dev', 'Web', 'programation', 'Creativity'],
    tag: ['PHP', 'JS', 'React', 'Ruby'],
    country: ['tunisia'],
    region: ['Tunis'],
    price: {
      min: 1000,
      max: 2000
    },
    img: 'https://www.assessmentday.co.uk/images/psychometric-test-practice.gif',
    short_desc: 'jhsdfkjhsdkf kjshdkfh skdhfks hkdfhks hdfks hkshdfk shdkfhsdhfsdkfhskdfhskf',
    active: true,
    ordred: false,
    inFavorite: false
  }
];

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
