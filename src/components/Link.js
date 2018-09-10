import React from 'react'
import { Button } from '@material-ui/core';

const Link = ({ onClick , active , children }) => (
    <Button variant={active ? 'raised' : 'default'} raised={active} color="secondary" onClick={e => {onClick();}}>{children}</Button>
) ;

export default Link ;
