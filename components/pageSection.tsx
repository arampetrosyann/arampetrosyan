import clsx from 'clsx'

const PageSection = ({
  title,
  className,
  children,
}: {
  title: string
  className?: string
  children: React.ReactNode
}) => (
  <section className={clsx('flex flex-col gap-4', className)}>
    <div className="text-xl font-semibold">{title}</div>
    {children}
  </section>
)

export default PageSection
