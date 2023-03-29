import * as React from 'react';
import { Navbar } from '../../common/navbar/navbar.component';
import { Footer } from '../../common/footer/footer.component';
import { Button } from '@mui/material';
import amb_1 from '../../assets/ceses/amb/amb_1.png';
import amb_2 from '../../assets/ceses/amb/amb_2.png';
import amb_3 from '../../assets/ceses/amb/amb_3.png';
import amb_4 from '../../assets/ceses/amb/amb_4.png';
import amb_5 from '../../assets/ceses/amb/amb_5.png';
import amb_6 from '../../assets/ceses/amb/amb_6.png';

export const ItemCasesComponent: React.FC = () => {
  const arrString = [
    {
      tags: '#UI/UX',
      title:
        '— Разработка функционального дизайна сайта согласно корпоративному стилю.',
      id: 1,
    },
    {
      tags: '#Html',
      title: '— Верстка и программирование сайта.',
      id: 2,
    },
    {
      tags: '#Css',
      title:
        '— Создание 3 языковых версий сайта (таджикский, русский, английский).',
      id: 3,
    },
    {
      tags: '#JavaScript',
      title:
        '— Внедрение модуля для выдачи официального курса валют, интегрированный с модулем сайта Нацбанка Таджикистана, для быстрой конвертации валют.',
      id: 4,
    },
    {
      tags: '#1CBitrix',
      title:
        '— Внедрение разделов для частных лиц, юридических лиц и финансовых организаций.',
      id: 5,
    },
    {
      tags: '#PHP',
      title:
        '— Добавление раздела «Филиалы и офисы» для поиска филиалов и офисов банка.',
      id: 6,
    },
    {
      tags: '#MySQL',
      title: '— Добавление кнопок для перехода на социальные сети банка',
      id: 7,
    },
    {
      tags: '',
      title:
        '— В завершение, презентация сайта и его новых функций представителям банка.',
      id: 8,
    },
  ];
  return (
    <>
      <div className='bg-[#08AB68] h-screen w-full amb_bg'>
        <Navbar />
      </div>
      <div className='w-full h-screen bg-white flex-col justify-end'>
        <Navbar />
        <div className='w-full h-[500px] flex justify-center pt-20'>
          <div className='w-[90%]'>
            <h1 className='font-bold text-[24px] pb-10'>Заказчик:</h1>
            <a
              href='https://www.amonatbonk.tj'
              className='text-green-700 text-[20px]'
            >
              www.amonatbonk.tj
            </a>
            <p className='w-[647px] text-[18px]'>
              Государственный сберегательный банк «Амонатбонк» — народный банк
              Таджикистана. «Амонатбонк» занимает значительное место в
              банковской системе страны благодаря количеству своих отделений, и
              сегодня 23% филиалов банковской системы и 36% его центров
              банковского обслуживания приходятся на «Амонатбонк». В частности,
              осуществляют деятельность 143 центра обслуживания «Амонатбонк» в
              Согдийской области, 40 в ГБАО, 168 в Хатлонской области, 139 в РРП
              и 56 в Душанбе.
            </p>
          </div>
        </div>
        <img className='mb-10' src={amb_1} alt='img' />
        <div className='w-full h-[200px] flex justify-center mb-10'>
          <div className='w-[90%]'>
            <h1 className='font-bold text-[24px] pb-10'>Задачи:</h1>
            <p className='w-[647px] text-[18px]'>
              Перед нами стояла цель создать удобный сайт на трех языках,
              который предоставляет всю необходимую информацию как для частных
              лиц, так и для юридических лиц и финансовых организаций.
            </p>
          </div>
        </div>
        <div className='w-full'>
          <img src={amb_2} alt='img' />
        </div>
        <div className='w-full h-screen flex justify-center'>
          <div className='w-[90%]'>
            <h1 className='font-bold text-[24px] pb-10'>
              При реализации проекта нами были выполнены следующие задачи:
            </h1>
            <p className='w-[800px] text-[18px]'>
              <ul>
                {arrString.map((el) => (
                  <li className='w-full p-3' key={el.id}>
                    {el.title}
                  </li>
                ))}
              </ul>
            </p>
          </div>
        </div>
        <img src={amb_3} alt='img' />
        <div className='w-full h-[100px]'></div>
        <img src={amb_4} alt='img' />
        <div className='w-full h-[100px]'></div>
        <img src={amb_5} alt='img' />
        <div className='w-full h-[100px]'></div>
        <img src={amb_6} alt='img' />
        <div className='w-full h-[300px] bg-[#08AB68] flex justify-center mb-10'>
          <div className='w-[90%]'>
            <h1 className='font-bold text-[58px] text-white pt-20 pb-5'>
              Технологии
            </h1>
            <ul className='flex w-[80%]'>
              {arrString.map((el) => (
                <li
                  className='w-full text-white font-bold text-[20px]'
                  key={el.id}
                >
                  {el.tags}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className='w-full h-[400px] flex  justify-center'>
          <div className='w-[90%] pt-10'>
            <p className='pt-5 pb-5 font-bold text-[18px]'>
              Понравился проект? Сделаем ваш.
            </p>
            <h1 className='font-bold text-[40px] pt-10'>Связаться с нами</h1>
            <p className='w-[647px] text-[18px] pb-5'>
              Отправьте нам запрос, чтобы начать общение по вашему проекту.
            </p>
            <Button
              size='large'
              variant='contained'
              style={{ textTransform: 'capitalize' }}
            >
              Начать проект
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
