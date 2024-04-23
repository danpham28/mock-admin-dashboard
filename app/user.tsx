import { Button } from '@/components/ui/button';
import Image from 'next/image';

export async function User() {
  // mock logged in
  const user = 1;

  if (!user) {
    return (
      <form
        action={async () => {
          'use server';
        }}
      >
        <Button variant="outline">Sign In</Button>
      </form>
    );
  }

  return (
    <div className="flex items-center gap-4">
      <form
        action={async () => {
          'use server';
        }}
      >
        <Button variant="outline">Sign Out</Button>
      </form>
      {/* <Image
        className="h-8 w-8 rounded-full"
        src={'https://i.pravatar.cc/64'}
        height={32}
        width={32}
        alt={`avatar`}
      /> */}
    </div>
  );
}
