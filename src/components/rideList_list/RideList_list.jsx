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
	let year = String(Today.getFullYear()).slice(2,4)

	useEffect(() => {

		switch(timeInterval) {
			case 'today':  
				let filteredData = rideData.filter((elem) => (elem.Exit_date === `${day}.${month}.${year}`))
				setData(filteredData)
				console.log('done')
				console.log(rideData, 'after today')
				break
		  
			case 'week':  
				let weekData = rideData.filter((elem) => 
					( 
					Number(`${day}`) - Number(elem.Exit_date.slice(0,2)) <= 7 
					&& Number(`${day}`) - Number(elem.Exit_date.slice(0,2)) >= 0
					) 
					&& elem.Exit_date.slice(3,8) === `${month}.${year}`
				)
				weekData.length > 2 ? setData(weekData) : console.log(weekData)
				console.log('done')
				console.log(rideData, 'after done')
				break

			case 'month':  
			setData(rideData)
				let monthData = rideData.filter((elem) => 
				( 
					(Number(`${day}`) - Number(elem.Exit_date.slice(0,2)) >= 0 && elem.Exit_date.slice(3,8) === `${month}.${year}`)
					||
					(Number(elem.Exit_date.slice(0,2) >= Number(`${day}`) && Number(elem.Exit_date.slice(0,2) <= 31))) && (elem.Exit_date.slice(3,8) === `${'0' + String(Number(month) - 1)}.${year}`)
				) 
				)
				setData(monthData)
				console.log('done')
				console.log(rideData, 'after done')
				break
		  
			default:
				setData(rideData)
		}

	  })

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
					volume={elem.number}
					road={elem.road}
					photo={elem.link_to_photo}
					loading={loading}
					showConfig={showConfig}
					volume_count={elem.volume_count}
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
