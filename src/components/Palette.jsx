import React, { useState, useEffect } from "react";
import { ReactSortable } from "react-sortablejs";
import ColourBox from "./ColourBox";
import PaletteClass from '../classes/palette';

function Palette({ palette, setPalette, grayscale }) {
  const [colours, setColours] = useState(palette.colours);

  useEffect(() => {
    setColours(palette.colours);
  }, [palette]);

  const setColoursAndCreatePalette = (newColours) => {
    // Update the local state with the new order of colours
    setColours(newColours);

    // Recreate the palette object using the new order of colours
    const newPalette = new PaletteClass(newColours);

    // Update the parent component's state with the new palette object
    setPalette(newPalette);
  };

  return (
    <ReactSortable
      className="palette flex min-h-[5rem] m-5"
      list={colours}
      setList={setColoursAndCreatePalette}
    >
      {colours.map((colour, index) => (
        <ColourBox
          key={index}
          hue={colour.hue}
          saturation={colour.saturation}
          lightness={colour.lightness}
          grayscale={grayscale}
        />
      ))}
    </ReactSortable>
  );
}

export default Palette;
