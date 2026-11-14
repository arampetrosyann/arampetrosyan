import type { FC, SVGProps } from 'react'
import type { Metadata } from 'next'
import Writings from '@/components/writings'
import GitHubIcon from '@/assets/github.svg'
import LinkedinIcon from '@/assets/linkedin.svg'
import BskyIcon from '@/assets/bsky.svg'

export const metadata: Metadata = {
  alternates: {
    canonical: '/',
  },
}

const profilePicSize = 160

const socials: {
  icon: FC<SVGProps<SVGSVGElement>>
  url: string
  className?: string
}[] = [
  { icon: GitHubIcon, url: 'https://github.com/arampetrosyann' },
  { icon: LinkedinIcon, url: 'https://www.linkedin.com/in/arampetrosyan/' },
  {
    icon: BskyIcon,
    url: 'https://bsky.app/profile/arampetrosyan.bsky.social',
    className: 'px-1',
  },
]

const Home = () => (
  <div className="flex flex-col gap-8 mb-16 md:mb-10">
    <section className="grid grid-cols-1 md:grid-cols-[auto_1fr] items-start gap-5 md:gap-y-1 md:gap-x-3 w-full">
      <span className="inline-flex shrink-0 overflow-hidden rounded-full justify-self-center md:justify-self-start">
        <img
          id="profile-image"
          className="object-cover transition duration-300 hover:scale-105 max-w-40 md:max-w-30"
          src="/media/profile.jpg"
          alt="Aram Petrosyan"
          width={profilePicSize}
          height={profilePicSize}
        />
      </span>
      <p id="about">
        I&#39;m a polyglot engineer. I craft software, build cross-platform systems
        and create products at scale. I completed an MSc in Computer Science at the{' '}
        <a
          href="https://www.uclouvain.be/en"
          className="tlink"
          target="_blank"
          rel="noopener noreferrer"
        >
          University of Louvain (UCLouvain)
        </a>
        .
        <br />
        Earlier, I worked as a Software Engineer at{' '}
        <a
          href="https://buildern.com"
          className="tlink"
          target="_blank"
          rel="noopener noreferrer"
        >
          Buildern
        </a>
        .
      </p>
      <div className="md:col-start-2 flex flex-col gap-2">
        <p>
          Contact: <span>petrosyan</span>.<span>aram</span>@hotmail<span>.com</span>
        </p>
        <div className="flex items-center gap-2">
          {socials.map(({ icon: Icon, url, className }) => (
            <a
              key={url}
              href={url}
              className={className}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon />
            </a>
          ))}
        </div>
      </div>
    </section>
    <Writings />
  </div>
)

export default Home
