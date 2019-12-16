import { keyframes } from 'styled-components';
export const colors = {
	/* 0 -> light, 1 -> medium, 2 -> dark */
	primary: ['#fddb5d', '#ccaf43', '#a09440'],
	secondary: ['#94d5c0', '#869691', '#4a6a60'],
	accent: ['#ff4a78', '#d53860', '#b31c42'],
	white: ['#efefef', '#c2c2c2', '#d2d2d2'],
	black: ['#34383f', '#333', '#111'],
	success: ['#c0ffc8', '#00cc1a']
};

export const fadeInLeft = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-10px);
  }
  100% {
    opacity: 1;
    transform: translateX(0px);
  }
`;

export const grow = keyframes`
0% {
  transform: scale(0);
  opacity: 0;
}
90% {
  transform: scale(1.5);
  opacity: 7;
}
100% {
  transform: scale(1);
  opacity: 1;
}
`;
