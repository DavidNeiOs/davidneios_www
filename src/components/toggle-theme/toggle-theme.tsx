import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  position: relative;
  content: "";
  min-height: 30px;
  min-width: 50px;
`

const ToggleWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  overflow: hidden;
  transform: translate3d(-50%, -50%, 0);
  input {
    position: absolute;
    left: -99em;
  }
`

const LabelToggle = styled.label`
  cursor: pointer;
  display: inline-block;
  width: 45px;
  height: 25px;
  background-color: #83d8ff;
  border-radius: 84px;
  transition: background-color 200ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
`

const ToggleHandler = styled.span`
  display: inline-block;
  position: relative;
  z-index: 1;
  top: 1px;
  left: 2px;
  width: 22px;
  height: 22px;
  background-color: #ffcf96;
  border-radius: 50px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  transition: all 400ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
  transform: rotate(-45deg);
`

const Crater = styled.span<{
  top: string
  left: string
  width: string
  height: string
}>`
  position: absolute;
  background-color: #e8cda5;
  opacity: 0;
  transition: opacity 200ms ease-in-out;
  border-radius: 100%;
  top: ${props => props.top};
  left: ${props => props.left};
  width: ${props => props.width};
  height: ${props => props.height};
`

const Star = styled.span<{
  top: string
  left: string
  width: string
  height: string
  zIndex: number
}>`
  position: absolute;
  background-color: #ffffff;
  transition: all 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
  border-radius: 50%;
  top: ${props => props.top};
  left: ${props => props.left};
  z-index: ${props => props.zIndex};
  width: ${props => props.width};
  height: ${props => props.height};
`

const HiddenStar = styled.span<{
  top: string
  left: string
  width: string
  height: string
  zIndex: number
}>`
  position: absolute;
  background-color: #ffffff;
  transition: all 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
  border-radius: 50%;
  top: ${props => props.top};
  left: ${props => props.left};
  z-index: ${props => props.zIndex};
  width: ${props => props.width};
  height: ${props => props.height};
  opacity: 0;
`

const Input = styled.input`
  :checked {
    + .toggle {
      background-color: #749dd6;

      &:before {
        color: #749ed7;
      }

      &:after {
        color: #ffffff;
      }

      .toggle__handler {
        background-color: #ffe5b5;
        transform: translate3d(19px, 0, 0) rotate(0);

        .crater {
          opacity: 1;
        }
      }

      .star--1 {
        width: 1px;
        height: 1px;
      }

      .star--2 {
        width: 2px;
        height: 2px;
        transform: translate3d(-2px, 0, 0);
      }

      .star--3 {
        width: 1px;
        height: 1px;
        transform: translate3d(-4px, 0, 0);
      }

      .star--4,
      .star--5,
      .star--6 {
        opacity: 1;
        transform: translate3d(0, 0, 0);
      }
    }
  }
`

interface Props {
  changeTheme: () => void
  theme: string
}

export const ToggleTheme = ({ changeTheme, theme }: Props) => (
  <Wrapper>
    <ToggleWrapper>
      <Input type="checkbox" checked={theme === "dark"} onChange={() => {}} />
      <LabelToggle className="toggle" onClick={changeTheme}>
        <ToggleHandler className="toggle__handler">
          <Crater
            className="crater"
            top="9px"
            left="5px"
            width="2px"
            height="2px"
          ></Crater>
          <Crater
            className="crater"
            top="14px"
            left="11px"
            width="3px"
            height="3px"
          ></Crater>
          <Crater
            className="crater"
            top="5px"
            left="12px"
            width="4px"
            height="4px"
          ></Crater>
        </ToggleHandler>
        <Star
          className="star--1"
          top="5px"
          left="17px"
          zIndex={0}
          width="15px"
          height="2px"
        ></Star>
        <Star
          className="star--2"
          top="9px"
          left="14px"
          zIndex={1}
          width="15px"
          height="2px"
        ></Star>
        <Star
          className="star--3"
          top="13px"
          left="20px"
          zIndex={0}
          width="15px"
          height="2px"
        ></Star>
        <HiddenStar
          className="star--4"
          top="8px"
          left="5px"
          zIndex={0}
          width="1px"
          height="1px"
        ></HiddenStar>
        <HiddenStar
          className="star--5"
          top="16px"
          left="8px"
          zIndex={0}
          width="1px"
          height="1px"
        ></HiddenStar>
        <HiddenStar
          className="star--6"
          top="18px"
          left="14px"
          zIndex={0}
          width="1px"
          height="1px"
        ></HiddenStar>
      </LabelToggle>
    </ToggleWrapper>
  </Wrapper>
)
