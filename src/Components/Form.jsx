import { Button } from "./Button";
const Form = () =>{

	const data = (e) =>{
		e.preventDefault();
		const asset_long = e.target.asset_long.value;
		console.log(" tasset_long :"+asset_long);
		const location = e.target.location.value;
		console.log(" location :"+location);
		const asset_type = e.target.asset_type.value;
		console.log(" asset_type :"+asset_type);
		const faiture = e.target.faiture.value;
		console.log(" faiture :"+faiture);
		const parent = e.target.parent.value;
		console.log(" parent :"+parent);
		const asset_cat = e.target.asset_cat.value;
		console.log(" asset_cat :"+asset_cat);
		const asset_peri = e.target.asset_peri.value;
		console.log(" asset_peri :"+asset_peri);
		const asset_serial = e.target.asset_serial.value;
		console.log(" asset_serial :"+asset_serial);
		const asset_pur = e.target.asset_pur.value;
		console.log(" asset_pur :"+asset_pur);
		const asset_supl = e.target.asset_supl.value;
		console.log(" asset_supl :"+asset_supl);
		const asset_VTDC = e.target.asset_VTDC.value;
		console.log(" asset_VTDC :"+asset_VTDC);
		const asset_MTBF = e.target.asset_MTBF.value;
		console.log(" asset_MTBF :"+asset_MTBF);
		const asset_model = e.target.asset_model.value;
		console.log(" asset_model :"+asset_model);
		const asset_date = e.target.asset_date.value;
		console.log(" asset_date :"+asset_date);
		const asset_manu = e.target.asset_manu.value;
		console.log(" asset_manu :"+asset_manu);
		const asset_cost = e.target.asset_cost.value;
		console.log(" asset_cost :"+asset_cost);
	}
    return(
        <>
			<form onSubmit={data}>
				<div class="row form-width">
				<div class="col-sm-6 col-md-6 col-lg-6 col-6">
					<div class="row">
					<p style={{color:'blue' , fontWeight:'bold' ,marginBottom:'4px',marginTop:'15px' }} > DETAILS </p>
							<hr />
						<div class="col-sm-6 col-md-6 col-lg-6 col-6"  style={{ fontWeight:'bold' }}>
							
							<div class="form-group">
								<label>Asset Long desc</label>
								<input type="text" name="asset_long" class="form-control" placeholder="-----"></input>
							</div>
							<div class="form-group">
								<label>location ID</label>
								<input type="text" name="location" class="form-control" placeholder="-----"></input>
							</div>
							<div class="form-group">
								<label>Asset type ID</label>
								<input type="text" name="asset_type" class="form-control" placeholder="-----"></input>
							</div>
							<div class="form-group">
								<label>Faiture class ID</label>
								<input type="text" name="faiture" class="form-control"></input>
							</div>
						</div>
						
						<div class="col-sm-6 col-md-6 col-lg-6 col-6"  style={{ fontWeight:'bold' }}>
							<div class="form-group">
								<label>Parent ID</label>
								<input type="text" name="parent" class="form-control"></input>
							</div>
							<div class="form-group">
								<label>Asset category ID </label>
								<input type="text" name="asset_cat" class="form-control"></input>
							</div>
							<div class="form-group">
								<label>periority ID</label>
								<input type="text" name="asset_peri" class="form-control"></input>
							</div>
						</div>
					</div>
				</div>
				<div class="col-sm-6 col-md-6 col-lg-6 col-6">
					<div class="row">
					<p style={{color:'blue' , fontWeight:'bold' ,marginBottom:'4px',marginTop:'15px' }} > INFO </p>
							<hr />
						<div class="col-sm-6 col-md-6 col-lg-6 col-6" style={{ fontWeight:'bold' }}>
							<div class="form-group" >
								<label>Serial ID</label>
								<input type="text" name="asset_serial" class="form-control"></input>
							</div>
							<div class="form-group">
								<label>Purchase price</label>
								<input type="text" name="asset_pur" class="form-control"></input>
							</div>
							<div class="form-group">
								<label>Supplier </label>
								<input type="text" name="asset_supl" class="form-control"></input>
							</div>
							<div class="form-group">
								<label>VTD cost</label>
								<input type="text" name="asset_VTDC" class="form-control"></input>
							</div>
							<div class="form-group">
								<label>VTD MTBF</label>
								<input type="text" name="asset_MTBF" class="form-control"></input>
							</div>
						</div>
						<div class="col-sm-6 col-md-6 col-lg-6 col-6"  style={{ fontWeight:'bold' }}>
							<div class="form-group">
								<label>Model</label>
								<input type="text" name="asset_model" class="form-control"></input>
							</div>
							<div class="form-group">
								<label>Installation date</label>
								<input type="date" name="asset_date" class="form-control"></input>
							</div>
							<div class="form-group">
								<label>Manufacture</label>
								<input type="text" name="asset_manu" class="form-control"></input>
							</div>
							<div class="form-group">
								<label>LTD cost</label>
								<input type="text" name="asset_cost" class="form-control"></input>
							</div>
							<div>
			
							
						</div>
						
						</div>
					</div>
				</div>
			</div>
			
			</form>

            <div>
				<Button/>
			</div>
        </>
    )
}

export default Form;