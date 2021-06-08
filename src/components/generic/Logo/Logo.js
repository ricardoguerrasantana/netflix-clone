import React from 'react';
import PropTypes from 'prop-types';
import { Image , Link } from './styled-components';

export default function Logo({ to, alt, src }) {
  return (
    <Link to={to}  >
      <Image
        alt={alt}
        src={src}
      />
    </Link>
  );
}

Logo.propTypes = {
  alt: PropTypes.string,
  src: PropTypes.string.isRequired,
  to: PropTypes.string,
}

Logo.defaultProps = {
  alt: 'logo',
  to: "#",
}