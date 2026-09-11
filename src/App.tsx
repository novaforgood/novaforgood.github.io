import { usePath } from './router'
import { projects } from './data/projects'
import { archiveProjects } from './data/archiveProjects'
import { ArchiveProjectPage } from './pages/ArchiveProjectPage'
import { LandingPage } from './pages/LandingPage'
import { WorkPage } from './pages/WorkPage'
import { AboutPage } from './pages/AboutPage'
import { TeamPage } from './pages/TeamPage'
import { NonprofitsPage } from './pages/NonprofitsPage'
import { StudentsPage } from './pages/StudentsPage'
import { ProjectDetailPage } from './pages/ProjectDetailPage'
import { NotFoundPage } from './pages/NotFoundPage'

function App() {
  const path = usePath()
  const normalizedPath = path.replace(/\/$/, '') || '/'
  const project = projects.find(item => normalizedPath === `/work/${item.slug}`)
  const archived = archiveProjects.find(item => normalizedPath === `/work/${item.slug}`)

  let page: React.ReactNode
  if (normalizedPath === '/') page = <LandingPage />
  else if (normalizedPath === '/about') page = <AboutPage />
  else if (normalizedPath === '/team') page = <TeamPage />
  else if (normalizedPath === '/work') page = <WorkPage />
  else if (normalizedPath === '/nonprofits') page = <NonprofitsPage />
  else if (normalizedPath === '/students') page = <StudentsPage />
  else if (project) page = <ProjectDetailPage project={project} />
  else if (archived) page = <ArchiveProjectPage project={archived} />
  else page = <NotFoundPage />

  return <div key={normalizedPath}>{page}</div>
}

export default App
