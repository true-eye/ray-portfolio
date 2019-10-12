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
  ${tw`text-white pt-6 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
`

const ProjSub = styled.div`
  ${tw`text-center flex flex-col justify-center align-center text-white pt-6 lg:pt-6 text-2xl`};
  text-align: center;

  a {
    color: #333;
    width: 200px;
    align-self: center;
    padding-top: 1.5rem;

    &:hover {
      text-decoration: underline;
    }
  }
`

const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-4 md:pt-12 text-justify`};
`

const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
`

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-4 font-sans text-md lg:text-lg`};
`

const Index = () => (
  <React.Fragment>
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
            title='Team Builder'
            link='https://theteambuilder.netlify.com/'
            bg='linear-gradient(to right, #D4145A 0%, #FBB03B 100%)'
          >
            Team building project to keep track of what roles you have filled
            for your current project
          </ProjectCard>
          <ProjectCard
            title='Outernet'
            link='https://raythurman2386.github.io/OuternetReact/'
            bg='linear-gradient(to right, #662D8C 0%, #ED1E79 100%)'
          >
            Current project for Outernet Broadband from Palmyra Indiana.
          </ProjectCard>
          <ProjectCard
            title='Movie Time'
            link='https://ray-movietime.netlify.com'
            bg='linear-gradient(to right, #009245 0%, #FCEE21 100%)'
          >
            A movie database that I made using React, CSS Grid, React Router and
            Styled Components.
          </ProjectCard>
          <ProjectCard
            title='Dev Desk'
            link='https://dev-desk.netlify.com/'
            bg='linear-gradient(to right, #D585FF 0%, #00FFEE 100%)'
          >
            Second build week project at Lambda School. Students or helpers can
            login and submit help desk tickets or help resolve helpdesk tickets.
          </ProjectCard>
        </ProjectsWrapper>
        <ProjSub>
          If you would like to see any of my code for my projects, or would just
          like to take a look at my GitHub activity, <br />
          <a
            href='https://github.com/raythurman2386'
            target='_blank'
            rel='noopener noreferrer'
          >
            Click Here
          </a>
        </ProjSub>
      </Projects>
      <About offset={3}>
        <Title>About</Title>
        <AboutHero>
          <Avatar src={avatar} alt='Ray Thurman' />
          <AboutSub>
            Current Lambda School full stack web student, excited for the
            future.
          </AboutSub>
        </AboutHero>
        <AboutDesc>
          Hi, my name is Raymond Thurman. I am a Full Stack Web Developer.
          Before I started at Lambda School I spent ten years in the United
          States Army and led a very successful military career before I was
          medically discharged. Now I am a very ambitious trainee ready for the
          next big career change to come my way. Some of the current
          technologies I use include: HTML5, CSS3, LESS, JavaScript, React, and
          Python.
        </AboutDesc>
      </About>
      <Contact offset={4}>
        <Inner>
          <Title>Get in touch</Title>
          <ContactText>
            Shoot an <a href='mailto:raymondthurman5@gmail.com'>Email</a> or
            find me on other platforms:{' '}
            <a href='https://twitter.com/raythurman2386'>Twitter,</a>{' '}
            <a href='https://www.facebook.com/rayraysfunhouse'>Facebook</a>{' '}
            {'& '}
            <a href='https://www.linkedin.com/in/raymond-thurman-5a941484/'>
              LinkedIn
            </a>
          </ContactText>
        </Inner>
        <Footer>&copy; Thurman Media.</Footer>
      </Contact>
    </Parallax>
  </React.Fragment>
)

export default Index
