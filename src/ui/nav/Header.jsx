import { useState, useCallback } from 'react';
import Categories from './Categories';

const Header = () => {
  const [category, setCategory] = useState('all');
  const onSelect = useCallback((category) => setCategory(category), []);

  return (
    <div>
      <Categories category={category} onSelect={onSelect} />
    </div>
  );
};

export default Header;
