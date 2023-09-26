import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const Icons = ({name}: {name?: string}) => {
  switch (name) {
    case 'circle':
      return <Icon name="circle-thin" size={40} color="#fff" />;
    case 'cross':
      return <Icon name="times"  size={40} color="#fff"/>;

    default:
      return <Icon name="pencil" size={40} color="#fff" />;
  }
};

export default Icons;
