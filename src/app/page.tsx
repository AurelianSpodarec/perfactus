import { Button } from "@/components/button";

function Icon() {
  return (
    <svg className="fill-pink-500 h-full" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="SendIcon"><path d="M2.01 21 23 12 2.01 3 2 10l15 2-15 2z"></path></svg>
  )
}

function ComponentSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="mb-2 text-lg font-bold">{title}</h2>
      <div className="flex space-x-2">{children}</div>
    </div>
  )
}

export default function Home() {
  return (
    <main className="space-y-6 p-4">

      <ComponentSection title="Kinds">
        <Button kind="text">Link</Button>
        <Button kind="solid">Solid</Button>
        <Button kind="outlined">Outline</Button>
      </ComponentSection>

      <ComponentSection title="Variant Solid">
        <Button kind="solid" variant="primary">Primary</Button>
        <Button kind="solid" variant="secondary">Secondary</Button>
      </ComponentSection>

      <ComponentSection title="Variant Outlined">
        <Button kind="outlined" variant="primary">Primary</Button>
        <Button kind="outlined" variant="secondary">Secondary</Button>
      </ComponentSection>

      <ComponentSection title="Sizes">
        <Button size="xs">Button XS</Button>
        <Button size="sm">Button SM</Button>
        <Button size="md">Button MD</Button>
        <Button size="lg">Button LG</Button>
        <Button size="xl">Button XL</Button>
      </ComponentSection>

      <ComponentSection title="Icons">
        <Button>
          <Icon />
        </Button>
        <Button
          icon={<Icon />}
          iconPosition="left"
        >
          Icon Left
        </Button>
        <Button
          icon={<Icon />}
          iconPosition="right"
        >
          Icon Right
        </Button>
      </ComponentSection>

      <ComponentSection title="Loading States">
        <Button isLoading>Loading</Button>
        <Button
          isLoading
          loadingPosition="left"
          icon={<Icon />}
          iconPosition="left"
        >
          Loading
        </Button>
        <Button
          isLoading
          loadingPosition="left"
          icon={<Icon />}
          iconPosition="right"
        >
          Loading
        </Button>
        <Button
          isLoading
          loadingPosition="right"
          icon={<Icon />}
          iconPosition="right"
        >
          Loading
        </Button>
        <Button
          isLoading
          loadingPosition="right"
          icon={<Icon />}
          iconPosition="left"
          loadingText="Custom Loading Text..."
        >
          Custom Loading Text isLoading
        </Button>
        {/* <Button
              isLoading
              icon={<Icon />}
              iconPosition=""
            >
              Loading
            </Button>
            <Button
              isLoading
              icon={<Icon />}
              iconPosition=""
            >
              Loading
            </Button> */}
      </ComponentSection>
      
    </main>
  );
}
