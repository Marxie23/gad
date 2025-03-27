import { Container, Typography, Box } from '@mui/material';
import { Routes, Route, Link } from 'react-router-dom';
import TrainingManagement from '../pages/admin/TrainingManagement';
import Dashboard from '../pages/admin/Dashboard';
import Registration from '../pages/admin/Registration';

const DashboardLayout = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 4 }}>
        <Typography variant="h4" gutterBottom>
          GAD Information System
        </Typography>
        <Box sx={{ mb: 2 }}>
          <Link to="/">Home</Link> | <Link to="/training">Training</Link> | <Link to="/registration">Register</Link> | <Link to="/landing">Logout</Link>
        </Box>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/training" element={<TrainingManagement/>}/>
          <Route path="/registration" element={<Registration/>} />
        </Routes>
      </Box>
    </Container>
  );
};

export default DashboardLayout;
