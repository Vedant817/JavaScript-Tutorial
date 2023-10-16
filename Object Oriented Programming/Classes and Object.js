class RailwayForm{
    submit(){
        console.log("Form Submitted")   
    }
    cancel(){
        console.log("Form Cancelled")
    }
}
let vedant = new RailwayForm();
let vanshay = new RailwayForm();
vedant.submit()
vanshay.submit()
vanshay.cancel()
