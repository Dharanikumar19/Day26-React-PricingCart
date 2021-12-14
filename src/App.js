import logo from './logo.svg';
import './App.css';
import Card from './Card';

function App() {
  return (
    <div className='container'>
    <div className='row'>
      <Card title="FREE" price="$0" month="/month" user="Single User" storage="5 GB" 
      unlimitedPublicProject="Unlimited Public Projects" community="Community Access" 
      unlimitedPrivateProject="Unlimited Private Projects" deticatedPhoneSupport="Deticated Phone Support" 
      freeSubdomain="Free Subdomain" monthlyStatusReports="Monthly Status Reports">
      </Card>

      <Card title="PLUS" price="$9" month="/month" user="5 Users" storage="50 GB" 
      unlimitedPublicProject="Unlimited Public Projects" community="Community Access" 
      unlimitedPrivateProject="Unlimited Private Projects" deticatedPhoneSupport="Deticated Phone Support" 
      freeSubdomain="Free Subdomain" monthlyStatusReports="Monthly Status Reports">
      </Card>

      <Card title="PRO" price="$49" month="/month" user="Unlimited Users" storage="150 GB"
      unlimitedPublicProject="Unlimited Public Projects" community="Community Access" 
      unlimitedPrivateProject="Unlimited Private Projects" deticatedPhoneSupport="Deticated Phone Support" 
      freeSubdomain="Unlimited Free Subdomain" monthlyStatusReports="Monthly Status Reports">
      </Card>
    </div>
    </div>
  );
}

export default App;
