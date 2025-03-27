import { Button } from "@/components/button";

function Icon() {
  return (
    <svg className="fill-pink-500 h-full" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="SendIcon"><path d="M2.01 21 23 12 2.01 3 2 10l15 2-15 2z"></path></svg>
  )
}

export default function Home() {
  return (
    <div>

      <h1 className="text-woop">TEXT TAG</h1>

      <div className="space-y-6 p-4">
        <div>
          <h2 className="mb-2 text-lg font-bold">Kinds</h2>
          <div className="flex space-x-2">
            <Button kind="text">Link</Button>
            <Button kind="solid">Solid</Button>
            <Button kind="outlined">Outline</Button>
          </div>
        </div>

        <div>
          <h2 className="mb-2 text-lg font-bold">Variants Solid</h2>
          <div className="flex space-x-2">
            <Button kind="solid" variant="primary">Primary</Button>
            <Button kind="solid" variant="secondary">Secondary</Button>
          </div>
        </div>

        <div>
          <h2 className="mb-2 text-lg font-bold">Variants Outlined</h2>
          <div className="flex space-x-2">
            <Button kind="outlined" variant="primary">Primary</Button>
            <Button kind="outlined" variant="secondary">Secondary</Button>
          </div>
        </div>

        <div>
          <h2 className="mb-2 text-lg font-bold">Sizes</h2>
          <div className="flex space-x-2">
            <Button size="xs">Button XS</Button>
            <Button size="sm">Button SM</Button>
            <Button size="md">Button MD</Button>
            <Button size="lg">Button LG</Button>
            <Button size="xl">Button XL</Button>
          </div>
        </div>

        <div>
          <h2 className="mb-2 text-lg font-bold">Icons</h2>
          <div className="flex space-x-2">
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
          </div>
        </div>

        <div>
          <h2 className="mb-2 text-lg font-bold">Loading States</h2>
          <div className="flex space-x-2">
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
              Custmo Loading TExt isLoading
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
          </div>
        </div>

      </div>


      <br />


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

    </div >
  );
}
