import logo from './logo.svg';
import minion from './minion.png'
import './App.css';
import { withLDConsumer } from 'launchdarkly-react-client-sdk';

const queryParams = new URLSearchParams(window.location.search);
const region = queryParams.get("region") || "unknown";

const Home = ({ flags, ldClient }) => {

  ldClient.identify({
    key: 'user_and_region_3',
    kind: 'user',
    name: 'User with region 3',
    email: 'User@example.com',
    region: region
  });

  return (
    <div className="App">
      <header className="App-header">

        { flags.usersFromUS ? (<h1>You are in the US!</h1>) : (<h2>Welcome!</h2>) }

        { flags.imageSwitch ? (<img src={minion} className="App-logo" alt="logo" />) : (
          <img src={logo} className="App-logo" alt="logo" />)
        }

        <p>
          You are in the region: {region}
        </p>
      
      </header>
    </div>
  );
}

export default withLDConsumer()(Home);
