import React, { useState } from 'react';
import { OptionsContainer, LogoConatiner, OptionLink, HeaderContainer, HamburgerButton, MobileMenuContainer, MobileNav, MobileCartIconContainer } from './header.styles';
import { ReactComponent as Logo} from '../../assets/crown.svg'
import { auth } from '../../firebase/firebase.util';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { connect } from 'react-redux';
import { selectCartHidden } from '../../redux/cart/carts.selectors';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { createStructuredSelector } from 'reselect';

const Header = ({ currentUser, hidden }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <HeaderContainer>
            <LogoConatiner to="/" onClick={closeMenu}>
                <Logo className='logo' />
            </LogoConatiner>
            
            <OptionsContainer>
                <OptionLink to='/shop' onClick={closeMenu}>
                    SHOP
                </OptionLink>
                <OptionLink to='/shop' onClick={closeMenu}>
                    CONTACT
                </OptionLink>
                {
                    currentUser ? (<OptionLink as={`div`} onClick={() => { auth.signOut(); closeMenu(); }}>SIGN OUT</OptionLink> ) : (<OptionLink className='option' to='/signin' onClick={closeMenu}>SIGN IN</OptionLink>)
                }
                <CartIcon />
            </OptionsContainer>

            <MobileCartIconContainer>
                <CartIcon />
            </MobileCartIconContainer>

            <HamburgerButton onClick={toggleMenu} aria-label="Toggle menu">
                <span></span>
                <span></span>
                <span></span>
            </HamburgerButton>

            {menuOpen && (
                <MobileMenuContainer>
                    <MobileNav>
                        <OptionLink to='/shop' onClick={closeMenu}>
                            SHOP
                        </OptionLink>
                        <OptionLink to='/shop' onClick={closeMenu}>
                            CONTACT
                        </OptionLink>
                        {
                            currentUser ? (<OptionLink as={`div`} onClick={() => { auth.signOut(); closeMenu(); }}>SIGN OUT</OptionLink> ) : (<OptionLink className='option' to='/signin' onClick={closeMenu}>SIGN IN</OptionLink>)
                        }
                    </MobileNav>
                </MobileMenuContainer>
            )}

            {
                hidden ? null : <CartDropdown />
            }
        </HeaderContainer>
    );
}

const mapStateToProps = state => createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden:selectCartHidden
});

export default connect(mapStateToProps)(Header);