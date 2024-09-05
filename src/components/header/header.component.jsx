import React from 'react';
import './header.styles.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo} from '../../assets/crown.svg'
import { auth } from '../../firebase/firebase.util';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { connect } from 'react-redux';
import { selectCartHidden } from '../../redux/cart/carts.selectors';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { createStructuredSelector } from 'reselect';

const Header = ({ currentUser, hidden }) => (
    <div className="header">
        <Link to="/" className='logo-container'>
            <Logo className='logo' />
        </Link>
        <div className='options' >
            <Link className= 'option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/shop'>
                CONTACT
            </Link>
            {
                currentUser ? (<div className='option' onClick={() => auth.signOut()}>SIGN OUT</div> ) : (<Link className='option' to='/signin'>SIGN IN</Link>)
            }
            <CartIcon />
        </div>
        {
            hidden ? null : <CartDropdown />
        }
    </div>
)

const mapStateToProps = state => createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden:selectCartHidden
});

export default connect(mapStateToProps)(Header);