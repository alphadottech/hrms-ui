import React from "react";
import Empfunc from './employeedetails'
import PositionDetails from './Position'
import Login from "./login"
import CreatePosition from './createposition'
import Getinterviewdetails from './Getinterview'
import HRMSHomepage from "./Homepage";
import Navbar from "./navbar";
import TimeSheet from './TimeSheet'
import RegisterUser from './RegisterUser'
import Payslipdetails from './Payslipdetails'
import { Route, Routes } from "react-router-dom";
function Approuter() {
    return (
        <div>
            <div>
                 <Navbar></Navbar>
                <Routes>
                    <Route path="/" element={<HRMSHomepage/>}/>
                    <Route path='/Login' element={<Login/>} />
                    <Route path='/empfunc' element={<Empfunc/>} />
                    <Route path='/positiondetails' element={<PositionDetails/>} />
                    <Route path='/createposition' element={<CreatePosition/>} />
                    <Route path='/getinterviewdetails' element={<Getinterviewdetails/>} />
                    <Route path="/TimeSheet" element={<TimeSheet/>} />
                    <Route path="/RegisterUser" element={<RegisterUser/>} />
                    <Route path="/payslip" element={<Payslipdetails/>} />
                    </Routes>
            </div>
        </div>
    )
}
export default Approuter;