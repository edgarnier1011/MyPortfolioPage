import { Link } from "react-router-dom";
//import Button from 'react-bootstrap/Button';

function MyNavigation() {
    return (
        <nav style={{ background: 'linear-gradient(to right, #000000ff, #ffffffff)', padding: '50px', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: '20px' }}>
            <Link to="/" style={{ display: 'inline-block', background: 'linear-gradient(to right, #1d1d1dff, #373737ff)', padding: '12px 24px', textDecorationColor: 'transparent', borderRadius: '5px', color: 'white' }} >Home</Link>

            <Link to="/sermonaudio" style={{ display: 'inline-block', background: 'linear-gradient(to right, #1d1d1dff, #373737ff)', padding: '12px 24px', textDecorationColor: 'transparent', borderRadius: '5px', color: 'white' }} >Mobile Apps</Link>
            <Link to="/mygames" style={{ display: 'inline-block', background: 'linear-gradient(to right, #1d1d1dff, #373737ff)', padding: '12px 24px', textDecorationColor: 'transparent', borderRadius: '5px', color: 'white' }} >My Games</Link>
            <Link to="/githubrepositoriespage" style={{ display: 'inline-block', background: 'linear-gradient(to right, #1d1d1dff, #373737ff)', padding: '12px 24px', textDecorationColor: 'transparent', borderRadius: '5px', color: 'white' }} >GitHub Repositories</Link>
            <Link to="/support" style={{ display: 'inline-block', background: 'linear-gradient(to right, #1d1d1dff, #373737ff)', padding: '12px 24px', textDecorationColor: 'transparent', borderRadius: '5px', color: 'white' }} >Support</Link>
        </nav>
    );
}

export default MyNavigation;