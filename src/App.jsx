
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Layout from './Layout/Layout';
import Home from './Home/Home';
import Gallery from './Gallery/gallery';
import Shortcodes from './Shortcodes/shortcodes';
import Languages from './Languages/languages';
import About from './About/about';
import PageMarkup from './About/PageMarkup';
import ContactForm from './About/ContactForm';
import PageImage from './About/PageImage';
import ClearingFloats from './About/ClearingFloats';
import PageWithComments from './About/PageWithComments';
import PageWithCommentsDisabled from './About/disabled';

function App() {
  return (
<>

<Routes>
  <Route path="/" element={<Layout/>}>
<Route index element={<Home/>}/>
<Route path='gallery' element={<Gallery/>}/>
<Route path='shortcodes' element={<Shortcodes/>}/>
<Route path='about' element={<About/>}/>

<Route path='about/PageMarkup' element={<PageMarkup/>}/>
<Route path='about/ContactForm' element={<ContactForm/>}/>
<Route path='about/PageImage' element={<PageImage/>}/>
<Route path='about/ClearingFloats' element={<ClearingFloats/>}/>
<Route path='about/PageWithComments' element={<PageWithComments/>}/>
<Route path='about/PageWithCommentDisabled' element={<PageWithCommentsDisabled/>}/>
<Route path='languages' element={<Languages/>}/>
  </Route>
</Routes>
</>
  );
}

export default App;
