import React, {useState} from "react";
import "./form.css";

const Form_data = () =>{
     
  
    
    const handleSubmit=(e)=>{
     e.preventDefault();
      const Assest_ID =e.target.Assest_ID.value;
      const Site_ID =e.target.Site_ID.value;
      const Asset_short_desc =e.target.Asset_short_desc.value;
      const Asset_pre_view =e.target.Asset_pre_view.value;
      const status =e.target.status.value;
      const Asset_long_desc =e.target.Asset_long_desc.value;
      const Location_ID =e.target.Location_ID.value;
      const Asset_Type_ID =e.target.Asset_Type_ID.value;
      const Failure_class_ID =e.target.Failure_class_ID.value;
      const Parent_Id =e.target.Parent_Id.value;
      const Asset_category_ID =e.target.Asset_category_ID.value;
      const Priority_ID =e.target.Priority_ID.value;
      const Serial_number =e.target.Serial_number.value;
      const Purchase_Price =e.target.Purchase_Price.value;
      const Supplier =e.target.Supplier.value;
      const YID_cost =e.target.YID_cost.value;
      const YTD_MTBF =e.target.YTD_MTBF.value;
      const Model =e.target.Model.value;
      const Installation_Date =e.target.Installation_Date.value;
      const Manufacturer =e.target.Manufacturer.value;
      const LTD_cost =e.target.LTD_cost.value;

      console.log("Assest_ID="+Assest_ID);
      console.log("Site_ID="+Site_ID);
      console.log("Asset_short_desc="+Asset_short_desc);
      console.log("Asset_pre_view="+Asset_pre_view);
      console.log("status="+status);

      console.log("Asset_long_desc="+Asset_long_desc);
      console.log("Location_ID="+Location_ID);
      console.log("Asset_Type_ID="+Asset_Type_ID);
      console.log("Failure_class_ID="+Failure_class_ID);
      console.log("Parent_Id="+Parent_Id);
      console.log("Asset_category_ID="+Asset_category_ID);
      console.log("Priority_ID="+Priority_ID);
      console.log("Serial_number="+Serial_number);
      console.log("Purchase_Price="+Purchase_Price);
      console.log("Supplier="+Supplier);
      console.log("YID_cost="+YID_cost);
      console.log("YTD_MTBF="+YTD_MTBF);
      console.log("Model="+Model);
      console.log("Installation_Date="+Installation_Date);
      console.log("Manufacturer="+Manufacturer);
      console.log("LTD_cost="+LTD_cost);
    }

    return(
    <div className="container-fluid">
      <form onSubmit={handleSubmit}>
        <div className="row">
            {/* side menu bar */}
           <div className="col-sm-12 col-md-2 col-lg-2 side">
              <div className="m-4">
                  <p className="m-2">Dashboard</p>
                  <p className="m-2">Maintance</p>
            
                  <select className="m-2">
                      <option>Asset</option>
                      <option>Asset List</option>
                      <option>Asset Tree</option>
                      <option>Asset Transfer</option>
                  </select>
                  <p className="m-2">Notification</p>
                  <p className="m-2">Supplies</p>
                  <p className="m-2">Reports</p>
                  <p className="m-2">Puraching</p>
                  <p className="m-2">Settings</p>
              </div>
           </div>
        {/* side menu bar end */}
           <div className="col-sm-12 col-lg-10 col-md-10">
               <div className="fluid">
             <div className="row">
                 <div className= "col-sm-12 col-md-12 col-lg-12">
                     ORIENS-ASSET TREE
                     <hr></hr>
                    </div>                
                </div>

              <div className="row">
                      <div className= "col-sm-12 col-md-12 col-lg-12">
                      <span className="h">ORIENDS GLOBAL</span> 
                  - PRODUCTION UNIT HELSINKI
                 - PRODUCTION UNIT HELSINKL
                 / PRODUCTION-PRODUCTION / UNE PS20
                 <hr></hr>
                      </div> 
                 </div>
            {/* nav menu start */}
                 <div className="row ">
                     <div className= "col-sm-12 col-md-12 col-lg-12">
                 <section>
<nav class="navbar navbar-expand-md bg-dark navbar-dark">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span class="navbar-toggler-icon"></span>
  </button>
      <div class="collapse navbar-collapse" id="collapsibleNavbar">
                <ul class="navbar-nav  ">
                <li class="nav-item">
                    <a class="nav-link" href="#" >General</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Parts/BOM</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Meter</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Work</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Specification</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Assigned to</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Doc</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Waranty</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Log</a>
                </li>
                </ul>
             </div>
        </nav>
     </section>
     </div>
             </div>
             {/* nav menu end */}
        </div>
        {/*preview section start */}
        
        <div className="row m-2 list">
            <div className= "col-sm-3 col-md-3 col-lg-3">
            <div class="form-group">
	    <label for="Assest ID">Assest ID</label>
	    <input type="text" class="form-control" placeholder="" name="Assest_ID" id="f"/ >
	      </div>

          <div class="form-group">
	    <label for="Site ID">Site ID</label>
	    <input type="text" class="form-control" placeholder="" name="Site_ID" id="f"/ >
	      </div>

            </div>

            <div className= "col-sm-3 col-md-3 col-lg-3">
            <div class="form-group">
	    <label for="Asset_short_desc">Asset short desc</label>
	    <input type="text" class="form-control" placeholder="" name="Asset_short_desc" id="f"/ >
	      </div>

          <div class="form-group">
	    <label for="Asset pre view">Asset pre-view</label>
	    <input type="text" class="form-control" placeholder="" name="Asset_pre_view" id="f"/ >
	      </div>
          
            </div>
            <div className= "col-sm-3 col-md-3 col-lg-3">
            <div class="form-group">
	    <label for="status">Status</label>
	    <input type="text" class="form-control" placeholder="" name="status" id="f"/ >
	      </div>
          
            </div>
          </div>
       {/* preview section end */}

       {/* form section start */}
        
       <div className="row">
            <div className="col-sm-6 col-lg-6 col-md-6">
            <div className="m-4 h">DETAILS</div>
            <hr className="m-4"></hr>
            </div>
            <div className="col-sm-6 col-lg-6 col-md-6">
            <div className="m-4 h">INFO</div>
            <hr className="m-4"></hr>
            </div>
        </div>
        
        
      <div className="row m-2 form">
         <div className="col-sm-3 col-md-3 col-lg-3">
           
         <div class="form-group">
	    <label for="name">Asset long desc</label>
	    <input type="text" class="form-control" placeholder="......." name="Asset_long_desc" id="f"/ >
	      </div>
          <div class="form-group">
	    <label for="name">Location ID</label>
	    <input type="text" class="form-control" placeholder="......." name="Location_ID" id="f"/ >
	      </div>
          <div class="form-group">
	    <label for="name">Asset Type ID</label>
	    <input type="text" class="form-control" placeholder="......." name="Asset_Type_ID" id="f"/ >
	      </div>
          <div class="form-group">
	    <label for="name">Failure class ID</label>
	    <input type="text" class="form-control" placeholder="......." name="Failure_class_ID" id="f"/ >
	      </div>
           
         </div>
         <div className="col-sm-3 col-md-3 col-lg-3">
         <div class="form-group">
	    <label for="name">Parent Id</label>
	    <input type="text" class="form-control" placeholder="......." name="Parent_Id" id="f"/ >
	      </div>
          <div class="form-group">
	    <label for="name">Asset category ID</label>
	    <input type="text" class="form-control" placeholder="......." name="Asset_category_ID" id="f"/ >
	      </div>
          <div class="form-group">
	    <label for="name">Priority ID</label>
	    <input type="text" class="form-control" placeholder="......." name="Priority_ID" id="f"/ >
	      </div>
         </div>
        
         <div className="col-sm-3 col-md-3 col-lg-3">
          <div class="form-group">
	    <label for="name">Serial number</label>
	    <input type="text" class="form-control" placeholder="......." name="Serial_number" id="f"/ >
	      </div>
          <div class="form-group">
	    <label for="name">Purchase Price</label>
	    <input type="text" class="form-control" placeholder="......." name="Purchase_Price" id="f"/ >
	      </div>
          <div class="form-group">
	    <label for="name">Supplier</label>
	    <input type="text" class="form-control" placeholder="......." name="Supplier" id="f"/ >
	      </div>
          <div class="form-group">
	    <label for="name">YID cost</label>
	    <input type="text" class="form-control" placeholder="......." name="YID_cost" id="f"/ >
	      </div>
          <div class="form-group">
	    <label for="name">YTD MTBF</label>
	    <input type="text" class="form-control" placeholder="......." name="YTD_MTBF" id="f"/ >
	      </div>
         </div>
         <div className="col-sm-3 col-md-3 col-lg-3 ">
         <div class="form-group">
	    <label for="Model">Model</label>
	    <input type="text" class="form-control" placeholder="......." name="Model" id="f"/ >
	      </div>
          <div class="form-group">
	    <label for="Installation_Date">Installation Date</label>
	    <input type="date" class="form-control" placeholder="......." name="Installation_Date" id="f"/ >
	      </div>
          <div class="form-group">
	    <label for="Manufacturer">Manufacturer</label>
	    <input type="text" class="form-control" placeholder="......." name="Manufacturer" id="f"/ >
	      </div>
          <div class="form-group">
	    <label for="LTD_cost">LTD cost</label>
	    <input type="text" class="form-control" placeholder="......." name="LTD_cost" id="f"/ >
	      </div>
        
         </div>
      </div>
      

       {/* form section end */}
       
    </div>
    
    <div className="btn"><button >Submit</button></div>
    
    </div>
    </form>
    
    </div> 
    
    );
};

export default Form_data;

{/* display data in console */}