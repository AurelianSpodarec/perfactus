import { Button } from "@/components/button";
import ButtonMagic from "@/components/button/_variants/ButtonMagic";
import Link from "next/link";

function Icon() {
  return (
    <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="SendIcon"><path d="M2.01 21 23 12 2.01 3 2 10l15 2-15 2z"></path></svg>
  )
}

export default function Home() {
  return (
    <div>
      {/* <Button>Button</Button> */}

      {/* <div className="flex">
        <Button isLoading>Loading</Button>
        <Button isLoading loadingPosition="left">Loading Left</Button>
        <Button isLoading loadingPosition="right">Loading Right</Button>
      </div> */}

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

    </div>
  );
}
