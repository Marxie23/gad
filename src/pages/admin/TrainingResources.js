import React, { useState } from 'react';
import { Box, Typography, Grid, Card, CardContent, useMediaQuery, Paper, Container } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import TrainingResourceInfo from '../../components/TrainingResourceInfo';
import { useTheme } from '@emotion/react';
import DataGridResource from '../../components/DataGrid'
import { DataGrid } from '@mui/x-data-grid';

const trainingResources = [
  { title: 'Gender Sensitivity Training', description: 'An introduction to gender concepts and gender-sensitive practices.', link: '#',
    organizer:"GAD", totalAttendees:"100"
  },
  { title: 'Gender Analysis Tools', description: 'Learn how to conduct gender analysis for your projects.', link: '#',
    organizer:"PICTO", totalAttendees:"100"
   },
  { title: 'Legal Frameworks on Gender Equality', description: 'Explore national and international gender laws and policies.', link: '#',
    organizer:"PICTO", totalAttendees:"100"
   },
  { title: 'GAD Budgeting Workshop', description: 'Hands-on training on how to prepare and monitor GAD budgets.', link: '#',
    organizer:"GAD", totalAttendees:"100"
   },
  { title: 'Case Studies on GAD Implementation', description: 'Real-world examples of successful GAD projects.', link: '#',
    organizer:"PPDO", totalAttendees:"100"
   }
];

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const TrainingResources = () => {
  const theme = useTheme();
  const isXLorLG = useMediaQuery(theme.breakpoints.up("lg"));

  const [showDialog, setShowDialog] = useState(false);
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const columns = [
    { field: 'id',
      headerName: 'No',
      width: 50,
      type: 'number',},
    {
      field: 'title',
      headerName: 'Title',
      width: 200,
      editable: true,
    },
    {
      field: 'description',
      headerName: 'Description',
      width: 350,
      editable: true,
    },
    {
      field: 'organizer',
      headerName: 'Organizer',
      width: 100,
      editable: true,
    },
    {
      field: 'totalAttendees',
      headerName: 'Total Attendees',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      type: 'number',
      width: 150,
    },
  ];
  
  const rows = [
    {id: 2, title: 'Gender Sensitivity Training', description: 'An introduction to gender concepts and gender-sensitive practices.', link: '#',
      organizer:"GAD", totalAttendees:"100"
    },
    {id: 2, title: 'Gender Analysis Tools', description: 'Learn how to conduct gender analysis for your projects.', link: '#',
      organizer:"PICTO", totalAttendees:"100"
     },
    {id: 3, title: 'Legal Frameworks on Gender Equality', description: 'Explore national and international gender laws and policies.', link: '#',
      organizer:"PICTO", totalAttendees:"100"
     },
    {id: 4, title: 'GAD Budgeting Workshop', description: 'Hands-on training on how to prepare and monitor GAD budgets.', link: '#',
      organizer:"GAD", totalAttendees:"100"
     },
    {id: 5, title: 'Case Studies on GAD Implementation', description: 'Real-world examples of successful GAD projects.', link: '#',
      organizer:"PPDO", totalAttendees:"100"
     }
  ];

  return (
    <Box sx={{flexGrow: 1, p: 1, minWidth:"100%"}}>
      <Typography variant="h4" fontWeight="bold" mb={2}>Training and Resources</Typography>
      <Grid container>
        <Grid item xs={12} md={6} component={Paper}>
          {/* <DataGridResource/> */}
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 5,
                  },
                },
              }}
            pageSizeOptions={[5]}
            disableRowSelectionOnClick
            sx={{minHeight:'80vh'}}
          />
        </Grid>
        <Grid item xs={12} md={6} sx={{display:{lg:'unset', xs:'none'} }}>
        <Box sx={{ml:2}}>
          <Card sx={{minHeight:"85vh"}}>
            <CardContent>
              <Typography variant="h5" fontWeight="bold" mb={3} textAlign='center'>Resource Information</Typography>
            </CardContent>
          </Card>
        </Box>
        </Grid>
        <Box sx={{ display: { xl: "none", lg:"none", md: "block", sm: "block", xs:"block" } }}>
        <React.Fragment>
          <Dialog
            fullScreen
            open={open}
            onClose={handleClose}
            TransitionComponent={Transition}
          >
            <TrainingResourceInfo handleClose={handleClose}/>
          </Dialog>
        </React.Fragment>
        </Box>
      </Grid>
    </Box>
  );
};

export default TrainingResources;
