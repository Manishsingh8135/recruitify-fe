import HomePage from '@/components/Jobs/ContainerLayout';
import ParentComponent from '@/components/experiment/New';
import Navbarr from '@/components/shared/Navbar';
import { Alert } from 'flowbite-react';

export default function MyPage() {
  return (
    <>
    <Navbarr/>
    {/* <HomePage/> */}
    <ParentComponent/>
    </>
  )
}