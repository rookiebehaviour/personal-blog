import Image from 'next/image'
import Head from 'next/head'
import siteMetadata from '@/data/siteMetadata'
import Link from '@/components/Link'
import { Analytics } from '@vercel/analytics/react'

import { Container } from '@/components/Container'
import { GitHubIcon, LinkedInIcon, MailIcon } from '@/components/social-icons'
import portraitImage from '../public/static/images/square-profile-pic.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className="flex">
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-primary-500 dark:text-zinc-200 dark:hover:text-primary-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-primary-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

export default function About() {
  const { author, email, linkedin, github } = siteMetadata
  return (
    <>
      <Head>
        <title>{`About - ${author}`}</title>
        <meta
          name="description"
          content="Hello, I'm Jacqueline Mason. I'm a Web Applications Developer based in Middletown, Ohio."
        />
      </Head>
      <Container className="mt-10">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt="Jacqueline Mason"
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              Hi 👋🏽 I'm Jacqueline Mason...
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                A Web Applications Developer based in Middletown, OH with over 2+ years experience.
                Until recently, my work has mainly consisted of frontend development with JavaScript
                frameworks and technologies including Reactjs, Vuejs, Vuetify (UI framework for Vue)
                and Nextjs. This year (2023), I decided to expand my skills to include backend. I
                now create Full-Stack and server side applications using C#/.NET Core.
              </p>
              <p>
                The online community knows me as Rookie Behaviour, or simply... Rookie. No, it has
                nothing to do with my coding skills, but my gaming skills 😂. I ran my own Virtual
                Assistance business for almost a decade before changing careers so I have a heart
                for small businesses along with non-profits.
              </p>
              <p>
                I'm interested in careers in Frontend with vanilla JavaScript, React, Vue, Next
                frameworks as well as Full-Stack in the C#/.Net Core framework.
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink href={github} icon={GitHubIcon} className="mt-4">
                Follow on GitHub
              </SocialLink>
              <SocialLink href={linkedin} icon={LinkedInIcon} className="mt-4">
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href={`mailto:${email}`}
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                jmason.tta@gmail.com
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
      <Analytics />
    </>
  )
}
