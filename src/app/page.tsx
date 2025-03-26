import { Button } from "@/components/button";

function Icon() {
  return (
    <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="SendIcon"><path d="M2.01 21 23 12 2.01 3 2 10l15 2-15 2z"></path></svg>
  )
}

export default function Home() {
  return (
    <div>

      <div>
        <h2>Kind</h2>
        <div className="flex space-x-4">
          <Button kind="text">Text</Button>
          <Button kind="solid">Solid</Button>
          <Button kind="outlined">Outlined</Button>
        </div>
      </div>

      <div>
        <h2>Primary</h2>
        <div className="flex space-x-4">
          <Button kind="text" variant="primary">Primary Text</Button>
          <Button kind="solid" variant="primary">Primary Solid</Button>
          <Button kind="outlined" variant="primary">Primary Outlined</Button>
        </div>
      </div>

      <div>
        <h2>Secondary</h2>
        <div className="flex space-x-4">
          <Button kind="text" variant="secondary">Secondary Text</Button>
          <Button kind="solid" variant="secondary">Secondary Solid</Button>
          <Button kind="outlined" variant="secondary">Srimary Outlined</Button>
        </div>
      </div>


      <div className="flex">
        <Button>
          <Icon />
        </Button>
        <Button isLoading>
          <Icon />
        </Button>
      </div>

      <div className="flex space-x-4">
        <Button>
          Button
        </Button>
        <Button disabled>
          Disabled
        </Button>
        <Button isLoading>
          <Icon />
        </Button>
        <Button
          tag="link"
          href="/path"
          isLoading
          loadingPosition="left"
          icon={<Icon />}
        >
          Link
        </Button>
        <Button
          isLoading
          loadingPosition="left"
          icon={<Icon />}
          iconPosition="left"
        >
          Icon Left
        </Button>
        <Button
          isLoading
          loadingPosition="right"
          icon={<Icon />}
          iconPosition="right"
        >
          Icon Right
        </Button>
        <Button
          isLoading
          icon={<Icon />}
          iconPosition="right"
        >
          Text Icon Loading
        </Button>
      </div>

      <div className="flex space-x-4">
        <Button>
          Button
        </Button>
        <Button disabled>
          Disabled
        </Button>
        <Button>
          <Icon />
        </Button>
        <Button
          tag="link"
          href="/path"
          icon={<Icon />}
          iconPosition="left"
        >
          Link
        </Button>
        <Button
          loadingPosition="left"
          icon={<Icon />}
          iconPosition="left"
        >
          Icon Left
        </Button>
        <Button
          loadingPosition="right"
          icon={<Icon />}
          iconPosition="right"
        >
          Icon Right
        </Button>
        <Button
          icon={<Icon />}
          iconPosition="right"
        >
          Text Icon Loading
        </Button>
      </div>

      <section>

        
      </section>

    </div>
  );
}
