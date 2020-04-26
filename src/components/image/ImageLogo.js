import styled, {keyframes} from 'styled-components'

const imageLogoSpin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const ImageLogo = styled.img`
	height: ${props => props.size}px;
	width: ${props => props.size}px;
	cursor: pointer;

	@media (prefers-reduced-motion: no-preference) {
    animation: ${imageLogoSpin} infinite 20s linear;
  }
`;

export default ImageLogo
