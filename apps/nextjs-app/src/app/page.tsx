import { Dashboard, FeatureSection } from '@biz/react-components'

export default function Home() {
  return (
    <main className="min-h-screen">
      <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-2">Next.js Application</h1>
          <p className="text-lg opacity-90">
            Powered by embedded React components and shadcn/ui
          </p>
        </div>
      </header>

      <Dashboard
        title="Embedded React Dashboard"
        description="This React component is embedded within a Next.js application"
      />

      <section className="bg-gray-50 py-12">
        <FeatureSection
          title="Next.js Features"
          features={[
            {
              title: 'Server-Side Rendering',
              description: 'Built-in SSR capabilities',
              content:
                'Next.js provides excellent SEO and performance with server-side rendering.',
            },
            {
              title: 'File-based Routing',
              description: 'Intuitive routing system',
              content:
                'Create routes by simply adding files to the pages directory.',
            },
            {
              title: 'Component Embedding',
              description: 'Seamless React component integration',
              content:
                'Easily embed and reuse React components from our shared library.',
            },
          ]}
        />
      </section>
    </main>
  )
}
