import './App.css';
import i1 from './component/images/bike.png'
import i2 from './component/images/drugs.png'
import i3 from './component/images/people.png'
import Text from './component/text';

function App() {
  let htext = ["All Our Medicine needs in one place", "Get your drugs at your doorstep", "Set up your profile and get refill easily"]
  let ptext = ["Search and find all kinds of drugs", "We have drugs for social case treatments", "Get notified when your drugs available", "Get staright delivery to your doorstep", "We deliver within 24hrs of request", "We guarntee speedily response", "When you are a member your refill is easier", "with one click your medicine is on its way", "Select healthcare specialist "]
  return (
    <>
      <Text h4={htext[0]} p1={ptext[0]} p2={ptext[1]} p3={ptext[2]} img={i1}   />
      <Text h4={htext[1]} p1={ptext[3]} p2={ptext[4]} p3={ptext[5]} img={i2} dir="row-reverse" />
      <Text h4={htext[2]} p1={ptext[6]} p2={ptext[7]} p3={ptext[8]} img={i3} />
      
    </>
  );
}

export default App;
