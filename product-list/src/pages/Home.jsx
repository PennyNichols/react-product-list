import { useState } from 'react';
import Categories from '../components/Categories/Categories';
import Header from '../components/Header/Header';
import Menus from '../components/Menus/Menus';
import Range from '../components/Range/Range';
import SearchBox from '../components/SearchBox/SearchBox';
import data from '../helper/data';

const Home = () => {
  const [menuItems, setMenuItems] = useState(data);
  const [categorySearch, setCategorySearch] = useState('all');
  const maxPriceTag = data.reduce((acc, item) => {
    if (item.price > acc) acc = item.price;
    return acc;
  }, 0);
  const [maxPrice, setMaxPrice] = useState(maxPriceTag);
  const [minPrice, setMinPrice] = useState(0);
  const [valueMax, setValueMax] = useState(maxPriceTag);
  const [valueMin, setValueMin] = useState(0);
  const onSearchChange = e => {
    if (categorySearch === 'all') {
      const filtered = data.filter(item => {
        return item.title
          .toLocaleLowerCase()
          .includes(e.target.value.toLocaleLowerCase());
      });
      setMenuItems(filtered);
    } else {
      const filtered = data.filter(item => {
        return (
          item.title.toLocaleLowerCase().includes(e.target.value) &&
          item.category.name === categorySearch
        );
      });
      setMenuItems(filtered);
    }
  };
  // const allCategories = data.reduce(
  //   (acc, value) => {
  //     if (!acc.includes(value.category.name)) {
  //       acc.push(value.category.name);
  //     }
  //     return acc;
  //   },
  //   ['all']
  // );
  const priceFilter = () => {
    if (categorySearch === 'all') {
      const filtered = data.filter(item => {
        return item.price < maxPrice && item.price > minPrice;
      });
      setMenuItems(filtered);
    } else {
      const filtered = data.filter(item => {
        return (
          item.price < maxPrice &&
          item.price > minPrice &&
          item.category.name === categorySearch
        );
      });
      setMenuItems(filtered);
    }
  };
  const allCategories = data.reduce(
    (acc, value) =>
      !acc.includes(value.category.name) ? [...acc, value.category.name] : acc,
    ['all']
  );

  const handleClick = categoryName => {
    if (categoryName === 'all') {
      setMenuItems(data);
      setCategorySearch('all');
      setMaxPrice(maxPriceTag);
      setMinPrice(0);
      setValueMax(maxPriceTag);
      setValueMin(0);
    } else {
      const filtered = data.filter(item => {
        return item.category.name === categoryName;
      });
      setMenuItems(filtered);
      setCategorySearch(categoryName);
      setMaxPrice(maxPriceTag);
      setMinPrice(0);
      setValueMax(maxPriceTag);
      setValueMin(0);
    }
  };

  return (
    <div>
      <Header />
      <Categories {...{ allCategories, handleClick }} />
      <SearchBox onChangeHandler={onSearchChange} />
      <Range
        maxPriceTag={maxPriceTag}
        setMaxPrice={setMaxPrice}
        setMinPrice={setMinPrice}
        priceFilter={priceFilter}
        maxPrice={maxPrice}
        minPrice={minPrice}
        valueMax={valueMax}
        setValueMax={setValueMax}
        valueMin={valueMin}
        setValueMin={setValueMin}
      />
      <Menus menuItems={menuItems} />
    </div>
  );
};

export default Home;