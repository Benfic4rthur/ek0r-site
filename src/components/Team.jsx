import arthur from '../assets/arthur.jpg';
import elias from '../assets/elias.jpg';
import gabriel from '../assets/gabriel.jpg';
import joao from '../assets/joao.jpg';
import natacha from '../assets/natacha.jpg';
import nilson from '../assets/nilson.jpg';
import { Card } from './TeamCard/Card';
import Icon from '@mdi/react';
import { mdiArrowRightBoldCircle } from '@mdi/js';

export function Team() {
  return (
    <section className='my-10 w-full xl:container mx-auto px-3'>
      <h1 className='text-center font-bold text-4xl'>Conheça nossa equipe</h1>
      <div className='justify-center items-center mb-20'>
        <div className='flex mt-10 w-auto flex overflow-x-auto mx-auto gap-3 pb-1 animate-sobe'>
          <Card Name={'Arthur Graff'} Subtitle={'FullStack developer'} src={arthur} />
          <Card Name={'joão Lucas'} Subtitle={'back-end developer'} src={joao} />
          <Card Name={'gabriel Duarte'} Subtitle={'front-end developer'} src={gabriel} />
          <Card Name={'elias Rosa'} Subtitle={'QA'} src={elias} />
          <Card Name={'natacha Azevedo'} Subtitle={'Designer/Marketing'} src={natacha} />
          <Card Name={'nilson Lemos'} Subtitle={'Engenharia/Matematica'} src={nilson} />
        </div>
        <div className='flex lg:hidden animate-showing'>
        <p className='text-sm pt-[1.35rem] ml-2 '>Arraste para o lado</p>{' '}
        <Icon path={mdiArrowRightBoldCircle} size={1} className='mt-5 ml-5 animate-bounceX' />
      </div>
      </div>
    </section>
  );
}
