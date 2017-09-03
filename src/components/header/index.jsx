import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
}

Header.defaultProps({
    title: ''
});

Header.propTypes = {
    title: PropTypes.string
};

export default connect()(Home);
