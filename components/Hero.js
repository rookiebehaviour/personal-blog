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
        Frontend Web Developer
      </h1>
      <p className="mt-6 text-base text-gray-600 dark:text-gray-400">
        I'm Jacqueline, a Web Developer based in Middletown, OH. I'm currently contributing to
        several startup product launches, including Hephium's business app, RubyLog (coming soon). I
        enjoy working with a team to solve problems and build solutions. Connect with me for career
        opportunities.
      </p>
      <div className="mt-6 flex gap-6">
        <SocialLink
          href="https://github.com/Cwarcup"
          aria-label="Check out my Github"
          icon={IoLogoGithub}
        />
        <SocialLink
          href="https://www.linkedin.com/in/curtiswarcup/"
          aria-label="Connect with me on LinkedIn"
          icon={IoLogoLinkedin}
        />
      </div>
    </div>
  )
}
