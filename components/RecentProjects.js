import projectsData from '@/data/projectsData'

import ProjectCard from '@/components/ProjectCard'
import AnimatedDiv from '@/components/framer-motion/AnimatedDiv'
import { FadeContainer } from '../lib/FramerMotionVariants'
import Link from '@/components/Link'

const RecentProjects = ({ MAX_PROJECTS }) => {
  const projectsList = projectsData.slice(0, MAX_PROJECTS)

  return (
    <>
      <div className="divide-y divide-gray-700">
        <div className="my-4">
          <span className="font-poppins title-font text-3xl font-bold">Recent Projects</span>
        </div>
        <div className="mx-auto py-5">
          <span>Short Demo of Logistics Web App</span>
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/qefiTqOyaVI?si=HJYaGEaE9__mQYPw"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div className="py-5">
          <AnimatedDiv
            variants={FadeContainer}
            className="mx-auto grid grid-cols-1 gap-4 md:ml-[20%] xl:ml-[24%]"
          >
            {projectsList.map((d) => (
              <ProjectCard
                key={d.title}
                title={d.title}
                description={d.description}
                imgSrc={d.imgSrc}
                href={d.href}
                tools={d.tools}
                deployed={d.deployed}
              />
            ))}
          </AnimatedDiv>
        </div>
        <div className="mt-5 flex justify-end text-base font-medium leading-6">
          <Link href="/projects" className="mt-5 hover:text-primary-400" aria-label="all posts">
            All Projects &rarr;
          </Link>
        </div>
      </div>
    </>
  )
}

export default RecentProjects
