import styled from 'styled-components'

export const Header = styled.header<{ $theme?: '1' | '2' | '3' | '4' }>`
  height: 4.938rem; //79px

  display: flex;
  justify-content: center;
  items-align: center;

  padding: 1.375rem 1.375rem 1.375rem 1.375rem; //22px 22px 22px 22px

  background-color: ${(props) =>
    props.$theme === '1'
      ? '#2851E3'
      : props.$theme === '2'
        ? '#A728E3'
        : props.$theme === '3'
          ? '#2889E3'
          : '#E32828'};
`

export const Container = styled.div`
  max-width: 90rem; //1140px
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Logo = styled.div`
  width: 8.375rem; //134px
  height: 2.125rem; //34px

  border: 1px solid #ffffff;
`

export const Nav = styled.nav`
  max-width: 25.625rem; //410px
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`

export const Ul = styled.ul`
  display: flex;
  align-items: center;
  gap: 1.875rem; //30px

  margin: 0;
  padding: 0;
`

export const Li = styled.li`
  list-style: none;

  font-family: 'Inter', sans-serif;

  font-size: 0.875rem; //14px
  font-weight: 500;

  line-height: 1.059rem; //16.94px
  letter-spacing: 0.013rem; //0.2px

  color: #ffffff;
`

export const divLogin = styled.div`
  width: 10.063rem; //161px
  height: 2.188rem; //35px

  display: flex;
  align-items: center;
  gap: 1.25rem; //20px

  @media (max-width: 768px) {
    max-width: 13.75rem; //220px
    width: 100%;
    justify-content: space-between;
  }

  @media (max-width: 425px) {
    justify-content: end;
    gap: 1.375rem; //22px
  }
`

export const Lenguage = styled.div`
  width: 3.313rem; //53px

  display: flex;
  align-items: center;
  gap: 0.438rem; //7px
`

export const Span = styled.span`
  font-size: 1rem; //16px
  font-weight: 700;

  font-family: 'Inter', sans-serif;

  line-height: 1.21rem; //19.36px
  letter-spacing: 0.013rem; //0.2px

  color: #ffffff;
`

export const Button = styled.button<{ $theme?: '1' | '2' | '3' | '4' }>`
  max-width: 5.5rem; //88px
  width: 100%;
  height: 100%;

  border: none;
  border-radius: 0.313rem; //5px

  font-size: 1rem; //16px
  font-weight: 500;

  font-family: 'Inter', sans-serif;

  line-height: 1.21rem; //19.36px
  letter-spacing: 0.029rem; //0.46px

  color: ${(props) =>
    props.$theme === '1'
      ? '#2851E3'
      : props.$theme === '2'
        ? '#A728E3'
        : props.$theme === '3'
          ? '#2889E3'
          : '#E32828'};

  @media (max-width: 425px) {
    display: none;
  }
`

export const Line = styled.div`
  width: 1.375rem; //22px
  height: 0.125rem; //2px
  background-color: #ffffff;
`

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;

  cursor: pointer;

  @media (min-width: 769px) {
    display: none;
  }
`

export const menuMobile = styled.div<{ $theme?: '1' | '2' | '3' | '4' }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  z-index: 10;

  background-color: ${(props) =>
    props.$theme === '1'
      ? '#2851E3'
      : props.$theme === '2'
        ? '#A728E3'
        : props.$theme === '3'
          ? '#2889E3'
          : '#E32828'};

  @media (min-width: 768px) {
    display: none;
  }
`

export const navMenuMobile = styled.nav`
  max-width: 25.625rem; //410px
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ulMobile = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 80px; //30px

  margin: 0;
  padding: 0;
`

export const liMobile = styled.li`
  list-style: none;

  font-family: 'Inter', sans-serif;

  font-size: 24px; //14px
  font-weight: 500;

  line-height: 1.059rem; //16.94px
  letter-spacing: 0.013rem; //0.2px

  color: #ffffff;
`

export const buttonCloseMenu = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  padding: 10px 15px;
  background-color: transparent;
  border: none;
  cursor: pointer;

  .icon {
    font-size: 20px;
    color: #ffffff;
  }
`
