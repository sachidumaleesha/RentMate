import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Checkout from "./Pages/Checkout/Checkout";
import Customer from "./Pages/Customer_Profile/Customer_Profile";
import ForgetPassword from './Pages/ForgetPassword/ForgetPassword';
import SignUp from './Pages/SignUp/SignUp';
import Login from './Pages/Login/Login';
import MainDashboard from './Pages/Main_Dashboard/Dashboard/MainDashboard';
import ContactUs from './Pages/Contact_Us/ContactUs';
import VehichleOwnerDash from './Pages/VehicleOwner_Dashboard/Dashboard/VehichleOwnerDash';
import FaqPage from './Pages/FAQ/FaqPage';
import Property from './Pages/Property/Property';
import Addblog from './Pages/Main_Dashboard/BlogManagement/Add_blog/Addblog';
import Customer_Settings from './Pages/Customer_Profile/Customer_Settings/Customer_Settings';
import LandlordDash from './Pages/Landlord_Dashboard/Dashboard/LandlordDash';
import Customer_Info from './Pages/Customer_Profile/Customer_Info/Customer_Info';
import ShowroomDash from './Pages/Showroom_Dashboard/Dashboard/ShowroomDash';
import Customer_Security from "./Pages/Customer_Profile/Customer_Security/Customer_Security";
import Missing from "./Pages/Error404/Missing";
import LandlordMissing from "./Pages/Landlord_Dashboard/Error404/LandlordMissing";
import ShowroomMissing from "./Pages/Showroom_Dashboard/Error404/ShowroomMissing";
import MainDashMissing from "./Pages/Main_Dashboard/Error404/MainDashMissing";
import VehicleDashMissing from "./Pages/VehicleOwner_Dashboard/Error404/VehicleDashMissing";
import CustomerMissing from "./Pages/Customer_Profile/Error404/CustomerMissing";
import Allproperties from './Pages/AllProperties/Allproperties'
import Alllawyers from './Pages/AllLawyers/Alllawyers'
import Allshowrooms from './Pages/AllShowrooms/Allshowrooms'
import Alltransports from './Pages/AllTransports/Alltransports'
import Guidelines from "./Pages/GuideLines/Guidelines";
import SupportCenter from './Pages/SupportCenter/SupportCenter'
import Ourstory from './Pages/OurStory/Ourstory'
import Ourteam from './Pages/OurTeam/Ourteam'
import Feedback from './Pages/Feedback/Feedback'
import Allblogs from "./Pages/AllBlogs/Allblogs";
import Artical from "./Pages/Articals/Artical";
import Customer_Privacy from "./Pages/Customer_Profile/Customer_Privacy/Customer_Privacy";
import PropertyListings from "./Pages/Landlord_Dashboard/Listings/PropertyListings";
import PropertyReservations from "./Pages/Landlord_Dashboard/Reservations/PropertyReservations";
import LandlordProfile from "./Pages/Landlord_Dashboard/Profile/LandlordProfile";
import LandlordRevenue from "./Pages/Landlord_Dashboard/Revenue/LandlordRevenue";
import LandlordSettings from "./Pages/Landlord_Dashboard/Settings/LandlordSettings";
import Edit_blog from "./Pages/Main_Dashboard/BlogManagement/Edit_blog/Edit_blog";
import Customer_Report from "./Pages/Customer_Profile/Customer_Report/Customer_Report";
import Customer_QASection from "./Pages/Customer_Profile/Customer_QASection/Customer_QASection";
import Customer_Payment from "./Pages/Customer_Profile/Customer_Payment/Customer_Payment";
import Vehicles from "./Pages/VehicleOwner_Dashboard/Vehicles/Vehicles";
import VehicleBookings from "./Pages/VehicleOwner_Dashboard/Bookings/VehicleBookings";
import VehicleOwnerProfile from "./Pages/VehicleOwner_Dashboard/Profile/VehicleOwnerProfile";
import VehicleRevenue from "./Pages/VehicleOwner_Dashboard/Revenue/VehicleRevenue";
import VehicleOwnerSettings from "./Pages/VehicleOwner_Dashboard/Settings/VehicleOwnerSettings";
import AddVehicle from "./Pages/VehicleOwner_Dashboard/Vehicles/AddVehicle/AddVehicle";
import UpdateVehicle from "./Pages/VehicleOwner_Dashboard/Vehicles/UpdateVehicle/UpdateVehicle";
import Users from "./Pages/Main_Dashboard/Users/Users";
import BlogList from "./Pages/Main_Dashboard/BlogManagement/BlogList";
import SiteOwnerRevenue from "./Pages/Main_Dashboard/Revenue/SiteOwnerRevenue";
import SupportCenterDash from "./Pages/Main_Dashboard/SupportCenter/SupportCenterDash";
import SiteOwnerSettings from "./Pages/Main_Dashboard/Settings/SiteOwnerSettings";
import SiteOwnerProfile from "./Pages/Main_Dashboard/Profile/SiteOwnerProfile";
import Customer_AskQ from "./Pages/Customer_Profile/Customer_AskQ/Customer_AskQ";
import ManageShowroom from "./Pages/Showroom_Dashboard/Showroom/ManageShowroom";
import ShowroomFurnitures from "./Pages/Showroom_Dashboard/Furnitures/ShowroomFurnitures";
import ShowroomOwnerSettings from "./Pages/Showroom_Dashboard/Settings/ShowroomOwnerSettings";
import ShowrromOwnerProfile from "./Pages/Showroom_Dashboard/Profile/ShowroomOwnerProfile";
import ShowroomSubscription from "./Pages/Showroom_Dashboard/Subscription/ShowroomSubscription";
import AddFurniture from "./Pages/Showroom_Dashboard/Furnitures/AddFurniture/AddFurniture";
import UpdateFurniture from "./Pages/Showroom_Dashboard/Furnitures/UpdateFurniture/UpdateFurniture";
import Transport from "./Pages/Transport/Transport";
import Showroom from "./Pages/Showroom/Showroom";
import Lawyer from "./Pages/Lawyer/Lawyer";
import Add_users from "./Pages/Main_Dashboard/Users/Add_users/Add_users";
import LawyerProfile from "./Pages/LawyerProfile/Profile/LawyerProfile";
import UpdateLawyerProfile from "./Pages/LawyerProfile/UpdateProfile/UpdateLawyerProfile";
import ReplyUserInquary from "./Pages/Main_Dashboard/SupportCenter/ReplyUser/ReplyUserInquary";
import Add_NewRecord from "./Pages/Main_Dashboard/SupportCenter/Add_NewRecord/Add_NewRecord";
import SubscriptionLawyer from "./Pages/LawyerProfile/Subscription/SubscriptionLawyer";
import SurviceListingLawyer from "./Pages/LawyerProfile/SurviceListingLawyer/SurviceListingLawyer";
import Vehicle from "./Pages/Vehicle/Vehicle";
import UpdateShowroom from "./Pages/Showroom_Dashboard/Showroom/UpdateShowroom/UpdateShowroom";
import ViewShowroom from "./Pages/Showroom_Dashboard/Showroom/ViewShowroom/ViewShowroom";
import PendingProperties from "./Pages/Main_Dashboard/PendingList/PendingProperties/PendingProperties";
import PendingVehicles from "./Pages/Main_Dashboard/PendingList/PendingVehicles/PendingVehicles";
import AddNewProperty from "./Pages/Landlord_Dashboard/Listings/AddListing/AddNewProperty";
import UpdateListing from "./Pages/Landlord_Dashboard/Listings/UpdateListing/UpdateListing";
import Update_userDetails from "./Pages/Main_Dashboard/Users/Update_userDetails/Update_userDetails";
import Customer_Property from "./Pages/Customer_Profile/Customer_Property/Customer_Property";
import AddCard from './Pages/Customer_Profile/Customer_Payment/CardForm/Addcard';
import AllCard from './components/Card/Allcard'
import PaymentForm from './Pages/PaymentForm/PaymentForm'
import UpdateCard from './Pages/Customer_Profile/Customer_Payment/CardForm/Updatecard';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Route Path for SiteOwner */}
        <Route path="/siteowner">
          <Route index element={<MainDashboard/>}></Route>
          <Route path='users' element={<Users/>}></Route>
          <Route path='users/add-user' element={<Add_users/>}></Route>
          <Route path='users/update-user-details' element={<Update_userDetails/>}></Route>
          <Route path='pending-list/pending-properties' element={<PendingProperties/>}></Route>
          <Route path='pending-list/pending-vehicles' element={<PendingVehicles/>}></Route>
          <Route path='blog' element={<BlogList/>}></Route>
          <Route path="blog/add-blog" element={<Addblog />}></Route>
          <Route path="blog/update-blog" element={<Edit_blog/>}></Route>
          <Route path='revenue' element={<SiteOwnerRevenue/>}></Route>
          <Route path='support-center' element={<SupportCenterDash/>}></Route>
          <Route path='support-center/replyInquary/:id' element={<ReplyUserInquary/>}></Route>
          <Route path='support-center/add-record' element={<Add_NewRecord/>}></Route>
          <Route path='settings' element={<SiteOwnerSettings/>}></Route>
          <Route path='profile' element={<SiteOwnerProfile/>}></Route>
          <Route path="*" element={<MainDashMissing />} />
        </Route>
        {/* End of the route Path for SiteOwner */}

        {/* Route Path for Landlord */}
        <Route path="/landlord">
          <Route index element={<LandlordDash />}></Route>
          <Route path="listings" element={<PropertyListings/>}></Route>
          <Route path="listings/add-listing" element={<AddNewProperty/>}></Route>
          <Route path="listings/update-listing" element={<UpdateListing/>}></Route>
          <Route path="reservations" element={<PropertyReservations/>}></Route>
          <Route path="revenue" element={<LandlordRevenue/>}></Route>
          <Route path="settings" element={<LandlordSettings/>}></Route>
          <Route path="profile" element={<LandlordProfile/>}></Route>
          <Route path="*" element={<LandlordMissing />} />
        </Route>
        {/* End of the route Path for Landlord */}

        {/* customer profile paths */}
        <Route path="/customer">
          <Route index element={<Customer />}></Route>
          <Route path="setting/security" element={<Customer_Security/>}></Route>
          <Route path="setting/privacy" element={<Customer_Privacy/>}></Route>
          <Route path="setting" element={<Customer_Settings />}></Route>
          <Route path="setting/info" element={<Customer_Info />}></Route>
          <Route path="setting/report" element={<Customer_Report />}></Route>
          <Route path="payment" element={<Customer_Payment />}></Route>
          <Route path="*" element={<CustomerMissing />} />
          <Route path="question" element={<Customer_QASection />}></Route>
          <Route path="question/ask" element={<Customer_AskQ />}></Route>
          <Route path="customer-property" element={<Customer_Property />}></Route>
          <Route path="addcard" element={<AddCard/>}></Route>
          <Route path="updatecard" element={<UpdateCard/>}></Route>
          <Route path="allcard" element={<AllCard/>}></Route>
        </Route>
        {/* end of customer path */}

        {/* Route Path for Showroom Owner */}
        <Route path="/showroomOwner">
          <Route index element={<ShowroomDash />}></Route>
          <Route path='showroom' element={<ManageShowroom/>}></Route>
          <Route path='showroom/view-showroom' element={<ViewShowroom/>}></Route>
          <Route path='showroom/update-showroom/:ShowroomID' element={<UpdateShowroom/>}></Route>
          <Route path='furnitures' element={<ShowroomFurnitures/>}></Route>
          <Route path='furnitures/add-furniture' element={<AddFurniture/>}></Route>
          <Route path='furnitures/update-furniture' element={<UpdateFurniture/>}></Route>
          <Route path='subscription' element={<ShowroomSubscription/>}></Route>
          <Route path='settings' element={<ShowroomOwnerSettings/>}></Route>
          <Route path='profile' element={<ShowrromOwnerProfile/>}></Route>
          <Route path="*" element={<ShowroomMissing />} />
        </Route>
        {/* End of the route Path for Showroom Owner */}

        {/* Route Path for Vehicle Owner */}
        <Route path="/vehicleOwner">
          <Route index element={<VehichleOwnerDash />}></Route>
          <Route path='vehicles' element={<Vehicles/>}></Route>
          <Route path='vehicles/add-vehicle' element={<AddVehicle/>}></Route>
          <Route path='vehicles/update-vehicle' element={<UpdateVehicle/>}></Route>
          <Route path='bookings' element={<VehicleBookings/>}></Route>
          <Route path='revenue' element={<VehicleRevenue/>}></Route>
          <Route path='settings' element={<VehicleOwnerSettings/>}></Route>
          <Route path='profile' element={<VehicleOwnerProfile/>}></Route>
          <Route path="*" element={<VehicleDashMissing />} />
        </Route>
        {/* End of the route Path for Vehicle Owner */}

        <Route path="/lawyer">
          <Route index element={<LawyerProfile/>}></Route>
          <Route path='update-profile' element={<UpdateLawyerProfile/>}></Route>
          <Route path='lsubscription' element={<SubscriptionLawyer/>}></Route>
          <Route path='surviceLawyer' element={<SurviceListingLawyer/>}></Route>
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/forgetPassword" element={<ForgetPassword />} />
        <Route path="/property" element={<Property />} />
        <Route path="/transport" element={<Transport/>} />
        <Route path="/showroom/:id" element={<Showroom/>} />
        <Route path="/showroom" element={<Showroom/>} />
        <Route path="/view-lawyer/:id" element={<Lawyer/>} />
        <Route path="/vehicle" element={<Vehicle/>} />
        <Route path="/showroom:id" element={<Showroom/>} />
        <Route path="/view-lawyer" element={<Lawyer/>} />
        <Route path="/vehicle/:id" element={<Vehicle/>} />

        {/* Footer Links */}
        <Route path="/our-story" element={<Ourstory/>}/>
        <Route path="/our-team" element={<Ourteam/>}/>
        <Route path="/feedback" element={<Feedback/>}/>
        <Route path="/contact-us" element={<ContactUs />} />

        <Route path="/properties" element={<Allproperties/>} />
        <Route path="/transports" element={<Alltransports/>}/>
        <Route path="/lawyers" element={<Alllawyers/>}/>
        <Route path="/showrooms" element={<Allshowrooms/>}/>
        
        <Route path="/blog" element={<Allblogs/>}/>
        <Route path="blog/Artical" element={<Artical/>}/>
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/guidelines" element={<Guidelines/>}/>
        <Route path="/support-center" element={<SupportCenter/>}/>
        {/* End of the Footer Links */}

        {/* Payment Form */}
        <Route path="/payment/:role" element={<PaymentForm />} />
        {/* 404 Error Page */}
        <Route path="*" element={<Missing />} />
  
      </Routes>
    </div>
  );
}

export default App;
