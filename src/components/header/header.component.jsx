import React from 'react';
import { OptionsContainer, LogoConatiner, OptionLink, HeaderContainer } from './header.styles';
import { ReactComponent as Logo} from '../../assets/crown.svg'
import { auth } from '../../firebase/firebase.util';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { connect } from 'react-redux';
import { selectCartHidden } from '../../redux/cart/carts.selectors';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { createStructuredSelector } from 'reselect';

const Header = ({ currentUser, hidden }) => (
    <HeaderContainer>
        <LogoConatiner to="/">
            <Logo className='logo' />
        </LogoConatiner>
        <OptionsContainer>
            <OptionLink to='/shop'>
                SHOP
            </OptionLink>
            <OptionLink to='/shop'>
                CONTACT
            </OptionLink>
            {
                currentUser ? (<OptionLink as={`div`} onClick={() => auth.signOut()}>SIGN OUT</OptionLink> ) : (<OptionLink className='option' to='/signin'>SIGN IN</OptionLink>)
            }
            <CartIcon />
        </OptionsContainer>
        {
            hidden ? null : <CartDropdown />
        }
    </HeaderContainer>
)

const mapStateToProps = state => createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden:selectCartHidden
});

export default connect(mapStateToProps)(Header);