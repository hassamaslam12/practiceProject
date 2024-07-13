import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Home from '../Screens/Home';
import SelectedTreeView from './SelectedTreeView';
import StudentAdd from '../Screens/StudentAdd';
import AllStudents from '../Screens/AllStudents';
import TransferStudent from '../Screens/TransferStudent';
import SchoolRegistration from '../Screens/SchoolRegistration';
import AddTeacher from '../Screens/Teacher/AddTeacher';
import AllTeachers from '../Screens/Teacher/AllTeachers';
import AddClass from '../Screens/class/AddClass';
import AllClasses from '../Screens/class/AllClasses';
import FeeStructure from '../Screens/Fees/FeesStructure';
import FeeVoucher from '../Screens/Fees/FeeVoucher';
import AllPayments from '../Screens/Payments/AllPayments';
import AddSubjects from '../Screens/Subject/AddSubjects';
import AllSubjects from '../Screens/Subject/AllSubjects';
import AddSyllabus from '../Screens/Syllabus/AddSyllabus';
import AllSyllabus from '../Screens/Syllabus/AllSyllabus';
import SingleSyllabus from '../Screens/Syllabus/SingleSyllabus';
import Protected from '../config/Protected';
import { Button } from '@mui/material';
import { logout } from '../Firebase/FirebaseMethods';

const drawerWidth = 240;

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window?: () => Window;
}

export default function Dashboard(props: Props) {
  const navigate = useNavigate();


  const signUpNavigationHandler=()=>{
    navigate("/signup")
  }
  const logInNavigationHandler=()=>{
    navigate("/login")
  }

  const logoutHandler=()=>{
    logout().then(()=>{
      navigate("/login")
    }).catch(()=>{
      alert("Could not log out")
    })
  }

const resetPassHandler=()=>{
  navigate("/newPass")
}

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const drawerItems:any = [
    {
      NodeName:"School",
      children:[
        {
          name:"Registration",
          path:"schoolRegistration"
        }
      ]
    },
    {
      NodeName:"Student",
      children:[
        {
          name:"Add Student",
          path:"addStudent",
        },
        {
          name:"All Students",
          path:"allStudents",
        },
        {
          name:"Transfer Student",
          path:"transferStudent",
        },
      ]
    },
    {
      NodeName:"Teacher",
      children:[
        {
          name:"Add Teacher",
          path:"addTeacher",
        },
        {
          name:"All Teachers",
          path:"allTeachers",
        },
        {
          name:"Teacher Allocation",
          path:"teacherAllocation",
        },
      ]
    },
    {
      NodeName:"class",
      children:[
        {
          name:"Add Class",
          path:"addClass",
        },
        {
          name:"All Class",
          path:"allClasses",
        },
        
      ]
    },
    {
      NodeName:"Fees",
      children:[
        {
          name:"Fee Structure",
          path:"feeStructure",
        },
        {
          name:"Fee Voucher",
          path:"feeVoucher",
        },
        
      ]
    },
    {
      NodeName:"Payments",
      children:[
        {
          name:"Payment History",
          path:"allPayments",
        },
        
        
      ]
    },
    {
      NodeName:"Subjects",
      children:[
        {
          name:"Add New Subject",
          path:"addSubjects",
        },
        {
          name:"All Subject",
          path:"allSubjects",
        },
        
        
      ]
    },
    {
      NodeName:"Syllabus",
      children:[
        {
          name:"Add New Syllabus",
          path:"addSyllabus",
        },
        {
          name:"All Syllabus",
          path:"allSyllabus",
        },
        
        
      ]
    },
   
  ]


  const drawer = (
    <div>
      <Toolbar />
      <Divider />
        <SelectedTreeView drawerItems ={drawerItems}/>

        <Button variant='contained' onClick={logoutHandler}>Logout</Button>
        <Button variant='contained' onClick={resetPassHandler}>reset password</Button>

      <Divider />
     
    </div>
  );

  

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Happy Palace Group of Schools
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
      
        <Routes>
            <Route   path="/" element={<Home />} />
            <Route   path="/addStudent" element={<StudentAdd />} />
            <Route   path="/allStudents" element={<AllStudents />} />
            <Route   path="/addStudent/:id" element={<StudentAdd />} />
            <Route   path="/transferStudent" element={<TransferStudent />} />
            <Route   path="/schoolRegistration" element={<SchoolRegistration />} />
            <Route   path="/addTeacher" element={<AddTeacher />} />
            <Route   path="/allTeachers" element={<AllTeachers />} />
            <Route   path="/addClass" element={<AddClass />} />
            <Route   path="/allClasses" element={<AllClasses />} />
            <Route   path="/feeStructure" element={<FeeStructure />} />
            <Route   path="/feeVoucher" element={<FeeVoucher />} />
            <Route   path="/allPayments" element={<AllPayments />} />
            <Route   path="/addSubjects" element={<AddSubjects />} />
            <Route   path="/allSubjects" element={<AllSubjects />} />
            <Route   path="/addSyllabus" element={<AddSyllabus />} />
            <Route   path="/allSyllabus" element={<AllSyllabus />} />
            <Route   path="/allSyllabus/:key" element={<SingleSyllabus />} />
        </Routes>
      </Box>
    </Box>
  );
}
