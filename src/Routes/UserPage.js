

const UserPage = () => {
  
    return(
     
      <body>
      <div className="main-content">
       
        <div className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center" style={{height: "350px", backgroundSize: "cover", backgroundPosition: "center top"}}>
          <span className="mask bg-gradient-default opacity-8"></span>
          <div className="container-fluid d-flex align-items-center">
            <div className="row">
              <div className="col-lg-7 col-md-10">
                <h1 className="display-2 text-white">Olá Jesse</h1>
                <p className="text-white mt-0 mb-5">Esta é a tua página de perfil. Aqui podes completar o teu perfil e alterar dados que aches necessário.</p>
                
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
                        <img src="https://demos.creative-tim.com/argon-dashboard/assets/img/theme/team-4.jpg" alt="" className="rounded-circle" style={{width:"200px", marginTop: "20px",
    marginBottom: "20px"}}/>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="card-header text-center border-0">
                  <div className="justify-content-between">
                  <a href="#!" className="btn" style={{color: "white", backgroundColor: "#7E57C2", borderColor: "#7E57C2"}}>Editar Perfil</a>
                  </div>
                </div>
                <div className="card-body pt-0 pt-md-4">
                  <div className="row">
                    <div className="col">
                     
                    </div>
                  </div>
                  <div className="text-center">
                    <h3>
                      Jessica Jones<span className="font-weight-light">, 27</span>
                    </h3>
                    <div className="h5 font-weight-300">
                      <i className="ni location_pin mr-2"></i>USERNAME
                    </div>
                    <div className="h5 font-weight-300">
                      <i className="ni location_pin mr-2"></i>EMAIL
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    </body>
     
  
    )
  };

  
  
  
  
  export default UserPage;
  