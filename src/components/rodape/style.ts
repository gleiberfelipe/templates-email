import styled from 'styled-components'

export const Footer = styled.footer<{ $theme?: '1' | '2' | '3' | '4' }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 100px 1.375rem 100px 1.375rem; //0 22px 0 22px

  background-color: ${(props) =>
    props.$theme === '1'
      ? '#3563E9'
      : props.$theme === '2'
        ? '#B035E9'
        : props.$theme === '3'
          ? '#3592E9'
          : '#E93535'};
`

export const Container = styled.div`
  max-width: 75rem; //1200px
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: centers;
  gap: 2.938rem; //47px
`

export const Content = styled.div`
  max-width: 68rem; //1088px
  width: 100%;

  display: flex;
  align-items: start;

  gap: 3.813rem; //61px

  @media (max-width: 987px) {
    flex-direction: column;
    gap: 3.125rem; //50px
  }
`

export const divInformation = styled.div`
  max-width: 43.063rem; //689px
  width: 100%;

  height: 100%;

  display: flex;
  align-items: start;
  justify-content: space-between;

  @media (max-width: 425px) {
    max-width: 350px; //689px
    width: 100%;

    flex-wrap: wrap;
    gap: 1.375rem; //22px
  }
`

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.938rem; //15px

  div {
    display: flex;
    flex-direction: column;
    gap: 0.813rem; //13px
  }
`

export const H1 = styled.h1`
  font-size: 1rem; //16px
  font-weight: 700;

  line-height: 1.75rem; //28px

  font-family: 'Inter', sans-serif;

  color: #ffffff;
`

export const Span = styled.span`
  font-size: 1rem; //16px
  font-weight: 400;

  line-height: 1.21rem; //19.36px

  font-family: 'Inter', sans-serif;

  color: #ffffff;
  opacity: 70%;
`

export const ContainerEmail = styled.div<{ $theme?: '1' | '2' | '3' | '4' }>`
  max-width: 21.125rem; //338px
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.625rem; //10px

  padding-right: 8px;
  padding-left: 8px;

  background-color: ${(props) =>
    props.$theme === '1'
      ? '#2851E3'
      : props.$theme === '2'
        ? '#A728E3'
        : props.$theme === '3'
          ? '#2889E3'
          : '#E32828'};
`

export const divEmail = styled.div`
  max-width: 15.875rem; //254px
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 1.125rem; //18px

  padding-bottom: 2.625rem; //42px
  padding-top: 2.625rem; //42px
`

export const inputEmail = styled.div`
  max-width: 15.5rem; //248px
  width: 100%;

  display: flex;

  border-radius: 0.375rem; //6px
`

export const Input = styled.input`
  width: 100%;

  padding-left: 0.938rem; //15px

  border: none;
  outline: none;

  border-radius: 0.375rem 0 0 0.375rem; //6px 0 0 6px

  &::placeholder {
    font-size: 0.875rem; //14px
    font-weight: 400;

    line-height: 1.059rem; //16.94px

    font-family: 'Inter', sans-serif;

    color: #424242;
    opacity: 60%;
  }
`

export const divButton = styled.div<{ $theme?: '1' | '2' | '3' | '4' }>`
  max-width: 3.125rem; //50px
  width: 100%;
  height: 3.125rem; //50px

  background-color: ${(props) =>
    props.$theme === '1'
      ? '#3563E9'
      : props.$theme === '2'
        ? '#B035E9'
        : props.$theme === '3'
          ? '#3592E9'
          : '#E93535'};

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 0 0.375rem 0.375rem 0; //0 6px 0 0
`

export const spanEmail = styled.span`
  font-size: 0.75rem; //12px
  font-weight: 400;

  line-height: 1.275rem; //20.4px

  font-family: 'Inter', sans-serif;

  color: #ffffff;
  opacity: 70%;
`

export const divLine = styled.div`
  width: 100%;
  height: 0.063rem; //1px

  background-color: #ffffff;
  opacity: 6%;

  border: 1px solid #ffffff;
`

export const containerInfos = styled.div`
  max-width: 75rem; //1200px
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: flex-end;
`

export const divInfos = styled.div`
  max-width: 42.125rem; //674px
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 425px) {
    flex-direction: column;
    align-items: start;
    gap: 1.5rem; //24px
  }
`

export const Nav = styled.nav`
  max-width: 15.875rem; //254px
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const Ul = styled.ul`
  display: flex;
  align-items: center;
  gap: 2.25rem; //36px

  margin: 0;
  padding: 0;
`

export const Li = styled.li`
  list-style: none;

  font-family: 'Inter', sans-serif;

  font-size: 0.875rem; //14px
  font-weight: 500;

  line-height: 1.059rem; //16.94px

  color: #ffffff;
`

export const divIcons = styled.div`
  max-width: 8.438rem; //135px
  width: 100%;

  display: flex;
  align-items: center;
  gap: 0.938rem;
`
