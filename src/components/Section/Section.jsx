import PropTypes from 'prop-types';

import { SectionWrStyle, TitleStyle } from './Section.module';

export const Section = ({ title, children }) => {
  return (
    <SectionWrStyle>
      {title && <TitleStyle>{title}</TitleStyle>}
      {children}
    </SectionWrStyle>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
