import React, { useState } from 'react'
import { Cabinet } from '../../components/cabinet/Cabinet'
import { Analytics_title } from '../../components/analytics_title/Analytics_title'
import { Analytics_cards } from '../../components/analytics_cards/Analytics_cards'

import './Analytics.scss'

function Analytics({adaptive, setAdaptive}) {

  const getCareerState = () => {
        const careerValue = "default";
        return careerValue;
    };
    const handleCareerChange = (e) => {
        setCareer(e.target.value);
    };

    const getPeriodState = () => {
        const periodValue = "default";
        return periodValue;
    };
    const handlePeriodChange = (e) => {
        setPeriod(e.target.value);
    };

    const getCompanyState = () => {
        const companyValue = "default";
        return companyValue;
    };
    const handleCompanyChange = (e) => {
        setCompany(e.target.value);
    };

  const [career, setCareer] = useState(getCareerState)
  const [period, setPeriod] = useState(getPeriodState)
  const [company, setCompany] = useState(getCompanyState)


  const companies = [
    
    {
      id: '1',
      color: '#913E98',
      text: 'ОАО «УгольНефтеТорг» — 65,3 % (204 565 тонн)',
      name: 'ОАО «УгольНефтеТорг»',
      transits: '12 259',
      exported: '204 565',
      today: '411',
      week: '1531',
      month: '4010',
      day: '2,0',

      todayExported: '623',
      weekExported: '2131',
      monthExported: '6532',

      todayDay: '2',
      weekDay: '4',
      monthDay: '5',
      
      routes: [
        {
          today: ['100', '200', '900', '50', '400', '700', '120'],
          week: ['62', '86', '317', '91', '21', '31', '229'],
          month: ['20','30','44','12','76','47'],
          all: [100, 300, 150, 600, 105]
        }],
      totalExported: [
        {
          today: ['20', '10', '30', '40', '20', '80', '50'],
          week: ['60', '120', '160', '215', '230', '340', '291'],
          month: ['600', '530', '542', '421', '511', '987'],
          all: [750, 1270, 886, 2356, 643]
        }],
      totalDay: [76,24],
      todayPercents: "12,50",
      weekPercents: "37,34%",
      monthPercents: "78,12%",
      allPercents: "96,82%",
    },
    {
      id: '2',
      color: '#478ECC',
      text: 'ООО «УралСельМаш» — 12,8 % (86 481 тонна)',
      name: 'ООО «УралСельМаш»',
      transits: '35 598',
      exported: '86 481',
      day: '3,2',
      today: '551',
      week: '1211',
      month: '8353',
      
      todayExported: '634',
      weekExported: '1234',
      monthExported: '5421',

      todayDay: '2.3',
      weekDay: '3',
      monthDay: '5.8',

      routes: [
        {
          today: ['18',  '31',  '12',  '13',  '62',  '50',  '11'],
          week:  ['27',  '262',  '31',  '19',  '33',  '13',  '12'],
          month:  ['14',  '25',  '67',  '98',  '52',  '88'],
          all:  [140,  320,  830,  570,  400]
        }],
      totalExported: [
        {
          today:  ['20',  '10',  '30',  '40',  '20',  '80',  '50'],
          week:  ['60',  '120',  '160',  '215',  '230',  '340',  '291'],
          month:  ['600',  '530',  '542',  '421',  '511',  '987'],
          all:  [750,  1270,  886,  2356,  643]
        }],
      totalDay: [91,9],
      todayPercents: "8,43",
      weekPercents: "28,99%",
      monthPercents: "67,76%",
      allPercents: "78,00%",
    },
    {
      id: '3',
      color: '#1998A7',
      text: 'ОАО «Гром» — 8,4 % (31 214 тонны)',
      name: 'ОАО «Гром»',
      transits: '24 025',
      exported: '31 214',
      day: '1,8',
      today: '410',
      week: '2091',
      month: '3981',

      todayExported: '432',
      weekExported: '3321',
      monthExported: '7132',

      todayDay: '1.2',
      weekDay: '2.5',
      monthDay: '5.1',

      routes: [
        {
          today: [ '24',  '26',  '33',  '11',  '25',  '29',  '47'],
          week: [ '33',  '28',  '87',  '19',  '83',  '23',  '42'],
          month: [ '50',  '20',  '74',  '13',  '36',  '107'],
          all: [ 190,  240,  360,  310,  890]
        }],
      totalExported: [
        {
          today: [ '12',  '31',  '14',  '42',  '33',  '51',  '11'],
          week: [ '160',  '60',  '220',  '263',  '421',  '222',  '118'],
          month: [ '400',  '750',  '1132',  '400',  '640',  '215'],
          all: [ 1750,  270,  2886,  856,  1243]
        }],
      totalDay: [34,66],
      todayPercents: "12,50",
      weekPercents: "37,34%",
      monthPercents: "78,12%",
      allPercents: "96,82%",
    },
    {
      id: '4',
      color: '#F58020',
      text: 'ЗАО «Крутая гора» — 6,1 % (22 204 тонны)',
      name: 'ЗАО «Крутая гора»',
      transits: '36 874',
      exported: '22 204',
      day: '2,2',
      today: '321',
      week: '2233',
      month: '3315',

      todayExported: '555',
      weekExported: '3121',
      monthExported: '6311',

      todayDay: '2.9',
      weekDay: '4.2',
      monthDay: '6.2',

      routes: [
        {
          today: [ '18',  '41',  '12',  '22',  '35',  '12',  '10'],
          week: [ '14',  '28',  '44',  '19',  '22',  '32',  '12'],
          month: [ '11',  '44',  '89',  '122',  '72',  '155'],
          all: [ 320,  410,  90,  740,  555]
        }],
      totalExported: [
        {
          today: [ '32',  '18',  '31',  '64',  '81',  '12',  '32'],
          week: [ '160',  '220',  '100',  '431',  '180',  '300',  '422'],
          month: [ '600',  '1420',  '842',  '521',  '211',  '1061'],
          all: [ 1340,  2220,  1236,  743,  1943]
        }],
      totalDay: [61,39],
      todayPercents: "22,40",
      weekPercents: "42,90%",
      monthPercents: "71,32%",
      allPercents: "95,01%",
    },
    {
      id: '5',
      color: '#FF7373',
      text: 'ОАО «Купол» — 3,6 % (15 102 тонны)',
      name: 'ОАО «Купол»',
      transits: '12 033',
      exported: '15 102',
      day: '2,8',
      today: '423',
      week: '3511',
      month: '5810',

      todayExported: '732',
      weekExported: '1354',
      monthExported: '5411',

      todayDay: '1',
      weekDay: '4,2',
      monthDay: '6,7',

      routes: [
        {
          today: [ '12',  '74',  '27',  '17',  '41',  '31',  '17'],
          week: [ '62',  '18',  '31',  '91',  '21',  '11',  '22'],
          month: [ '20',  '36',  '44',  '12',  '54',  '112'],
          all: [ 990,  421,  520,  600,  435]
        }],
      totalExported: [
        {
          today: [ '43',  '32',  '2',  '4',  '12',  '49',  '11'],
          week: [ '431',  '285',  '152',  '123',  '634',  '142',  '865'],
          month: [ '864',  '278',  '1430',  '3429',  '543',  '1101'],
          all: [ 5321,  3254,  976,  1437,  459]
        }],
      totalDay: [88,12],
      todayPercents: "8,99",
      weekPercents: "33,76%",
      monthPercents: "80,12%",
      allPercents: "98,14%",
    },
  ]

  console.log(career)
  console.log(period)
  console.log(company)
  
  return (
    <div className='analytics'>
        <Cabinet/>
        <Analytics_title 
          adaptive={adaptive} 
          setAdaptive={setAdaptive} 
          companies={companies} 
          career={career} 
          setCareer={setCareer} 
          period={period} 
          setPeriod={setPeriod} 
          company={company} 
          setCompany={setCompany} 
          handleCareerChange={handleCareerChange}
          handlePeriodChange={handlePeriodChange}
          handleCompanyChange={handleCompanyChange}/>
        <Analytics_cards 
          companies={companies}
          career={career}
          period={period}
          company={company}
        />
    </div>
  )
}

export {Analytics}
