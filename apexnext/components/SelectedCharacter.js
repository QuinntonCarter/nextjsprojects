import React, { useEffect } from 'react';
import menuStyles from '../styles/Menu.module.scss';


const SelectedCharacter = ({hoveredName, hoveredData, recentlyUsedLegend, selectedLegend}) => {
    // ** find way to map object values and if key contains 'kills' add value for more accurate total kills **
    const totalKills = (kills, kills2, kills3) => {
        let total
    }

    const mappedData = selectedLegend[1] && selectedLegend[1].data.map(data => 
        // zndex: 3; display: flex; flex-direction: column; align-items: center; justify-content: center;
        <div key={data.name+data.value}>
                {/* background-color: transparent; font-weight: bold; line-height: 7vh; color: white; */}
            <h5>
                {data.name === 'Kills' ? `Kills as ${selectedLegend[0]}`: data.name} : {data.value}
            </h5>
        </div>
    )
    // use to calculate kills of selected legend on select
    // useEffect(() => {
    //     // selectedLegend[1] && selectedLegend[1].data.filter(val => 
    //     //     val.name)
    // },[selectedLegend])

    return (
        // ** maybe append image onto svg foggy card **
        // z-index: 1; height: 96vh; width: 50vw; padding: 6px 0px 6px 0px; margin: auto 2px auto auto; background-position: 50% 20%; background-repeat: no-repeat; font-family: Apex Sub;
        // grid item
        <div
            className={menuStyles.characterDisplayImage}
            styles={{backgroundimage: `${selectedLegend[1] ? `url(${selectedLegend[1].ImgAssets.icon})` : hoveredData && hoveredData.ImgAssets.icon}`}}
            >
            {mappedData && mappedData}
        </div>
    )
}

export default SelectedCharacter;