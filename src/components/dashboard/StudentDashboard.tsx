import React from 'react'
import { Box, Container, Grid, Paper, Typography } from '@mui/material'

export const StudentDashboard: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Welcome back!
      </Typography>

      <Grid container spacing={3} sx={{ mt: 2 }}>
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ p: 2, textAlign: 'center' }}>
            <Typography variant="h6">Active Courses</Typography>
            <Typography variant="h4" color="primary">
              5
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ p: 2, textAlign: 'center' }}>
            <Typography variant="h6">In Progress</Typography>
            <Typography variant="h4" color="info.main">
              3
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ p: 2, textAlign: 'center' }}>
            <Typography variant="h6">Completed</Typography>
            <Typography variant="h4" color="success.main">
              2
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ p: 2, textAlign: 'center' }}>
            <Typography variant="h6">Certificates</Typography>
            <Typography variant="h4" color="warning.main">
              2
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h6" gutterBottom>
          Recent Courses
        </Typography>
        <Paper sx={{ p: 2 }}>
          <Typography color="textSecondary">
            Course list will be displayed here
          </Typography>
        </Paper>
      </Box>
    </Container>
  )
}

export default StudentDashboard
