import Link from 'next/link';
import { User } from 'next-auth';

import { auth } from '@/app/(auth)/auth';
import { ModelSelector } from '@/components/custom/model-selector';
import { SidebarToggle } from '@/components/custom/sidebar-toggle';
import { Button } from '@/components/ui/button';
import { BetterTooltip } from '@/components/ui/tooltip';

import { PlusIcon } from './icons';

export function ChatHeader({
  selectedModelId,
  user,
}: {
  selectedModelId: string;
  user: User | undefined;
}) {
  return (
    <header className="flex h-16 sticky top-0 bg-background md:h-12 items-center px-2 md:px-2 gap-2">
      <SidebarToggle />
      <BetterTooltip content="New Chat">
        <Button
          variant="ghost"
          className="w-auto md:size-8 [&>svg]:!size-5 md:[&>svg]:!size-4 pl-2 md:p-0 order-2 md:order-1 ml-auto md:ml-0 md:hidden group-data-[state=collapsed]/sidebar-wrapper:flex"
          asChild
        >
          <Link href="/">
            <PlusIcon />
            <span className="md:sr-only">New Chat</span>
          </Link>
        </Button>
      </BetterTooltip>
      <ModelSelector
        selectedModelId={selectedModelId}
        className="order-1 md:order-2"
        user={user}
      />
      {!user ? (
        <Button className="py-1.5 px-2 h-fit order-4 md:ml-auto">
          <Link href="/login">Login</Link>
        </Button>
      ) : null}
    </header>
  );
}
