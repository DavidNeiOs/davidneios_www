import React from "react"
import { FaTwitter, FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa"

import { Container as PageContainer } from "./container"
import { Text } from "../components/Text"
import { SocialLink, Link } from "../components/link"
import styled from "styled-components"
import { media } from "../theme"

export const Footer = () => {
  return (
    <FooterContainer>
      <PageContainer>
        <InnerContainer>
          <SocialContainer>
            <Text variant="bodyMediumPrimary">Contact me:</Text>
            <LinksContainer>
              <SocialLink to="https://www.linkedin.com/in/davidneios/">
                <FaLinkedinIn className="icon" />
              </SocialLink>
              <SocialLink to="https://github.com/DavidNeiOs">
                <FaGithub className="icon" />
              </SocialLink>
              <SocialLink to="https://twitter.com/DavidNeiOs">
                <FaTwitter className="icon" />
              </SocialLink>
              <SocialLink to="https://www.instagram.com/davidneios/">
                <FaInstagram className="icon" />
              </SocialLink>
            </LinksContainer>
          </SocialContainer>
          <NavContainer>
            <NavItem>
              <Link to="/">
                <Text variant="bodyMediumPrimary">Home</Text>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/about">
                <Text variant="bodyMediumPrimary">About</Text>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/portfolio">
                <Text variant="bodyMediumPrimary">Portfolio</Text>
              </Link>
            </NavItem>
          </NavContainer>
        </InnerContainer>
        <Text
          variant="bodyMediumPrimary"
          style={{ textAlign: "center", marginTop: "1.5rem" }}
          withComponent="p"
        >
          &copy;{new Date().getFullYear()} David Neira
        </Text>
      </PageContainer>
    </FooterContainer>
  )
}

const FooterContainer = styled.footer`
  margin-top: 3rem;
  background-color: var(--primary);
  color: var(--text-inverted);
  padding: 1.5rem;
  width: 100%;
`

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${media.tablet} {
    flex-direction: row;
    justify-content: space-between;
  }
`

const SocialContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1.5rem;
  @media ${media.tablet} {
    align-items: stretch;
    margin-bottom: 0;
  }
`

const LinksContainer = styled.div`
  display: flex;
  text-align: center;
`

const NavContainer = styled.ul`
  list-style: none;
  display: flex;
  align-self: center;
`

const NavItem = styled.li`
  &:not(:last-of-type) {
    margin-right: 1rem;
  }
`
