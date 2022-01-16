import Cookies from "universal-cookie";
import { useState, useEffect } from "react";
import axios from "axios";
const cookies = new Cookies();

const api = axios.create({
  baseURL: `http://127.0.0.1:3333`,
});

const UserPage = () => {

  
  const [loading, setloading] = useState(true);
  const [userInfo, setuserInfo] = useState(null)

  const [userId, setuserId] = useState(null);
  const cookies = new Cookies();

  useEffect(() => {
    
    if (cookies.get("loginToken") !== undefined){
      let token = cookies.get("loginToken");


      api.get("/auth/me", {
        headers: { 'x-access-token': token }
      }).then((res) => {
        setuserId(res.data.decoded.id)
        console.log(userId)
        setloading(false);
      });

      
    }
    
    const body = {
      id: userId
    }
  
  
    api.post("/auth/meId", body).then((res) => {
      setuserInfo(res.data);
      console.log(res.data)
      setloading(false);
    });

    

    
  }, []);

  



  
  if (loading) {
    return null;
  }
  return (
    

    <body>
      <div className="main-content">
        <div
          className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
          style={{
            height: "350px",
            backgroundSize: "cover",
            backgroundPosition: "center top",
          }}
        >
          <span className="mask bg-gradient-default opacity-8"></span>
          <div className="container-fluid d-flex align-items-center">
            <div className="row">
              <div className="col-lg-7 col-md-10">
                <h1 className="display-2 text-white">Olá Jesse</h1>
                <p className="text-white mt-0 mb-5">
                  Esta é a tua página de perfil. Aqui podes completar o teu
                  perfil e alterar dados que aches necessário.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid mt--7">
          <div className="row">
            <div className=" mb-5 ">
              <div className="card card-profile shadow">
                <div className="row justify-content-center">
                  <div className="col-lg-3 order-lg-2">
                    <div className="card-profile-image">
                      <a href="/admin">
                        <img
                          src="https://demos.creative-tim.com/argon-dashboard/assets/img/theme/team-4.jpg"
                          alt=""
                          className="rounded-circle"
                          style={{
                            width: "200px",
                            marginTop: "20px",
                            marginBottom: "20px",
                          }}
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="card-header text-center border-0">
                  <div className="justify-content-between">
                    <div className="container">
                      <h2>Modal Example</h2>

                      <button
                        type="button"
                        className="btn btn-info btn-lg"
                        dataToggle="modal fade"
                        dataTarget="#myModal"
                      >
                        Open Modal
                      </button>

                      <div className="modal fade" id="myModal" role="dialog">
                        <div className="modal-dialog">
                          <div className="modal-content">
                            <form>
                              <div className="banner">
                                <h1>Donation Form</h1>
                              </div>
                              <br />
                              <fieldset>
                                <legend>Donation Form</legend>
                                <div className="colums">
                                  <div className="item">
                                    <label for="fname">
                                      First Name<span>*</span>
                                    </label>
                                    <input
                                      id="fname"
                                      type="text"
                                      name="fname"
                                    />
                                  </div>
                                  <div className="item">
                                    <label for="lname">
                                      {" "}
                                      Last Name<span>*</span>
                                    </label>
                                    <input
                                      id="lname"
                                      type="text"
                                      name="lname"
                                    />
                                  </div>
                                  <div className="item">
                                    <label for="address">
                                      Email Address<span>*</span>
                                    </label>
                                    <input
                                      id="address"
                                      type="text"
                                      name="address"
                                    />
                                  </div>
                                  <div className="item">
                                    <label for="phone">Phone Number</label>
                                    <input id="phone" type="tel" name="phone" />
                                  </div>
                                  <div className="item">
                                    <label for="saddress">Street Address</label>
                                    <input
                                      id="saddress"
                                      type="text"
                                      name="city"
                                    />
                                  </div>
                                  <div className="item">
                                    <label for="city">City</label>
                                    <input id="city" type="text" name="city" />
                                  </div>
                                  <div className="item">
                                    <label for="zip">Zip/Postal Code</label>
                                    <input id="zip" type="text" name="zip" />
                                  </div>
                                  <div className="item">
                                    <label for="country">Country</label>
                                    <input
                                      id="country"
                                      type="text"
                                      name="text"
                                    />
                                  </div>
                                </div>
                              </fieldset>
                              <br />
                              <fieldset>
                                <legend>Donation Details</legend>
                                <div className="colums"></div>
                                <div className="checkbox">
                                  <p>May we thank you publicly?</p>
                                  <label>
                                    <input type="checkbox" />
                                    No, please keep my information anonymous
                                  </label>
                                </div>
                                <div className="item">
                                  <label for="amount">
                                    Donation Amount<span>*</span>
                                  </label>
                                  <input
                                    id="amount"
                                    type="number"
                                    name="amount"
                                  />
                                </div>
                                <div className="item">
                                  <label for="donation">
                                    Donation Comments
                                  </label>
                                  <textarea id="donation" rows="3"></textarea>
                                </div>
                              </fieldset>
                              <div className="btn-block">
                                <button type="order" href="/">
                                  Confirm Order
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-body pt-0 pt-md-4">
                  <div className="row">
                    <div className="col"></div>
                  </div>
                  <div className="text-center">
                    <h3>
                      Jessica Jones
                      <span className="font-weight-light">, 27</span>
                    </h3>
                    <div className="h5 font-weight-300">
                      <i className="ni location_pin mr-2"></i>
                    </div>
                    <div className="h5 font-weight-300">
                      <i className="ni location_pin mr-2"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
};

export default UserPage;
