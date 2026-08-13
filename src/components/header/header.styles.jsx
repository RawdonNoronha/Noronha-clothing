import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
    height: auto;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 25px;
    padding: 10px 0;
    position: relative;
    flex-wrap: wrap;

    @media (max-width: 767px) {
        min-height: 60px;
        padding: 10px 0;
    }
`;

export const LogoConatiner = styled(Link)`
    height: 50px;
    width: 50px;
    padding: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;

    @media (min-width: 481px) {
        height: 60px;
        width: 60px;
        padding: 20px;
    }

    @media (min-width: 768px) {
        height: 70px;
        width: 70px;
        padding: 25px;
    }

    @media (min-width: 1024px) {
        height: 100px;
        width: 100px;
        padding: 30px;
    }
`;

export const OptionsContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 15px;

    @media (max-width: 767px) {
        display: none;
    }
`;

export const OptionLink = styled(Link)`
    padding: 10px 15px;
    cursor: pointer;
    font-size: 14px;
    white-space: nowrap;

    @media (max-width: 1024px) {
        padding: 8px 10px;
        font-size: 13px;
    }
`;

export const MobileCartIconContainer = styled.div`
    display: flex;
    align-items: center;
    flex-shrink: 0;

    @media (min-width: 768px) {
        display: none;
    }
`;

export const HamburgerButton = styled.button`
    display: none;
    flex-direction: column;
    background: none;
    border: none;
    cursor: pointer;
    padding: 10px;
    flex-shrink: 0;

    @media (max-width: 767px) {
        display: flex;
        gap: 5px;
    }

    span {
        width: 25px;
        height: 3px;
        background-color: black;
        border-radius: 2px;
        transition: all 0.3s ease;
    }
`;

export const MobileMenuContainer = styled.div`
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: white;
    border-bottom: 1px solid black;
    z-index: 10;
    display: flex;
    flex-direction: column;

    @media (min-width: 768px) {
        display: none;
    }
`;

export const MobileNav = styled.div`
    display: flex;
    flex-direction: column;
    padding: 15px;
    gap: 10px;

    a {
        padding: 10px 15px;
        border-bottom: 1px solid #f0f0f0;
        
        &:last-child {
            border-bottom: none;
        }
    }
`;
