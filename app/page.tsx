'use client';
import CreateBtn from './Components/ui/CreateBtn';
import HomeScreen from './screens/HomeScreen';

export default function Home() {
  return (
    <>
      <div className="container  mx-auto p-2 h-full">
        <CreateBtn />
        <HomeScreen />
      </div>
    </>
  );
}
