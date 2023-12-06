import React, { useEffect, useState } from 'react';
import { RideList_element } from '../rideList_element/RideList_element';
import { Paginator } from '../paginator/Paginator';
import { getRoutes } from '../../responses/RoutesResponses';

import './RideList_list.scss';
import { useSelector } from 'react-redux';

function RideList_list(props) {
	const { rideData, loading, setAdaptive, showConfig, timeInterval} = props;
	const dataPerPage = 10;

	//console.log(rideData)

	const [currentPage, setCurrentPage] = useState(1);
	const [currentData, setCurrentData] = useState([]);
	const [data, setData] = useState([]);

	const Paginate = pageNumber => setCurrentPage(pageNumber);

	useEffect(() => {
		const lastElementIndex = currentPage * dataPerPage;
		const firstElementIndex = lastElementIndex - dataPerPage;
		setCurrentData(data.slice(firstElementIndex, lastElementIndex));
	}, [currentPage, data]);


	let Today = new Date()
	let day = String(Today.getDate())
	let month = String(Today.getMonth() + 1).padStart(2, '0')
	let year = String(Today.getFullYear()).slice(0,4)

	if (day.length === 1){
		day = '0' + day
	}

	console.log(`${day}.${month}.${year}`)

	const monthes = {
		'ddee': 31, 
		'2': 28, 
		'3': 31, 
		'4': 30, 
		'5': 31,
		'6': 30,
		'7': 31,
		'8': 31,
		'9': 30,
		'10': 31,
		'nov': 30,
		'12': 31
	}

	let prevMonth = String(Number(month) - 1)

	useEffect(() => {

		switch(timeInterval) {
			case 'today':  
				setData(rideData)
				let filteredData = rideData.filter((elem) => (elem.exit_date === `${day}.${month}.${year}`))
				setData(filteredData)
				console.log(`${day}.${month}.${year}`)
				console.log('done')
				console.log(rideData, 'after today')
				break
		  
			case 'week':  
				setData([])
				console.log(Number(`01`))
				let weekData = rideData.filter((elem) => 
					(
						((Number(`${day}`) - Number(elem.exit_date.slice(0,2)) <= 7 && 
						Number(`${day}`) - Number(elem.exit_date.slice(0,2)) >= 0) && 
						(elem.exit_date.slice(3,10) === `${month}.${year}`))
					|| 
						(
							(((30 + Number(`${day}`)) - Number(elem.exit_date.slice(0,2))) <= 7) && 
							((elem.exit_date.slice(3,10) === `${'0' + String(Number(month) - 1)}.${year}`) || 
							(elem.exit_date.slice(3,10) === `${String(Number(month) - 1)}.${year}`))
						)
					)
				)
				weekData.length > 0 ? setData(weekData) : console.log(weekData)
				console.log('done')
				console.log(rideData, 'after done')
				break

			case 'month':  
				setData(rideData)
				let monthData = rideData.filter((elem) => 
				( 
					(Number(`${day}`) - Number(elem.exit_date.slice(0,2)) >= 0 && elem.exit_date.slice(3,10) === `${month}.${year}`)

					|| 
					(
						(((30 + Number(`${day}`)) - Number(elem.exit_date.slice(0,2))) <= 30) && 
						((elem.exit_date.slice(3,10) === `${'0' + String(Number(month) - 1)}.${year}`) || 
						(elem.exit_date.slice(3,10) === `${String(Number(month) - 1)}.${year}`))
					)
				))
				setData(monthData)
				console.log('done')
				console.log(rideData, 'after done')
				break
		  
			default:
				setData(rideData)
		}

	  }, [timeInterval, rideData])

	return (
		<div className='ridelistlist' onClick={() => setAdaptive(false)}>
			{currentData.map(elem => (
				<RideList_element
					key={elem.id}
					id={elem.id}
					number={elem.number}
					enter={elem.enter_date}
					enter_time={elem.Entry_time}
					exit={elem.exit_date}
					exit_time={elem.Exit_time}
					duration={elem.duration}
					weight={elem.weight}
					volume={elem.volume}
					road={elem.road}
					loading={loading}
					showConfig={showConfig}
					exit_city={elem.exit_city}
					enter_city={elem.enter_city}
					volume_count={elem.volume}
				/>
			))}
			<Paginator
				dataPerPage={dataPerPage}
				totalData={data.length}
				paginate={Paginate}
				currentPage={currentPage}
			/>
		</div>
	);
}

export { RideList_list };
