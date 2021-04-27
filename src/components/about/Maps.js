import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const MapChart = ({ setTooltipContent }) => {
  return (
    <ComposableMap
      data-tip=""
      projection="geoMercator"
      projectionConfig={{
        scale: 150,
      }}
    >
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              onMouseEnter={() => {
                const { NAME } = geo.properties;
                setTooltipContent(`${NAME}`);
              }}
              onMouseLeave={() => {
                setTooltipContent("");
              }}
              style={{
                default: {
                  fill: "hsl(210, 35%, 85%)",
                  outline: "none",
                },
                hover: {
                  fill: "hsl(160, 51%, 60%)",
                  outline: "none",
                },
                pressed: {
                  fill: "hsl(160, 69%, 44%)",
                  outline: "none",
                },
              }}
              stroke="hsl(210, 36%, 96%)"
            />
          ))
        }
      </Geographies>
      <Marker coordinates={[77.580643, 12.972442]}>
        {/* India */}
        <circle r={4} fill="hsl(360, 71%, 66%)" />
      </Marker>
      <Marker coordinates={[138.252924, 36.204824]}>
        {/* Japan */}
        <circle r={4} fill="hsl(360, 71%, 66%)" />
      </Marker>
      <Marker coordinates={[101.693207, 3.140853]}>
        {/* Malaysia */}
        <circle r={4} fill="hsl(360, 71%, 66%)" />
      </Marker>
      <Marker coordinates={[127.766922, 35.907757]}>
        {/* South Korea */}
        <circle r={4} fill="hsl(360, 71%, 66%)" />
      </Marker>
      <Marker coordinates={[-51.92528, -14.235004]}>
        {/* Brazil */}
        <circle r={4} fill="hsl(360, 71%, 66%)" />
      </Marker>
      <Marker coordinates={[-95.712891, 37.09024]}>
        {/* US */}
        <circle r={4} fill="hsl(360, 71%, 66%)" />
      </Marker>
      <Marker coordinates={[-106.346771, 56.130366]}>
        {/* Canada */}
        <circle r={4} fill="hsl(360, 71%, 66%)" />
      </Marker>
      <Marker coordinates={[10.451526, 51.165691]}>
        {/* Germany */}
        <circle r={4} fill="hsl(360, 71%, 66%)" />
      </Marker>
    </ComposableMap>
  );
};

export default MapChart;
