import Home from "../views/home";
import Service from "../views/services";
import ContactUs from '../views/contactUs';
//import IndividualService from "../views/individualService";
import AboutUs from '../views/aboutUs';
import ProjectDetails from "../views/projectDetails";
//import SMediaService from '../views/sMediaService';
//import Blog from "../components/Blog/blog";
import Links from "../components/Links/links";
import AdminDashboard from "../components/Admin/AdminDashboard";

const routes = [
  {
    component: Home,  // Pass the component reference (not JSX)
    to: '/'
  },
  {
    component: Service,
    to: '/services'
  },
  {
    component: ContactUs,
    to: '/contactUs'
  },
  
  {
    component: AboutUs,
    to: '/aboutUs'
  },
  {
    component: ProjectDetails,
    to: '/projectDetails'
  },
 
  {
    component: Links,
    to: '/links'
  },
  
  {
    component:AdminDashboard,
    to: '/admin'
  },
];

export default routes;
