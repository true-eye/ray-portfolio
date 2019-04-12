import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax } from 'react-spring/renderprops-addons.cjs'

// Components
import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'

// Elements
import Inner from '../elements/Inner'
import { Title, BigTitle, Subtitle } from '../elements/Titles'

// Views
import Hero from '../views/Hero'
import Projects from '../views/Projects'
import About from '../views/About'
import Contact from '../views/Contact'

import avatar from '../images/avatar.jpg'

const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`

const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`

const AboutSub = styled.span`
  ${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
`

const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
`

const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
`

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`

const Index = () => (
  <>
    <Layout />
    <Parallax pages={5}>
      <Hero offset={0}>
        <BigTitle>
          Hello, <br /> I'm Ray.
        </BigTitle>
        <Subtitle>I'm a Full Stack Web and Software Developer.</Subtitle>
      </Hero>
      <Projects offset={1}>
        <Title>Projects</Title>
        <ProjectsWrapper>
          <ProjectCard
            title="Lambda Sprint"
            link="https://raythurman2386.github.io/Sprint-Challenge--User-Interface/"
            bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
          >
            This project is my first sprint challenge at Lambda School.
          </ProjectCard>
          <ProjectCard
            title="Outernet"
            link="https://raythurman2386.github.io/Outernet/"
            bg="linear-gradient(to right, #662D8C 0%, #ED1E79 100%)"
          >
            Current project for Outernet Broadband from Palmyra Indiana.
          </ProjectCard>
          <ProjectCard
            title="Great Idea"
            link="https://raythurman2386.github.io/responsive-web-design-I/"
            bg="linear-gradient(to right, #009245 0%, #FCEE21 100%)"
          >
            Great Idea responsive web design project for Lambda School.
          </ProjectCard>
          <ProjectCard
            title="Task List"
            link="https://react-task-list.netlify.com/"
            bg="linear-gradient(to right, #D585FF 0%, #00FFEE 100%)"
          >
            My first leap into React a basic task list project.
          </ProjectCard>
        </ProjectsWrapper>
      </Projects>
      <About offset={3}>
        <Title>About</Title>
        <AboutHero>
          <Avatar src={avatar} alt="Ray Thurman" />
          <AboutSub>Current Lambda School full stack web student, excited for the future.</AboutSub>
        </AboutHero>
        <AboutDesc>
          Hi, my name is Raymond Thurman. I am a Full Stack Web Developer. Before I started at Lambda School I spent ten
          years in the United States Army and led a very successful military career before I was medically discharged.
          Now I am a very ambitious student ready for the next big career change to come my way. Some of the current technologies I use include:
           HTML5, CSS3, LESS, JavaScript, React, and Python.
        </AboutDesc>
      </About>
      <Contact offset={4}>
        <Inner>
          <Title>Get in touch</Title>
          <ContactText>
            Shoot an <a href="mailto:raymondthurman5@gmail.com">Email</a> or find me on other platforms:{' '}
            <a href="https://twitter.com/raythurman2386">Twitter</a> {', '}
            <a href="https://www.facebook.com/rayraysfunhouse">Facebook</a> &{' '}
            <a href="https://www.linkedin.com/in/raymond-thurman-5a941484/">LinkedIn</a>
          </ContactText>
        </Inner>
        <Footer>
          &copy; 2019 Gatsby Portfolio.{' '}
          <a href="https://github.com/LekoArts/gatsby-starter-portfolio-cara">Github Repository</a>.
        </Footer>
      </Contact>
    </Parallax>
  </>
)

export default Index
