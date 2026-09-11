import { GenericSkeleton } from '../Skeletons'
import { Link } from '../router'
import { AppShell } from '../components/AppShell'

export function NotFoundPage() {
  return <AppShell skeleton={<GenericSkeleton />}><section className="page-hero"><h1>Page not found</h1><p>This route is not implemented yet.</p><Link className="button button-solid" href="/">Back home</Link></section></AppShell>
}
