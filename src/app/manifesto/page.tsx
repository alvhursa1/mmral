import Fter from '@/components/Fter';
import Hder from '@/components/Hder';
import ManBnner from '@/components/manifesto/ManBnner';



export default function Home() {
  return (

    <div>
          <Hder />
          <div className='-z-10'>
    <ManBnner />
          </div>
          <Fter />
    </div>
  );
}