import { Button } from '@biz/ui'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@biz/ui'

export interface DashboardProps {
  title?: string
  description?: string
  showFeatureCards?: boolean
}

export function Dashboard({ 
  title = "React Components",
  description = "Reusable React components that can be embedded in any application",
  showFeatureCards = true 
}: DashboardProps) {
  return (
    <div className="container mx-auto p-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2">{title}</h1>
        <p className="text-muted-foreground">{description}</p>
      </div>

      <div className="flex flex-col items-center space-y-8">
        <Card className="w-[400px]">
          <CardHeader>
            <CardTitle>Welcome to React Components</CardTitle>
            <CardDescription>
              These components can be used standalone or embedded in other applications.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Try clicking the buttons below to see the different variants in action.
            </p>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">Learn More</Button>
            <Button>Get Started</Button>
          </CardFooter>
        </Card>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <Button>Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </div>

        {showFeatureCards && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
            <Card>
              <CardHeader>
                <CardTitle>Embeddable</CardTitle>
                <CardDescription>Can be embedded in Next.js or other React apps</CardDescription>
              </CardHeader>
              <CardContent>
                <p>This component can be seamlessly integrated into any React application.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Standalone</CardTitle>
                <CardDescription>Can also run as an independent application</CardDescription>
              </CardHeader>
              <CardContent>
                <p>The same components can be deployed as a standalone React application.</p>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  )
}