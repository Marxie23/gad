import React, { useState } from 'react';
import { Box, Typography, Grid, Card, CardContent, Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';

const TrainingManagement = () => {
  const [trainingResources, setTrainingResources] = useState([
    { title: 'Gender Sensitivity Training', description: 'An introduction to gender concepts and gender-sensitive practices.', link: '#' },
    { title: 'Gender Analysis Tools', description: 'Learn how to conduct gender analysis for your projects.', link: '#' }
  ]);

  const [open, setOpen] = useState(false);
  const [newResource, setNewResource] = useState({ title: '', description: '', link: '' });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewResource((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddResource = () => {
    setTrainingResources((prev) => [...prev, newResource]);
    setNewResource({ title: '', description: '', link: '' });
    handleClose();
  };

  const handleDeleteResource = (index) => {
    setTrainingResources((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <Box sx={{ flexGrow: 1, p: 1 }}>
      <Typography variant="h4" fontWeight="bold" mb={1}>Manage Training and Resources</Typography>
      <Button variant="contained" onClick={handleOpen} sx={{ mb: 3 }}>Add New Training or Resource</Button>
      <Grid container spacing={3}>
        {trainingResources.map((resource, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h6" fontWeight="bold">{resource.title}</Typography>
                <Typography variant="body2" color="text.secondary" mt={1}>{resource.description}</Typography>
                <Button variant="outlined" sx={{ mt: 2, mr: 1 }} href={resource.link} target="_blank">Access Resource</Button>
                <Button variant="contained" color="error" onClick={() => handleDeleteResource(index)}>Delete</Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Dialog for adding new resource */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add New Training or Resource</DialogTitle>
        <DialogContent>
          <TextField margin="dense" label="Title" name="title" fullWidth onChange={handleChange} value={newResource.title} />
          <TextField margin="dense" label="Description" name="description" fullWidth onChange={handleChange} value={newResource.description} />
          <TextField margin="dense" label="Resource Link" name="link" fullWidth onChange={handleChange} value={newResource.link} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleAddResource} variant="contained">Add</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default TrainingManagement;
