import Link from 'next/link'
import { useState } from 'react'
import { IoLogoGithub, IoLogoLinkedin, IoMail, IoCall } from 'react-icons/io5'
import Notification from './Notification'

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="-m-1 p-1 " {...props}>
      <Icon className="h-6 w-6 cursor-pointer fill-gray-500 transition hover:fill-gray-200" />
    </Link>
  )
}

function CopyToClipboard({ icon: Icon, text, ...props }) {
  const [show, setShow] = useState(false)

  const handleClick = () => {
    navigator.clipboard.writeText(text.contact)
    setShow(!show)

    setTimeout(() => {
      setShow(false)
    }, 3000)
  }

  return (
    <div className="-m-1 p-1 " {...props}>
      <Icon
        className="h-6 w-6 cursor-pointer fill-gray-500 transition hover:fill-gray-200"
        onClick={handleClick}
      />
      <Notification show={show} setShow={setShow} text={text} />
    </div>
  )
}

export default function Hero() {
  return (
    <div className="mb-5 max-w-2xl">
      <h1 className="text-4xl font-bold tracking-tight text-gray-800 dark:text-zinc-100 sm:text-5xl">
        JavaScript & .NET Core Web Applications Developer
      </h1>
      <p className="mt-6 text-base text-gray-600 dark:text-gray-400">
        I'm Jacqueline, a Web Applications Developer based in Middletown, OH with over 2+ years
        experience. Until recently, my work has mainly consisted of frontend development with
        JavaScript frameworks and technologies including Reactjs, Vuejs, Vuetify (UI framework for
        Vue) and Nextjs. This year, I decided to expand my skills to include backend. I now create
        Full-Stack and server side applications using C#/.NET Core. I'm interested in careers in
        Frontend with vanilla JavaScript or React/Vue frameworks as well as Full-Stack in C#/.Net
        Core stack.
      </p>
      <div className="mt-6 flex gap-6">
        <SocialLink
          href="https://github.com/rookiebehaviour"
          aria-label="Check out my Github"
          icon={IoLogoGithub}
        />
        <SocialLink
          href="https://www.linkedin.com/in/jacquelinesd/"
          aria-label="Connect with me on LinkedIn"
          icon={IoLogoLinkedin}
        />
      </div>
    </div>
  )
}
