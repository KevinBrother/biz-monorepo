import { Button } from '@biz/ui'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@biz/ui'

export interface Feature {
  title: string
  description: string
  content: string
}

export interface FeatureSectionProps {
  features?: Feature[]
  title?: string
}

const defaultFeatures: Feature[] = [
  {
    title: "Modular Design",
    description: "Built with reusability in mind",
    content: "Each component is designed to be modular and reusable across different applications."
  },
  {
    title: "TypeScript Support",
    description: "Full TypeScript support out of the box",
    content: "All components come with complete TypeScript definitions for better developer experience."
  },
  {
    title: "Customizable",
    description: "Easy to customize and extend",
    content: "Components accept props for customization and can be easily extended or modified."
  }
]

export function FeatureSection({ 
  features = defaultFeatures,
  title = "Features"
}: FeatureSectionProps) {
  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-8">{title}</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{feature.title}</CardTitle>
              <CardDescription>{feature.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">{feature.content}</p>
              <Button variant="outline" size="sm">Learn More</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}