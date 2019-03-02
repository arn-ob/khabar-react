import React from 'react'
import { Grid, CircularProgress } from '@material-ui/core'

const Loading = () => {
  return (
    <React.Fragment>
      <Grid
        container
        style={{
          justifyContent: 'center',
          padding: `50px`,
          height: `63vh`
        }}
      >
        <Grid item>
          <CircularProgress size={100} />
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default Loading
