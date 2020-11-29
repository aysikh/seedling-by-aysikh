import React from 'react'
import NewUserForm from '../components/NewUserForm'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

export default function NewUserContainer(){
  return(
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lr">
          <div>
            <NewUserForm />
          </div>
      </Container>
    </React.Fragment>

  )
}