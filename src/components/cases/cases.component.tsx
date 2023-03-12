<<<<<<< HEAD
import { Container, Typography } from "@mui/material";
import * as React from "react";
import { Layout } from "../../common/layout/layout.component";
import "./cases.style.scss";
import amb from "../../assets/ceses/amb_cases.png";
import astore from '../../assets/ceses/astore_cases.png';
import { Link } from "react-router-dom";
import { ItemCases } from "./itemCases.component";
=======
import * as React from 'react';
import { Container, Typography } from '@mui/material';
import { Layout } from '../../common/layout/layout.component';
import { Link } from 'react-router-dom';
import { ItemCases } from './itemCases.component';
import amb from '../../assets/ceses/amb_cases.png';
import osiaf from '../../assets/ceses/osiaf_cases.png';
import bekhatar from '../../assets/ceses/bekhatar_cases.png';
import humo from '../../assets/ceses/humo_cases.png';
import astore from '../../assets/ceses/astore_cases.png';
import moliya from '../../assets/ceses/moliya_cases.png';
import next from '../../assets/ceses/nextview_cases.png';
import pbo from '../../assets/ceses/pbo_cases.png';
import snowdrop from '../../assets/ceses/snowdrop_cases.png';
import tajset from '../../assets/ceses/tajset_cases.png';
import mevr from '../../assets/ceses/mevr_cases.png';
import kaynak from '../../assets/ceses/kaynak_cases.png';
import './cases.style.scss';

const casesObj = [
  {
    name: 'Амонатбонк',
    title: 'Государственный сберегательный банк Республики Таджикистан',
    src: amb,
    description:
      ' Выстроили единый концепт подачи информации на сайте и рассказали о ключевых достоинствах банка',
    path: '/cases/amb',
    technology: 'UI/UX, Html, Css, JavaScript, 1CBitrix, PHP, MySQL',
  },
  {
    name: 'Проверяйте штрафы ПДД  «Шахри Бехатар»',
    title: 'Проверяйте штрафы ПДД  «Шахри Бехатар»',
    src: bekhatar,
    description:
      'Разработали сервис, в котором каждый водитель может следить за своими нарушениями ПДД. ',
    path: '/cases/bekhatar',
    technology: '#UI/UX, Html, Css, JavaScript, Go, Postgress',
  },
  {
    name: 'Институт "Открытое общество" - Фонд Содействия в Таджикистане',
    title: 'Институт "Открытое общество" - Фонд Содействия в Таджикистане',
    src: osiaf,
    description:
      'Создали информативный и удобный веб-сайт, где пользователь сможет легко и быстро найти нужную ему информацию',
    path: '/cases/osiaf',
    technology: 'UI/UX, Html, Css, JavaScript, Laravel, PHP, MySQL',
  },
  {
    name: 'PBO-EITI Tajikistan',
    title: 'PBO-EITI Tajikistan',
    src: pbo,
    description:
      'Разработали максимально удобный сайт, где с лёгкостью можно найти информацию о компании и их бенефициарных собственников.',
    path: '/cases/pbo',
    technology: 'UI/UX, Html, Css, JavaScript, Laravel, PHP, MySQL',
  },
  {
    name: ' Министерство финансов Республики Таджикистан',
    title: ' Министерство финансов Республики Таджикистан',
    src: moliya,
    description:
      'Разработали сайт с уникальным дизайном, который удовлетворяет требование нашего заказчика, адаптивный под все устройства и легкий в поиске информации.',
    path: '/cases/moliya',
    technology: 'UI/UX, Html, Css, JavaScript, Wordpress, PHP, MySQL',
  },
  {
    name: 'Министерство энергетики и водных ресурсов Республики Таджикистана',
    title: 'Министерство энергетики и водных ресурсов Республики Таджикистана',
    src: mevr,
    description:
      'Создали информативный и удобный веб-сайт, где пользователь сможет легко и быстро найти нужную ему информацию.',
    path: '/cases/merv',
    technology: 'UX/UI, Html, Css, JavaScript, Laravel, MySQL',
  },
  {
    name: 'Snowdrop',
    title: 'Snowdrop',
    src: snowdrop,
    description:
      ' Разработали сайт для любителей почитать интересные, полезные книги и статьи в очень удобном интерфейсе. ',
    path: 'cases/snowdrop',
    technology: 'UI/UX, Html, Css, JavaScript, Laravel, PHP, MySQL',
  },
  {
    name: 'Микрокредитная депозитная организация «Хумо»',
    title: 'Микрокредитная депозитная организация «Хумо»',
    src: humo,
    description:
      'Разработали информативный и удобный веб-сайт, на трех языках, который реализовывал бы цели клиентов компании.',
    path: '/cases/humo',
    technology: 'UI/UX, Html, Css, JavaScript, 1CBitrix, PHP, MySQL',
  },
  {
    name: 'Сеть Салонов Связи «TAJСЕТЬ»',
    title: 'Сеть Салонов Связи «TAJСЕТЬ»',
    src: tajset,
    description:
      'Разработали удобную CRM-систему, где сотрудники могут управлять ведением клиентской базы, автоматизацией продаж и работой со сделками.',
    path: '/cases/tajset',
    technology: 'UI/UX, Html, Css, JavaScript, Laravel, PHP, MySQL',
  },
  {
    name: 'Astore — является официальным партнером продукции Xiaomi в Таджикистане.»',
    title:
      'Astore — является официальным партнером продукции Xiaomi в Таджикистане.',
    src: astore,
    description:
      'Astore — является официальным партнером продукции Xiaomi в Таджикистане.',
    path: '/cases/astore',
    technology: 'UX/UI, Html, Css, JavaScript, 1СBitrix, MySQL',
  },
  {
    name: 'Интернет-магазин "КАЙНАК"',
    title: 'Интернет-магазин "КАЙНАК"',
    src: kaynak,
    description: 'Создали и развиваем интернет-магазин канцелярских товаров',
    path: '/cases/kaynak',
    technology: 'UI/UX, Html, Css, JavaScript, Go, Postgress',
  },
  {
    name: 'Маркетинговое агентство "NextView"',
    title: 'Маркетинговое агентство "NextView"',
    src: next,
    description:
      'Создали презентабельный сайт, в котором будет преподнесена информация об услугах компании, истории бренда и кейсов о доверяющих клиентах.',
    path: '/cases/nextview',
    technology: 'UX/UI, Html, Css, JavaScript, Laravel, MySQL',
  },
];

const Cases: React.FC = () => {
  return (
    <Layout>
      <Container maxWidth='xl'>
        <Typography sx={{ mt: 2 }} variant='h4'>
          Кейсы
        </Typography>
        <div className='gridCases mt-[25px]'>
          <div className='amb'>
            <img src={amb} alt='AmbImg' />
            <p>Амонатбонк</p>
            <Link to='/cases/amb'>
              <div className='bgAmb hover:bg-[#16a34a]/50'>
                <div className='flex flex-col'>
                  <span className='text-[22px] mb-[8px] '>
                    Государственный сберегательный банк Республики Таджикистан{' '}
                  </span>
                  <span className='text-[18px] mb-[8px]'>
                    Выстроили единый концепт подачи информации на сайте и
                    рассказали о ключевых достоинствах банка
                  </span>
                  <span>
                    UI/UX, Html, Css, JavaScript, 1CBitrix, PHP, MySQL
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default Cases;
