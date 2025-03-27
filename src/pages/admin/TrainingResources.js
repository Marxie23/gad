import React from 'react';
import { Box, Typography, Grid, Card, CardContent, Button } from '@mui/material';

const trainingResources = [
  { title: 'Gender Sensitivity Training', description: 'An introduction to gender concepts and gender-sensitive practices.', link: '#' },
  { title: 'Gender Analysis Tools', description: 'Learn how to conduct gender analysis for your projects.', link: '#' },
  { title: 'Legal Frameworks on Gender Equality', description: 'Explore national and international gender laws and policies.', link: '#' },
  { title: 'GAD Budgeting Workshop', description: 'Hands-on training on how to prepare and monitor GAD budgets.', link: '#' },
  { title: 'Case Studies on GAD Implementation', description: 'Real-world examples of successful GAD projects.', link: '#' }
];

const TrainingResources = () => {
  return (
    <Box sx={{ flexGrow: 1, p: 4 }}>
      <Typography variant="h4" fontWeight="bold" mb={3}>Training and Resources</Typography>

      <Grid container spacing={3}>
        {trainingResources.map((resource, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h6" fontWeight="bold">{resource.title}</Typography>
                <Typography variant="body2" color="text.secondary" mt={1}>{resource.description}</Typography>
                <Button variant="outlined" sx={{ mt: 2 }} href={resource.link} target="_blank">Access Resource</Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TrainingResources;
