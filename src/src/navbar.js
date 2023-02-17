import axios from 'axios';
import { NavLink, useNavigate } from 'react-router-dom';
import './App.css'

function Navbar() {
    const token = localStorage.getItem("response-token")

    function checkStatus() {
        const EmpID = localStorage.getItem("EmpID")
        axios.post(`/payroll/timeSheet/checkStatus/${EmpID}`, {},
            {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }
        ).then(res => {
            console.log(res.data)
            if (res.data.timeSheetStatus) {
                alert("please checkin!!")
            } else {
                alert("please checkout!!")
            }
        }).catch(err => {
            console.log(err)
            alert("error found in check status!!")
        })
    }

    const navigate = useNavigate();
    function handleLogin() {
        navigate('/login');
    }
    const handleLogout = () => {
        axios.post(`/api/user/logout`, {
            "deviceInfo": {
                "deviceId": "D1",
                "deviceType": "DEVICE_TYPE_ANDROID",
                "notificationToken": null
            }
        }, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(res => {
            localStorage.clear();
            console.log(res.data);
            alert("logout successful!!")

        }).catch(error => {
            localStorage.clear();
            alert("error")
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        })
        navigate('/login');
    }
    return (
        <div className='main'>
            <nav className="navbar navbar-expand-lg navbar-light bg-light" >
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <NavLink className="nav-link" to='/'>Homepage</NavLink>
                        </li>
                        {/* <li className="nav-item active">
                            <NavLink className="nav-link" to='/login'>Login</NavLink>
                        </li> */}
                        <li className="nav-item active">
                            <NavLink className="nav-link" to='/CreatePosition'>Create Position</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to='/empfunc'>Employee Details</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to='/positiondetails'>EmployeePosition</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to='/getinterviewdetails'>Get Interview Details</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" onClick={checkStatus} to='/TimeSheet'>TimeSheet</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to='/RegisterUser'>RegisterUser</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to='/payslip'>PaySlip</NavLink>
                        </li>
                    </ul>
                </div>
                <form className="d-flex mx-2">
                    <button onClick={handleLogin} className="btn btn-outline-dark" type="submit">Login</button>
                    <button onClick={handleLogout} className="btn btn-outline-dark" type="submit">LogOut</button>
                </form>
            </nav>
        </div>
    )
}
export default Navbar;