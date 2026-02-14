export default function Layout({
  children,
  team,
  hero,
  about,
  featured,
  events,
  cta,
}: {
  children: React.ReactNode
  team: React.ReactNode
  hero: React.ReactNode
  about: React.ReactNode
  featured: React.ReactNode
  events: React.ReactNode
  cta: React.ReactNode
}) {
  return (
    <>
      {hero}
      {about}
      {team}
      {featured}
      {events}
      {cta}
      {children}
    </>
  )
}
