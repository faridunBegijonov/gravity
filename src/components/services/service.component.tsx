import React from 'react';
import { Container } from '@mui/system';
import { Layout } from '../../common/layout/layout.component';
import img1 from '../../assets/services/1.svg';
import img2 from '../../assets/services/2.svg';
import img3 from '../../assets/services/3.svg';

const Service: React.FC = () => {
  return (
    <Layout>
      <Container maxWidth='xl'>
        <div className='h-auto'>
          <h1 className='text-[24px] md:text-[28px] 2xl:text-[34px] '>
            Услуги
          </h1>
          <div className='flex justify-between mt-[60px] w-[78%] mx-auto items-center max-[600px]:flex-wrap  md:mt-[45px] md:w-[98%] lg:w-[88%] '>
            <div className='flex-col items-center'>
              <div className='h-[350px]'>
                <img className='w-[140px] lg:w-[120px]' src={img1} alt='img' />
                <ul className='mt-8 h-[60px]'>
                  <li className='p-2'>— Адаптивный веб-дизайн</li>
                  <li className='p-2'>— UX/UI дизайн</li>
                  <li className='p-2'>— Дизайны мобильных приложений</li>
                </ul>
              </div>
            </div>
            <div>
              <div className='h-[350px]'>
                <img src={img2} className=' lg:w-[120px]' alt='img' />
                <ul className='mt-8 h-[60px]'>
                  <li className='p-2'>
                    — Корпоративные сайты, интернет-магазины
                  </li>
                  <li className='p-2'>— Мобильное приложение</li>
                  <li className='p-2'>— CRM-системы</li>
                </ul>
              </div>
            </div>
            <div>
              <div className='h-[350px]'>
                <img src={img3} className='lg:w-[120px]' alt='img' />
                <ul className='mt-8 h-[60px]'>
                  <li className='p-2'>— Домен и Хостинг</li>
                  <li className='p-2'>— Техническая поддержка сайтов</li>
                  <li className='p-2'>— Поддержка контента</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default Service;
