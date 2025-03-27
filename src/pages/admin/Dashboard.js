import React from 'react';
import { Box, Typography, Grid, Card, CardContent } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

// Sample data for the dashboard
const budgetData = [
  { name: 'Programs', budget: 50000 },
  { name: 'Training', budget: 30000 },
  { name: 'Compliance', budget: 20000 },
  { name: 'Support', budget: 15000 }
];

const Dashboard = () => {
  return (
    <Box sx={{ flexGrow: 1, p: 4 }}>
      <Typography variant="h4" fontWeight="bold" mb={3}>Dashboard</Typography>
      <Grid container spacing={3}>
        {/* Budget Overview */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" fontWeight="bold">Budget Overview</Typography>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={budgetData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="budget" fill="#1976d2" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid>

        {/* Summary Section */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" fontWeight="bold">Summary</Typography>
              
              <Card sx={{ mt: 1, p: 2 }}>
                <Typography>Total Programs: 12</Typography>
              </Card>
              <Card sx={{ mt: 1, p: 2 }}>
                <Typography>Ongoing Projects: 5</Typography>
              </Card>
              <Card sx={{ mt: 1, p: 2 }}>
                <Typography>Completed Trainings: 8</Typography>
              </Card>
              <Card sx={{ mt: 1, p: 2 }}>
                <Typography>Compliance Rate: 95%</Typography>
              </Card>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
