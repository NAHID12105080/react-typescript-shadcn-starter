import { Button } from './ui/button';

const mainNavItems = ['A', 'B', 'C'];

export default function MainNav() {
  return (
    <div className="mr-4 hidden w-full md:mx-auto md:flex md:max-w-screen-xl md:items-center md:justify-between">
      <h2 className="flex-1">logo</h2>
      <div className="flex flex-1 justify-center gap-2">
        {mainNavItems.map((item, index) => (
          <Button key={index} variant="link">
            {item}
          </Button>
        ))}
      </div>
      <div className="flex flex-1 justify-end">
        <Button variant="default">sign in</Button>
      </div>
    </div>
  );
}
