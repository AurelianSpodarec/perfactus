import { Button } from "@/components/button";
import ButtonMagic from "@/components/button/_variants/ButtonMagic";
import Link from "next/link";

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
        <Button
          tag="link"
          href="/path"
          isLoading
          loadingPosition="left"
          icon={<svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="SendIcon"><path d="M2.01 21 23 12 2.01 3 2 10l15 2-15 2z"></path></svg>}>
          Go to Path
        </Button>
      </div>
      {/* <Link href="hi>Hi</Link> */}



      <div className="flex">
        {/* <Button isLoading>Loading</Button> */}
        {/* <Button disabled>Disabled</Button> */}
      </div>
      <div className="flex">
        {/* <Button
          icon={<svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="SendIcon"><path d="M2.01 21 23 12 2.01 3 2 10l15 2-15 2z"></path></svg>}
        >
          Icon Left
        </Button>
        <Button
          icon={<svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="SendIcon"><path d="M2.01 21 23 12 2.01 3 2 10l15 2-15 2z"></path></svg>}
          iconPosition="right"
        >
          Icon Right
        </Button>
      </div>
      <div className="flex">
        <Button
          isLoading
          // isLoadingText
          icon={<svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="SendIcon"><path d="M2.01 21 23 12 2.01 3 2 10l15 2-15 2z"></path></svg>}
        >
          Icon Left
        </Button>
        <Button
          isLoading
          isLoadingText
          icon={<svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="SendIcon"><path d="M2.01 21 23 12 2.01 3 2 10l15 2-15 2z"></path></svg>}
          iconPosition="right"
        >
          Icon Right
        </Button>
      </div>


      <div className="flex">
        <Button
          isLoading
          icon={<svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="SendIcon"><path d="M2.01 21 23 12 2.01 3 2 10l15 2-15 2z"></path></svg>}
          iconPosition="right"
        >
          Woop
        </Button>
        <Button
          // isLoading
          loadingPosition="left"
          iconPosition="left"
          icon={<svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="SendIcon"><path d="M2.01 21 23 12 2.01 3 2 10l15 2-15 2z"></path></svg>}
        >
          Loading Left
        </Button>
        <Button
          isLoading
          // isLoadingText
          loadingPosition="right"
          icon={<svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="SendIcon"><path d="M2.01 21 23 12 2.01 3 2 10l15 2-15 2z"></path></svg>}
          iconPosition="right"
        >
          Loading Right
        </Button>
      </div>

      <div className="flex">
        <Button
          isLoading
          icon={<svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="SendIcon"><path d="M2.01 21 23 12 2.01 3 2 10l15 2-15 2z"></path></svg>}
          iconPosition="right"
        >
          Woop
        </Button>
        <Button
          isLoading
          isLoadingText
          loadingPosition="left"
          iconPosition="right"
          icon={<svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="SendIcon"><path d="M2.01 21 23 12 2.01 3 2 10l15 2-15 2z"></path></svg>}
        >
          Loading Left
        </Button>
        <Button
          isLoading
          isLoadingText
          loadingPosition="right"
          icon={<svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="SendIcon"><path d="M2.01 21 23 12 2.01 3 2 10l15 2-15 2z"></path></svg>}
          iconPosition="right"
        >
          Loading Right
        </Button>
        <Button
          isLoading
          icon={<svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="SendIcon"><path d="M2.01 21 23 12 2.01 3 2 10l15 2-15 2z"></path></svg>}
          iconPosition="right"
        >
          Loading Right
        </Button>
      </div>


      <div>
        <Button
          icon={<svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="SendIcon"><path d="M2.01 21 23 12 2.01 3 2 10l15 2-15 2z"></path></svg>}
          iconPosition="right"
        >
        </Button>
      </div>
      <div>
        <ButtonMagic>Sparkle</ButtonMagic>
        */}
      </div>
    </div>
  );
}
