import logo from './logo.svg';
import './App.css';
import Card from './Card';

var priceList = [
  {
    plan : "FREE",
    price : 0,
    period : "month",
    features : [
      {
        name : "Single User",
        enable : true
      },
      {
        name : "5GB Storage",
        enable : true
      },
      {
        name : "Unlimited Public Projects",
        enable : true
      },
      {
        name : "Community Access",
        enable : true
      },

      {
        name : "Unlimited Private Projects",
        enable : false
      },
      {
        name : "Dedicated Phone Support",
        enable : false
      },
      {
        name : "Free Subdomain",
        enable : false
      },
      {
        name : "Monthly Status Reports",
        enable : false
      },
    ]
  },
  {
    plan : "PLUS",
    price : 9,
    period : "month",
    features : [
      {
        name : "5 User",
        enable : true,
        isStrong : true
      },
      {
        name : "50GB Storage",
        enable : true
      },
      {
        name : "Unlimited Public Projects",
        enable : true
      },
      {
        name : "Community Access",
        enable : true
      },

      {
        name : "Unlimited Private Projects",
        enable : true
      },
      {
        name : "Dedicated Phone Support",
        enable : true
      },
      {
        name : "Free Subdomain",
        enable : true
      },
      {
        name : "Monthly Status Reports",
        enable : false
      },
    ]
  },
  {
    plan : "PRO",
    price : 49,
    period : "month",
    features : [
      {
        name : "Unlimited User",
        enable : true,
        isStrong : true
      },
      {
        name : "150GB Storage",
        enable : true
      },
      {
        name : "Unlimited Public Projects",
        enable : true
      },
      {
        name : "Community Access",
        enable : true
      },

      {
        name : "Unlimited Private Projects",
        enable : true
      },
      {
        name : "Dedicated Phone Support",
        enable : true
      },
      {
        name : "Unlimited Free Subdomain",
        enable : true
      },
      {
        name : "Monthly Status Reports",
        enable : true
      },
    ]
  },
]


function App() {
  return (
    <section class="pricing py-5">
    <div className='container'>
    <div className='row'>
     {
    priceList.map((obj) =>  <Card data={obj}></Card> )
    }
    </div>
    </div>
    </section>
  );
}

export default App;
