import Head from 'next/head'
import Image from 'next/image'
import Testbar from '../components/Testbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/Home.module.css'
import PageHeader from '../components/PageHeader';
export default function Home() {
  return (
    <div className=" h-screen overflow-hidden">
    
      <main>
     <div className='justify-end'>
       <Testbar></Testbar></div>
      
      
      </main>
    </div>
  )
}
