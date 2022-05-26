import * as React from 'react';
import Svg, {G, Rect, Path, Defs} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function SvgComponent({}) {
  return (
    <Svg
      width={44}
      height={44}
      viewBox="0 0 43 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <G filter="url(#filter0_d_553_17519)">
        <Rect
          x={4}
          y={4}
          width={35}
          height={35.6938}
          rx={17.5}
          fill="#C4C4C4"
          fillOpacity={0.21}
          shapeRendering="crispEdges"
        />
      </G>
      <Path
        d="M31 22.108a1 1 0 100-2v2zM11.293 20.4a1 1 0 000 1.414l6.364 6.364a1 1 0 001.414-1.414l-5.657-5.657 5.657-5.657a1 1 0 00-1.414-1.414L11.293 20.4zM31 20.108H12v2h19v-2z"
        fill="#fff"
      />
      <Defs></Defs>
    </Svg>
  );
}

export default SvgComponent;
