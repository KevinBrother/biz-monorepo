import { Dashboard, FeatureSection } from '@biz/react-components'

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Dashboard
        title="React Standalone App"
        description="A standalone React application using shared components"
        showFeatureCards={false}
      />

      <FeatureSection />
    </div>
  )
}

export default App
