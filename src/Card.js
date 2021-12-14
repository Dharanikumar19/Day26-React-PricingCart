import "./card.css"


export default function Card(props) {
    return <div className="col-lg-4 mt-5">
        <div class="card">
            <div class="card-body">
        
                <h6 class="card-titleTop">{props.title}</h6><br/>
                <h5 class="card-title">{props.price}<sub className="sub">{props.month}</sub></h5><hr/>
                <p id="users" class="card-text"> {props.user} </p>
                <p class="card-text"> {props.storage} </p>
                <p class="card-text"> {props.unlimitedPublicProject} </p>
                <p class="card-text"> {props.community} </p>
                <p class="card-text"> {props.unlimitedPrivateProject} </p>
                <p class="card-text"> {props.deticatedPhoneSupport} </p>
                <p class="card-text"> {props.freeSubdomain} </p>
                <p class="card-text"> {props.monthlyStatusReports} </p>
                <a href="#" class="btn btn-primary">BUY NOW</a>
            </div>
        </div>
    </div>
}