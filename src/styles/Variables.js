import styled from 'styled-components';

/* COLORS */
export const primaryColor =         '#ff8000';
export const secondaryColor =       '#8000ff';

export const colorWhite =             '#fff';
export const colorDark =              '#343434';
export const colorDarkLO =            'rgba(20,20,20,0.8';
export const colorLightOrange =       '#e56634';
export const colorLightPurple =       '#c9496d';
export const principalColorGradient = 'linear-gradient(-225deg, $primary-color 0%, $color-light-orange 15%, $color-light-purple 40%, $secondary-color 70%)';   

// ----------- FONTS -------------

export const fontFamilyBase =         "'Open sans', sans-serif";

/* FONT WEIGHT */

export const fontWeightLight =        '300';
export const fontWeightRegular =      '400';
export const fonteWeightSemiBold =    '600';
export const fonteWeightBold =        '700';

/* FONT SIZE */

export const fontSizeTiny =           '0.625rem'; //10px
export const fontSizeSmall =          '0.75rem';  //12px
export const fontSizeBase =           '1rem';     //16px
export const fontSizeMedium =         '1.125rem'; //18px
export const fontSizeLarge =          '1.25rem';  //20px
export const fontSizeExtra =          '1.375rem'; //22px

/* SPECIAL FONT SIZES */

export const fontSizeTitle =          '2rem';     //32px

/* PADDINGS AND MARGINS */

export const distanceTiny =           '0.03125rem';   //5px
export const distanceWee =            '0.625rem';     //10px
export const distanceSmall =          '0.9375';       //15px
export const distanceBase =           '1.25rem';      //20px
export const distanceMedium =         '1.5625rem';    //25px
export const distanceLarge =          '1.875rem';     //30px
export const distanceExtra =          '2.5rem';       //40px
export const distanceUltra =          '3.125rem';     //50px

/* TRANSITIONS */

export const transitionDuration =     '0.25s';
export const transitionDurationSlow = '0.60s';

/* OBJECTS */

export const CallButton = styled.a`
  background-color: transparent;
  border-radius: 3px;
  text-decoration: none;
  font-weight: bold;
  text-align: center;
  padding: 0.5rem 1.5rem;
  cursor: pointer;
  border: 2px solid #fff;
  margin: auto 1.5rem;
  color: #fff;

  transition: 0.3s all;
  text-transform: uppercase;

  &:hover {
    background-color: #fff;
    color: ${secondaryColor};
  }
`;

export const ColoredButton = styled(CallButton)`
  color: ${props => props.color || '#454545'};
  border: 2px solid ${props => props.color || '#454545'};

  &:hover {
    color: #fff;
    background-color: ${props => props.color || '#454545'};
  }
`;

export const Section = styled.div`
  flex-direction: column;
  padding: 5rem 0;
  display: flex;

  background-color: ${props => props.background || 'rgba(255,255,255,0.4)'}
`;

export const SectionHeader = styled.div`
  padding: 0 5rem;
  
  text-align: ${props => props.align || 'center'};

  @media screen and (max-width: 1020px) {
    text-align: center;
  }
`;

export const SectionTitle = styled.h3`
  font-family: 'Open Sans', sans-serif;
  font-weight: bold;
  font-size: 42px;
  display: inline-flex;

  color: ${props => props.color || '#454545'};
`;