import ColorBox from './ColorboxHook';
import { ColorProvider } from './Color';
import SelectColors from './SelectColors';

const App = () => {
  return (
    <ColorProvider>
      <div>
        <SelectColors />
        <ColorBox />
      </div>
    </ColorProvider>
  );
};

export default App;
  